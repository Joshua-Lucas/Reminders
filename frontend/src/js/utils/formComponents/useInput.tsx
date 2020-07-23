import React, { useState, SetStateAction } from 'react'

const useInput = (label: string, defaultSate: any, type: string) => {
  const [state, setState] = useState(defaultSate)
  const id = `use-input-${label.replace(' ', '').toLowerCase()}`

  // these props are to have flexability to style
  type InputProps = {
    inputStyle: string
    labelStyle: string
  }

  const Input: React.FC<InputProps> = ({ inputStyle, labelStyle }) => (
    <label htmlFor={id} className={labelStyle}>
      {label}
      <input
        className={inputStyle}
        type={type}
        id={id}
        name={label}
        placeholder={`Enter ${label}`}
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
    </label>
  )
  return [state, Input, setState] as [
    string,
    React.FC<InputProps>,
    SetStateAction<string>
  ]
}

export default useInput
