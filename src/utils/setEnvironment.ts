import dotenv from 'dotenv'

export default (() => {
  const { NODE_ENV } = process.env

  dotenv.config({
    path: NODE_ENV === 'test' ? './env/.env.test' : './env/.env'
  })
})()
