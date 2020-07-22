import React, { useState, useEffect, FormEventHandler } from 'react'
import ReminderContainer from './RemindersContiner'
import { remindersApi } from '../../utils/api/ReimdersApi'
import { GetReminders, IReminder } from '../../utils/interfaces'
import Dropdown from '../../utils/formComponents/Dropdown'
import CreateReminder from './CreateReminder'
import useDropdown from '../../utils/formComponents/useDropdown'

const Reminders: React.FC = ({}) => {
  // Hooks
  const [state, setState] = useState<GetReminders>([])
  const [filter, FilterDropdown] = useDropdown('Filter by Day', 'All', [
    'All',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ])

  useEffect(() => {
    const loadReminders = async () => {
      const result = await remindersApi.get()
      console.log(result)
      setState(result)
    }
    loadReminders()
  }, [])

  // Methods
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

  return (
    <div className="flex flex-col">
      <h1>Your Reminders</h1>
      <form>
        <FilterDropdown labelstyle="bg-red-500" style="" />
      </form>
      {filterReminders(filter)}

      <div>
        <CreateReminder />
      </div>
    </div>
  )
}
export default Reminders
