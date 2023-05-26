function WordFrequency(str) {
    const words = str.toLowerCase().replace(",", "").split(" ");
    const frequencyContainer = new Map();
  
    for (let word of words) {
      frequencyContainer.set(word, (frequencyContainer.get(word) || 0) + 1);
    }
  
    for (let [key, value] of frequencyContainer) {
      console.log(`${key} :- ${value}`);
    }
  }
  
  const str =
    "Success is not the key of Happiness, Happiness is the key of success";
  WordFrequency(str)
