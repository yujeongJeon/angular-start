declare namespace Order {
  interface OrderItem {
    menu: Product.Coffee;
    count: number;
    unitPrice: number;
  }

  interface QuantityById {
    productId: string;
    count: number;
  }

  interface History {
    orderList: OrderItem[];
    totalPrice: number;
    totalCount: number;
    payment: number;
    name: string;
    extraRequirement: string;
    orderAt: string;
    orderMonth: number;
  }
}
