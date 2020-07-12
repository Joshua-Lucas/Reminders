import { pool as database } from '../utils/dbPool'

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
export const getReminders = () =>
  database.query(
    `
        SELECT *
        FROM reminders
    `
  )

export const createReminder = (reminder: INewReminder) =>
  database.query(
    `
        INSERT INTO reminders (title, details, daytobe, frequencey, user_id)
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

export const showReminder = (id: number) =>
  database.query(
    ` 
        SELECT *
        FROM reminders
        WHERE id = ($1)
        
    `,
    [id]
  )

export const updateReminder = (reminder: IReminder) =>
  database.query(
    `
        UPDATE reminders
        SET title = ($1) , details = ($2) , daytobe = ($3), frequencey = ($4)
        WHERE id = ($5)
        RETURNING *
    `,
    [
      reminder.title,
      reminder.details,
      reminder.daytobe,
      reminder.frequencey,
      reminder.id,
    ]
  )

export const deleteReminder = (id: number) =>
  database.query(
    `
        DELETE FROM reminders
        WHERE id = $1
    `,
    [id]
  )
