import React, { createContext, useState, useEffect, ProviderProps } from 'react'
import { remindersApi } from '../utils/api/ReimdersApi'
import { IReminder, GetReminders } from '../utils/interfaces'

// INTERFACES

export interface IRemindersContext {
  fetchedReminders: IReminder
  setFetchedReminders: React.Dispatch<React.SetStateAction<any>>
}

// CONTEXT METHODS

const ReminderContext = createContext<IRemindersContext | any>(undefined)

export const ReminderContextProvider: React.FC = ({ children }) => {
  const [fetchedReminders, setFetchedReminders] = useState<GetReminders>()

  useEffect(() => {
    const loadReminders = async () => {
      const result = await remindersApi.get()
      console.log(result)
      setFetchedReminders(result)
    }
    loadReminders()
  }, [])

  return (
    <ReminderContext.Provider value={{ fetchedReminders, setFetchedReminders }}>
      {children}
    </ReminderContext.Provider>
  )
}

export default ReminderContext
