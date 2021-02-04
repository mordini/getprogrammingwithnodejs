'use strict';

const mongoose = require('mongoose');

const recipeSchema = mongoose.Schema({ // declare schema
    title: String,
    difficulty: String,
    rating: Number
});

module.exports = mongoose.model('Recipe', recipeSchema); // export module