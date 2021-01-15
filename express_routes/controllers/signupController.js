'use strict';

// adding route for a sign_up path as a bonus
exports.signUpProcessor = (req, res, next) => {
    console.log(`signup process`);
    // console.log(req.body);
    // console.log(req.query);
    console.log(req.body.username);
    let username = req.body.username;
    res.send(`Signed up with the username: ${username}`);
};