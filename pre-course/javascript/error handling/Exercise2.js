const fs = require("fs")

function readFileWithErrorHandling(filePath, callback) {
    fs.readFile(filePath, function(error, data) {
        if (error) {
            if (error.code === "ENOENT") {
                callback(`File not found: ${filePath}`)
                return
            }

            if (error.code === "EISDIR") {
                callback(`Path is a directory, not a file: ${filePath}`)
                return
            }

            if (error.code === "EPERM" || error.code === "EACCES") {
                callback(`Permission denied: ${filePath}`)
                return
            }

            callback(`Could not read file: ${filePath}`)
            return
        }

        callback(`File read successfully. Size: ${data.length} bytes`)
    })
}

readFileWithErrorHandling("existing.txt", function(result) {
    console.log(result)
})

readFileWithErrorHandling("missing.txt", function(result) {
    console.log(result)
})

readFileWithErrorHandling("test-folder", function(result) {
    console.log(result)
})



































/*
Version with Arrow Functions

const fs = require("fs")

function readFileWithErrorHandling(filePath, callback) {
    fs.readFile(filePath, (error, data) => {
        if (error) {
            if (error.code === "ENOENT") {
                callback(`File not found: ${filePath}`)
                return
            }

            if (error.code === "EISDIR") {
                callback(`Path is a directory, not a file: ${filePath}`)
                return
            }

            if (error.code === "EPERM" || error.code === "EACCES") {
                callback(`Permission denied: ${filePath}`)
                return
            }

            callback(`Could not read file: ${filePath}`)
            return
        }

        callback(`File read successfully. Size: ${data.length} bytes`)
    })
}

readFileWithErrorHandling("existing.txt", (result) => {
    console.log(result)
})

readFileWithErrorHandling("missing.txt", (result) => {
    console.log(result)
})

readFileWithErrorHandling("test-folder", (result) => {
    console.log(result)
})

*/