import React, { useState, useEffect } from 'react'
import { api } from '../utils/api/ReimdersApi'
import { GetReminders } from '../utils/interfaces'

const Reminders: React.FC = ({}) => {
  const [state, setState] = useState<GetReminders>()

  useEffect(() => {
    const loadReminders = () => {
      const result = api.get()
      console.log(result)
    }
    loadReminders()
  }, [])

  return (
    <div>
      <p>Test </p>
    </div>
  )
}
export default Reminders
