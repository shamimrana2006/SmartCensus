import React, { useContext } from "react";

import ProjectName from "./common for all page/ProjectName";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../AuthContext/AuthContext";
import DefaultphotoUrl from "../../assets/lottie image/default user.json";
import Lottie from "lottie-react";
export default function NavBar() {
  const location = useLocation();
  const { user, logout } = useContext(AuthContext);
  console.log("user navbar", location.pathname);
  const navigate = useNavigate();
  const userCheck = user;

  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/feature">Feature</Link>
      </li>
      {userCheck ? (
        <li>
          <Link to="/MyInfo">MyInfo</Link>
        </li>
      ) : null}
      <li>
        <Link to="#contact">Contact Us</Link>
      </li>
      {!user ? null : (
        <>
          {userCheck.email == "shamimranaprofessional@gmail.com" ? (
            <li>
              <Link to="/AdminDashboard">Dashboard</Link>
            </li>
          ) : null}
        </>
      )}
    </>
  );

  const LogoutFuntionality = () => {
    logout();
    navigate("/");
  };
  return (
    <div>
      <div class="navbar bg-base-100 shadow-sm">
        <div class="navbar-start">
          <div class="dropdown">
            <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabindex="0"
              class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navItems}
            </ul>
          </div>
          <Link to="/" class="btn btn-ghost text-xl">
            <ProjectName />
          </Link>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div class="navbar-end">
          {user ? (
            <>
              <div className="flex items-center gap-2">
                <Link to={"/MyInfo"}>
                  {" "}
                  <div className="rounded-full w-8 h-8 border p-1 overflow-hidden">
                    {user.photoURL ? (
                      <img
                        className="rounded-full"
                        src={user.photoURL}
                        alt=""
                      />
                    ) : (
                      <Lottie
                        animationData={DefaultphotoUrl}
                        loop={true}
                      ></Lottie>
                    )}
                  </div>
                </Link>
                <button
                  onClick={LogoutFuntionality}
                  className="btn bg-red-500 text-white"
                >
                  Logout
                </button>
              </div>
            </>
          ) : (
            <>
              <div>
                {location.pathname === "/Register" ? (
                  <Link to="/login" className="">
                    <button className="btn btn-sm">Login</button>
                  </Link>
                ) : location.pathname === "/login" ? (
                  <Link to="/Register" className="">
                    <button className="btn btn-sm">Register</button>
                  </Link>
                ) : (
                  <Link to="/login" className="">
                    <button className="btn btn-sm">Join</button>
                  </Link>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
