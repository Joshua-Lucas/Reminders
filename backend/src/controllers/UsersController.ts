import { logError } from '../utils/logError'
import { StorageErrors } from '../utils/StorageErrors'
import HttpStatus from 'http-status-codes'
import {
  createNewUser,
  INewUser,
  hashPass,
  IUser,
  loginUser,
  compareCradentials,
} from '../models/UserModel'

// Types and Interfaces
export interface ICreateNewUser extends INewUser {}

export const index = async (req, res) => {
  const body = req.body as IUser
  try {
    // querrying bd for user info
    const getUser = await loginUser(body)
    // if no matching email fail
    if (getUser.rowCount === 0) {
      res.status(HttpStatus.UNAUTHORIZED).send(StorageErrors.NO_ACCOUNT)
    } else {
      // Check if the password entered matches password in db
      const hashedPass = getUser.rows[0].password
      const checkAuth = await compareCradentials(body.password, hashedPass)
      if (checkAuth === true) {
        const userInfo = {
          name: getUser.rows[0].name,
          email: getUser.rows[0].email,
        }
        res.status(HttpStatus.OK).json(userInfo)
      } else {
        res.status(HttpStatus.UNAUTHORIZED).send(StorageErrors.INVALID_PASSWORD)
      }
    }
  } catch (error) {
    logError(error)
    res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR)
  }
}

export const create = async (req, res) => {
  const body = req.body as ICreateNewUser

  try {
    const hash = await hashPass(req.body.password)
    const result = await createNewUser(body, hash)
    if (result.rowCount === 0) {
      res
        .status(HttpStatus.UNPROCESSABLE_ENTITY)
        .send(StorageErrors.ALREADY_EXISTS)
    } else {
      res.status(HttpStatus.CREATED).json(result.rows[0])
    }
  } catch (error) {
    logError(error)
    res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR)
  }
}

export const UsersController = {
  index: index,
  create: create,
}
