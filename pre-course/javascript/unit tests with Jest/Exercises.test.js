const Exercises = require('./Exercises');

let exercises

beforeEach(() => {
    exercises = new Exercises()
})

afterEach(() => {
    jest.restoreAllMocks()
})

// =======================
// Exercise 1
// =======================

test("isEven should return truthy for an even number", () => {
    let result = exercises.isEven(4)

    expect(result).toBeTruthy()
})

test("isEven should return falsy for an odd number", () => {
    let result = exercises.isEven(7)

    expect(result).toBeFalsy()
})

test("isEven should return falsy when no parameter is given", () => {
    let result = exercises.isEven()

    expect(result).toBeFalsy()
})


// =======================
// Exercise 2
// =======================

test("removeAtLeastOne should return an array with less items than before", () => {
    let arr = [1, 2, 3, 4, 5]
    let originalLength = arr.length
    let result = exercises.removeAtLeastOne(arr)

    expect(result.length).toBeLessThan(originalLength)
})

test("removeAtLeastOne should remove the only item when array has one item", () => {
    let arr = [1]
    let result = exercises.removeAtLeastOne(arr)

    expect(result.length).toBe(0)
})

test("removeAtLeastOne should throw an error if no parameter is given", () => {
    expect(() => exercises.removeAtLeastOne()).toThrow()
})


// =======================
// Exercise 3
// =======================

test("simplify should remove special symbols from the string", () => {
    let result = exercises.simplify("Hello! I'm, testing.#")

    expect(result).toBe("Hello Im testing")
})

test("simplify should return the same string if there are no special symbols", () => {
    let result = exercises.simplify("Hello world")

    expect(result).toBe("Hello world")
})

test("simplify should throw an error if no parameter is given", () => {
    expect(() => exercises.simplify()).toThrow()
})


// =======================
// Exercise 4 - TDD
// =======================

test("validate should return true if there are more trues than falses", () => {
    let result = exercises.validate([true, true, false])

    expect(result).toBeTruthy()
})

test("validate should return false if there are more falses than trues", () => {
    let result = exercises.validate([true, false, false])

    expect(result).toBeFalsy()
})

test("validate should return false if trues and falses are equal", () => {
    let result = exercises.validate([true, false])

    expect(result).toBeFalsy()
})

test("validate should return an error if there are no booleans", () => {
    let result = exercises.validate(["hello", 5, null])

    expect(result).toEqual({ error: "Need at least one boolean" })
})

test("validate should return an error for an empty array", () => {
    let result = exercises.validate([])

    expect(result).toEqual({ error: "Need at least one boolean" })
})

test("validate should return an error if no parameter is given", () => {
    let result = exercises.validate()

    expect(result).toEqual({ error: "Need at least one boolean" })
})


// =======================
// Extension
// =======================

test("add should use Array.prototype.push", () => {
    const pushSpy = jest.spyOn(Array.prototype, "push")

    exercises.add("x", "y")

    expect(pushSpy).toHaveBeenCalled()
    expect(pushSpy).toHaveBeenCalledWith("x", "y")
})