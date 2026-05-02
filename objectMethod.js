let obj = {
    name : "Esther",
    age : 25,
    occupation : "Developer"
}
console.log(obj);

let student = {
    name : "Ngozi Adeyemi",
    age : 21,
    department : "computer science",
    isEnrolled : true
};
console.log(student.name);   //Method 1
console.log(student["age"]); //Method 2

let employee = {
    name : "Tunde Balogun",
    role : "Frontend developer",
    salary : 450000,
    city : "Lagos"
};

const {name, role, salary, city} = employee;     //Destructuring
console.log(name);
console.log(role);
console.log(salary);
console.log(city);

let courses = {
    CSC401 : "Data Structures",
    CSC402 : "Algorithms",
    CSC403 : "Operating Systems",
    CSC404 : "Database Systems"
}
let {CSC401:CSC400} = courses;
console.log(CSC400);

let person ={
    name : "Amina",
    opay : true
}
let {opay : palmpay} = person;
console.log(palmpay);

//spread operator
let profile = {name : "Ada", age : 22};

let updatedProfile = {
    ...profile,
    city : "Abuja"
};
console.log(updatedProfile);

//rest operator





const user = {
    name : "Esther",
    password : "12345",
    isFemale : "True",
    city : "lagos",
    age : 25
}

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

//for in
for (let key in user){
    console.log("these are the keys: " + key);
    console.log("these are the values: " + user[key]);
}
