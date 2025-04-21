// WEEK 4 ASSIGNMENT: Loops | Conditionals | Logical Operators | Functions
// Assigned


// Write a function that takes a student’s score and logs "Passed" if it’s 180 and above, else logs "Failed". (JAMB-style)
   
let score = prompt("Enter your JAMB score:"); // Prompt the user to enter their score
   score = parseInt(score); // Convert the input to an integer

   // Function to check if the score is passed or failed
   function checkScore(score) {
       if (score >= 180) {
           console.log("Passed");
       } else {
           console.log("Failed");
       }
   }
    checkScore(score); // Call the function with the user's score


// Write a function that accepts an age and returns "You are eligible to vote" if the age is 18 or above, otherwise "Not eligible".

let age = prompt("Enter your age:"); // Prompt the user to enter their age
age = parseInt(age); // Convert the input to an integer

function checkEligibility(age) {
    if (age >= 18) {
        return "You are eligible to vote";
    } else {
        return "Not eligible";
    }
}
   
console.log(checkEligibility(age)); // Call the function and log the result 



// Write a function that takes a name and score, then returns:
// "Excellent" if score >= 90
// "Good" if score >= 75
// "Average" if score >= 50
// "Fail" otherwise

function evaluateScore(name, score) {
    if (score >= 90) {
      return "Excellent";
    } else if (score >= 75) {
      return "Good";
    } else if (score >= 50) {
      return "Average";
    } else {
      return "Fail";
    }
  }
  console.log(evaluateScore("Alice", 92)); // "Excellent"
  console.log(evaluateScore("Bob", 78));   // "Good"
  console.log(evaluateScore("Carol", 65)); // "Average"
  console.log(evaluateScore("Dan", 40));   // "Fail"


// 4. Write a function that takes two boolean values: hasID and isAbove18. Return "Access granted" only if both are true.


function checkAccess(hasID, isAbove18) {
    if (hasID && isAbove18) {
        return "Access granted";
    } else {
        return "Access denied";
    }
}

console.log(checkAccess(true, true));   // "Access granted"
console.log(checkAccess(true, false));  // "Access denied"
console.log(checkAccess(false, true));  // "Access denied"
console.log(checkAccess(false, false)); // "Access denied"


// 5. Use a for loop to go through an array of student scores. For each score, print "Pass" if it’s above 50 or "Fail" if it’s 50 or below.

function evaluateScores(scores) {
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] > 50) {
            console.log("Pass");
        } else {
            console.log("Fail");
        }
    }
}
let studentScores = [45, 67, 89, 32, 50]; // Array of student scores
evaluateScores(studentScores); // Call the function with the array of scores



// 6. Write an arrow function that returns "Yes" if a student passed both Math and English (score ≥ 50), else "No".

const didPass = (math, english) => (math >= 50 && english >= 50) ? "Yes" : "No";

console.log(didPass(55, 60)); // "Yes"
console.log(didPass(45, 60)); // "No"
console.log(didPass(60, 45)); // "No"
console.log(didPass(55, 45)); // "No"

// 7. Create a function that checks if a user has either an email or a phone number before signing up.

function checkUserInfo(email, phone) {
    if (email || phone) {
        return "User can sign up";
    } else {
        return "User cannot sign up";
    }
}

// Example usage of checkUserInfo function
console.log(checkUserInfo("user@example.com", "")); // "User can sign up"
console.log(checkUserInfo("", "1234567890"));       // "User can sign up"
console.log(checkUserInfo("", ""));                // "User cannot sign up"


// 8. Write a function that takes username and password. If either one is empty, return "Invalid input" using the || operator.

function validateCredentials(username, password) {
    if (!username || !password) {
        return "Invalid input";
    } else {
        return "Valid input";
    }
}
console.log(validateCredentials("username", "password")); // "Valid input"
console.log(validateCredentials("", "password"));         // "Invalid input"
console.log(validateCredentials("username", ""));         // "Invalid input"
console.log(validateCredentials("", ""));                 // "Invalid input"


// 9. Write a function that accepts hours worked. If hours ≥ 40, return "Full-time", else "Part-time" using a ternary operator.

function checkWorkHours(hours) {
    return (hours >= 40) ? "Full-time" : "Part-time";
}
console.log(checkWorkHours(45)); // "Full-time"
console.log(checkWorkHours(35)); // "Part-time"
console.log(checkWorkHours(40)); // "Full-time"


// 10. Write an arrow function that takes two numbers and returns the larger one.

const findLargerNumber = (num1, num2) => (num1 > num2) ? num1 : num2;

console.log(findLargerNumber(10, 20)); // 20
console.log(findLargerNumber(30, 25)); // 30
console.log(findLargerNumber(15, 15)); // 15