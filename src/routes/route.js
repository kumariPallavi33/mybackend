const express = require('express');
const router = express.Router();
const lodash = require("lodash")
router.get('/find-me', function (req,res) {
        const arr = [1,2,3,5,6,7]
        let n = arr.length+1
        let sum_of_natural_number = n*(n+1)/2
        sum_of_arr = 0; 
        for(let i=0 ; i<arr.length; i++){
           const element = arr[i];
           sum_of_arr+=element
      }
      let missingnumber = sum_of_natural_number-sum_of_arr
        res.send({missingnumber})
     });
    router.get('/find-me2', function (req,res) {
            const arr = [33,34,35,37,38]
            let n = arr.length+1
            let sum_of_consecutive_number = n*(33+38)/2
            sum_of_arr = 0; 
            for(let i=0 ; i<arr.length; i++){
               const element = arr[i];
               sum_of_arr+=element
          }
          let missingnumber = sum_of_consecutive_number-sum_of_arr
            res.send({missingnumber})
        });
let players =
    [
        {
            "name": "manish",
            "dob": "1/1/1995",
            "gender": "male",
            "city": "jalandhar",
            "sports": [
                "swimming"
            ]
        },
        {
            "name": "gopal",
            "dob": "1/09/1995",
            "gender": "male",
            "city": "delhi",
            "sports": [
                "soccer"
            ]
        },
        {
            "name": "lokesh",
            "dob": "1/1/1990",
            "gender": "male",
            "city": "mumbai",
            "sports": [
                "soccer"
            ]
        },
]

router.post('/players',function(req,res){
    for(i=0;i<players.length;i++){
     if (req.body.name == players[i].name){
           return res.send({data:"ERROR!!!!!!(name should be unique)"})
        }
    }

    let c = req.body
    players.push(c)
   return res.send({data:players,status:true})
})

let person = [{
    name: "chanda",
    age: 23,
    votingStatus: false
},
{
    name: "suresh",
    age: 14,
    votingStatus: false
},
{
    name: "Amit",
    age: 25,
    votingStatus: false
},
{
    name: "pallavi",
    age: 43,
    votingStatus: false
}
]

router.post('/person', function (req, res) {
    let array = []
    let votingAge = req.query.votingAge
    for (i = 0; i < person.length; i++) {
        if (votingAge <= person[i].age) {
            person[i].votingStatus = true
            array.push(person[i])
        }
    }
    res.send({ data: array, status: true })
})




module.exports = router;











// router.get('/students/:name', function(req, res) {
//     let studentName = req.params.name
//     console.log(studentName)
//     res.send(studentName)
// })

// router.get("/random" , function(req, res) {
//     res.send("hi there")
// })


// router.get("/test-api" , function(req, res) {
//     res.send("hi FunctionUp")
// })


// router.get("/test-api-2" , function(req, res) {
//     res.send("hi FunctionUp. This is another cool API")
// })


// router.get("/test-api-3" , function(req, res) {
//     res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's ")
// })


// router.get("/test-api-4" , function(req, res) {
//     res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
// })



// router.get("/test-api-5" , function(req, res) {
//     res.send("hi FunctionUp5. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
// })

// router.get("/test-api-6" , function(req, res) {
//     res.send({a:56, b: 45})
// })

// router.post("/test-post", function(req, res) {
//     res.send([ 23, 45 , 6])
// })


// router.post("/test-post-2", function(req, res) {
//     res.send(  { msg: "hi" , status: true }  )
// })

// router.post("/test-post-3", function(req, res) {
//     // let id = req.body.user
//     // let pwd= req.body.password

//     // console.log( id , pwd)

//     console.log( req.body )

//     res.send(  { msg: "hi" , status: true }  )
// })



// router.post("/test-post-4", function(req, res) {
//     let arr= [ 12, "functionup"]
//     let ele= req.body.element
//     arr.push(ele)
//     res.send(  { msg: arr , status: true }  )
// })

// module.exports = router;