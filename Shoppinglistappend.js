//non-mutating functions tp arrays. these don't chaange the array. it is preserved
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
groceryList.shift()
console.log(groceryList)

groceryList.unshift("popcorn")
console.log(groceryList)


let friendList = [groceryList[1], groceryList[2], groceryList[3]]

console.log(groceryList.slice(1, 4))
console.log(groceryList)
console.log(friendList)

const pastaIndex = groceryList.indexOf('pasta')
console.log(pastaIndex)
/////end of example//////