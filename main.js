// attribute modification break point
// find the code that modifies the selected element. Select the element -> right click -> 'break on' -> 'Attribute Modification'

const dogs = [
  { name: "Snickers", age: 2 },
  { name: "hugo", age: 8 },
];

const p = document.querySelector("p");
p.addEventListener("click", makeGreen);

function makeGreen() {
  p.style.color = "green";
  p.style.fontSize = "50px";
}

// regular
console.log("hello");

// interpolated
const poop = "💩";
console.log("Hello I'm a %s string!", poop);
console.log(`Hello I'm a ${poop} string!`);

// styled - style will applied to string after %c
console.log(
  "%c I am some great text",
  "font-size: 50px; color: red; text-shadow: 2px 2px 1px green"
);

// warning
console.warn("OH NOO");

// error
console.error("Shit!");

// info
console.info("Crocdiles kill 3-4 people every year");

//testing
console.assert(p.classList.contains("ouch"), "that is wrong");

// clearing
console.clear();

// Viewing DOM elements
console.dir(p);

console.clear();

// Grouping together
dogs.forEach((dog) => {
  console.group(`${dog.age}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.age}`);
});

// counting - counts a specific string, word, number, DOM node

console.count("Wes");
console.count("Wes");
console.count("Wes");
console.count("Wes");
console.count("Bos");
console.count("Bos");
console.count("Bos");
console.count("Bos");
console.count("Wes");
console.count("Bos");
console.count("Bos");
console.count("Bos");

//timing
console.time("fetching data");
fetch("https://api.github.com/users/wesbos")
  .then((res) => res.json())
  .then((data) => {
    console.timeEnd("fetching data");
    console.log(data);
  });

//table - an array of objects

console.table(dogs);
