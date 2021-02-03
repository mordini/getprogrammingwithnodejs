'use strict';


exports.sendContactView = (req, res) => {
    console.log(`send contact view`);
    console.log(__dirname);
    console.log(process.cwd());

    res.render('contact');
};