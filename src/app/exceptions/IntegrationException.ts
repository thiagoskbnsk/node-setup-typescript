import errors from '@config/errors'

class IntegrationException extends Error {
  public code: number
  public error: string

  constructor (code: number, message: string) {
    super(message)
    this.code = code
    this.error = errors[code]
  }
}

export default IntegrationException
