/* 
=================================================================
LAB TITLE: Advance JavaScript
INSTRUCTIONS:
• Each task is written as a TODO.
• Read the TODO description.
• Use the Console (F12 → Console) to view outputs.
=================================================================
*/

//You can uncomment the console.log code to check if your js file is connected with html file or not.
console.log("%cJS Lab Connected — Start completing the TODOs for Advance JavaScript!", "font-weight:bold; font-size:14px");

// ==========================
// TODO-1: OBJECT with GETTERS & SETTERS
// ==========================
/*
Task:
1) Create an object representing a Student with at least: firstName, lastName, and gpa.
2) Add a getter fullName that returns "firstName lastName".
3) Add a setter updateGpa(newGpa) or use a set accessor for gpa that validates 0.0–4.0.
4) Create an instance/object and output its attributes using the getter(s).
*/
const student = {
      firstname: "Ali"
      , lastname: "Alzaki"
      , _gpa: 4.0
      , get fullName() {
            return this.firstname + " " + this.lastname;
      },
      set updateGpa(newGpa) {
            if (newGpa >= 0.0 && newGpa <= 4.0) {
                  this._gpa = newGpa;
            }
   }
}

console.log(student.fullName);
console.log(student._gpa);

// ====================================
// TODO-2: OBJECT AS MAP + for...in LOOP
// ====================================
/*
Task:
1) Make an object used as a "map" (key → value), e.g., course codes → titles.
2) Iterate over it with for...in and display each key and value.
*/
const courses = {SWE363: "Web Development", SWE387: "Software Project Management"}
for (let key in courses) {
      console.log(key + ": " + courses[key]);
}


// =========================================
// TODO-3: STRING OBJECT — charAt() & length
// =========================================
/*
Task:
1) Create a String object or plain string.
2) Use .charAt(index) and .length to output characters and size.
*/

const string = "Hi";
string.charAt(0);
string.length;
console.log(string.charAt(0));
console.log(string.charAt(1));
console.log(string.length); // should be 2


// ===================================
// TODO-4: DATE — day, month, and year
// ===================================
/*
Task:
1) Create a Date for the current moment (new Date()).
2) Find and display the current day of month, month (0–11), and year.
//    (Hint: getDate(), getMonth(), getFullYear() )
*/

const currentDate = new Date();
console.log(currentDate.getDate());
console.log(currentDate.getMonth() + 1);
console.log(currentDate.getFullYear());

// ============================================================
// TODO-5: ARRAY + SPREAD — find MIN and MAX from 10 numbers
// ============================================================
/*
Task:
1) Declare an array with 10 numbers (any values).
2) Use spread syntax with Math.min(...) and Math.max(...) to find extremes.
3) Display both values.
*/
const numbers = [1, 2, 4, 8, 14, 21, 23, 44, 144, 444];
const min = Math.min(...numbers);
const max = Math.max(...numbers);
console.log(min + " is the min and " + max + " is the max.");

// ===================================================================
// TODO-6: EXCEPTIONS — try/catch/finally with EMPTY ARRAY edge case
// ===================================================================
/*
Task:
1) Write a function that expects a non-empty array and returns the maximum element of the array.
2) Intentionally pass an empty array to trigger an error.
3) Handle the error using try { ... } catch (e) { ... } finally { ... } and log messages
   in each block so you can see the flow of control.
*/

function myfunction(arr) {
      if (!Array.isArray(arr) || arr.length === 0) {
       throw new Error("Array must be non-empty.");
      }
      return Math.max(...arr);
   }

try {
console.log("this is the try block");
const result = myfunction();
} catch (e) {
      console.log("this is the catch block");
      console.log(e.message);
}
finally {
   console.log("this is the finally block");
}
 
// ===================================================================================
// TODO-7: REGEX + forEach — find words containing 'ab' and log matches from the list
// ===================================================================================
/*
Task:
Given: const words = ["ban", "babble", "make", "flab"];
1) Create a RegExp that detects the substring "ab" anywhere in a word.
2) Loop with .forEach() and use pattern.test(word) to check matches.
3) For matches, log "<word> matches!".
4) Display the words that matches the pattern.
*/

const words = ["ban", "babble", "make", "flab", "Alibaba"];
const pattern = /ab/;
words.forEach(word => {
   if(pattern.test(word)) {
      console.log(`${word} matches!`);
   }
});

// End of Advance JavaScript Lab — good luck!
