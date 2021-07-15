const express = require('express')
const path = require('path')

const authRoutes = require('./routes/auth')
const fishRoutes = require('./routes/fish')
const catchRoutes = require('./routes/catch')
const statRoutes = require('./routes/stats')


const server = express()
server.use(express.json())
server.use(express.static(path.join('server', 'public')))
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1', authRoutes)
server.use('/api/v1/fish', fishRoutes)
server.use('/api/v1/statistics', statRoutes)
server.use('/api/v1/catch', catchRoutes)


module.exports = server
