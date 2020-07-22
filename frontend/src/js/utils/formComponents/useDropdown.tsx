import React, { useState, SetStateAction } from 'react'
// Custom Hook For DropDowns
const useDropdown = (
  label: string,
  defaultState: string,
  options: string[]
) => {
  const [state, setState] = useState(defaultState)
  const id = `use-dropdown-${label.replace(' ', '').toLowerCase()}`

  //The Dropdown Component of the hook
  interface IDropDownProps {
    labelstyle: string
    style: string
  }

  const Dropdown: React.FC<IDropDownProps> = ({ labelstyle, style }) => (
    <label className={labelstyle} htmlFor={id}>
      {label}
      <select
        className={style}
        id={id}
        value={state}
        onChange={(e) => setState(e.target.value)}
        onBlur={(e) => setState(e.target.value)}
      >
        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </label>
  )
  //What you can acces with the hook.
  return [state, Dropdown, setState] as [
    string,
    React.FC<IDropDownProps>,
    SetStateAction<string>
  ]
}

export default useDropdown
