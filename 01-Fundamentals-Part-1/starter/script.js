/*JS FUNDAMENTALS PART 1 ---- PRACTICE
let js = "amazing";
console.log(40 + 8 + 23 - 10);
console.log("Daniel");

let firstName = "Nicoleta";
console.log(firstName);
console.log(firstName);
console.log(firstName);

let myFirstJob = "None";
let myCurrentJob = "Student";

let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Jonas");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 2002;
console.log(year);
console.log(typeof year);

console.log(typeof null);
let age = 30;
age = 31;
//Operators

const birthYear = 2002;
const now = 2037;
const ageDaniel = now - 1991;
const ageSarah = now - 2020;
console.log(ageDaniel, ageSarah);
console.log(ageDaniel * 2, ageDaniel / 10, 2 ** 3);

const firstName = "Daniel";
const lastName = "Botan";
console.log(firstName + " " + lastName);

//Assigment operators
let x = 10 + 5;
x += 10; // x = x + 10
x *= 4; // x = x * 4
x++; // x = x + 1
console.log(x);

console.log(ageDaniel > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2019);

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(averageAge);
console.log(ageJonas, ageSarah);

//Template literals ✅
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
"I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

const age = 15;
//If Else statements ✅
if (age >= 18) {
  console.log(`Sarah can start driving license 👍`);
} else {
  const yearsleft = 18 - age;
  console.log(
    `Sarah can't start her driving license 😰 wait ${yearsleft} years`
    );
  }
  
  const birtYear = 2012;
  let century;
  
  if (birtYear <= 2000) {
    century = 20;
  } else {
    century = 21;
  }
  console.log(century);
  // Type conversion
  const inputYear = "1991";
  console.log(Number(inputYear), inputYear);
  console.log(inputYear + 18);
  
console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);
// Type coercion
console.log("I am " + 23 + " Years old");
console.log(`I am ` + 23 + ` Years old`);
console.log("23" - "10" - 3);
console.log("23" + "10" + 3);

let n = "1" + 1;
n = n - 1;
console.log(n);

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Daniel"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 0;
if (money) {
  console.log(`Don't spend it all!`);
} else {
  console.log(`You should get a job!`);
}

let height;

if (height) {
  console.log(`Yey high is defined`);
} else {
  console.log(`Height is undefined!`);
}

const age = 18;
if (age === 18) console.log(`You just become an adult`);


const favorite = Number(prompt(`What's your favorite number`));
console.log(typeof favorite);

if (favorite === 23) {
  console.log("Cool! 23 is an amazing number!");
} else if (favorite === 7) {
  console.log(`7 is also a cool number`);
} else {
  console.log(`Number is not 23 neither `);
}

if (favorite !== 23) console.log(`Why not 23`);

const hasDriversLicence = true; // A
const hasGoodVision = true; //B
console.log(hasDriversLicence && hasGoodVision);
console.log(hasDriversLicence || hasGoodVision);
console.log(!hasDriversLicence);

// if (hasDriversLicence && hasGoodVision) {
  //   console.log(`Sarah is able to drive`);
  // } else {
    //   console.log(`Someone else should drive...`);
    // }
    
    const isTired = true; // C
    console.log(hasDriversLicence && hasGoodVision && isTired);
    
if (hasDriversLicence && hasGoodVision && !isTired) {
  console.log(`Sarah is able to drive`);
} else {
  console.log(`Someone else should drive...`);
}

const day = "friday";

switch (day) {
  case "monday": // day === 'monday'
  console.log(`Plan course structure`);
  console.log(`Go to coding meetup`);
  break;
  case "tuesday":
    console.log("prepare theory videos");
    break;
    case "wednesday":
      break;
      case "thursday":
        console.log(`Wite code examples`);
        case "friday":
          console.log(`record videos`);
          break;
          case "saturday":
            case "sunday":
              console.log(`Enjoy the weekend`);
              break;
              default:
                console.log(`Not a valid day!`);
              }

              if (day === 'monday'){
                console.log(``);
              } else if {
                day === 'tuesday'
              }
              
              
              // expresions
              3 + 4;
1991;

if (23 > 10) {
  const str = "23 is greater than 10";
  console.log(str);
}

console.log(`I'm ${2037 - 1991} years old`);
const age = 18;
// age >= 18
//   ? console.log(`I like to drink wine 🎉`)
//   : console.log(`I like to drink water`);

// const drink = age >= 18 ? "wine" : "water";
// console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);
*/

/* ------------------------------- CODDING CHALLENGE 🤖 -------------------------------
 Mark and John are trying to compare their BMI (Body Mass Index), which is
 calculated using the formula:
 BMI = mass / height ** 2 = mass / (height * height) (mass in kg
  and height in meter).
  
  Your tasks:
  1. Store Mark's and John's mass and height in variables
  2. Calculate both their BMIs using the formula (you can even implement both
    versions)
    3. Create a Boolean variable 'markHigherBMI' containing information about
    whether Mark has a higher BMI than John.
    
    Test data:
    § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
    m tall.
    § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
    m tall.
    
    let markWeight = 78;
    let markHeight = 1.69;
    
    let jhonWeight = 92;
    let jhonHight = 1.95;
    
    let markBMI = markWeight / markHeight ** 2;
    let jhonBMI = jhonWeight / jhonHight ** 2;
    console.log(markBMI, jhonBMI);
    
    let markHigherBMI = markBMI > jhonBMI;
    console.log(markHigherBMI);
    
    if (markBMI > jhonBMI) {
      console.log(`Mark's BMI ${markBMI} is higher than John's!`);
    } else {
      console.log(`Jhon BMI ${jhonBMI} is higher than Mark's!`);
    }
    
    // const dolphinsAverage = (96 + 108 + 89) / 3;
    // const koalasAverage = (88 + 91 + 110) / 3;
    
    // if (dolphinsAverage > koalasAverage) {
      //   console.log(`Dolphins win!`);
      // } else if (koalasAverage > dolphinsAverage) {
        //   console.log(`Koalas win!`);
        // } else if (dolphinsAverage === koalasAverage) {
//   console.log(`Both win the trophy!`);
// }

// BONUS 1
const dolphinsAverage = (97 + 112 + 101) / 3;
const koalasAverage = (109 + 95 + 123) / 3;

if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
  console.log(`Dolphins win!`);
} else if (koalasAverage > dolphinsAverage && koalasAverage >= 100) {
  console.log(`Koalas win!`);
} else if (dolphinsAverage === koalasAverage) {
  console.log(`Both win the trophy!`);
}
//Tip calculator challenge
let bill = 275;
let tip = bill <= 300 && bill >= 50 ? (bill * 0.15) / 100 : (bill * 0.2) / 15;
console.log(tip);

console.log(
  `The bill was ${bill} and the tip was ${tip} and the total value is ${
    bill + tip
  }`
  );
  */

/* ------------------------------- JS ASSIGMENTS FOR PART 1 -------------------------------
 
// 1. Values and Variables ----- Done
const country = "Romania";
const continent = "Europe";
let population = 27;

console.log(country, continent, population);

// 2. Data Types ----- Done

let isRomaniaIsland = false;
let language;

console.log(typeof isRomaniaIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// 3. let, const, var ----- Done

language = "Romanian";
console.log(language);

// 4. Basic Operators ----- Done

let halfPopulation = population / 2;
console.log(halfPopulation);
population++;
console.log(population);

const finland = 6;
const comparePopulation = population > finland;
console.log(comparePopulation);
const averageCountryPopulation = 33;
const comparePopulationAverage = population > averageCountryPopulation;
console.log(comparePopulationAverage);
const description =
  "Portugal is in Europe and its 11 milions people speak portuguese";

//Template literals exercise ✅
const descriptionTemplate = `${country} is in ${continent} whit a ${population} milion population and they speak ${language} `;
console.log(descriptionTemplate);
if (population > 33) {
  console.log(`${country} population is above average`);
} else {
  console.log(`${country} population is under average`);
}

const numNeighbours = Number(
  prompt(`How many neighbour countries does your contry have?`)
  );
  
  if (numNeighbours === 1) {
    console.log(`Only 1 border!`);
  } else if (numNeighbours > 1) {
    console.log(`more than 1 border`);
  } else {
    console.log(`No borders`);
  }
  const country = "Romania";
  const continent = "Europe";
const language = "Romanian";
let population = 27;
const isIsland = false;

if (language === "Romanian" && population < 50 && !isIsland) {
  console.log(`You should live in romania`);
} else {
  console.log(`Portugal does not meet your criteria`);
}

let language = "spanish";

switch (language) {
  case `chinise`:
    case `mandarin`:
      console.log(`Most number of native speakers`);
      break;
      case `spanish`:
        console.log(`2nd place is number of native speakers!`);
        break;
        case `english`:
          console.log(`3rd place`);
          break;
          case `hindi`:
            console.log(`Number 4`);
            break;
            case `arabic`:
              console.log(`5th most spoken language`);
              break;
              default:
                console.log(`anotehr language`);
              }
              
              const country = "Romania";
const population = 47;

console.log(
  `${country} population is ${population < 33 ? "bellow" : "above"} average`
  );
  */
