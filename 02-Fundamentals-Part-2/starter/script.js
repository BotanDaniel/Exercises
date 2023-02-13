"use strict";
/*
// Strict Mode
// let hasDriversLicence = false;
// const passTest = true;

// if (passTest) hasDriversLicence = true;
// if (hasDriversLicence) console.log(`I can drive :D`);

// const private = 534;

//Functions

function logger() {
    console.log(`My name is Daniel`);
}

// calling / running / invoking => the function
logger(23);
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice whit ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

//Function declaration ⬇️

function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(2002);
console.log(age1);

//Function expresion ⬇️
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
};

const age2 = calcAge2(2002);
console.log(age1, age2);

//Arrow Function (is still a function expresion) ⬇️
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //   return retirement;
    return `${firstName} retires in  ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Andrei"));
console.log(yearsUntilRetirement(1980, "Bob"));

function cutFruitPieces(fruit) {
    return fruit * 2;
}

function fruitProcessor(apples, oranges) {
    const applesPieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    
    const juice = `Juice whit ${applesPieces} apple pieces and ${orangePieces} orange pieces`;
    return juice;
}
console.log(fruitProcessor(2, 3));
const calcAge = function (birthYear) {
    return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    
    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }
};

console.log(yearsUntilRetirement(1991, "Daniel"));
console.log(yearsUntilRetirement(1950, "Mike"));

//Arrays
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);
// friends = [`Bob`, "Alice"];

const firstName = "Daniel";
const daniel = [firstName, "Botan", 2022 - 2002, "student", friends];
console.log(daniel);

// Exercise

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);

const friends = ["Michael", "Steven", "Peter"];
//Add elements
const newLenght = friends.push("Jay");
console.log(friends);
console.log(newLenght);

friends.unshift("Jhon");
console.log(friends);

//Remove elements
friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf("Steven"));

friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes(23));

if (friends.includes("Steven")) {
  console.log(`You have a friend called STEVEN`);
}
//Objects

const danielArray = [
    "Daniel",
    "Botan",
    2037 - 1991,
    "studemt",
    ["Adi", "Marius", "Chivu"],
];

const daniels = {
    firstName: "Daniel",
    lastName: "Botan",
    age: 2022 - 2002,
    job: "student",
    friends: ["Adi", "Marius", "Chivu"],
};

console.log(daniels);
console.log(daniels.lastName);
console.log(daniels["lastName"]);

const nameKey = "Name";
console.log(daniels["first" + nameKey]);
console.log(daniels["last" + nameKey]);

const intersetedIn = prompt(
    "What do you want to know about Daniel? Chose between firstName, LastName, age, job, and friends"
    );
    
    if (daniels[intersetedIn]) {
        console.log(daniels[intersetedIn]);
    } else {
        console.log(
            `Wrong request! Chose between firstName, LastName, age, job, and friends`
            );
        }
        
        daniels.location = "Romania";
        daniels["twitter"] = "@jonasschmedtman";
        console.log(daniels);
        
        console.log(
            `${daniels.firstName} has ${daniels.friends.length} friends and his best friend is ${daniels.friends[0]}`
            );
            
            const daniels = {
                firstName: "Daniel",
  lastName: "Botan",
  birthYear: 2002,
  job: "student",
  friends: ["Adi", "Alex", "Chivu"],
  hasDriversLicense: true,
  
  //   calcAge: function (birthYear) {
      //     return 2022 - birthYear;
      //   },
      
      //   calcAge: function () {
          //     // console.log(this);
          //     return 2022 - this.birthYear;
          //   },
          
          calcAge: function () {
              this.age = 2022 - this.birthYear;
              return 2022 - this.birthYear;
            },
            getSummary: function () {
                return `${this.firstName} is a ${this.calcAge()} year old ${
                    this.job
                }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's licence `;
            },
        };
        
        console.log(daniels.calcAge());
        console.log(daniels.age);
        
        // Challenge
        // 'Jonas is a 46 year old teacher. and he has a driver's licence'
        console.log(daniels.getSummary());
        
        // console.log(`Lifting weights repetition 1 🏋️`);
        // console.log(`Lifting weights repetition 2 🏋️`);
        // console.log(`Lifting weights repetition 3 🏋️`);
        // console.log(`Lifting weights repetition 4 🏋️`);
        // console.log(`Lifting weights repetition 5 🏋️`);
        // console.log(`Lifting weights repetition 6 🏋️`);
        // console.log(`Lifting weights repetition 7 🏋️`);
        // console.log(`Lifting weights repetition 8 🏋️`);
        // console.log(`Lifting weights repetition 9 🏋️`);
        // console.log(`Lifting weights repetition 10 🏋️`);
        
        //for loop runs while condition is true; if rep <= 10 it will run until it reaches 10
        // for (let rep = 1; rep <= 30; rep++) {
            //   console.log(`Lifting weights repetition ${rep} 🏋️`);
            // }
            
            const danielsArray = [
                "Daniel",
                "Botan",
                2002 - 2002,
                "student",
                ["Chivu", "Alex", "Adi"],
                true,
            ];
            
            const types = [];
            
            for (let i = 0; i <= danielsArray.length; i++) {
                console.log(danielsArray[i], typeof danielsArray[i]);
                
                //   types[i] = typeof danielsArray[i];
                types.push(typeof danielsArray[i]);
            }
            console.log(types);
            

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break statements
const danielsArray = [
  "Daniel",
  "Botan",
  2002 - 2002,
  "student",
  ["Chivu", "Alex", "Adi"],
  true,
];

console.log(`---ONLY STRING---`);
for (let i = 0; i <= danielsArray.length; i++) {
  if (typeof danielsArray[i] !== "string") continue;
  console.log(danielsArray[i], typeof danielsArray[i]);
}

console.log(`---BREAK WHIT STRING---`);
for (let i = 0; i <= danielsArray.length; i++) {
  if (typeof danielsArray[i] === "number") break;
  console.log(danielsArray[i], typeof danielsArray[i]);
}
const daniels = [
    "Daniel",
    "Botan",
    2022 - 2002,
    "student",
    ["Chivu", "Alex", "Adi"],
    true,
    false,
];

for (let i = daniels.length - 1; i >= 0; i--) {
  console.log(i, daniels[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`---- Starting exercise ${exercise}---- 🏋️‍♂️`);
    
    for (let rep = 1; rep < 6; rep++) {
    console.log(`Lifting weights repetition ${rep}🏋️`);
  }
}

// let rep = 1;
// while (rep <= 10) {
    //   console.log(`Lifting weights repetition ${rep}🏋️`);
    //   rep++;
    // }
    
    let dice = Math.trunc(Math.random() * 6) + 1;

    while (dice !== 6) {
        console.log(`You rolled a ${dice}`);
        dice = Math.trunc(Math.random() * 6) + 1;
        if (dice === 6) console.log(`Loop is about to end.`);
    }
    */
//---------------------------JavaScript Fundamentals Exercises – Part 2 📝---------------------------
/*
// LECTURE: Functions 
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} milion people and its capital city is ${capitalCity}`;
}

const descriptionFinland = describeCountry("Finland", 6, "Helsinki");
const descriptionRomania = describeCountry("Romania", 23, "Bucharest");
const descriptionBulgaria = describeCountry("Bulgaria", 11, "Sofia");

console.log(descriptionBulgaria, descriptionFinland, descriptionRomania);

// LECTURE: Function Declarations vs. Expressions
//Function Declaration ⬇️
function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const country1 = percentageOfWorld1(400);
const country2 = percentageOfWorld1(50);
const country3 = percentageOfWorld1(23);

console.log(country1, country2, country3);
//Function Expresion ⬇️

const worldPopulation = function (population) {
    return (population / 7900) * 100;
};

const country11 = worldPopulation(400);
const country22 = worldPopulation(50);
const country33 = worldPopulation(23);
console.log(country11, country22, country33);
// LECTURE: Arrow Functions

const percentageOfWorld3 = (population) => {
    return (population / 7900) * 100;
};

const RomaniaPopoulation = percentageOfWorld3(23);
const FrancePopoulation = percentageOfWorld3(232);
const HungaryPopoulation = percentageOfWorld3(100);

console.log(RomaniaPopoulation, FrancePopoulation, HungaryPopoulation);

//LECTURE: Functions Calling Other Functions

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const describePopulation = function (country, population) {
    const percentage = percentageOfWorld1(population);
    const description = `${country} has ${population} million
    people, which is about ${percentage}% of the world.`;
    console.log(description);
};

describePopulation("Portugal", 10);
describePopulation("China", 1441);
describePopulation("USA", 332);
const populations = [221, 100, 40, 533];
console.log(populations.length === 4);

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];

console.log(percentages);


const neighbours = ["Bulgaria", "Hungary", "Serbia", "Ukraine"];
neighbours.push("Utopia");
neighbours.pop(neighbours.length - 1);
console.log(neighbours);

if (neighbours.includes("Germany")) {
  console.log(`Yay you have Germany as a neighbour`);
} else {
  console.log(`Probably not a central European Country`);
}

neighbours[neighbours.indexOf("Hungary")] = `America`;
console.log(neighbours);

const myCountry = {
    country: "Romania",
    capital: "Bucharest",
    language: "Romanian",
    population: 27,
    neighbours: [""],
    
    describe: function () {
        console.log(
            `${this.country} has ${this.population} million
            ${this.language}-speaking people,
            ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`
            );
        },
        checkIsland: function () {
            this.island = this.neighbours.length === 0 ? true : false;
        },
    };
    
    myCountry.describe();
    myCountry.checkIsland();
    console.log(myCountry);
    
    // console.log(
        //   `${myCountry.country} has  ${myCountry.population} milion ${myCountry.language} speaking people, and ${myCountry.neighbours.length} neighbours,x and a capital called ${myCountry.capital}`
        // );
        
        for (let i = 1; i <= 50; i++) {
            console.log(`Voter number ${i} is curently voting 🎫`);
        }
        

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}
const populations = [10, 1441, 332, 83];
const percentages2 = [];

for (let i = 0; i < populations.length; i++) {
  const perc = percentageOfWorld1(populations[i]);
  percentages2.push(perc);
}
console.log(percentages2);
const listOfNeighbours = [
    ["Canada", "Mexico"],
    ["Spain"],
    ["Norway", "Sweden", "Russia"],
];
*/

//---------------------------JavaScript Fundamentals CODDING CHALLENGE 🥇– Part 2 ---------------------------
/*
  const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins}) vs (${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas}) vs (${avgDolphins})`);
    } else {
        console.log(`No one wins 😰`);
    }
};

checkWinner(scoreDolphins, scoreKoalas);
// Coding challenge #2

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(tips);
console.log(totals);

// Coding Challenge #3

const markMiller = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    },
};

const jhonSmith = {
  fullName: "Jhon Smith",
  mass: 9f2,
  height: 1.95,
  
  calcBMI: function () {
      this.bmi = this.mass / this.height ** 2;
      return this.bmi;
    },
};

markMiller.calcBMI();
jhonSmith.calcBMI();
console.log(markMiller.bmi, jhonSmith.bmi);

console.log(
    markMiller.bmi > jhonSmith.bmi
    ? `Mark bmi (${markMiller.bmi}) is higher than Jhon's (${jhonSmith.bmi})`
    : `Jhon bmi (${jhonSmith.bmi}) is higher than Mark (${markMiller.bmi})`
    );    
    const calcTip = function (bill) {
        return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
    };
    
    const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
    const tips = [];
    const totals = [];
    
    for (let i = 0; i < bills.length; i++) {
        const tip = calcTip(bills[i]);
        tips.push(tip);
        totals.push(tip + bills[i]);
    }
    
    console.log(bills);
    console.log(totals);
    console.log(tips);
    
    const calcAverage = function (arr) {
        let sum = 0;
  for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    console.log(sum);
    return sum / arr.length;
};

console.log(calcAverage([2, 3, 6, 3, 6, 1342, 24, 63]));
*/
