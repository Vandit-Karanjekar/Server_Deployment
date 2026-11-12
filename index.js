require('dotenv').config()          // It loads environment variables from a .env file into process.env ,.config() activates dotenv
const express = require('express')  // express() calls the Express function ,it creates express application and stores inside app variable

const app = express()

const port = process.env.PORT || 3000

// Route 1
app.get('/', (req, res) => {           // req - request, res - response
    res.send("Hello World!")           // app.get() - Handles get request
})

// route 2: twitter
app.get('/twitter', (req, res)=>{
    res.send("vanditkaranjekar")
})

// route 3: login
app.get('/login', (req, res) => {
    res.send('<h1>Please login at chai aur code</h1>')
})

// route 4:youtube
app.get('/youtube', (req, res)=>{
    res.send('<h2>Vandit aur code</h2>')
})

// Starting the server
app.listen(process.env.PORT, () => {               // app.listen()-Its atarts your express server and makes it listen for incoming requests on a particular port
    console.log(`Example app listening on ${port}`);
})

// 6 - concepts