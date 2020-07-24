import HttpStatus from 'http-status-codes'
import { GetReminders, ICreateReminder, INewReminder } from '../interfaces'
// utils
const url = 'http://localhost:3000/api/reminders'

// METHODS

export const getReimders = async (): Promise<GetReminders> => {
  const result = await fetch(url)
    .then((res) => res.json())
    .catch((error) => console.log('cannot fetch reminders', error))
  return result
}

export const postReminder = async (
  newReminder: INewReminder
): Promise<ICreateReminder> => {
  const result = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newReminder),
  })
    .then((res) => res.json())
    .catch(console.error)
  return result
}

export const deleteReminder = async (id: number): Promise<void> => {
  let message
  const result = await fetch(url, {
    method: 'DELETE',
  })
    .then((res) => (message = res.status))
    .catch(console.error)
  return message
}

export const remindersApi = {
  get: getReimders,
  post: postReminder,
  destroy: deleteReminder,
}
