let myName = " Pallavi      "

const name = () => {
    console.log("Trim: ", myName.trim())
    console.log("toLowerCase: ", myName.toLowerCase())
    console.log("toUpperCase: ", myName.toUpperCase())
}
module.exports.myStringFunction = name
module.exports.myName = myName