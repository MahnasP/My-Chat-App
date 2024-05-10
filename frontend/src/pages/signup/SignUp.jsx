import React from 'react'
import GenderCheckbox from './GenderCheckbox'

function SignUp() {
  return (
    <div className=" flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="p-6 w-full shadow-md bg-orange-50 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-orange-100">
        <h1 className="text-3xl font-semibold text-center text-gray-400">
          SignUp
          <span className="text-orange-400"> ChatApp</span>
        </h1>
        <form>
          
        <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="input input-bordered input-accent w-full"
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="input input-bordered input-accent w-full"
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="input input-bordered input-accent w-full"
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="input input-bordered input-accent w-full"
            />
          </div>
          <GenderCheckbox/>
          <a
            href="#"
            className="text-sm  hover:underline hover:text-blue-600 mt-3 inline-block"
          >
            Already have an account?
          </a>
          <div>
            <button className="btn btn-block btn-accent btn-md mt-2">SignUp</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp