function triple(value: number | string) {
  if (typeof value === "string") {
    return value.repeat(3)
  } // 타입스크립트는 코드를 해석해 문자열인지 알게 됨
  return value * 3 // 타입스크립트는 코드를 해석해 이게 문자열일리 없다고 알게 됨
}

const el = document.getElementById("idk") // HTMLElement or null
if(el){
  el // HTMLElement
} else {
  el // null
}

const printLetters = (word?: string) => {
  word // string | undefined
  if (word) {
    for(let char of word) {
      console.log(char)
    }
  } else {
    word // string | undefined  (빈 문자열도 falsy임)
    console.log("You did not pass in a word!")
  }
}