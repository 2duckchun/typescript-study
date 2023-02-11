type Class = {
  name: string,
  place: string,
  member: {
    leader?: string,
    headcount: number,
  }
}

const interviewStudy: Class = {
  name: "면접토의",
  place: "강남 허슬버슬",
  member: {
    leader: "장희수",
    headcount: 7
  }
} 

const JSStudy: Class = {
  name: "면접토의",
  place: "강남 허슬버슬",
  member: {
    headcount: 7
  }
} 

function getMember(studyClass: Class): number {
  return studyClass.member.headcount
}

function makeStudyClass(name: string, place: string, headcount: number, leader?: string, ): Class {
  console.log("스터디 클래스를 생성합니다.")
  return {
    name: name,
    place: place,
    member: {
      leader: leader,
      headcount: headcount
    }
  }
}

const a = getMember(interviewStudy)
const b = makeStudyClass("JS스터디", "강남 허슬버슬", 7)

console.log(a)
console.log(b)


// readonly 제어자
// 객체에서 readonly가 붙으면 재할당할 수 없음
// 객체나 배열에 추가는 가능하나, 재할당이 안됨. 즉 원시값처럼 새롭게 값을 들이미는것은 힘듬.
type User = {
  readonly id: number;
  username: string;
}

const user: User = {
  id: 12345,
  username: "2DC",
}
user.id = 1390481

// intersection type
// type을 결합하는 것을 말함.
// & 기호로 결합함.

type Cat = {
  numLives: number
}
type Dog = {
  breed: string;
}
type CatDog = Cat & Dog & {
  age: number;
}

const CatDog: CatDog = {
  numLives: 9,
  breed: "Mixed",
  age: 5
}