function uppercaseFirstLetter(string) {
  if (!string) return "";
  return string[0].toUpperCase() + string.slice(1, string.length);
}

function processString(acc, string) {
  const camelString = uppercaseFirstLetter(string);
  return acc + camelString;
}

function camelize(stringArray) {
  return stringArray.reduce((acc, string, index) => {
    if (index === 0) {
      return string;
    }
    return processString(acc, string);
  }, "");
  // TODO
}

console.log(camelize(["array", "of", "string"]));

function snakeToCamel(snake_case_string) {
  return camelize(snake_case_string.split("_"));
}

console.log(snakeToCamel("hello_my_friend"));
