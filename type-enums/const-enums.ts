const enum OrderStat {
  PENDING,
  SHIPPED,
  DELIVERED,
  RETURNED
}

const order3 = {
  orderNumber: 12390123,
  status: OrderStat.PENDING
}

const order4 = {
  orderNumber: 12390123,
  status: OrderStat.RETURNED
}
