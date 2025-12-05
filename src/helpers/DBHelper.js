import mongoose from 'mongoose'

export const connectDB = async () => {
  const DB_URL = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?authSource=admin`

  mongoose.connection.on('connected', () => {
    console.log('Mongoose connection open to ' + DB_URL)
  })

  mongoose.connection.on('error', (err) => {
    console.log('Mongoose connection error: ', err)
  })

  mongoose.connection.on('disconnected', () => {
    console.log('Mongoose connection disconnected')
  })

  await mongoose.connect(DB_URL)
}