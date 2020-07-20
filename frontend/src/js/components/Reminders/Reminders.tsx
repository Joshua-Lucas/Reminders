import React, { useState, useEffect } from 'react'
import ReminderContainer from './RemindersContiner'
import { remindersApi } from '../../utils/api/ReimdersApi'
import { GetReminders, IReminder } from '../../utils/interfaces'
import Dropdown from '../../utils/formComponents/Dropdown'

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
      <form>
        <Dropdown
          name="filter"
          options={[
            'All',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday',
          ]}
        />
      </form>
      {filterdReminders()}
    </div>
  )
}
export default Reminders
