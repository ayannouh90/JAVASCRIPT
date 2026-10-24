// let today = "Monday";

// if (today === "Monday") {

//     console.log("It's Monday, time to start the week!");
// } else { 

// console.log("It's Tuesday, keep going!");
// }

let age = 13;
// if (age >= 18) {
//     console.log("You are an adult.");
// } else {
//     console.log("You are a minor.");
// }

// if (age < 0 && age >= 2) { 
//     console.log("You are toddler."); 
// } else if (age >= 2 && age <= 12) {
//     console.log("You are a child.");
// } else if (age >= 13 && age <= 19) {
//     console.log("You are a teenager.");
// // } else if (age >= 20 && age <= 64) {
//     console.log("You are an adult.");
// } else if (age >= 65) {
//     console.log("You are a senior citizen.");
// } else {
//     console.log("Invalid age.");
// }



    
switch (true) {
  case age >= 0 && age <= 2:
    console.log("You are a baby.");
        break;
    
  case age >= 3 && age <= 12:
    console.log("You are a toddler.");
        break;
    
  case age >= 13 && age <= 19:
    console.log("You are a teenager.");
        break;
    
  case age >= 20 && age <= 64:
    console.log("You are an adult.");
        break;
    
  
  default:
    console.log("You are an adultor senior citizen.");
}
