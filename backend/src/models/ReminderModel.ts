import { Pool } from 'pg'

const pool = new Pool({
  user: '',
  host: '127.0.0.1',
  database: 'reminders',
  port: 5432,
})
// Interfaces
export interface IReminder {
  id: number
  title: string
  details: string
  daytobe: string
  frequencey: number
  user_id: number
}

export interface INewReminder {
  title: IReminder['title']
  details: IReminder['details']
  daytobe: IReminder['daytobe']
  frequencey: IReminder['frequencey']
  user_id: IReminder['user_id']
}

// Methods
export const getReminder = () =>
  pool.query(
    `SELECT *
    FROM reminders`
  )

export const createReminder = (reminder: INewReminder) =>
  pool.query(
    `INSERT INTO reminders (title, details, daytobe, frequencey, user_id)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *
      `,
    [
      reminder.title,
      reminder.details,
      reminder.daytobe,
      reminder.frequencey,
      reminder.user_id,
    ]
  )

export const deleteReminder = (id: number) =>
  pool.query(
    `DELETE FROM reminders
      WHERE id = $1`,
    [id]
  )
