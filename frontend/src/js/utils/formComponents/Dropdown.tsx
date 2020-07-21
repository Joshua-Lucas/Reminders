import React from 'react'

interface IDropdownProps {
  name: string
  labelName?: string
  options: string[]
  value: string
  event: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

const Dropdown: React.FC<IDropdownProps> = ({
  name,
  labelName,
  options,
  value,
  event,
}) => {
  const selections = options.map((option) => (
    <option key={option} value={option}>
      {option}
    </option>
  ))

  return (
    <React.Fragment>
      <label htmlFor={name}>
        {labelName} {/* This is option */}
        <select name={name} id={name} onChange={event} onBlur={event}>
          {selections}
        </select>
      </label>
    </React.Fragment>
  )
}
export default Dropdown
