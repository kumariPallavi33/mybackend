const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    console.log("The path params in the request are : ", req.params)
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})
//*****************************1******************************************************** */
router.get('/movies1',function(req,res){
    //console.log("The movie are:")
    let movies1=["Dangal","Taare zameen par","Street Dancers"]
    res.send(movies1)
})
//****************************2********************************************************** */
// router.get('/movies/:indexNumber',function(req,res){
//    let movies= ["Rang de basanti", "The shining", "Lord of the rings","Batman begins"]
//    let indexNumber=req.params.indexNumber
//    res.send(movies[indexNumber])
   
// })
router.get('/movies/:index', function (req, res){
    console.log("The path params in the request are : ", req.params)
    let movies = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    let index =req.params.index

    res.send(movies[index])
})

//****************************3********************************************************* */
// router.get('/movies/:indexNumber',function(req,res){
//     let movies= ["Rang de basanti", "The shining", "Lord of the rings","Batman begins"]
//     let indexNumber=req.params.indexNumber
//     res.send(movies[indexNumber])
//     if(indexNumber>movies[indexNumber]){
//       res.send("enter the valid index no")
//     }else{
//         res.send(movies[indexNumber])
//     }
//  })
router.get('/movie/:index', function (req, res){
    console.log("The path params in the request are : ", req.params)
    let movies = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    let index =req.params.index
    if(index<movies.length){
    return res.send(movies[index])
    }
    else{
    return res.send(" use a valid index")
    }
})

 //****************************4********************************************************* */
 router.get('/films', function (req, res){
    let movies = [ {
        id: 1,
        name: "The Shining"
       }, {
        id: 2,
        name: "Incendies"
       }, {
        id: 3,
        name: "Rang de Basanti"
       }, {
        id: 4,
        name: "Finding Nemo"
       }]
       
     res.send(movies)
})
//***************************************5***************************************** */
router.get('/films/:filmid', function (req, res){
    let arr = [ {
        id: 1,
        name: "The Shining"
       }, {
        id: 2,
        name: "Incendies"
       }, {
        id: 3,
        name: "Rang de Basanti"
       }, {
        id: 4,
        name: "Finding Nemo"
       }];
        let count =0
       for(let i=0;i<arr.length;i++){
        if(arr[i].id==Number(req.params.filmid)){
            count++
            res.send(arr[i])
            }
       
    
       }
       if(count==0)
       res.send("id is not match")
})
//***********************************end********************************** */
router.get('/')
// Example 1 for path params
router.get('/students/:studentName', function(req, res){
    // ':' denotes that the following part of route is a variable
    // The value of this variable is what we are sending in the request url after /students
    // This value is set in the form of an object inside req.params
    // The object contain key value pairs
    // key is the variable in the route
    // value is whatever dynamic value sent in the request url
    let myParams = req.params

    // params attribute is fixed in a request object
    // params contains the path parameters object
    console.log("The path params in the request are : ", myParams)
    res.send('The full name is ' + myParams.studentName )
})

// Example 2 for path params
router.get('/student-details/:name', function(req, res){
    let requestParams = req.params
    console.log("This is the request ", requestParams)
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    res.send('Dummy response')
})
router.get('/books',function(req,res){
    let marks=req.query.marks
    let result=marks>40?"pass":"fail"
    res.send({data:result})
})
module.exports = router;