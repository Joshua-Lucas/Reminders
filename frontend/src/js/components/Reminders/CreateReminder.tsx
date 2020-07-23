import React, { useState, useReducer } from 'react'
import useInput from '../../utils/formComponents/useInput'
import useDropdown from '../../utils/formComponents/useDropdown'
import { ICreateReminder } from '../../utils/interfaces'

const CreateReminder: React.FC = () => {
  // HOOKS

  const [title, TitleInput] = useInput('Title', [], 'text')
  const [dropdown, ExampleDropdown] = useDropdown('Choose Example', 'All', [
    'example1',
    'example2',
    'example3',
  ])

  // ---METHODS---
  // const handleSubmit = (e) => e.prevent()
  // // post api logic here to post input and dropdown

  return (
    <div className="w-1/3">
      <form className="flex flex-col items-center space-y-2 w-full ">
        <TitleInput
          labelStyle="w-full flex flex-col "
          inputStyle="mt-4 border-2"
        />
        <ExampleDropdown
          labelstyle="w-full flex flex-col "
          style="mt-4 border-2 "
        />
        <button
          className=" rounded border-2 w-1/3 hover:bg-gray-300 "
          type="submit"
        >
          Save
        </button>
      </form>
    </div>
  )
}
export default CreateReminder
