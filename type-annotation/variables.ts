// Type Annotation
// let myVar: type = value
// type 부분은 소문자로만 작성해야 함. (대문자나 기타 등등 X)

// string annotation
let movieTitle: string = 'Avatar'
movieTitle = 'Forest Gump'
movieTitle = 300 // 할당된 값이 문자열이 아니라 오류가 감지됨
movieTitle.toUpperCase()
movieTitle.keys() // keys() 메서드가 string type에는 없는 것이라 오류가 감지됨

// number annotation
let numCatlives: number = 9
numCatlives += 1
numCatlives = "zero" // 할당된 값이 number type가 아니라 오류가 감지됨

// boolean annotation
let isRight: boolean = true
isRight = false
isRight = "true" // 할당된 값이 boolean type이 아니라 오류가 감지됨


/* 
하지만 타입추론이 있어 타입 어노테이션은 잘 사용하지 않음.
*/

// Type Inference
// Type Inference refers to the Typescript compiler's ability to infer types from certain values in your code.
// Typescript can remember a value's type even if you didn't provide a type annotation, and it will enforce that type moving forward.


let tvShow = "1박2일"
tvShow = "런닝맨"
tvShow = false // tvShow가 처음 초기화될 때 문자열로 초기화되어 boolean을 할당하면 오류가 감지됨


let isboolean = true // boolean 변수
let isFunny = false
isFunny = true
isFunny = isboolean // boolean 변수를 할당해서 오류가 감지되지 않음

// any
// 'any' is an escape hatch. It turns off type checking for this variable so you can do your thing.
// NOTE : it sort of defeats the purpose of TS and types, so use it sparingly.

let thing: any = "hello"
thing = 1
thing = false
thing = []
thing = () => {}
thing.toUpperCase()

const movies = ["Arrival", "The things", "Aliens", "Forest Gump"]
let foundMovie: string;
for (let movie of movies) {
  if (movie === "Forest Gump") {
    foundMovie = "Forest Gump"
  }
}