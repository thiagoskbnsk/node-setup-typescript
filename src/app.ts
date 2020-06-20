import express from 'express'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import cors from 'cors'
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

 middlewares (): void {
   this.express.use(helmet())
   this.express.use(cors())
   this.express.use(bodyParser.json())
   this.express.use(bodyParser.urlencoded({ extended: false }))
 }

 routes (): void {
   this.express.use(routes)
 }

 exceptionHandlers (): void {
   this.express.use(errors())
   this.express.use(handlerException)
 }
}

export default new AppController().express
