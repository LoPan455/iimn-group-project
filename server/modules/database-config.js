//connection string to local instance of Mongo db

module.exports = process.env.MONGODB_URI || 'mongodb://localhost:27017/fhat';
