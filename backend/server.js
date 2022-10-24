const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const PORT = process.env.PORT
const routerGoals = require('./routes/goalRoutes')
const routerUsers = require('./routes/userRoutes')

const APP = express()
connectDB()

APP.use(express.json())
APP.use(express.urlencoded({ 
  extended: false
}))

APP.use('/api/goals', routerGoals)
APP.use('/api/users', routerUsers)

APP.use(errorHandler)

APP.listen(PORT, () => {
  console.log(`Server started on port ${PORT}\nVisit: http://localhost:${PORT}`)
})