import {
  getReminder,
  createReminder,
  deleteReminder,
  IReminder,
  INewReminder,
} from '../models/ReminderModel'
import { logError } from '../utils/logError'
import HttpStatus from 'http-status-codes'

export type GetReminderRes = IReminder[]
export interface ICreateReminder extends INewReminder {}

export const index = async (req, res) => {
  try {
    const result = await getReminder()
    res.status(HttpStatus.OK).json(result.rows)
  } catch (error) {
    logError(error)
    res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR)
  }
}

export const create = async (req, res) => {
  const body = req.body as ICreateReminder
  try {
    const result = await createReminder(body)
    res.status(HttpStatus.CREATED).json(result.rows[0])
  } catch (error) {
    logError(error)
    res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR)
  }
}

export const destroy = async (req, res) => {
  const id = req.body.id
  try {
    await deleteReminder(parseInt(id))
    res.sendStatus(HttpStatus.NO_CONTENT)
  } catch (error) {
    logError(error)
    res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR)
  }
}

export const RemindersController = {
  index: index,
  create: create,
  destroy: destroy,
}
