import './utils/setEnvironment'

import app from './app'

const { SERVER_PORT, SERVER_HOST } = process.env

app.listen(Number(SERVER_PORT), SERVER_HOST, () => {
  console.log(`Server running on ${SERVER_HOST}:${SERVER_PORT}`)
})
