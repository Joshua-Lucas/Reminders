import { logError } from '../utils/logError'
import { StorageErrors } from '../utils/StorageErrors'
import HttpStatus from 'http-status-codes'
import { createNewUser, INewUser, hashPass } from '../models/UserModel'
// Types and Interfaces
export interface ICreateNewUser extends INewUser {}

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
  create: create,
}
