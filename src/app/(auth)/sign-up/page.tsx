import React from 'react'
import Image from 'next/image'
import image from '../../Image/banner.png'
import AuthLayout from '../layout'

type Props = {}

const SignUp = (props: Props) => {
  return (
    <div className=" h-screen flex">
      <div className="w-full content-center md:w-3/4 lg:w-1/2 h-full">
        <div className="font-bold m-5">Your Logo</div>
        <div className="mt-10 w-3/4 lg:w-1/2 mx-auto my-5 flex items-center justify-center h-4/5">
          <div className="w-full">
            <h3 className="text-2xl sm:text-4xl font-medium my-3 md:my-5">Sign up</h3>
            <span className="text-xs md-2 md:mb-5 font-normal sm:text-sm md:text-base">
              If you already have an account register
              <br />
              You can{'  '}
              <a className="text-[#0C21C1]" href="/login">
                Login here !
              </a>
            </span>
            <form className="my-10">
              <div className=" mb-5 md:mb-8 text-sm">
                <label className="text-[#999999] " htmlFor="femail">
                  Email
                </label>
                <input
                  className="border-b-2 p-1 border-[#999999] focus:outline-none w-full my-2 focus:placeholder:text-[#000842] placeholder:text-[#999999] focus:border-[#000842]"
                  type="text"
                  placeholder="Enter your email address"
                  id="femail"
                />
              </div>
              <div className=" text-sm mb-5 md:mb-8">
                <label className="text-[#999999] " htmlFor="fuser">
                  Username
                </label>
                <input
                  className="border-b-2 p-1 border-[#999999] focus:outline-none w-full my-2 placeholder:text-[#000842] focus:border-[#000842]"
                  type="password"
                  placeholder="Enter your User name"
                  id="fuser"
                />
              </div>
              <div className=" text-sm mb-5 md:mb-8">
                <label className="text-[#999999] " htmlFor="fpassword">
                  Password
                </label>
                <input
                  className="border-b-2 p-1 border-[#999999] focus:outline-none w-full placeholder:text-[#000842] my-2 focus:border-[#000842]"
                  type="password"
                  placeholder="Enter your Password"
                  id="fpassword"
                />
              </div>
              <div className=" text-sm mb-5 md:mb-8">
                <label className="text-[#999999] " htmlFor="fcpassword">
                  Confirm Password
                </label>
                <input
                  className="border-b-2 p-1 border-[#999999] focus:outline-none w-full my-2 placeholder:text-[#000842] focus:border-[#000842]"
                  type="password"
                  placeholder="Confirm your Password"
                  id="fcpassword"
                />
              </div>
              <div className="mt-10 text-center">
                <button
                  type="button"
                  className=" w-4/5 md:w-full bg-blue-800 rounded-full text-white py-2 md:py-3 active:bg-blue-700"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="hidden md:block bg-[#000842] w-1/2 m-8 rounded-2xl">
        <Image className="mx-auto" src={image} alt="banner" />
      </div>
    </div>
  )
}

export default SignUp
