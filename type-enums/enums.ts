/*
Enums
Enums allow us to define a set of named constants.
We can give these constants numeric or string values.

There's quite a few options when it comes to enums!
*/

// PENDING SHIPPED DELIVERED

enum OrderStatus {
  PENDING = 200,
  SHIPPED,
  DELIVERED = 50,
  RETURNED,
}

const order1 = OrderStatus.DELIVERED
const order2 = OrderStatus.RETURNED

function isDelivered(status: OrderStatus) {
  if (status === OrderStatus.DELIVERED) {
    console.log(`${status}는 잘 되고 있구먼유`) 
  } else {
    console.log(`이건 ${OrderStatus.DELIVERED}가 아니라 ${status}구먼유`)
  }
}
isDelivered(order1)
isDelivered(order2)

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

// enums은 컴파일되면 추가적인 코드로 나타나게 된다.
