/*
Objects
Objects can be typed by declaring what the object should look like in the annotation.
Accessing a property that isn't defined or performing operations without keeping types in mind will throw errors!
*/


// const dog = {
//   name: '모찌',
//   breed: 'mixed',
//   age: 5
// }

// function printName(name: {name: string, breed: string, age: number}): void {
//   console.log(name.name, name.breed, name.age)
// }

let coordinate: {x: number, y: number} = {x: 34, y: 2}

function randomCoordinate(): {x: number, y: number} {
  return {x: Math.random(), y: Math.random()}
}

function printName(person: {first: string, last: string}): void {
  console.log(person.first)
  console.log(person.last)
}
printName({first: "Mick", last: "Jagger", age: 473})

const singer = {first: "Mick", last: "Jagger", age: 473, isPropertyNotUse: true}
printName(singer)


