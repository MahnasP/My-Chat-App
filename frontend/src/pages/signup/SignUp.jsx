import React, { useState } from 'react'
import GenderCheckbox from './GenderCheckbox'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup'

function SignUp() {

  const [inputs, setInputs] = useState({
    fullname: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender:"",
  })

  const { loading, signup } = useSignup();

  function handleCheckboxChange(gender) {
    setInputs({ ...inputs, gender });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    signup(inputs);
  }

  return (
    <div className=" flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="p-6 w-full shadow-md bg-orange-50 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-orange-100">
        <h1 className="text-3xl font-semibold text-center text-gray-400">
          SignUp
          <span className="text-orange-400"> ChatApp</span>
        </h1>
        <form onSubmit={(e) => {
          handleSubmit(e);
        }}>
          
        <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="input input-bordered input-accent w-full"
              value={inputs.fullname}
              onChange={(e)=>setInputs({...inputs,fullname: e.target.value})}
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
              value={inputs.username}
              onChange={(e) => setInputs({ ...inputs, username:e.target.value})}
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
              value={inputs.password}
              onChange={(e)=>setInputs({...inputs,password: e.target.value})}
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
              value={inputs.confirmPassword}
              onChange={(e)=>setInputs({...inputs,confirmPassword: e.target.value})}
            />
          </div>
          <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />
          <Link
            to="/login"
            className="text-sm  hover:underline hover:text-orange-700 mt-3 inline-block"
          >
            Already have an account?
          </Link>
          <div>
            <button className="btn btn-block btn-accent btn-md mt-2">SignUp</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp