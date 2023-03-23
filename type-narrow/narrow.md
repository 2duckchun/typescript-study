# narrowing
## Typeof Guards
- typeof Type Guards involve simply doing a type check before working with a value.
- Since unions allow multiple types for a value, we can first check what came through before working with it.
```ts
function triple(value: number | string) {
  if (typeof value === "string") {
    return value.repeat(3)
  } // 타입스크립트는 코드를 해석해 문자열인지 알게 됨
  return value * 3 // 타입스크립트는 코드를 해석해 이게 문자열일리 없다고 알게 됨
}
```

## Truthiness Guards
- Truthiness Type Guards involve checking a value for being truthy or falsy before working with it.
- This is helpful in avoiding errors when values might be null or undefined.
```ts
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
```