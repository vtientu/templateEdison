'use client'
import React from 'react'
import { useForm, SubmitHandler, Form } from 'react-hook-form'
import Image from 'next/image'
import { LockClosedIcon, EnvelopeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { Input, InputAdornment, Button, FormControl, InputLabel } from '@mui/material'
import facebook from '../../assets/Image/Facebook.png'
import apple from '../../assets/Image/apple.png'
import google from '../../assets/Image/google.png'
import { error } from 'console'

type Props = {}

type Inputs = {
  email: string
  password: string
}

const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
const Login = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const [viewPassword, setViewPassword] = React.useState(false)

  const handleViewPassword = () => {
    setViewPassword(!viewPassword)
  }

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
      <form className="my-8" onSubmit={handleSubmit(onSubmit)}>
        <div className="block mb-10 text-sm">
          <div className="flex ">
            <FormControl variant="standard" className="w-full">
              <InputLabel htmlFor="femail">Email</InputLabel>
              <Input
                {...register('email', { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}
                className="py-2 focus:outline-none w-full mt-2 focus:border-indigo-950 hover:placeholder:text-gray-500 focus:placeholder:text-gray-400 placeholder:text-indigo-950 "
                placeholder="Enter your email address"
                id="femail"
                {...(errors.email ? { error: true } : { color: 'success' })}
                startAdornment={
                  <InputAdornment position="start">
                    <EnvelopeIcon className="w-6" />
                  </InputAdornment>
                }
              />
            </FormControl>
          </div>
        </div>
        <div className="block text-sm">
          <div className="flex ">
            <FormControl variant="standard" className="w-full">
              <InputLabel htmlFor="fpassword">Password</InputLabel>
              <Input
                {...register('password', { required: true, minLength: 8, maxLength: 20 })}
                className="py-2 focus:outline-none w-full mt-2 focus:border-indigo-950 hover:placeholder:text-gray-500 focus:placeholder:text-gray-400 placeholder:text-indigo-950 "
                type={viewPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                id="fpassword"
                {...(errors.password ? { error: true } : { color: 'success' })}
                startAdornment={
                  <InputAdornment position="start">
                    <LockClosedIcon className="w-6" />
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment position="end">
                    <button type="button" onClick={handleViewPassword}>
                      <EyeSlashIcon className="w-6 mt-2 text-gray-400" />
                    </button>
                  </InputAdornment>
                }
              />
            </FormControl>
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
          <Button
            variant="contained"
            type="button"
            className="w-full bg-blue-800 rounded-full text-white py-3 active:bg-blue-500 hover:bg-blue-700 transition-all"
          >
            Login
          </Button>
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
