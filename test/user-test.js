'use strict'

const chai = require('chai')
const expect = chai.expect
const User = require('../models/user')

it('should do some stuff!', done => {
  let req = {}
  req.body = {username: 'Scott', password: 'secret', email: 'scott@codefellows.org'}
  let user = new User(req.body)
  expect(user.username).to.equal('Scott')
  done()
})
