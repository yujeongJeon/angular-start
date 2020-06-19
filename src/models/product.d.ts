declare namespace Product {
  interface Coffee {
    productId: string;
    title: string;
    description: string;
    price: number;
    isSale: boolean;
    salePrice: number;
    salePercent: number;
    image: any;
    isBest: boolean;
  }
}