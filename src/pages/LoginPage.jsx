import React, { useState } from 'react'
import InputForm from '../component/form/InputForm'
import { loginSchema } from '../schemas/loginSchema'
import authApi from '../api/authApi'
import * as Yup from "yup";

const initialInput = {
  username: "",
  password: ""
}

function LoginPage() {
  const [input, setInput] = useState(initialInput)
  const [inputError, setInputError] = useState(initialInput)
  
  const handleChange = (e) => {
    const { id, value } = e.target
    setInput((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      // setInput(initialInput)

      loginSchema.validateSync(input, { abortEarly: false })

      const res = await authApi.login(input)
      console.log("res", res.data)

      setInput(initialInput)

      alert("Login Success!!")
    } catch (error) {
      console.log(error)
      alert("Login invalid!!")

      if (error instanceof Yup.ValidationError) {
        const err = error.inner.reduce((acc, cur) => {
          acc[cur.path] = cur.message
          return acc
        }, {})
        setInputError(err)
      }
    }
  }

  return (
    <div className='w-[300px] h-[300px] border rounded-sm p-4 text-center mx-auto'>
      <p className='text-2xl font-bold'>Welcome</p>
      <form onSubmit={handleSubmit} className='p-4'>
        <InputForm
          type="text"
          id="username"
          value={input.username}
          placeholder="username"
          handleChange={handleChange}
          error={inputError.username}
        />

        <InputForm
          type="password"
          id="password"
          value={input.password}
          placeholder="password"
          handleChange={handleChange}
          error={inputError.password}
        />

        <button type='submit' className="btn btn-md w-full">LOG IN</button>
      </form>
    </div>
  )
}

export default LoginPage