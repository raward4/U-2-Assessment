import mongoose from "mongoose"

const Schema = mongoose.Schema

const turtleSchema = new Schema({
  name: {
    type: String
  },
  isNinja: {
    type: Boolean
  }
}, {
  timestamps: true
})

const Turtle = mongoose.model('Turtle', turtleSchema)

export {
  Turtle
}