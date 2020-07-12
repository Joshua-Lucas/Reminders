import { Pool } from 'pg'

export const pool = new Pool({
  user: '',
  host: '127.0.0.1',
  database: 'reminders',
  port: 5432,
})
