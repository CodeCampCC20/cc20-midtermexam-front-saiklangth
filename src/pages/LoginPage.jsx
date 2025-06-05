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
    <div className="min-h-screen background-color: var(--color-black) flex items-center justify-center">
      <div className="w-full max-w-sm bg-gray-900 border border-gray-700 rounded-xl p-8 text-white shadow-2xl">
        <p className="text-3xl font-bold mb-6 text-center">Welcome</p>
        <form onSubmit={handleSubmit} className='space-y-5'>
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

          <button type='submit' className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg transition-colors text-lg">LOG IN</button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage