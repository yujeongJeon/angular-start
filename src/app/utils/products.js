import americano from '../assets/americano.png';
import latte from '../assets/latte.png';
import caramel from '../assets/caramel.png';
import mocha from '../assets/mocha.png';
import banilla from '../assets/banilla.png';

export const products = [
  {
    id: `PRD001`,
    img: americano,
    name: `아메리카노`,
    price: 3000,
    description: `최고급 콜룸비아산 원두로 내린 카페만의 시그니처 아메리카노입니다.`
  },
  {
    id: `PRD002`,
    img: latte,
    name: `카페라떼`,
    price: 3500,
    description: `최고급 콜룸비아산 원두로 내린 카페만의 시그니처 아메리카노에 부드러운 우유를 넣은 라떼입니다.`
  },
  {
    id: `PRD003`,
    img: caramel,
    name: `카라멜마끼아또`,
    price: 4500,
    description: `달콤한 카라멜과 우유 거품의 부드러운 맛이 에스프레소와 어우러진 커피입니다.`
  },
  {
    id: `PRD004`,
    img: banilla,
    name: `바닐라 카페라떼`,
    price: 4500,
    description: `풍미가 진한 에스프레소와 고소한 우유에 달콤한 바닐라 시럽이 어우러진 커피입니다.`
  },
  {
    id: `PRD005`,
    img: mocha,
    name: `카페모카`,
    price: 5500,
    description: `초콜릿과 생크림의 감미로운 맛이 에스프레소와 어우러진 커피입니다.`
  }
]