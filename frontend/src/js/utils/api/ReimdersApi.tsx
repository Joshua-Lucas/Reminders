import HttpStatus from 'http-status-codes'
import { INewReminder, IReminder, GetReminders } from '../interfaces'
// utils
const url = 'http://localhost:3000/api/reminders'

// METHODS

export const getReimders = async (): Promise<GetReminders> => {
  const result = await fetch(url)
  if (result.status !== HttpStatus.OK) {
    throw Error('Could not fetch any reminders')
  }
  const response = (await result.json()) as GetReminders
  return response
}
