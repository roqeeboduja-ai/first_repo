// length of a string?
// let stringText = "This is a class on a string methods"    // user-defined function & in-built function
// console.log(stringText.length)

// // Casing
// let capitalLetter = stringText.toUpperCase()
// let smallLetter = stringText.toLowerCase()
// console.log(capitalLetter)
// console.log(smallLetter)


// trim, trimStart, trimEnd
// let str = "  Hello, World!   "
// let trimmedStr = str.trim()
// let frontTrimmedStr = str.trimStart()
// let endTrimmedStr =str.trimEnd()
// console.log(trimmedStr)
// console.log(frontTrimmedStr)
// console.log(endTrimmedStr)


// let signupName = "  Roqeeb"
// let signinName = "Roqeeb"

// if(signupName.trim() === signinName){
//     console.log("Welcome back, Roqeeb!")
// }else{
//     console.log("Invalid login information")
// }

// indexOf and Includes
// let user_email = "ogbuuzoma413@techcrush@gmail.com"
// let user_index = user_email.indexOf("8")     // return datatype : number
// console.log(user_index)      


// let email_contains = user_email.includes("@")    // return datatype : boolean
// console.log(email_contains)

// startsWith and endsWith
// let user_name = "techCrush Esther 6"
// let starts = user_name.startsWith("techcrush")      // return datatype : boolean
// console.log(starts)

// let ends = user_name.endsWith("6") // return datatype : boolean
// console.log(ends)

// slice and substring
// let test_string = "my name is Roqeeb!"
// let sliced_string = test_string.slice(-6)
// let sub_string_string = test_string.substring(-6)
// console.log(sliced_string)
// console.log(sub_string_string)

// replace and replaceAll
// let text = "Esther is a techie. Esther loves coding and Esther loves teaching."
// let replacedText = text.replace("Esther", "She")
// let replacedAllText = text.replaceAll("Esther", "She")
// console.log(replacedText)
// console.log(replacedAllText)


// ClassWork
// const msg = "   Hello, WORLD!    "
// let trimmedMsg = msg.trim()
// let start = msg.startsWith("Hello")
// let end = msg.endsWith("World!")
// let lower = msg.toLowerCase()
// let position = msg.indexOf("WORLD!")
// let rep = msg.replace("WORLD", "Nigeria")
// let letterRep = msg.replaceAll("L", "l")
// let get = msg.slice(3, 8)

// console.log(trimmedMsg)
// console.log(start)
// console.log(end)
// console.log(lower)
// console.log(position)
// console.log(rep)
// console.log(letterRep)
// console.log(get)

// split
// const sentence = "LANGUAGES: Javascript, Python, Java, C++"
// let splitSentence = sentence.split(",")         // return datatype : array
// console.log(splitSentence)

let example = "she is a girl, she is a teacher, she is eating"
console.log(example.split(","))