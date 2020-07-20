import React from 'react'

interface IDropdownProps {
  name: string
  labelName?: string
  options: string[]
}

const Dropdown: React.FC<IDropdownProps> = ({ name, labelName, options }) => {
  const selections = options.map((option) => (
    <option value={option}>{option}</option>
  ))

  return (
    <React.Fragment>
      <label htmlFor={name}>
        {labelName} {/* This is option */}
        <select name={name} id={name}>
          {selections}
        </select>
      </label>
    </React.Fragment>
  )
}
export default Dropdown
