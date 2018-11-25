const express = require('express')
const app = express()
const port = 8000

const NCCO = [
  {
      "action": "talk",
      "text": "Welcome to a Voice API I V R.",
      "voiceName": "Amy",
      "bargeIn": false
  },
  {
      "action": "talk",
      "text": "Press 1, for maybe, and 2, for not sure, followed by the hash key.",
      "voiceName": "Amy",
      "bargeIn": true
  },
  {
      "action": "input",
      "submitOnHash": true,
      "timeOut": 10
  },
  {
      "action": "talk",
      "text": "Thanks for your input, goodbye.",
      "voiceName": "Amy"
  }
]

app.get('/', (req, res) => {
  console.log(JSON.stringify(req.body, null, 2))
  res.send(NCCO)
})

app.listen(port, () => console.log(`Server started at ${port}`))
