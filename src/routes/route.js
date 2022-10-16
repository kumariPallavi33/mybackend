const lodash = require('lodash')
const express = require('express');
const router = express.Router();///test-you
//importing a custom module
//const xyz = require('../logger')
//importing external package
const underscore = require('underscore')
const mylogger = require('../logger/logger')
const myutil = require('../util/helper.js')
const myStringFunction1 = require('../validater/formatter.js')


router.get('/test-me', function (req, res) {
    //Calling the components of a different custom module
    // console.log("Calling my function ",xyz.myFunction())
    // console.log("The value of the constant is ",xyz.myUrl)
    //Trying to use an external package called underscore
    // let myArray = ['Akash', 'Pritesh', 'Sabiha']
    // let result = underscore.first(myArray)
    // console.log("The result of underscores examples api is : ", result)
    console.log("*********************Problem-01*************************")
    console.log("Here is the result of logger1: ", mylogger.welcome())
    console.log("*********************Problem-02*************************")
    console.log("Here is todays date: ", myutil.mynewDate)
    console.log("This is the month: ", myutil.mynewMonth)
    console.log("Here is our batch: ", myutil.batchInfo())
    console.log("*********************Problem-03*************************")
    console.log("Actual Name: ", myStringFunction1.myName)
    myStringFunction1.myStringFunction()
    let months=['Jan','Feb','Mar','Apr','Jun','Jul','Aug','Step','Oct','Nov','Dec']
const rest=lodash.chunk(months,4)
console.log("chunk method",rest);
let arr=[1,3,5,7,9,11,13,15,17,19]
const arr1=lodash.tail(arr)
console.log("using tail method",arr1);
let array=[12,2,4,4,5]
const un=lodash.union(array)
console.log("uniqe",un);
let fo= [['horror','The Shining'],['drama','Titanic'],['thriller','Shutter Island'],['fantasy','Pans Labyrinth']]
const fo1=lodash.fromPairs("frompair method using:-",fo)

   // const array = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];



    res.send('My first ever api!')

    //To be tried what happens if we send multiple response
    //res.send('My second api!')
});

module.exports = router;

