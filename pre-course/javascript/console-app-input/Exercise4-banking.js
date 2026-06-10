

const prompt = require("prompt-sync")()

let balance = 100
let isRunning = true

while (isRunning) {
    console.log("\n=== Banking System ===")
    console.log("1) Check Balance")
    console.log("2) Deposit Money")
    console.log("3) Withdraw Money")
    console.log("4) Exit")

    const choice = prompt("Choose option (1-4): ")

    if (choice === "1") {
        console.log(`Current balance: $${balance}`)
    }
    else if (choice === "2") {
        const amount = Number(prompt("Enter amount to deposit: $"))

        if (isNaN(amount) || amount <= 0) {
            console.log("Error: Deposit amount must be a positive number")
        }
        else {
            balance += amount
            console.log(`New balance: $${balance}`)
        }
    }
    else if (choice === "3") {
        const amount = Number(prompt("Enter amount to withdraw: $"))

        if (isNaN(amount) || amount <= 0) {
            console.log("Error: Withdraw amount must be a positive number")
        }
        else if (amount > balance) {
            console.log("Error: Not enough money in your account")
        }
        else {
            balance -= amount
            console.log(`New balance: $${balance}`)
        }
    }
    else if (choice === "4") {
        console.log("Goodbye!")
        isRunning = false
    }
    else {
        console.log("Error: Invalid choice. Please choose 1, 2, 3, or 4")
    }
}