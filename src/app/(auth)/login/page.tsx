import React from 'react'
import Image from 'next/image'
import { LockClosedIcon, EnvelopeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'
import facebook from '../../Image/Facebook.png'
import apple from '../../Image/apple.png'
import google from '../../Image/google.png'

type Props = {}
const Login = (props: Props) => {
  return (
    <>
      <h3 className="text-4xl font-medium my-5">Sign in</h3>
      <span className=" font-normal text-base mt-5">
        If you don’t have an account register
        <br />
        You can{'  '}
        <a className="text-[#0C21C1]" href="/sign-up">
          Register here !
        </a>
      </span>
      <form className="my-8">
        <div className="border-b-2 border-gray-400 block mb-10 text-sm">
          <label className="text-gray-400 " htmlFor="femail">
            Email
          </label>
          <div className="flex ">
            <EnvelopeIcon className="w-6 mt-2 mr-3" />
            <input
              className="py-2 focus:outline-none w-full mt-2 focus:border-indigo-950 hover:placeholder:text-gray-500 focus:placeholder:text-gray-400 placeholder:text-indigo-950 "
              type="text"
              placeholder="Enter your email address"
              id="femail"
            />
          </div>
        </div>
        <div className="border-b-2 border-gray-400 block text-sm">
          <label className="text-gray-400 " htmlFor="fpassword">
            Password
          </label>
          <div className="flex ">
            <LockClosedIcon className="w-6 mt-2 mr-3" />
            <input
              className="py-2 focus:outline-none w-full mt-2 focus:border-indigo-950 hover:placeholder:text-gray-500 focus:placeholder:text-gray-400 placeholder:text-indigo-950 "
              type="password"
              placeholder="Enter your password"
              id="fpassword"
            />
            <button type="button">
              <EyeSlashIcon className="w-6 mt-2 text-gray-400" />
            </button>
          </div>
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
            className="w-full bg-blue-800 rounded-full text-white py-3 active:bg-blue-500 hover:bg-blue-700 transition-all"
          >
            Login
          </button>
        </div>
      </form>
      <div className="w-full text-center italic text-gray-500">
        <label>or continue with</label>
      </div>
      <div className="flex justify-around mt-5">
        <Image
          src={facebook}
          className="cursor-pointer hover:scale-110 transition-all"
          alt="Facebook icon"
        ></Image>
        <Image
          src={apple}
          className="cursor-pointer hover:scale-110 transition-all"
          alt="Apple icon"
        ></Image>
        <Image
          src={google}
          className="cursor-pointer hover:scale-110 transition-all"
          alt="Google icon"
        ></Image>
      </div>
    </>
  )
}

export default Login
