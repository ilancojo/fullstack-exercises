
class Exercises {
    // Exercise 1
    // should return true if n is even, false otherwise
    isEven(n) {
        return n % 2 == 0 ? true : false
    }

    // Exercise 2
    // should remove at least one element from the array arr
    removeAtLeastOne(arr) {
        let numItemsToRemove = Math.floor(Math.random() * (arr.length - 1)) + 1
        arr.splice(0, numItemsToRemove)
        return arr
    }

    // Exercise 3
    // should return a clean string without these symbols: "!", "#", ".", ",", "'"
    simplify(str) {
        let symbols = ["!", "#", ".", ",", "'"]
        return str.split("").filter(c => symbols.indexOf(c) == -1).join("")
    }

    // Exercise 4
    // validate receives an array and checks boolean values
    validate(arr) {
        if (!Array.isArray(arr)) {
            return { error: "Need at least one boolean" }
        }

        let booleans = arr.filter(item => typeof item === "boolean")

        if (booleans.length === 0) {
            return { error: "Need at least one boolean" }
        }

        let trues = booleans.filter(item => item === true).length
        let falses = booleans.filter(item => item === false).length

        return trues > falses
    }

    // Extension
    add(x, y) {
        let stuff = []
        stuff.push(x, y)
    }
}

module.exports = Exercises