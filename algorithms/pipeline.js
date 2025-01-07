function pipeline(...functions) {
  if (functions.length === 0) {
    throw new Error("The function need need to passed proper valid arguments!");
  }
  return function (input) {
    if (!input) throw new Error("Require inputs!");
    return functions.reduce((acc, f) => {
      if (!acc) return f(input);
      return f(acc);
    }, null);
  };
}

const pluralize = (singularWord) => singularWord + "s";
const heart = (word) => "I ❤️ " + word;
const exclaim = (sentence) => sentence + "!";

const showSomeLove = pipeline(pluralize, heart, exclaim);
console.log(showSomeLove("Myo"));
