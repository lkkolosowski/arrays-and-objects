{
  // zadanie 1
  mergeArrays = (a, b) => {
    return [...a, ...b];
  };

  // zadanie 2

  exceptFirst = (...arguments) => {
    // const arrayFromArgs = Array.from(arguments);
    const [, ...rest] = arguments;
    return [...rest];
  };

  // zadanie 3

  last2Parameters = (...arguments) => {
    // const arrayFromArgs = Array.from(arguments);
    const last2Parameters = arguments.slice(-2);
    return last2Parameters;
  };

  // zadanie 4

  indexOf = (element, array) => {
    return array.indexOf(element);
  };

  // zadanie 5
  findNonEmptyTask = (tasks) => {
    return tasks.find(({ content }) => content !== "");
  };

  // zadanie 6

  oddIndex = (numbers) => {
    return numbers.findIndex((number) => number % 2 !== 0);
  };

  // zadanie 7

  hasStrawberry = (fruits) => {
    return fruits.includes("truskawka");
  };

  // zadanie 8

  someAdult = (people) => {
    const isAdult = ({ age }) => age >= 18;
    return people.some(isAdult);
  };

  // zadanie 9

  onlyString = (...arguments) => {
    // const arrayFromArgs = Array.from(arguments);
    const isString = (argument) => typeof argument === "string";
    return arguments.every(isString);
  };

  // zadanie 10

  filterPremium = (carBrands) => {
    const isPremium = (brand) => brand.includes("BMW") || brand.includes("Audi") || brand.includes("Mercedes");
    return carBrands.filter(isPremium);
  };

  // zadanie 11

  getColors = (...cars) => {
    return cars.map(({ color }) => color);
  };

  // zadanie 12

  sortPeople = (people) => {
    return people.sort((a, b) => a.age - b.age);
  };

  // pozostałe funkcje

  const sayHello = () => {
    console.log(`CZEŚĆ! Zaczynamy lekcję o tablicach 😊`);
  };

  const copyToConsole = () => {
    const codes = document.querySelectorAll(".js-code");
    codes.forEach((code) => {
      code.addEventListener("click", () => {
        window.prompt("Skopiuj do schowka i wklej do konsoli: CTRL+C, Enter", code.innerText);
      });
    });
  };

  const init = () => {
    sayHello();
    copyToConsole();
  };

  init();
}
