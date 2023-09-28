const express = require('express')
const userRoutes = require('./routes/userRoutes')
require('./config/modelConfig')

const app = express()
const port = 9000

app.use(express.json());
app.use('/', userRoutes)

app.get('/', (req, res) => {
  res.send('Hello ashi!')
})

app.listen(port, () => {
  console.log(`server is running on port ${port}`)
})