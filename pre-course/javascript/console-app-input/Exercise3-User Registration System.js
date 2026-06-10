const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function askQuestion(question) {

    return new Promise(function(resolve) {
        rl.question(question, function(answer) {
            resolve(answer.trim())
        })
    })
}

async function registerUser() {
    const name = await askQuestion("Enter your name: ")
    const email = await askQuestion("Enter your email: ")
    const age = await askQuestion("Enter your age: ")
    const favoriteColor = await askQuestion("Enter your favorite color: ")

    console.log("\nRegistration Summary:")
    console.log(`Name: ${name}`)
    console.log(`Email: ${email}`)
    console.log(`Age: ${age}`)
    console.log(`Favorite Color: ${favoriteColor}`)

    rl.close()
}

registerUser()