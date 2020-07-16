import { pool as database } from '../utils/dbPool'
import bcrypt from 'bcrypt'

// Types and Interfaces
export interface IUser {
  id: number
  name: string
  email: string
  password: string
}

// this is the data passed to client
export interface IUserData {
  id: number
  name: string
  email: string
}

export interface INewUser {
  name: string
  email: string
  password: string
}

// Utils
const salt = parseInt(process.env.SALT_ROUNDS)
export const hashPass = (pass: string) => bcrypt.hash(pass, salt, null)
export const compareCradentials = (pass: string, hash: string): boolean =>
  bcrypt.compare(pass, hash).then((result) => result)

// Methods
export const getUser = (user: IUser) =>
  database.query(
    `
      SELECT * 
      FROM users
      WHERE email = ($1)
    `,
    [user.email]
  )

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

export const updateUserInfo = (user: IUserData) =>
  database.query(
    `
      UPDATE users
      SET name = ($1) , email = ($2)
      WHERE id = ($3)
      RETURNING *
      `,
    [user.name, user.email, user.id]
  )

export const deleteUser = (id: number) =>
  database.query(
    `
        DELETE FROM users
        WHERE id = $1
    `,
    [id]
  )
