import React, { useState } from "react";
import NavBar from "../../universals/NavBar";
import { Link, redirect, useNavigate } from "react-router";
import { auth } from "../../FirbaseAuth/FirebaseAuth";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorLogin, setErrorLogin] = useState(false);
const navigate = useNavigate();




  const provider = new GoogleAuthProvider();

  const onGoogleregister = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        setErrorLogin(false);
        navigate("/");
      })
      .catch((error) => {
        // Handle Errors here.
        setErrorLogin(true);
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };


  const onSubmite = (e) => {
    e.preventDefault();
    console.log("ami submite hoyechi");
    console.log(email, password);

    

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);

        // ...
        navigate("/");
        setErrorLogin(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorLogin(true);
        // ..
      });
  };

  return (
    <div>
      <div className="container mx-auto sticky top-0 z-50">
        <NavBar />
      </div>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
          <p className="text-red-500">
            {errorLogin ? "Email already exist or at least password 6 character or something went wrong" : null}
          </p>
          <form onSubmit={onSubmite} className="space-y-4">
            <div>
              <label className="block text-gray-600 font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter full name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-600 font-medium mb-1">
                Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-600 font-medium mb-1">
                Password
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Create a password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-600 font-medium mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Confirm your password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Register
            </button>
          </form>

          <span>
            Already have an account?{" "}
            <Link to={"/Login"} className="text-blue-600 hover:underline">
              Login
            </Link>
          </span>

          <div className="my-6 flex items-center justify-center">
            <span className="text-gray-500">or</span>
          </div>

          <button
            onClick={() => onGoogleregister()}
            className="w-full flex items-center justify-center gap-2 border py-2 rounded-lg hover:bg-gray-100 transition"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            <span className="text-gray-700 font-medium">
              Register with Google
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
