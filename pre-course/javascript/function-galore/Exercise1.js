{
  console.log("Exercise 1:");

  const people_info = [
    {
      name: "Ashley",
      age: 23,
      profession: "developer",
      catchphrase: "code is life"
    },
    {
      name: "Donovan",
      age: 47,
      profession: "teacher",
      catchphrase: "never stop learning"
    },
    {
      name: "Lucas",
      age: 18,
      profession: "designer",
      catchphrase: "make it simple"
    }
  ];

  const capitalize = function(word) {
    return word[0].toUpperCase() + word.slice(1);
  };

  const getAge = function(person) {
    return person.age;
  };

  const capitalizeProfession = function(person) {
    return capitalize(person.profession);
  };

  const capitalizeCatchphrase = function(person) {
    return capitalize(person.catchphrase);
  };

  const getSummary = function(person) {
    const age = getAge(person);
    const profession = capitalizeProfession(person);
    const catchphrase = capitalizeCatchphrase(person);

    return `${person.name} is ${age} years old. ${person.name} is a ${profession}. ${person.name}'s catchphrase is "${catchphrase}".`;
  };

  for (let person of people_info) {
    console.log(getSummary(person));
  }
}