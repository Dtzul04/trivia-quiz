function getGreeting() {
const hour = new Date().getHours();
if (hour < 12) return "Good morning!";
else if (hour < 18) return "Good afternoon!";
else return "Good evening!";
}

const userName = prompt("Please enter your name:") || "Player";

document.getElementById("greeting").innerHTML = `<h3>${getGreeting()}</h3>`;
const today = new Date();
document.getElementById("date").innerHTML = `<p>Today is ${today.toDateString()}</p>`;
document.getElementById("user-info").innerHTML = `<p>Hello, <strong>${userName}</strong>! Let’s play a quiz!</p>`;

const quotes = [
"The best way to get started is to quit talking and begin doing.",
"Success doesn’t just find you. You have to go out and get it.",
"The harder you work for something, the greater you’ll feel when you achieve it.",
"Don’t watch the clock; do what it does. Keep going.",
"Dream bigger. Do bigger."
];

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
document.getElementById("quote").innerHTML = `<em>"${randomQuote}"</em>`;

const quizQuestions = [
{ question: "What is the capital of France?", options: ["Paris", "Rome", "Berlin", "Madrid"], answer: "Paris" },
{ question: "Which planet is known as the Red Planet?", options: ["Venus", "Saturn", "Mars", "Jupiter"], answer: "Mars" },
{ question: "Who wrote 'Romeo and Juliet'?", options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"], answer: "William Shakespeare" }
];

let score = 0;

function runQuiz() {
quizQuestions.forEach((q) => {
let userAnswer = prompt(`${q.question}\nOptions: ${q.options.join(", ")}`);
if (userAnswer && userAnswer.toLowerCase() === q.answer.toLowerCase()) {
score++;
alert("Correct!");
} else {
alert(`Wrong! The correct answer is ${q.answer}.`);
}
});
document.getElementById("quiz-result").innerHTML = `<h3>Quiz Completed!</h3><p>${userName}, your final score is <strong>${score}</strong> out of ${quizQuestions.length}.</p>`;
}

runQuiz();
