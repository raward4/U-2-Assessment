import { Turtle } from '../models/turtle.js'

function index(req, res) {
  Turtle.find({})
  .then(turtles => {
    res.render('turtles/index',{
      turtles
    })
  })
}

function newTurtle(req, res) {
  res.render('turtles/new')
}

function create(req, res) {
  req.body.isNinja = false
  Turtle.create(req.body)
  .then(()=> {
    res.redirect('/turtles')
  })
}

function show(req, res) {
  Turtle.findById(req.params.id)
  .then(turtle => {
    res.render('turtles/show', {
      turtle
    })
  })
}

function edit(req, res) {
  Turtle.findById(req.params.id)
  .then(turtle => {
    res.render('turtles/edit', {
      turtle
    })
  })
}

function update(req, res) {
  req.body.isNinja = !!req.body.isNinja
  Turtle.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(()=> {
    res.redirect('/turtles')
  })
}

function deleteTurtle(req, res) {
  Turtle.findByIdAndDelete(req.params.id) 
  .then(()=> {
    res.redirect('/turtles')
  })
}

export {
  deleteTurtle as delete,
  update,
  edit,
  show,
  index,
  create,
  newTurtle as new
}