'use strict;'

const cities = require('cities');
const addNum = require('./addnum');
const subNum = require('./subnum');
const printInput = require('./printinput');

var myCity = cities.zip_lookup('27520');
console.log(myCity);

var firstNum = 5;
var secondNum = 10;

var sum = addNum.add(firstNum, secondNum);
console.log(sum);

var product = subNum.subtract(firstNum, secondNum);
console.log(product);