// TODO: refactor code below
export default (() => {
  require('dotenv').config({
    path: process.env.NODE_ENV === 'test' ? './env/.env.test' : './env/.env'
  })
})()
