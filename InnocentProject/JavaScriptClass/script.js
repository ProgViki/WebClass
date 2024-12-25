console.log('I hope everyone is enjoying the JavaScript class in Geophia Academy.\nDo you ?') // line break
console.log('Days\tTopics\tExercises')
console.log('Day 1\t3\t5')
console.log('Day 2\t3\t5')
console.log('Day 3\t3\t5')
console.log('Day 4\t3\t5')
console.log('This is a backslash symbol (\\)') // To write a backslash
console.log('In every programming language it starts with "Hello, World!"')
console.log("In every programming language it starts with \\'Hello, World!\\'")
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')

let space = '';
let firstName = 'Victoria';
let lastName = 'Jane';
let country = 'United States';
let city = 'New York';
let age = 25;
let isMarried = true;
let job = 'Engineer';
let quote = 'I do not fear computers. I fear the lack of them - Isaac Asimov';
let quoteWithBackTick = `Procrastination is the thief of time`;

console.log(space);


// Different javascript data types
// Let's declare different data types

let firstNames = 'Asabeneh'      // string
let lastNames = 'Yetayeh'        // string
let countrys = 'Finland'         // string
let cities = 'Helsinki'           // string
let ages = 250                   // number, it is not my real age, do not worry about it
let jobs                         // undefined, because a value was not assigned

console.log(typeof 'Asabeneh')  // string
console.log(typeof firstName)   // string
console.log(typeof 10)          // number
console.log(typeof 3.14)        // number
console.log(typeof true)        // boolean
console.log(typeof false)       // boolean
console.log(typeof NaN)         // number
console.log(typeof job)         // undefined
console.log(typeof undefined)   // undefined
console.log(typeof null)        // object

let js = 'JavaScript'
console.log(js.length)         // 10
let firstNamess = 'Asabeneh'
console.log(firstNamess.length)  // 8


let string = 'JavaScript'
let firstLetter = string[0]

console.log(firstLetter)           // J

let secondLetter = string[1]       // a
let thirdLetter = string[2]
let lastLetter = string[9]

console.log(lastLetter)            // t

let lastIndex = string.length - 1

console.log(lastIndex)  // 9
console.log(string[lastIndex])    // t



let strings = 'JavaScript'

console.log(strings.toUpperCase())     // JAVASCRIPT

let firsName = 'Asabeneh'

console.log(firsName.toUpperCase())  // ASABENEH

let kountry = 'Finland'

console.log(kountry.toUpperCase())    // FINLAND

let firstLetters = string[0]

console.log(firstLetters)           // J

let secondLetters = string[1]       // a
let thirdLetters = string[2]
let lastLetters = string[9]

console.log(lastLetter)            // t

let lastIndexs = string.length - 1

console.log(lastIndex)  // 9
console.log(string[lastIndex])    // t


let Cars = ['toyota', 'volvo', 'bmw', 'honda', 'tesla', 'nissan', 'ford', 'chevrolet', 'jeep', 'subaru']

console.log(Cars[0])  // toyota
console.log(Cars.length)  // 10
console.log(Cars.indexOf('honda'))  // 3

