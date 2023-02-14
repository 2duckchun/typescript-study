interface Point {
  x: number,
  y: number,
}

const pt: Point = {x: 29, y: 29}

interface Person {
  readonly id: number,
  first: string,
  last: string,
  nickname?: string,
  sayHi: () => string
  // sayHi(): string
}

const thomas: Person = {first: 'Thomas', last: 'Hardy', nickname: 'Tom', id: 2121, sayHi: () => "Hello"}

thomas.first = "123"
// thomas.id = 123

interface Product {
  name: string,
  price: number,
  // applyDiscount(discount: number): number
  applyDiscount: (discount: number) => number
}
// 메서드 타입을 정의할때는 중괄호를 사용하지 않는다.

const shoes: Product = {
  name: 'Blue Suede Shoes',
  price: 100,
  place: 'adidas',
  applyDiscount(discount: number) {
    const newPrice = this.price * ( 1 - discount )
    this.price = newPrice
    return this.price
  }
}

interface Product {
  place: string
}


/*
Types vs interfaces

Types

type Person = {
  name: string
}

type Person = {
  age: number
} // Error! TS complains about duplicate types

const person: Person = {
  name: 'Jerry',
  age: 42
} // Error! Age didn't get added to Person type


Interfaces

interface Person {
  name: string
}
interface Person {
  age: number
}

const person: Person = {
  name: 'Jerry',
  age: 42
} // Perfectly okay - Person has name & age

다른 곳에 있는 파일에 작업한 인터페이스가 있거나
인터페이스가 제3자 라이브러리에 있는 경우에
무언가를 추가하고 싶을 때 사용함
(전체를 덮어쓰기 하거나 삭제하는 것을 원치 않고 프로퍼티를 추가할 때 이렇게 할 수 있음)

*/

interface Dog {
  name: string,
  age: number
}

interface Dog {
  breed: string,
  bark() : string
}

const dongdong: Dog = {
  name: 'dongdong',
  age: 4,
  breed: 'mixed',
  bark() {
    return "wal!"
  }
}

interface ServiceDog extends Dog {
  job: "마약탐지견" | "폭발물탐지견" | "안내견"
}

const 깜구: ServiceDog = {
  name: '깜구',
  age: 5,
  breed: 'lab',
  bark() {
    return 'wal'
  },
  job: '안내견'
}

interface Person3 {
  name: string
}

interface Employee {
  readonly id: number,
  email: string
}

interface Engineer extends Person3, Employee {
  level: [number, "시니어" | "주니어"]
  language: string[]
}

const Toby: Engineer = {
  id : 1248,
  name: 'Toby',
  email: "abc@def.com",
  level: [4, "주니어"],
  language: ['영어', "한국어"]
}

/* 
타입 얼라이스와 인터페이스의 차이
- 인터페이스는 객체타입만 표시할 수 있음.
- 타입 얼라이스는 객체 외의 다른 타입도 표시할 수 있음.

- 인터페이스는 이미 생성한 인터페이스에 내용을 추가할 수 있음.
- 타입 얼라이스는 생성한 얼라이스에 내용 추가 불가.

- 인터페이스는 extends 가능
- 타입 얼라이스는 extends 불가 ( 교차 사용 해야함 )

 ** 객체 형태의 묘사에 있어서는 인터페이스가 아~ 주 유용함.
*/