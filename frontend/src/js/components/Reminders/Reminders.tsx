import React, { useState, useEffect, FormEventHandler } from 'react'
import ReminderContainer from './RemindersContiner'
import { remindersApi } from '../../utils/api/ReimdersApi'
import { GetReminders, IReminder } from '../../utils/interfaces'
import Dropdown from '../../utils/formComponents/Dropdown'

const Reminders: React.FC = ({}) => {
  const [state, setState] = useState<GetReminders>([])
  const [filterData, setFilterData] = useState('All')
  useEffect(() => {
    const loadReminders = async () => {
      const result = await remindersApi.get()
      console.log(result)
      setState(result)
    }
    loadReminders()
  }, [])

  const filterReminders = (filter: string) => {
    if (filter === 'All' && state.length > 0) {
      const all = state.map((reminders) => (
        <ReminderContainer
          key={reminders.id}
          title={reminders.title}
          details={reminders.details}
          frequency={reminders.frequencey}
        />
      ))
      return all
    } else {
      var filteredByDay = state.filter(
        (reminder) => reminder.daytobe === filter
      )
      var filtered = filteredByDay.map((reminders) => (
        <ReminderContainer
          key={reminders.id}
          title={reminders.title}
          details={reminders.details}
          frequency={reminders.frequencey}
        />
      ))

      return filtered
    }
  }

  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    e.preventDefault()
    setFilterData(e.target.value)
  }

  return (
    <div className="flex flex-col">
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
          value={filterData}
          event={handleChange}
        />
      </form>
      {filterReminders(filterData)}
    </div>
  )
}
export default Reminders
