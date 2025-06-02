// 1. introduction function
function introduction(name) {
  return `Hi, my name is ${name}.`;
}

// 2. introductionWithLanguage function
function introductionWithLanguage(name, language) {
  return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

// 3. introductionWithLanguageOptional function (language defaults to "JavaScript")
function introductionWithLanguageOptional(name, language = "JavaScript") {
  return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
