import {
  getReminders,
  createReminder,
  showReminder,
  updateReminder,
  deleteReminder,
  IReminder,
  INewReminder,
} from '../models/ReminderModel'
import { logError } from '../utils/logError'
import HttpStatus from 'http-status-codes'

// Types & Interfaces
export type GetReminderRes = IReminder[]
export interface ICreateReminder extends INewReminder {}

// Controller Methods
export const index = async (req, res) => {
  try {
    const result = await getReminders()
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

export const show = async (req, res) => {
  const id = parseInt(req.params.id)
  try {
    const result = await showReminder(id)
    res.status(HttpStatus.OK).json(result.rows[0])
  } catch (error) {
    logError(error)
    res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR)
  }
}

export const update = async (req, res) => {
  const body = req.body as IReminder

  try {
    const result = await updateReminder(body)
    res.status(HttpStatus.OK).json(result.rows[0])
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
  update: update,
  destroy: destroy,
  show: show,
}
