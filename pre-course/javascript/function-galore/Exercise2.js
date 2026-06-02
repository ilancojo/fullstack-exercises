{
  console.log("Exercise 2:");

  const story = "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage.";
  const specialChars = [",", ".", "'", '"', "?", "!", ";"];
  const wordCounts = {};

  const countWords = function(sentence) {
  const cleanSentence = cleanText(sentence);

    for (let word of cleanSentence) {
      addToCounter(word);
    }
  };

  const addToCounter = function(word) {
    if (wordCounts[word]) {
      wordCounts[word]++;
    } else {
      wordCounts[word] = 1;
    }
  };

  const cleanText = function(sentence) {
    sentence = sentence.toLowerCase();
    sentence = removeSpecialChars(sentence);
  
    return sentence.split(" ");
  };

  const removeSpecialChars = function(sentence) {
    for (let char of specialChars) {
      sentence = sentence.split(char).join(" ");
    }
    return sentence;
  };

  countWords(story);
  console.log(wordCounts);
}