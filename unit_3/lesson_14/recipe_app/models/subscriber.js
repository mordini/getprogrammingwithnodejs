'use strict';

const mongoose = require('mongoose');  // need to require mongoose because both schema and model use Mongoose methods to work, and Node.js loads a module into the project only once, does not load twice

const subscriberSchema = mongoose.Schema({ // create a new schema with mongoose
    name: String,
    email: String,
    zipCode: Number  // adding schema properties
});

// exporting  the Subscriber model as the only module export
module.exports = mongoose.model('Subscriber', subscriberSchema) // apply defined schema to a model