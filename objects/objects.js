let adri = {
  firstName: 'Adrien',
  lastName: 'Hegedus',
  age: 39,
  
  getName: function() {
    return `${this.firstName} ${this.lastName}`;
  },
  
  /*
   * Arrow functions don't have their own this, they will refer to the outer
   * scope
   * */
  getLastName: () => {
    return adri.lastName;
  },
  
  getFirstName: () => {
    return adri.firstName;
  },
};

console.log(adri.getName());
console.log(adri.getFirstName());
console.log(adri.getLastName());

/*
 * Copy objects
 * */

let adri2 = {};

for (const adriKey in adri) {
  adri2[adriKey] = adri[adriKey];
}

console.log(adri2);

let adri3 = {};

let viewPermission = {canView: true};
let writePermission = {canEdit: true};

Object.assign(adri3, adri2, viewPermission, writePermission);

console.log(adri3);

let adri4 = {...adri3};

console.log(adri4);

let id = Symbol('id');

/*
 * To get the string representation we need to use the Symbol.description or
 *  Symbol.toString() methods.
 * */
console.log(id);
console.log(id.description);
console.log(id.toString());

adri[id] = 1;

let balu = {
  firstName: 'Balazs',
  lastName: 'Farkas',
  age: 35,
  [id]: 1,
};

/*
 * Creates or read a global Symbol, which is the same though the application.
 * */

let id2 = Symbol.for('id2');
let id2Again = Symbol.for('id2');

console.log(id2 === id2Again);

/*
 * To get the name for the global Symbol we can use
 * */

console.log(Symbol.keyFor(id2));

console.log(Reflect.ownKeys(adri));
console.log(Object.getOwnPropertySymbols(adri));

function User(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  
  this.sayHi = function() {
    console.log(`${firstName} ${lastName}, how is ${age} years old says hi!`);
  };
}

let adrien = new User('Adri', 'Hegedus', 39);

console.log(adrien.age);

adrien.sayHi();

let c = {};

function A() {
  return c;
}

function B() {
  return c;
}

let a = new A;
let b = new B;

console.log(a === b);

function Calculator() {
  
  this.read = function() {
    this.a = Number(window.prompt('Gimme a number', '0'));
    this.b = Number(window.prompt('Gimme a second number', '0'));
    console.log(a);
    console.log(b);
  };
  
  this.sum = function() {
    return this.a + this.b;
  };
  
  this.mul = function() {
    return this.a * this.b;
  };
}

let calculator = new Calculator();

// calculator.read();

// alert(`Sum: ${calculator.sum()}`);
// alert(`Sum: ${calculator.mul()}`);

function Accumulator(number) {
  
  this.value = number;
  
  this.read = function() {
    this.value += Number(prompt('Gimme a number', '0'));
  };
  
}

let acc = new Accumulator(1);
console.log(acc.value);
// acc.read()
// acc.read();
console.log(acc.value);

function CreateFamilyMember(firstName, lastName, age, relationToYou) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.relationToYou = relationToYou;
}

const mother = new CreateFamilyMember('Katalin', 'Farkas', 56, 'mother');
const father = new CreateFamilyMember('Laszlo', 'Farkas', 60, 'father');

console.log(father.age + mother.age);

let adminUser = {
  admin() {
    console.log('I\'m an admin');
  },
};

let guestUser = {};

adminUser.admin?.();
guestUser.admin?.();

let adriObjectToPrimitiveConversion = {
  name: 'Adri',
  savings: 50,
  
  [Symbol.toPrimitive](hint) {
    console.log(`hint: ${hint}`);
    
    return hint === 'string' ? `name: ${this.name}` : this.savings;
  },
};

// alert(adriObjectToPrimitiveConversion);
console.log(+adriObjectToPrimitiveConversion);
console.log(adriObjectToPrimitiveConversion + 500);

function createCop(country, pop) {
  return {
    country,
    pop,
    
    toString: function() {
      return `The country was ${country}`;
    },
    
    valueOf: function() {
      return pop;
    }
  };
  
}

hungaryPop = createCop('hun', 10);
czPop = createCop('cz', 11);
skPop = createCop('sk', 9);

// alert(hungaryPop);

console.log(hungaryPop+czPop+skPop);


function addNumbers() {
  let num1 = +prompt(`Gimme a number`);
  let num2 = +prompt(`Gimme a second number`);
  alert(num1+num2)
}

// addNumbers();

console.log(Math.round(6.35*10)/10);


function readNumber() {
  let num;
 do {
   num = prompt('Enter a number', 0);
 } while (!isFinite(num));
 
 if (num === null || num === '') return null;
 
 return +num;
 
}

// readNumber();

function minMaxRandom(min, max) {
  console.log(min + Math.random() * (max - min));
}

minMaxRandom(1,5);
minMaxRandom(1,4);
minMaxRandom(3,4);

function minMaxRandomInteger(min, max) {
  console.log(Math.round(min + Math.random() * (max - min)));
}

minMaxRandomInteger(1,5);
minMaxRandomInteger(4,10);
minMaxRandomInteger(2,5);
minMaxRandomInteger(2,56);
minMaxRandomInteger(20,5555);
minMaxRandomInteger(1,15);
