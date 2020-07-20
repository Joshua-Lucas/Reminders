import HttpStatus from 'http-status-codes'
import { GetReminders } from '../interfaces'
// utils
const url = 'http://localhost:8080/api/reminders'

// METHODS

export const getReimders = async (): Promise<GetReminders> => {
  const result = await fetch(url)
    .then((res) => res.json())
    .catch((error) => console.log('cannot fetch reminders', error))
  return result
}

export const remindersApi = {
  get: getReimders,
}
