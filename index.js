const Babysitter = require("./babysitter");
const { familyA, familyB, familyC } = require("./families");
const { sanitizeTime } = require("./helperFunctions");

const args = process.argv.slice(2);

const inputMessage = "family character (A, B, or C), a start time without periods (5:00pm/5pm), and end time without periods (4:00am/4am).";

let family;
let startTime;
let endTime;

if (args.length === 0) {
  console.log(`Using example. Expecting a ${inputMessage}`);
  family = "A";
  startTime = "5pm";
  endTime = "4am";
}
else {
  if (args[0].toLowerCase() === "help"){
    console.log(`Please enter a ${inputMessage}`);
    return;
  }
  else if (args.length < 3){
    console.log(`Invalid input: Expecting at least three arguments. \n Expecting a ${inputMessage}`);
    return;
  }
  else if (args.length > 3){
    console.log(`Invalid input: Only expecting three parameters: ${inputMessage}`);
    return;
  }
  else {
    family = args[0].toUpperCase(); //make family capitalized incase a lowercase value was used
    startTime = sanitizeTime(args[1]);
    endTime = sanitizeTime(args[2]);
  }
}

if (family !== "A" && family !== "B" && family !== "C"){
  console.log("Invalid family input");
  return;
}

if (!startTime.toLowerCase().includes("am") && !startTime.toLowerCase().includes("pm")){
  console.log("Expecting am or pm in start time");
  return;
}

if (!endTime.includes("am") && !endTime.includes("pm")){
  console.log("Expecting am or pm in end time");
  return;
}

if (family === "A")
  family = familyA;
else if (family === "B")
  family = familyB;
else
  family = familyC;

const babysitter = new Babysitter();

console.log(babysitter.printReport(family, startTime, endTime));
