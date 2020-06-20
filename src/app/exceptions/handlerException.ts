import { Request, Response, NextFunction } from 'express'
import IntegrationException from '@exceptions/IntegrationException'

export default (err: IntegrationException, _req: Request, res: Response, _next: NextFunction): Response => {
  const { code, error, message } = err

  if (!code) {
    console.log({ err })

    return res.status(500).json({
      statusCode: 500,
      error: 'Internal Server Error',
      message
    })
  }

  return res.status(code).json({
    statusCode: code,
    error,
    message
  })
}
