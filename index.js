const userData = [
  "David",
  "Bagrationi",
  30,
  ["philosophy", "history", "geometry"]
];

userData[userData.length] = "test";

const [name, surName] = userData;
// console.log(name, surName);

// console.log("Surname: ", userData[1]);

let key = "userName";
let year = "birthDate";

var userDataObj = {
  name: "David",
  surName: "Bagrationi",
  age: 30,
  interest: ["philosophy", "history", "geometry"],
  "eye color": "blue",
  [year]: 1997
};
userDataObj[key] = "DavidB";


var { age = 40 } = userDataObj;
const { userName1 = name, userSurName = surName } = userDataObj;

let newAge = age || 60;

let newAge1 = age ? age : 60;

console.log(userName1, userSurName, age, newAge, newAge1 );


// console.log("Surname: ", userDataObj.surName);
// console.log("Surname: ", userDataObj["surName"]);
// console.log(userDataObj.interest);

for (let i = 0; i < userDataObj.interest.length; i++) {
  const element = userDataObj.interest[i];
  console.log(element);
}

const car = {
  year: 1999,
  price: 10000,
  discount() {
    return 2024 - this.year > 20 ? 0.2 : 0.1;
  },
  discountedPrice() {
    console.log(this.price * (1 - this.discount()));
  }
};

// console.log(car.discount());

// car.discountedPrice();

const weight = 50;
const height = 165;

const sizes = {
  weight,
  height
};

console.log(Object.keys(sizes));
sizes.width = 10;
sizes.weight = 65;

for (const [key, value] of Object.entries(sizes)) {
  console.log(`${key.charAt(0).toUpperCase() + key.slice(1)} is ${value}`);
}

const word = "weight";
const wordArray = ["w", "e", "i", "g", "h", "t"];
wordArray[0] = wordArray[0].toUpperCase();
// console.log(word.charAt(0).toUpperCase() + word.slice(1));
// console.log(wordArray);
