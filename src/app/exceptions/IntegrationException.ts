import errors from '@config/errors'

class IntegrationException extends Error {
  protected code: number
  protected error: string

  constructor (code, message) {
    super(message)
    this.code = code
    this.error = errors[code]
  }
}

export default IntegrationException
