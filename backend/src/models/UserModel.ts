import { pool as database } from '../utils/dbPool'
import bcrypt from 'bcrypt'

// Types and Interfaces
export interface IUser {
  id: number
  name: string
  email: string
  password: string
}

// export interface IHASH {
//   password: string
// }

export interface INewUser {
  name: string
  email: string
  password: string
}

// Methods

export const createNewUser = (user: INewUser) =>
  database.query(
    `
  INSERT INTO users (name, email, password)
  VALUES ($1, $2, $3)
  ON CONFLICT (email)
  WHERE email = ($2)
  DO NOTHING
  RETURNING id, name, email
  
  `,
    [user.name, user.email, user.password]
  )
