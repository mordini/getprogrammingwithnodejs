'use strict';

exports.respondWithName = (req, res) => {
    console.log(req.params.myName);
    let name = req.params.myName; // get name param
    if (!name) {
        name = 'default user name'
    }
    // feed name param into view
    res.render('index', { name }); // use 'render' method on the respond object to respond with a view from the views folder
};
