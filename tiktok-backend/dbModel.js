const mongoose = require('mongoose')

const tiktokSchema = mongoose.Schema({
  url: 'string',
  channel: 'string',
  song: 'string',
  likes: 'string',
  messages: 'string',
  description: 'string',
  shares: 'string',
})

//Collection inside the db
// export default mongoose.model('tiktokVideos', tiktokSchema)

module.exports = mongoose.model('tiktokVideos', tiktokSchema)
//nodemon --exec npm start > to start