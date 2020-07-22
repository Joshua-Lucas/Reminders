import React, { useState } from 'react'

const CreateReminder: React.FC = () => {
  const [state, setState] = useState('')
  return (
    <div>
      <form>
        <label htmlFor="title-input">
          <input
            id="title-input"
            type="text"
            value={state}
            name="test"
            placeholder="Enter title"
            onChange={(e) => setState(e.target.value)}
            onBlur={(e) => setState(e.target.value)}
          />
        </label>
      </form>
    </div>
  )
}
export default CreateReminder
