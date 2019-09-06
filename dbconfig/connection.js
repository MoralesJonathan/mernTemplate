const mongoose = require('mongoose');
require("dotenv").config();

const handleError = e => {
    console.error(`Mongoose connection error: ${JSON.stringify(e)}`);
}

const options = {
    useNewUrlParser: true,
    autoReconnect: true
}

const connect = (URI) =>
    mongoose.connect(URI || process.env.MONGODB_URI, options)
        .catch(handleError);

mongoose.connection.on('error', handleError);
mongoose.connection.on('connecting', () => console.info('Starting to make initial connection to the MongoDB server...'));
mongoose.connection.on('connected', () => console.info('Mongoose successfully connected to MongoDB server.'));
mongoose.connection.on('disconnecting', () => console.warn('Mongoose is disconnecting from the MongoDB server...'));
mongoose.connection.on('disconnected', () => console.warn('Mongoose lost connection to the MongoDB server. This may be due to an expected connection close, the database server crashing, or network connectivity issues.'));
mongoose.connection.on('reconnected', () => console.info('Mongoose successfully reconnected to MongoDB server.'));
mongoose.connection.on('reconnectFailed', () => console.error('Mongoose was unable to successfully reconnect to MongoDB server. No further attempts will be made.'));

module.exports = connect;
