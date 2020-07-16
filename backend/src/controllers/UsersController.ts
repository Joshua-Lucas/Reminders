import { logError } from '../utils/logError'
import { StorageErrors } from '../utils/StorageErrors'
import HttpStatus from 'http-status-codes'
import {
  createNewUser,
  getUser,
  updateUserInfo,
  deleteUser,
  INewUser,
  hashPass,
  IUser,
  compareCradentials,
  IUserData,
} from '../models/UserModel'
import { send } from 'process'

// Types and Interfaces
export interface ICreateNewUser extends INewUser {}

//* LOGIN METHOD  */
export const index = async (req, res) => {
  const body = req.body as IUser
  try {
    // querrying bd for user info
    const userInfo = await getUser(body)
    // if no matching email fail
    if (userInfo.rowCount === 0) {
      res.status(HttpStatus.UNAUTHORIZED).send(StorageErrors.NO_ACCOUNT)
    } else {
      // Check if the password entered matches password in db
      const hashedPass = userInfo.rows[0].password
      const checkAuth = await compareCradentials(body.password, hashedPass)
      if (checkAuth === true) {
        const userData: IUserData = {
          id: userInfo.rows[0].id,
          name: userInfo.rows[0].name,
          email: userInfo.rows[0].email,
        }
        res.status(HttpStatus.OK).json(userData)
      } else {
        res.status(HttpStatus.UNAUTHORIZED).send(StorageErrors.INVALID_PASSWORD)
      }
    }
  } catch (error) {
    logError(error)
    res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR)
  }
}

// * REGISTER METHOD*/
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

export const update = async (req, res) => {
  const body = req.body as IUserData

  try {
    const result = await updateUserInfo(body)
    const updatedUserInfo = {
      id: result.rows[0].id,
      name: result.rows[0].name,
      email: result.rows[0].email,
    }
    res.status(HttpStatus.OK).json(updatedUserInfo)
  } catch (error) {
    logError(error)
    res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR)
  }
}

export const destroy = async (req, res) => {
  const id: number = req.body.id

  try {
    const results = await deleteUser(id)
    res.status(HttpStatus.OK).send('User Deleted')
  } catch (error) {
    logError(error)
    res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR)
  }
}

export const UsersController = {
  index: index,
  create: create,
  update: update,
  destroy: destroy,
}
