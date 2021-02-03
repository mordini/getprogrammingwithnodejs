'use strict';

const MongoDB = require('mongodb').MongoClient; // require the MongoDB module
const dbURL = 'mongodb://localhost:27017';
const dbName = 'recipe_db';


MongoDB.connect(dbURL, (error, client) => { // set up a connection to the database server
    if (error) throw error; // can't connect?  let us know

    let db = client.db(dbName); //get the database from the connection to the server

    db.collection('contacts')
        .find() // find all the records in the contacts collection

        .toArray((error, data) => { // toss it into an array
            if (error) throw error; // problem getting that collection?  error
            console.log(data); // else show the data
        });

    // insert some new data from the application into the database
    db.collection('contacts')
        .insertOne({
            name: 'Freddie Mercury',
            email: 'fred@queen.com'
        }, (error, db) => {
            if (error) throw error;
            console.log(db);
        });

});