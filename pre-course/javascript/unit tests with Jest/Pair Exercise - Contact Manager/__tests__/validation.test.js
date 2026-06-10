const {
  validateName,
  validateEmail,
  validatePhone,
  validateContact
} = require("../utils/validation");

const { ValidationError } = require("../utils/errorTypes");

test("validateName should not throw when name is valid", () => {
  expect(() => validateName("John Doe")).not.toThrow();
});

test("validateName should throw ValidationError when name is empty", () => {
  expect(() => validateName("")).toThrow(ValidationError);
  expect(() => validateName("")).toThrow("Name is required");
});

test("validateName should throw ValidationError when name contains only spaces", () => {
  expect(() => validateName("   ")).toThrow("Name is required");
});

test("validateEmail should not throw when email is valid", () => {
  expect(() => validateEmail("john@example.com")).not.toThrow();
});

test("validateEmail should throw when email is empty", () => {
  expect(() => validateEmail("")).toThrow("Email is required");
});

test("validateEmail should throw when email does not contain @", () => {
  expect(() => validateEmail("johnexample.com")).toThrow("Email must contain @ symbol");
});

test("validatePhone should not throw when phone is valid", () => {
  expect(() => validatePhone("555-1234")).not.toThrow();
});

test("validatePhone should throw when phone is empty", () => {
  expect(() => validatePhone("")).toThrow("Phone is required");
});

test("validateContact should not throw for a valid contact", () => {
  const contact = {
    name: "John Doe",
    email: "john@example.com",
    phone: "555-1234"
  };

  expect(() => validateContact(contact)).not.toThrow();
});

test("validateContact should throw if contact email is invalid", () => {
  const contact = {
    name: "John Doe",
    email: "johnexample.com",
    phone: "555-1234"
  };

  expect(() => validateContact(contact)).toThrow("Email must contain @ symbol");
});