//Questions
var q1 = prompt("Question 1 text:");
var q2 = prompt("Question 2 text:");
var q3 = prompt("Question 3 text:");
var q4 = prompt("Question 4 text:");
var q5 = prompt("Question 5 text:");

//Answers
var a1 = "a";
var a2 = "a";
var a3 = "a";
var a4 = "a";
var a5 = "a";

//Score
var numQuestions = 5;
var correct = 0;

if (q1 === a1) {
  correct++;
}
if (q2 === a2) {
  correct++;
}
if (q3 === a3) {
  correct++;
}
if (q4 === a4) {
  correct++;
}
if (q5 === a5) {
  correct++;
}

console.log("Your score is " + (100 * (correct/numQuestions)) + "%");
