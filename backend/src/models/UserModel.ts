import { pool as database } from '../utils/dbPool'

// Types and Interfaces
export interface IUser {
  id: number
  name: string
  email: string
  password: string
}

export interface INewUser {
  name: string
  email: string
  password: string
}

// Methods
