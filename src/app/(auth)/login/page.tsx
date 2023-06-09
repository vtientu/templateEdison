import React from 'react'
import Image from 'next/image'
import image from '../../Image/banner.png'
type Props = {}

const Login = (props: Props) => {
  return (
    <div className=" h-screen flex">
      <div className="w-full content-center md:w-1/2">
        <div className="font-bold m-5">Your Logo</div>
        <div className="w-3/4 md:w-1/2 mx-auto">
          <h3 className="text-4xl font-medium my-10">Sign in</h3>
          <span className=" font-normal text-base mb-5">
            If you don’t have an account register
            <br />
            You can{'  '}
            <a className="text-[#0C21C1]" href="/sign-up">
              Register here !
            </a>
          </span>
          <form className="my-10">
            <div className="block mb-10 text-sm">
              <label className="text-[#999999] " htmlFor="femail">
                Email
              </label>
              <input
                className="border-b-2 py-2 border-[#999999] focus:outline-none w-full my-2 focus:border-[#000842] placeholder:text-[#000842] "
                type="text"
                placeholder="Enter your email address"
                id="femail"
              />
            </div>
            <div className="block text-sm">
              <label className="text-[#999999] " htmlFor="fpassword">
                Password
              </label>
              <input
                className="border-b-2 py-2 border-[#999999] focus:outline-none w-full my-2 focus:border-[#000842] placeholder:text-[#000842] "
                type="password"
                placeholder="Enter your password"
                id="fpassword"
              />
            </div>
            <div className="flex justify-between mt-3">
              <div className="block">
                <input id="fremember" type="checkbox" />
                <span> Remember me</span>
              </div>
              <div className="block">
                <a className=" hover:text-blue-500" href="#">
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-10">
              <button
                type="button"
                className="w-full bg-blue-800 rounded-full text-white py-3 active:bg-blue-700"
              >
                Login
              </button>
            </div>
          </form>
          <span>or continue with</span>
          <div className="flex justify-around">
            <i>Icon facebook</i>
            <i>Icon Apple</i>
            <i>Icon google</i>
          </div>
        </div>
      </div>
      <div className="hidden md:block bg-[#000842] w-1/2 m-8 rounded-2xl">
        <Image className="mx-auto" src={image} alt="banner" />
      </div>
    </div>
  )
}

export default Login
