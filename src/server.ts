import './utils/setEnvironment'

import app from './app'

const { SERVER_PORT, SERVER_HOST } = process.env

app.listen(SERVER_PORT, SERVER_HOST)

console.log(SERVER_HOST, SERVER_PORT)
