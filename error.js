//syntax error
// let add = (5+3;
// console.log(add);

//reference error
// let myame = "Amina";
// console.log(myName);

//type error
// let age = 25
// console.log(age.toUpperCase())

// try&catch
// try{
//     let result = 10 / 0;
//     console.log(result);
//     undefinedFunction();
//     console.log("This line will NOT run.");
// }catch(error){
//     console.log("An error occurred: " + error.name, error.message, error.stack);
// }
// console.log("The program continues here.");


function loadUserData(userId){
    console.log("Starting to load data...");
    try{
        if(!userId.startWith("BAD")){
            throw new Error("User ID must start with BAD");
        }
        console.log("Data loaded for user: " + userId);
    }catch(error){
        console.log("failed: " + error.message);
    }finally{
        console.log("Loading complete. Closing connection.")
    }
}

loadUserData("BAD-1234");
loadUserData(-1);