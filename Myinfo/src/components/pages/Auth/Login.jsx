import React, { useState } from "react";
import NavBar from "../../universals/NavBar";
import { Link, useNavigate } from "react-router";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../FirbaseAuth/FirebaseAuth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorLogin, setErrorLogin] = useState(false);
  const navigate = useNavigate();

  const provider = new GoogleAuthProvider();

  const onGoogleLogin = () => {
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
  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        setErrorLogin(false);
        navigate("/");
      })
      .catch((error) => {
        setErrorLogin(true);
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <div>
      <div className="container mx-auto sticky top-0 z-50">
        <NavBar />
      </div>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
          <p className="text-red-500">
            {errorLogin ? "Email or password Wrong" : null}
          </p>

          <form onSubmit={onLogin} className="space-y-4">
            <div>
              <label className="block text-gray-600 font-medium mb-1">
                Username or Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
                placeholder="Enter username or email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-600 font-medium mb-1">
                Password
              </label>
              <input
                required
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Enter password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Login
            </button>
          </form>
          <span>
            if you don't have an account, please{" "}
            <Link to={"/Register"}>Register</Link>
          </span>
          <div className="my-6 flex items-center justify-center">
            <span className="text-gray-500">or</span>
          </div>

          <button
            onClick={() => onGoogleLogin()}
            className="w-full flex items-center justify-center gap-2 border py-2 rounded-lg hover:bg-gray-100 transition"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            <span className="text-gray-700 font-medium">Login with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
}
