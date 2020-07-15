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

// Utils
const salt = parseInt(process.env.SALT_ROUNDS)
export const hashPass = (pass: string) => bcrypt.hash(pass, salt, null)

// Methods
// export const loginUser = (user: IUser) => {}
export const createNewUser = (user: INewUser, hash: string) =>
  database.query(
    `
  INSERT INTO users (name, email, password)
  VALUES ($1, $2, $3)
  ON CONFLICT (email)
  WHERE email = ($2)
  DO NOTHING
  RETURNING id, name, email
  
  `,
    [user.name, user.email, hash]
  )
