import { OrderService } from "./order.service";

class Order{
  constructor(public address: string,
    public number: number,
    public optionAddress: string,
    public paymentOrder: string,
    public orderItems: OrderItem[] = [],
    public id: string){}
}

class OrderItem{
  constructor(public quantity: number, public menuId: string){}
}

export {Order, OrderItem}
