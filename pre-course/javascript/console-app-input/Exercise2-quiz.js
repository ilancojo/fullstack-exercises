

const prompt = require("prompt-sync")()//Imports the prompt-sync library.

const questions = [
    {
        question: "What is 2 + 2? ",
        answer: "4"
    },
    {
        question: "What is the capital of France? ",
        answer: "paris"
    },
    {
        question: "What year is it? ",
        answer: "2026"
    }
]

let score = 0

for (let i = 0; i < questions.length; i++) {
    const userAnswer = prompt(`Question ${i + 1}: ${questions[i].question}`)

    const cleanUserAnswer = userAnswer.trim().toLowerCase()
    const cleanCorrectAnswer = questions[i].answer.trim().toLowerCase()

    if (cleanUserAnswer === cleanCorrectAnswer) {
        console.log("Correct!")
        score++
    }
    else {
        console.log(`Wrong! The correct answer is: ${questions[i].answer}`)
    }
}

console.log(`Final Score: ${score}/${questions.length} correct!`)