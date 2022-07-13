let numOne = 3;
let numTwo = 3;

console.log(numOne == numTwo); // true

let js = "JavaScript";
let py = "JavaScript";

console.log(js == py); //true

let lightOn = true;
let lightOff = false;

console.log(lightOn == lightOff); // false

let nums = [1, 2, 3];
nums[0] = 10;

console.log(nums); // [10, 2, 3]

let num = [1, 2, 3];
let numbers = num;

console.log(num == numbers); // true

let userOne = {
  name: "Asabeneh",
  role: "teaching",
  country: "Finland"
};

let userTwo = userOne;

console.log(userOne == userTwo); // true

const PI = Math.PI;

console.log(PI); // 3.141592653589793

// Округление до ближайшего числа
// если выше .5 вверх, если меньше 0.5 вниз

console.log(Math.round(PI)); // 3, чтобы округлить значения до ближайшего числа

console.log(Math.round(9.81)); // 10

console.log(Math.floor(PI)); // 3 округление вниз

console.log(Math.ceil(PI)); // 4 округление вверх

console.log(Math.min(-5, 3, 20, 4, 5, 10)); // -5, возвращает минимальное значение

console.log(Math.max(-5, 3, 20, 4, 5, 10)); // 20, возвращает максимальное значение

const randNum = Math.random(); // создает случайное число от 0 до 0,999999
console.log(randNum);

// Давайте создадим случайное число от 0 до 10

const num1 = Math.floor(Math.random() * 11); // создает случайное число от 0 до 10
console.log(num1);

// Абсолютное значение
console.log(Math.abs(-10)); //10

// Квадратный корень
console.log(Math.sqrt(100)); // 10

console.log(Math.sqrt(2)); //1.4142135623730951

// Мощность
console.log(Math.pow(3, 2)); // 9

console.log(Math.E); // 2.718

// Логарифм
// Возвращает натуральный логарифм основания E из x, Math.log(x)
console.log(Math.log(2)); // 0.6931471805599453
console.log(Math.log(10)); // 2.302585092994046

// Тригонометрия
Math.sin(0);
Math.sin(60);

Math.cos(0);
Math.cos(60);

let randomNum = Math.random();
let newRand = Math.floor(randomNum*11);
console.log (newRand);

let space = " ";
let firstName = "Asabeneh";
let lastName = "Yetayeh";
let country = "Finland";
let city = "Helsinki";
let language = "JavaScript";
let job = "teacher";
let fullName = firstName + space + lastName; // конкатенация, объединение двух строк.
console.log(fullName);
let age = 250;
let personInfoOne = fullName + ". I am " + age + ". I live in " + country; // ES5

console.log(personInfoOne);
const paragraph =
  "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too.";
console.log(paragraph);

console.log(
    "I hope every one is enjoying the 30 Days Of JavaScript challenge.\nDo you ?"
  ); // line break
  console.log("Days\tTopics\tExercises");
  console.log("Day 1\t3\t5");
  console.log("Day 2\t3\t5");
  console.log("Day 3\t3\t5");
  console.log("Day 4\t3\t5");
  console.log("This is a back slash  symbol (\\)"); // To write a back slash
  console.log('In every programming language it starts with "Hello, World!"');
  console.log("In every programming language it starts with 'Hello, World!'");
  console.log("The saying 'Seeing is Believing' is't correct in 2020");

  console.log(`The sum of 2 and 3 is 5`); // статическая запись данных
let a = 2;
let b = 3;
console.log(`The sum of ${a} and ${b} is ${a + b}`); // ввод данных динамически

let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${country}.`; //ES6 - Метод строковой интерполяции
let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I teach ${language}.`;
console.log(personInfoTwo);
console.log(personInfoThree);