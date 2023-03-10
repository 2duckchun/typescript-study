# Enums
- enumerated type의 준말.
- **열거형**이라고도 부름.
- 컴퓨터 프로그래밍에서 열거형은 요소, 멤버라 불리는 명명된 값의 집합을 이루는 자료형.

## Enums의 역할
- const들의 셋트를 정의할 수 있음.
- const는 숫자형이나 문자열 자료를 받을 수 있음.
- enums를 사용할 때 몇가지 옵션도 사용할 수 있음.

## Enums 숫자형
```ts
// PENDING SHIPPED DELIVERED

enum OrderStatus {
  PENDING = 200,
  SHIPPED,
  DELIVERED = 50,
  RETURNED,
}

const order1 = OrderStatus.DELIVERED
const order2 = OrderStatus.RETURNED
```

## Enums 문자열
```ts
enum ArrowKeys {
  UP = "UP",
  DOWN = "DOWN",
  LEFT = "LEFT",
  RIGHT = "RIGHT",
  ERROR = 400
}

ArrowKeys.UP
ArrowKeys.DOWN
ArrowKeys.LEFT
ArrowKeys.RIGHT
```

## 주의점
- enums은 컴파일되면 추가적인 코드로 나타나게 된다.
