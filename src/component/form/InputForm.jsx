import React from 'react'

function InputForm({ type, id, value, placeholder, handleChange, error }) {
  return (
    <div>
      <input
        className={`input validator mb-4 ${
          error ? "outline-1 outline-red-500" : "outline-0"
        }`}
        type={type}
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
      {error && <p className='text-red-500 text-xs'>{error}</p>}
    </div>
  )
}

export default InputForm