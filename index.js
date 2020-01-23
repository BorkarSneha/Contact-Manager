const express = require('express')
const app = express() 
const port = 3025
const cors = require('cors')
const configureDB = require('./config/database')
const router = require('./config/routes')
const multer =require('multer')
const upload=multer({dest:'uploads/'})
app.use(express.json())
app.use(cors())
configureDB()

// Route Handlers || Request Handlers 
app.get('/', (req, res) => {
    res.send('welcome to the notes app')
})

app.use('/', router)
//app.use('/users', usersRouter)

app.listen(port, () => {
    console.log('listening on port', port)
})
