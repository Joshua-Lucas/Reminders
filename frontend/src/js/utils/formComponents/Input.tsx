import React from 'react'

interface IInputProps {
  name: string
  value: string | ReadonlyArray<string> | number
  event: () => {}
  style: string
}

const Input: React.FC<IInputProps> = ({ name, value, event, style }) => {
  return (
    <React.Fragment>
      <label>
        <input
          className={style}
          id={`${name}-input`}
          name={name}
          placeholder={`Enter ${name}`}
          value={value}
          onChange={event}
        />
      </label>
    </React.Fragment>
  )
}
export default Input
