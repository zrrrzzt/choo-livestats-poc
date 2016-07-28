'use strict'

const choo = require('choo')
const mainView = require('./views/main')

// Firebase setup and initialization
const firebase = require('firebase/app')
require('firebase/database')
firebase.initializeApp({
  databaseURL: 'https://seneca-firebase-test.firebaseio.com/'
})

const app = choo()
const statsModel = require('./models/stats')

app.model(statsModel)

app.router(route => [
  route('/', mainView)
])

const tree = app.start()
document.body.appendChild(tree)
