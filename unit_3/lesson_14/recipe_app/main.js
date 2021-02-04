'use strict';

const mongoose = require('mongoose');
const theDB = 'mongodb://localhost:27017/recipe_db';

mongoose.connect(theDB, // set up the connection to the database
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

const db = mongoose.connection; // assign the database to the db variable

db.once('open', () => { // log a message when the application connects to the database
    console.log('Conected to MongoDB using Mongoose!');
});

const subscriberSchema = mongoose.Schema({ // create a new schema with mongoose
    name: String,
    email: String,
    zipCode: Number  // adding schema properties
});

const Subscriber = mongoose.model('Subscriber', subscriberSchema) // apply defined schema to a model

// TWO WAYS TO GENERATE NEW OBJECTS

// 01. create and save from instances of the model

// instantiate a new Subscriber object
var subscriber1 = new Subscriber({
    name: 'Steve Reeves from new',
    email: 'fake@notreal.com',
});

// then save the new Subscriber object data
subscriber1.save((error, savedDocument) => { // save to the database
    if (error) console.log(error); // pass potential errors to the next middleware function
    console.log(savedDocument); // log saved data
});

// 02 using create function, which does 'new' and 'save' in one step
Subscriber.create({
    name: 'Steve Reeves from create',
    email: 'fake@notreal.com'
},
    //function (error, savedDocument) {  // example uses function but...
    (error, savedDocument) => {  // i just like using arrow functions
        if (error) console.log(error);
        console.log(savedDocument);
    }
);