///filter out thing depending on true or false from function. filter removes false elements
const randomNumbers = [375, 200, 3.14, 7, 13, 852];

function lessThan250(element){
  if (element < 250) {
    return true
    } 
  else {
    return false
    }
}

const smallNumbers = randomNumbers.filter(lessThan250)

console.log(smallNumbers)