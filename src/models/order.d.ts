declare namespace Order {
  type OrderDetail = Product.Coffee & { count: number; unitPrice: number };

  interface History {
    orderList: OrderDetail[];
    totalPrice: number;
    totalCount: number;
    payment: number;
    name: string;
    extraRequirement: string;
    orderAt: string;
    orderMonth: number;
  }
}
