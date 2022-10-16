let dd=new Date()
let newDate=dd.getDate()
let newMonth=dd.getMonth()+1


function batchInfo(){
    return  "Lithium, W4D6, the topic for today is Nodejs module system."
}

module.exports.mynewDate=newDate
module.exports.mynewMonth=newMonth
module.exports.batchInfo=batchInfo
// const date = new Date(); 
// const day= date.getDate(); 
// const month =date.getMonth()+1; 
// const getinfo=()=>{ 
// console.log("My batch Lithium being to step 19 2022 first  assignment in Node"); 
// return 'message' 
// } 
// module.exports.day=day 
// module.exports.info=getinfo 
// module.exports.month=month 
