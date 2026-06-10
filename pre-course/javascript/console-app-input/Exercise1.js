
//////////////////////////////////////////////////
const args = process.argv.slice(2)

if (args.length !== 3) {
    console.log("Usage: node calculator.js <number1> <operation> <number2>")
    console.log("Example: node calculator.js 10 + 5")
    process.exit()
}

const num1 = Number(args[0])
const operation = args[1]
const num2 = Number(args[2])

if (isNaN(num1) || isNaN(num2)) {
    console.log("Error: number1 and number2 must be valid numbers")
    process.exit()
}
//////////////////////////////////////////////////
let result = 0;

if (operation === "+") {
    result = num1 + num2
}
else if (operation === "-") {
    result = num1 - num2
}
else if (operation === "*") {
    result = num1 * num2
}
else if (operation === "/") {
    if (num2 === 0) {
        console.log("Error: Cannot divide by zero")
        process.exit()
    }

    result = num1 / num2
}
else {
    console.log("Error: Invalid operation")
    console.log("Allowed operations: +, -, *, /")
    process.exit()
}

console.log(`${num1} ${operation} ${num2} = ${result}`)


