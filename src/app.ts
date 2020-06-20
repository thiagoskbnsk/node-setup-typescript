import express from 'express'
import bodyParser from 'body-parser'
import { errors } from 'celebrate'
import handlerException from '@exceptions/handlerException'
import 'express-async-errors' // need to be imported before routes

import routes from './routes'

class AppController {
 public express: express.Application

 constructor () {
   this.express = express()

   this.middlewares()
   this.routes()
   this.exceptionHandlers()
 }

 middlewares () {
   this.express.use(bodyParser.json())
   this.express.use(bodyParser.urlencoded({ extended: false }))
 }

 routes () {
   this.express.use(routes)
 }

 exceptionHandlers () {
   this.express.use(errors())
   this.express.use(handlerException)
 }
}

export default new AppController().express
