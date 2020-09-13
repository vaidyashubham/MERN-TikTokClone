const express = require('express')
const mongoose = require('mongoose')
const Data = require('./data.js')
const Videos = require('./dbModel.js')




//App config
const app = express()
const port = process.env.PORT || 8000

// middlewares
app.use(express.json())
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', '*')
  next()
})

//DB config
const connectionUrl = "mongodb+srv://admin:dyHDhyXVGcV9Kuos@cluster0.g8kfa.mongodb.net/tiktok?retryWrites=true&w=majority"

mongoose.connect(connectionUrl)
  .then(() => console.log('Database Connected'))
  .catch(err => console.log(err));

//API endpoints
app.get('/', (req, res) => res.status(200).send("Hello World!"))

app.get('/v1/posts', (req, res) => res.status(200).send(Data))

app.get('/v2/posts', (req, res) => {

  Videos.find({}, (err, data) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(200).send(data)
    }
  })
})

app.post('/v2/posts', (req, res) => {
  const dbVideos = req.body

  Videos.create(dbVideos, (err, data) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(201).send(data)
    }
  })
})

//listen
app.listen(port, () => console.log(`Listening on Port ${port}`))
