import mongoose from 'mongoose'

const DB_URL = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`

mongoose.connection.on('connected', () => {
  console.log('Mongoose connection open to ' + DB_URL)
})

mongoose.connection.on('error', (err) => {
  console.log('Mongoose connection error: ', err)
})

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose connection disconnected')
})

mongoose.connect(DB_URL)

export default mongoose