/*
Type Alias
instead of writing out object types in an annotation, we can declare them separately in a type alias,
which is simply the desired shape of the object.

This allows us to make our code more readable and even reuse the types elsewhere in our code.
*/

type Point = {
  x: number;
  y: number;
}

let xy_coordinate_annot: { x: number, y: number } = { x: 50, y: 90 }
let xy_coordinate_alias: Point = {x: 20, y: 90}

function doubleCoordinate_annot(xy: {x: number, y: number}): {
  x: number, 
  y: number
} {
  return {x: xy.x * 2, y: xy.y * 2}
}

function doubleCoordinate_alias(xy: Point): Point {
  return {x: xy.x * 2, y: xy.y * 2}
}



type Age = number;
type Name = string;

type Person = {
  name: string,
  age: number
}

function printPerson(age: Age, name: Name): Person {
  return {
    name: name,
    age: age
  }
}