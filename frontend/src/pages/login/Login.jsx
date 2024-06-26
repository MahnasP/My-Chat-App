import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";




function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useLogin();

  async function handleSubmit(e) {
    e.preventDefault();
    await login({ username, password });
  }

  return (
    <div className=" flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="p-6 w-full shadow-md bg-orange-50 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-orange-100">
        <h1 className="text-3xl font-semibold text-center text-gray-400">
          Login
          <span className="text-orange-400"> ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="input input-bordered input-accent w-full"
              value={username}
              onChange={(e)=>{setUsername(e.target.value)}}
            />
          </div>

          <div className="pb-4">
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="input input-bordered input-accent w-full"
              value={password}
              onChange={(e)=>{setPassword(e.target.value)}}
            />
          </div>
          <Link
            to="/signup"
            className="text-sm  hover:underline hover:text-orange-700 mt-2 inline-block"
          >
            {"Don't"} have an account?
          </Link>
          <div>
            <button className="btn btn-block btn-accent btn-sm mt-2">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
