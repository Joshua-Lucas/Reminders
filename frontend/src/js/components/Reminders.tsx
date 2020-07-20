import React, { useState, useEffect } from 'react'
import ReminderContainer from './Reminders/RemindersContiner'
import { remindersApi } from '../utils/api/ReimdersApi'
import { GetReminders, IReminder } from '../utils/interfaces'

const Reminders: React.FC = ({}) => {
  const [state, setState] = useState<GetReminders>([])

  useEffect(() => {
    const loadReminders = async () => {
      const result = await remindersApi.get()
      console.log(result)
      setState(result)
    }
    loadReminders()
  }, [])

  const filterdReminders = () => {
    const all = state.map((reminders) => (
      <ReminderContainer
        key={reminders.id}
        title={reminders.title}
        details={reminders.details}
        frequency={reminders.frequencey}
      />
    ))
    return all
  }

  return (
    <div>
      <h1>Your Reminders</h1>
      {filterdReminders()}
    </div>
  )
}
export default Reminders
