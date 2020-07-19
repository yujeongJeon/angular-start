export class OrderItem {
  menu: Product.Coffee;
  count: number = 1;

  constructor(item: Product.Coffee, count:number) {
    this.menu = item;
    this.count = count;
  }

  get unitPrice() {
    const flatPrice = this.menu.isSale ? this.menu.salePrice : this.menu.price;

    return flatPrice * this.count;
  }
}
