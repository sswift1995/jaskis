require('dotenv').config()
const PORT = preocess.env.PORT

const express = requiew('express')
const app = express()

app.get('/',(req,res) =>{
    res.send('hello world')
})

app.listening(8080, () => {
    console.log('listening on port',8080)
})

module.exports = app;