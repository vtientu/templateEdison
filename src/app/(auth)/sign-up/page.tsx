'use client'
import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { EnvelopeIcon, UserIcon, LockClosedIcon, EyeSlashIcon } from '@heroicons/react/24/outline'
import { Input, InputAdornment, Button, FormControl, InputLabel } from '@mui/material'
type Props = {}

interface IFormInput {
  email: string
  username: string
  password: string
  confirmPassword: string
}

const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)

const SignUp = (props: Props) => {
  const [viewPassword, setViewPassword] = React.useState(false)
  const [viewConfirmPassword, setViewConfirmPassword] = React.useState(false)
  const [email, setEmail] = React.useState('')

  const handleViewPassword = () => {
    setViewPassword(!viewPassword)
  }

  const handleViewConfirmPassword = () => {
    setViewConfirmPassword(!viewConfirmPassword)
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<IFormInput>({
    mode: 'onSubmit',
    defaultValues: {
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
    },
  })

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
      <form className="my-10" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-5 md:mb-8 text-sm">
          <div className="flex ">
            <FormControl variant="standard" className="w-full">
              <InputLabel htmlFor="femail">Email</InputLabel>
              <Input
                {...register('email', { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}
                className="py-2 focus:outline-none w-full mt-2 focus:border-indigo-950 hover:placeholder:text-gray-500 focus:placeholder:text-gray-400 placeholder:text-indigo-950"
                type="text"
                placeholder="Enter your email address"
                id="femail"
                startAdornment={
                  <InputAdornment position="start">
                    <EnvelopeIcon className="w-6 mt-2 mr-3" />
                  </InputAdornment>
                }
                {...(errors.email ? { error: true } : { color: 'success' })}
              />
            </FormControl>
          </div>
        </div>
        <div className="text-sm mb-5 md:mb-8">
          <div className="flex ">
            <FormControl variant="standard" className="w-full">
              <InputLabel htmlFor="fuser">Username</InputLabel>
              <Input
                {...register('username', { required: true })}
                className="py-2 focus:outline-none w-full mt-2 focus:border-indigo-950 hover:placeholder:text-gray-500 focus:placeholder:text-gray-400 placeholder:text-indigo-950"
                type="password"
                placeholder="Enter your User name"
                id="fuser"
                startAdornment={
                  <InputAdornment position="start">
                    <UserIcon className="w-6 mt-2 mr-3" />
                  </InputAdornment>
                }
                {...(errors.username ? { error: true } : { color: 'success' })}
              />
            </FormControl>
          </div>
        </div>
        <div className="text-sm mb-5 md:mb-8">
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
                    <LockClosedIcon className="w-6 mt-2 mr-3" />
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
        <div className="text-sm mb-5 md:mb-8">
          <div className="flex ">
            <FormControl variant="standard" className="w-full">
              <InputLabel htmlFor="fcpassword">Confirm Password</InputLabel>
              <Input
                {...register('confirmPassword', { required: true, minLength: 8, maxLength: 20 })}
                className=" py-2 focus:outline-none w-full mt-2 focus:border-indigo-950 hover:placeholder:text-gray-500 focus:placeholder:text-gray-400 placeholder:text-indigo-950"
                type={viewConfirmPassword ? 'text' : 'password'}
                placeholder="Confirm your Password"
                id="fcpassword"
                {...(!errors.confirmPassword &&
                getValues('password') === getValues('confirmPassword')
                  ? { color: 'success' }
                  : { error: true })}
                endAdornment={
                  <InputAdornment position="end">
                    <button type="button" onClick={handleViewConfirmPassword}>
                      <EyeSlashIcon className="w-6 mt-2 text-gray-400" />
                    </button>
                  </InputAdornment>
                }
                startAdornment={
                  <InputAdornment position="start">
                    <LockClosedIcon className="w-6 mt-2 mr-3" />
                  </InputAdornment>
                }
              />
            </FormControl>
          </div>
        </div>
        <div className="mt-10 text-center">
          <Button
            type="submit"
            className=" w-4/5 md:w-full bg-blue-800 rounded-full text-white py-3 active:bg-blue-500 hover:bg-blue-700 transition-all"
          >
            Register
          </Button>
        </div>
      </form>
    </>
  )
}

export default SignUp
