//const mongoose = require('mongoose')
/*const host = process.env.MONGO_HOST || '0.0.0.0'
const port = process.env.MONGO_PORT || 27017
const username = process.env.MONGO_INITDB_ROOT_USERNAME
const password = process.env.MONGO_INITDB_ROOT_PASSWORD
const database = process.env.MONGO_INITDB_DATABASE

const connect = () => {
  mongoose.connect(
    //'mongodb://${username}:${password}@${host}:${port}/${database}?authSource=admin',
    'mongodb://localhost:27017/schooldb',
    {
      useNewUrlParser: true,
      useFindAndModify: false,
    },
    function(err:any) {
      if (err) {
        throw err
      }
      else console.log('connect to db')
    }
  )
}

module.exports = {
  connect
}*/