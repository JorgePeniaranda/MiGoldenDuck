import { ErrorResponse } from "../../types"

export const createErrorFactory = function (name: string): any {
  return class CustomizedError extends Error {
    constructor (message: string) {
      super(message)
      this.name = name
    }
  }
}

export const ConfigError = createErrorFactory('ConfigError')
export const ValidationError = createErrorFactory('ValidationError')
export const NotFoundError = createErrorFactory('NotFoundError')
export const AuthorizationError = createErrorFactory('AuthorizationError')

export const ErrorsHandler = (error: any): ErrorResponse => {
  switch (error.name) {
    case 'ConfigError':
      return { error: error.message, status: 500 }
    case 'ValidationError':
      return { error: error.message, status: 400 }
    case 'NotFoundError':
      return { error: error.message, status: 404 }
    case 'AuthorizationError':
      return { error: error.message, status: 401 }
    default:
      return { error: 'Ha ocurrido un error', status: 500 }
  }
}
