import express from 'express'
import {config} from './src/config/config.js'
const app = express()
const port = config.port
app.get('/', (req, res) => {
    res.json({
        message: "Hello World"
    })
})

app.listen(port, () => {
    console.log("Server is running on port " + port)

})