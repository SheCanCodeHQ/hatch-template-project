const Nexmo = require('nexmo')
require('dotenv').config()

const nexmo = new Nexmo({
  apiKey: process.env.NEXMO_API_KEY,
  apiSecret: process.env.NEXMO_API_SECRET,
  applicationId: process.env.NEXMO_APPLICATION_ID,
  privateKey: process.env.NEXMO_PRIVATE_KEY_PATH
})

// nexmo.calls.create({
//   to: [{
//     type: 'phone',
//     number: ''
//   }],
//   from: {
//     type: 'phone',
//     number: ''
//   },
//   answer_url: 'https://developer.nexmo.com/ncco/tts.json'
// }, response => console.log(JSON.stringify(response, null, 2)))

// nexmo.message.sendSms('MEDICUS', '', 'TEST')