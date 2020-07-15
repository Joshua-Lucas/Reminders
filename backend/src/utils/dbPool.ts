import { Pool } from 'pg'

export const pool = new Pool({
  user: '',
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  port: 5432,
})
