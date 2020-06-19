import americano from '../../assets/images/americano.png';
import latte from '../../assets/images/latte.png';
import caramel from '../../assets/images/caramel.png';
import mocha from '../../assets/images/mocha.png';
import banilla from '../../assets/images/banilla.png';

/**
 * interface Coffee {
    productId: string;
    title: string;
    description: string;
    price: number;
    isSale: boolean;
    salePrice: number;
    salePercent: number;
    image: any;
  }
 */
export const products = [
  {
    productId: `PRD001`,
    image: americano,
    title: `아메리카노`,
    price: 3000,
    description: `최고급 콜룸비아산 원두로 내린 카페만의 시그니처 아메리카노입니다.`,
    isSale: true,
    salePrice: 2400,
    salePercent: 20,
    isBest: true
  },
  {
    productId: `PRD002`,
    image: latte,
    title: `카페라떼`,
    price: 3500,
    description: `최고급 콜룸비아산 원두로 내린 카페만의 시그니처 아메리카노에 부드러운 우유를 넣은 라떼입니다.`,
    isSale: false,
    salePrice: 0,
    salePercent: 0,
    isBest: true
  },
  {
    productId: `PRD003`,
    image: caramel,
    title: `카라멜마끼아또`,
    price: 4500,
    description: `달콤한 카라멜과 우유 거품의 부드러운 맛이 에스프레소와 어우러진 커피입니다.`,
    isSale: false,
    salePrice: 0,
    salePercent: 0,
    isBest: false
  },
  {
    productId: `PRD004`,
    image: banilla,
    title: `바닐라 카페라떼`,
    price: 4500,
    description: `풍미가 진한 에스프레소와 고소한 우유에 달콤한 바닐라 시럽이 어우러진 커피입니다.`,
    isSale: false,
    salePrice: 0,
    salePercent: 0,
    isBest: false
  },
  {
    productId: `PRD005`,
    image: mocha,
    title: `카페모카`,
    price: 5500,
    description: `초콜릿과 생크림의 감미로운 맛이 에스프레소와 어우러진 커피입니다.`,
    isSale: false,
    salePrice: 0,
    salePercent: 0,
    isBest: true
  }
]