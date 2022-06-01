const Mongoose = require('mongoose').Mongoose;
const apiDB = new Mongoose();

apiDB.Promise = global.Promise;

let connectToMongoDB = (instance, url) => {
  return new Promise((resolve, reject) => {
    instance.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    let db = instance.connection;
    db.on('error', (err) => {
      console.info(`MongoDb Connection failed with error: ${err.message}`);
      reject(err);
      process.exit(1);
    });
    db.once('open', () => {
      console.info(`Connected to MongoDb: ${url}`);
      resolve(true);
    });
  });
}

module.exports = {
  getAppAPIMongoDB: () => apiDB,
  connectAppAPIMongoDB: (url) => {
    return connectToMongoDB(apiDB, url);
  },
}

