const express = require('express')
const cors = require('cors')
const { default: mongoose } = require('mongoose')

const exerciseRouter = require("./routes/exercises_route")
const userRouter = require("./routes/users_route")


require('dotenv').config()

const app = express()
const port = 5000


app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true });

const conn = mongoose.connection;


conn.once('open', ()=> {
    console.log('MongoDB database connection established successfully');
})


app.use('/exercises', exerciseRouter)
app.use('/users', userRouter)


app.listen(port, () => {console.log("Server is listening on PORT 5000...")})
