import React from 'react'
import Image from 'next/image'
import image from '../../Image/banner.png'
import AuthLayout from '../layout'

type Props = {}

const SignUp = (props: Props) => {
  return (
    <>
      <h3 className="text-2xl sm:text-4xl font-medium my-3 md:my-5">Sign up</h3>
      <span className="text-xs md-2 md:mb-5 font-normal sm:text-sm md:text-base">
        If you already have an account register
        <br />
        You can{'  '}
        <a className="text-blue-600" href="/login">
          Login here !
        </a>
      </span>
      <form className="my-10">
        <div className=" mb-5 md:mb-8 text-sm">
          <label className="text-gray-400 " htmlFor="femail">
            Email
          </label>
          <input
            className="border-b-2 py-2 border-gray-400 focus:outline-none w-full my-2 focus:border-indigo-950 hover:placeholder:text-gray-500 focus:placeholder:text-gray-400 placeholder:text-indigo-950"
            type="text"
            placeholder="Enter your email address"
            id="femail"
          />
        </div>
        <div className=" text-sm mb-5 md:mb-8">
          <label className="text-gray-400 " htmlFor="fuser">
            Username
          </label>
          <input
            className="border-b-2 py-2 border-gray-400 focus:outline-none w-full my-2 focus:border-indigo-950 hover:placeholder:text-gray-500 focus:placeholder:text-gray-400 placeholder:text-indigo-950"
            type="password"
            placeholder="Enter your User name"
            id="fuser"
          />
        </div>
        <div className=" text-sm mb-5 md:mb-8">
          <label className="text-gray-400 " htmlFor="fpassword">
            Password
          </label>
          <input
            className="border-b-2 py-2 border-gray-400 focus:outline-none w-full my-2 focus:border-indigo-950 hover:placeholder:text-gray-500 focus:placeholder:text-gray-400 placeholder:text-indigo-950"
            type="password"
            placeholder="Enter your Password"
            id="fpassword"
          />
        </div>
        <div className=" text-sm mb-5 md:mb-8">
          <label className="text-gray-400 " htmlFor="fcpassword">
            Confirm Password
          </label>
          <input
            className="border-b-2 py-2 border-gray-400 focus:outline-none w-full my-2 focus:border-indigo-950 hover:placeholder:text-gray-500 focus:placeholder:text-gray-400 placeholder:text-indigo-950"
            type="password"
            placeholder="Confirm your Password"
            id="fcpassword"
          />
        </div>
        <div className="mt-10 text-center">
          <button
            type="button"
            className=" w-4/5 md:w-full bg-blue-800 rounded-full text-white py-3 active:bg-blue-500 hover:bg-blue-700 transition-all"
          >
            Register
          </button>
        </div>
      </form>
    </>
  )
}

export default SignUp
