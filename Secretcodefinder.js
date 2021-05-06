/*.map() works in a similar manner to .forEach()— the major difference is that 
.map() returns a new array.
*/

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
function firstLetter(element) {
  let a = element
  return a[0]}

const secretMessage =  animals.map(firstLetter)
console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

function div(element) {
  let y = element
      y = y/100
  return y
}

const smallNumbers = bigNumbers.map(div)

console.log(smallNumbers)
// end of example