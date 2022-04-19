/* 
                     __ 
                  | /   
                  |(___ 
                  )    )
                _/  __/ 
                        
        __                       
       /  |           /          
      (___| ___         ___      
      |\   |___) \  )| |___)|   )
      | \  |__    \/ | |__  |/\/ 

*/

// Instructions: Follow the prompts and make sure to check your answer in the console. Some of the methods I am requiring of you to use, we may not have done in class. That's on purpose, if you need assistance look back in lessons, and of course Google. :) 

// =================================================
//                     VARIABLES
// =================================================

// 1.) Declare a variable

let firstV = 22

// 2.) Change the value of this variable

firstV= 23

// 3.) Change the data type of this variable

firstV  = 'White'

// 4.) Create another variable and the one from above to concatenate

let secondV = 200

concatV = firstV + secondV
// console.log(concatV)
// console.log(typeof(concatV) )

// 5.) Use any of the variables above or create new ones and print using string interpolation

let new5 = 'hello'

let new05 = 22

// console.log(` The new variable is ${new5 + secondV}  using interpolation. Another variable is ${new05}`)

// console.log(firstV +secondV)
// ================ Variable Names =================
/* 
    • Case-sentive! Try it out! :O
    • Can contain letters, digits, or the symbols $ and _
    • Can't start with 0-9
    • Can't use reserved keywords in JS such as var, function, return, etc. 
*/

// =================================================
//                      STRINGS
// =================================================

// Look up the following string methods!

// Using charAt(), print the letter i in Sabrina

let herName = 'Sabrina'
console.log(herName.charAt(4)) // return the 4 index of sabrina ... remember index start with 0

// Define Unicode in a comment, and get the Unicode using charCodeAt() of the third character in Teddy

// Definition : Unicode, formally the Unicode Standard, is an information technology standard for the consistent encoding, representation, and handling of text expressed in most of the world's writing systems.

// console.log("Teddy".charCodeAt(1)) // return the value in UTF-format

// Using fromCharCode() - make it readable for us :). You'll see!

// console.log(String.fromCharCode(189, 43, 190, 61))

// console.log(String.fromCharCode(72, 101, 108, 108, 111)) // turn the utf-16 numbers into letter or whatever the number represent


// Take your first and last name and concat()

// console.log("Jahun ".concat('patty'))

// console.log(firstArray = [1, 2 , 3, 4, 5])

// Create a string and make it return true using startsWith()

x='pluck'
//  console.log(x.startsWith("pl",2)) // need to go back 

// Now use any variable with endsWith() and return false

const myString = 'Jermaine'

// console.log(myString.endswith("o"))

// Finish the following sentence. Use includes() and return true.
const ozgur = 'Once upon a time Ozgur looked up at the Moon, ' + 'and gazed for a really long time.'

console.log(ozgur.includes('gazed'))

// Help! I'm looking for my cow! Using indexOf() help Josh find his cow. What's the index of cow?
let joshHadALittleLambOopsCow = "Josh lives in a farm. Josh was overwhelmed with coding. Josh is stressed out. Josh fed the chickens this morning. He watered his plants. He took his cow Betsy on a walk. Josh went home without Betsy. Josh went to bed that night, and realized he went home alone."

console.log(joshHadALittleLambOopsCow.indexOf('cow')) // the index of cow is 149

// Oh no! The alien doppelgangers are here. Let's use our laserbeam lastIndexOf() to shoot down the last alien named Vanessa in the String Universe.


const vanessa = "I am the Alpha Vanessa. I am the Omega Vanessa. We do not come in peace."

  console.log(vanessa.lastIndexOf("Vanessa")) 

  console.log(vanessa.replace('Vanessa',''))

  const remove = vanessa.slice(39,46) //

  console.log(remove)
 console.log(vanessa.replace(remove, ''))
 console.log(vanessa)


// Can we use length for strings? I don't know, you tell me.
const noWeCantTeo = "but did you try it out though?"

// console.log(noWeCantTeo.length)  // the string is 30

// If only it was this easy to replace() my ex. Totally not joking, LOL. JK
const replaceGokuWithVegeta = "For my DBZ fans, we all know Goku is the best!"

// console.log(replaceGokuWithVegeta.replace('Goku', 'Vegeta')) // it returns a new string with the replacement but it dosnt change the original string. thats why it let us do it to the 'const' variable declaration


// Josh has been forgetful lately. Let's help Josh by using search(), and find their right 'wifey'. 
const joshIsLookingForWifey = "WIFEY 1, wifey 2, WiFeY 3, Wifey 4"

// console.log(joshIsLookingForWifey.search("Wifey 4"))

// I guess we can share this pizza sentence. Use slice() to return the other half of pizza.

const pizzaSentence = "pizza, other half of pizza"
console.log(pizzaSentence.slice(8))

// Now using the pizza sentence, return only pizza (before the comma)

console.log(pizzaSentence.slice(0,5))

// Okay, but who decided to go to this expensive restaurant? Yaz, Poornima, and Leshawn decided to split() the bill. Return an array separating Yaz, Poornima, and Leshawn.
const splitTheBill = "Yaz, Poornima, and Leshawn"

console.log(splitTheBill)
let newSplit = splitTheBill.replace('and ', '')
console.log(newSplit)

console.log(newSplit.split(",")) // itll seperate the string where you tell it... eg. split at every space or at every comma

// OH NO! The alien invaders from earlier were so against bill splitting so they decided to split() Yaz, Poornima, and Leshawn into pieces. Using splitTheBill, return an array separating all three by characters.

console.log(splitTheBill.split(' '))

// Use this toLowerCase()

const angry = "LOWER YOUR VOICE DOWN IF YOU AIN'T PAYING MY BILLS."

console.log(angry.toLowerCase())
// Tuan was angry today. Create a string with words that Tuan would yell out. Now lowercase it, to tell Tuan to chill out. 

const angryJay = 'I DONT LIKE IT'

// toUpperCase()

const jahlunSaidToPutSomeRespectToHisName = "jahlun"

console.log(jahlunSaidToPutSomeRespectToHisName.toUpperCase())

// substring()
// on the chopping block...

// Returns "ell"
const basicGreeting = "Hello World"
console.log(basicGreeting.substring(1, 4))

// Returns "JavaScript"
const ohReally = "JavaScript Substring"

console.log(ohReally.substring(0, 10))

// Returns aol.com
const aslDays = "xXteoWuzHereXx@aol.com"

console.log(aslDays.substring(aslDays.indexOf('a')))

// trim()

// If only I can use this for my love handles...
// Create a variable with a string value with some extra loving on both sides.

let varTrim = '   This   '
console.log(varTrim)
 console.log(varTrim.trim())

// =================================================
//                     BOOLEAN
// =================================================

// I just want my dreams to come true. 
// With the powers of logical and comparison operators, PRINT TRUE please!
// Replace the underscores.

const a = 5;
const b = 10;
const c = 15;
const d = "Keke"

//  console.log(a < b)
//  console.log(c > b)
//  console.log(d === d)
//  console.log(d != a)
//  console.log(a < 15)
//  console.log(a + b === c)
//  console.log(c > b > a != d) // 
 

// =================================================
//                     LOOPS
// =================================================

// Ken has a headache today and he said the room has been spinning like crazy. Make Ken's room spin 10 times using FOR LOOP. Make him print a sentence.

// for (let i =0; i < 11; i++) {
//   console.log('This is my',i,'spin')
// }


// Harry said that was so mean of Teo to do Ken dirty like that. Make Teo's vision spin 20 times FOR LOOP.

// for (let i = 0;i < 20;i++ ){
  // console.log("i have a headache")
// }

// But wait! Lisa said, while Teo is spinning 20 times. Let's make him say "I'm sorry". Print I'm sorry 20 times using a WHILE loop.

let n = 0

while (n<20) {
  n++;
  console.log('Im sorry!!')
 }

// For the next three, look for the syntax of FOR IN and FOR OF loop. Very easy to understand syntax, and very clean :) 
//////// NEVER FINISHED 

const  array1 = ['a', 'b', 'c']
//console.log(property)


// for (const property elements of array1){
//   console.log(`${property}: ${object[property]}`)

// }     //// need to fixe this

///////// NEVER FINISHED ABOVE

// To The Left! To The Left! Everything I want in the console to the left. Print thing1, thing2, thing 3 using (FOR IN LOOP)
const whateverQueenBeySaid = {
  thing1: 'shoes',
  thing2: 'clotes',
  thing3: 'gaming console'
}

for (const property in whateverQueenBeySaid){
  console.log(`${property}`)
}

// Using (FOR IN LOOP), print the indexes of the array.
const lana = ['l', 'a', 'n', 'a']

for (const index in lana){
  console.log(`${index}`)
}

// USE (FOR OF LOOP)!
const tia = ['teo', 'the', 'syntax', 'of', 'this', 'is', 'cleaner']

for (const element of tia){
  console.log(element)
}

// Look into forEach() loop, it accepts a callback aka a function inside a function.
// Swathi said don't forget each person. No person left behind! Use forEach() to iterate over the array perscholas. Inside the function, create a variable with the string "PS". Print their name in the console concatenated with the variable. 
const perscholas = ['Amira', 'Arely', 'Jonathan']

perscholas.forEach(function(elements){
  const Andrew = 'PS'
  console.log(elements + Andrew)
})

// =================================================
//                     ARRAYS
// =================================================

// Look up the following: Make a note of what each one of these methods do
// push()

// Definition : The push() method adds one or more elements to the end of an array and returns the new length of the array.

// pop()

// Definition : The pop() method removes the last element from an array and returns that element. This method changes the length of the array.

// unshift()

// Definition : The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

// shift()

// Definition : The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.

// concat()

// Definition : The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

// splice()

// Definition : The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. To access part of an array without modifying it, see slice().

// slice()

// Definition : The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

// sort()

// Definition : The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.The time and space complexity of the sort cannot be guaranteed as it depends on the implementation.

// includes()

// Definitions : The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

// indexOf()

// Definition : The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

// length

// Definition : The length property of an object which is an instance of type Array sets or returns the number of elements in that array. The value is an unsigned, 32-bit integer that is always numerically greater than the highest index in the array.

//////////////////////////////////////////////////////

const fruits = ['apple', 'banana', 'orange']

// Print banana
console.log(fruits[1])

// Let's turn it up a notch. I won't tell you what array methods to use. 
// Join all the elements of the array into a string separated by a space.

console.log(fruits.join(" "))

// Remove orange
// console.log(fruits.replace('orange', ''))

// Add strawberry, kiwi, and grapes at the end

// Remove apple

fruits.shift()
console.log(fruits)
// Add mango at the beginning of the array

fruits.unshift('mango')
 
console.log(fruits)

// Add lemon, and grapefruit between mango and banana
fruits.splice(1, 0, 'lemon', 'grapefruit')

console.log (fruits)

// Remove banana and strawberry
fruits.splice(fruits.indexOf('banana'), 2)
console.log(fruits)


// Create a new array called exoticFruits. Add 3 exotic fruits inside of this array. Create a new variable and assign it with the value of concatinating fruits array and exoticFruits array.

const exoticFruits = ['guava', 'lychee', 'durian']
const fruitBasket = fruits.concat(exoticFruits)
console.log(fruitBasket)

// Print the last two exotic fruits without altering the newly concatenated array.

console.log(fruitBasket.slice(-2))

// Monalissa said she needs help re-organizing her items in alphabetical order.
const monalissaIsMessy = ["pencil", "paper", "notebook", "computer"]
monalissaIsMessy.sort()
console.log(monalissaIsMessy)
// Kevin accidentally stepped into the mirror world and needs help reversing his words.
const mirrorMirrorOnTheWall = ["all", "them", "of", "greatest", "the", "is", "who"]

const reversed = mirrorMirrorOnTheWall.reverse()
console.log(mirrorMirrorOnTheWall)  


// ===== HIGHER ORDER METHODS =====
// Rafael said he''s trying to stop cursing so much, and he wants to start with his text messages. Help him write code to eliminate the badword in his sentences. Must return a string sentence. Must use filter(). :) 
const RafaelNoBadWords = "I am so tired of this badword food. I do not want this badword badword food."
// const arrayRafael = RafaelNoBadWords.split(" ")
// // console.log(arrayRafael)
// console.log(arrayRafael.filter(arrayRafael => arrayRafael.indexOf('badword')).join(" "))
// console.log(RafaelNoBadWords.filter('badword')
console.log()
//////////////

function gub (x){
  console.log(`i love number ${x}`)

}
console.log(gub(34))

//////////////

// Man math is hard. Let's make our computer do it for us. Use reduce() to find the total of the numbers in numbersToAddUp
const numbersToAddUp = [99, 5677, 232, 84, 2, 231]

const sumNumbers = numbersToAddUp.reduce((previousValue, currentValue) => previousValue + currentValue)

console.log(sumNumbers)

// ===== SPREAD OPERATOR ===== 

// Create a variable and assign a value of a copied array using the spread operator
const newArray = numbersToAddUp

console.log(...newArray)

// Create two arrays with any elements and connect both of them using the spread operator. Save the connected arrays into a new variable.
const arr1 = ['one', 'two']
const arr2 = ['three', 'four']
const arr3 = [...arr1, ...arr2]
console.log(arr3)

// Using the variable with the newly connected arrays, use spread operator to add something at the end.

// arr3 = [ ... arr3, 'five'] 
console.log(arr3)

// Using the variable with the newly connected arrays, use spread operator to add something at the beginning.

// arr3 = ['six', ...arr3]
console.log(arr3)
// ===== ACCESS =====

// Donut Shopping
const donutShop =[
  [
    'firecracker',
    'chocolate',
    'blueberry'
  ],
  [
    ['orange', 'applecrumble'],
    ['cream', 'peanutbutter', 'coconut']
  ],
  [
    [
      [
        [
          ['flavor of the week']
        ], ['ihatethis']
      ]
    ]
  ]
]

// Anthony wants applecrumble. Print please!

console.log('Here \s your ' +donutShop[1][0][1])
// Tosi wants ihatethis. :) Print!


// =================================================
//                     IF/ELSE
// =================================================

// Teo is a person. I would hope so...
// Check if Teo is a person. If true, print 'Teo is a person!' if not then print 'Teo is not a person!'


// If Teo is a person, check to see if he is a male or a female. If male, print 'You got it right!' if not then print 'Wrong. Teo is going to remove you from the class.'.
const teo = 'person'
const gender = "male"
const isHungry = "he hun"
 if (teo=== 'person'){ 
   console.log("teo is a perospn")
   if (gender==='male'){
     console.log('you got it right')

   }
   else { 
     console.log('you got it wrong, he male')
   }
 } else{
   console.log('teo is not a person')
 }

// If male, check to see if Teo is hungry. If Teo is 'hungry' then print 'Let's buy Teo some tacos!'. If Teo is 'not hungry' then print 'He doesn't need to eat.'. Anything else, print 'If Teo is not hungry, am I hungry?'

let gend = 'male'
let appe = 'hungry'

if (gend = 'male'){
  if (appe === 'hungry'){
    console.log('Lets buy teo some tacos')
  } else if (appe === 'not hungry'){
    console.log('He dosent need to eat')
  } else {console.log('If Teo is not hungry, am i hungry?')}
}

// Create a if/else ternary to check if Gustavo is the coolest. If coolest, print 'You got that right!', else print 'James wants to argue. He says he's the best!'
 let gustavo = 'coolest'
gustavo === 'coolest' ? console.log('You go that right') : console.log ('James wants to argue. He said hes the best.')

// =================================================
//                     FUNCTIONS
// =================================================

// Don't forget to call your functions :)

// Create a function called sayGreeting and PRINT 'Hello, ma'amsir!'

function sayGreeting(){
  console.log('Hello')
}
sayGreeting()
// Create a function that takes a string as a parameter. PRINT 'This is my (STRING)'. Please replace the (STRING) with the parameter. Don't play with me haha.
let thatString = 'House'
function printString (myStuff){
  console.log(`This is my ${myStuff}`)
}
printString('House')

// Create a function called add that takes in three number parameters. Create 3 variables and assign numerical values to them. Invoke your add() and pass in those three variables as arguments.
let xo = Math.floor(Math.random()*10)
let y = Math.floor(Math.random()*10)
let z = Math.floor(Math.random()*10)

function add (x,y,z){
  return x+y+z
}
add(xo,y,z)
console.log(z)

// Create a function called fightClub() that accepts a name parameter.  If the name:
// 'Teo' RETURN '1st rule: You do not talk about Fight Club.'
// 'Manara' RETURN '2nd rule: YOU DO NOT TALK ABOUT FIGHT CLUB.'
// 'Liv' RETURN '3rd rule: If someone yells "Stop!", goes limp, taps out, the fight is over.'
// 'Devin' RETURN '4th rule: Only two guys to a fight.'
// Anything else, RETURN 'No shirts
let theName = 'Liv'
function fightClub (gup) {
    switch(gup){
      case 'Teo':
        console.log('1st rule: YOU do not talk about Fight Club.')
        break
      case 'Manara' : 
        console.log('2nd rule: YOU DO NOT TALK ABOUT FIGHT CLUB');
        break;
      case 'Liv' : 
      console.log('3rd rule: If someone yells "Stop!", goes limp, taps out, the fight is over')
      break;
      case 'Devin' :
        console.log('4th rule: Only two guys to a fight.')
        break;
        default:
          console.log('No Shirts')

    }
}
fightClub(theName)
// Create a function called hello() that prints 'Hello'. Return an anonymous function inside hello() and have it print 'Goodbye'. Invoke your hello function in some way to see Hello and Goodbye in the console.

function hello (){
  console.log ('Hello')
  return function () {
    console.log('goodye')
  }
}
hello()()

// Create a function expression with your first name as the variable and then print your first and last name
let first = 'Jahlun'
let last = 'Patterson'
function bigName (first, last) {
  console.log(`${first} ${last}`)
}
// Create an arrow function that accepts a number and have it return that number doubled
const foo = (x) => {return x * 2}

// =================================================
//                     OBJECTS
// =================================================

// Create an object and call it human. Add a name, age, and location property. Give the properties values.

const human = {
}
Object.defineProperties(human, {
  Age:{
  value:34}
, name1 : {value:'Jahlun',}, 
location1 : {value: 'Dallas'}})

// Access the name using dot notation
console.log(human.name1)

// Access the age using square brackets
// console.log(human[Age])
// console.log(Object.defineProperties(human))
// Object.defineProperties(human, Age)

// Use object destructuring to access location

// ACCESS Granted
const bulbasaur = {
  name: 'Bulbasaur',
  abilities: [
    {
      ability: 'overgrow'
    },
    {
      ability: 'chlorophyll'
    }
  ],
  moves: ['razor-wind', 'swords-dance', 'cut'],
  sound: function () {
    console.log('Bulbahhhh!!!!!')
  }
}

// Print overgrow
console.log(bulbasaur.abilities[0])

// Print cut
console.log(bulbasaur.moves[2])

// Print Bulbahhhh!!!!!
bulbasaur.sound()

// Add a height of 7 to bulbasaur using the dot notation. (Don't change bulbasaur object manually)
Object.defineProperties(bulbasaur, {
  height: {value: 7}
})


// Add a property called order and assign it a value of 1 using the square brackets. (Don't change bulbasaur object manually)




// Print an array that contains every single properties in bulbasaur
console.log(bulbasaur)

// Print every single properties one by one in the console
console.log(bulbasaur.name)
console.log(bulbasaur.abilities)
console.log(bulbasaur.sound)
console.log(bulbasaur.moves)

// Print an array that contains every single values in bulbasaur

let arrayEnd= [bulbasaur.name, bulbasaur.abilities, bulbasaur.moves}