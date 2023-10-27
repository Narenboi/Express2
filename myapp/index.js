const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  app.get('/Slapaf', (req, res) => {
    res.send('<h1>Hids dig ned homie!</h1>')
  })

  app.get('/api/yep', (req, res) => {
    res.send('Api Yep yep!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})