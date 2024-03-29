'use strict';

const mongoose = require('mongoose');
const theDB = 'mongodb://localhost:27017/recipe_db';
const Subscriber = require('./models/subscriber');

const Recipe = require('./models/recipe');

// clear the console so i can read the information a bit more easily
console.clear();


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

// change me to insert
if (1 === 0) { // just to keep things neat in the DB

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
};

// let's find one of them, just for fun
var myQuery = Subscriber
    .findOne({
        //name: 'Steve Reeves from new'
        name: /Steve/
    })
    .where('email', /fake/);

myQuery.exec((error, data) => { // run the query with a callback to handle data and errors
    if (data) {
        console.log(data)
    } else {
        console.log('Subscriber not found');
    };
});


// change me to insert
if (1 === 0) {

    // Use our Recipe schema!

    // do it with a new object instance
    var recipe1 = new Recipe({
        title: 'Tomato Soup',
        difficulty: 'Easy',
        rating: 10
    });

    recipe1.save((error, savedDocument) => {
        if (error) console.log(error);
        console.log(savedDocument);
    });


    // do it with mongoose's create method!
    Recipe.create({
        title: 'Tomato Gloop',
        difficulty: 'Master',
        rating: 1
    },
        (error, savedDocument) => {
            if (error) console.log(error);
            console.log(savedDocument);
        }
    );

};

// let's go check out the Recipes
var recipeQuery = Recipe
    .findOne({
        title: /Tomato/
    })
    .where('difficulty', /sy/);

recipeQuery.exec((error, res) => {
    if (res) {
        console.log(res);
    } else {
        console.log('Recipe not found');
    }
});