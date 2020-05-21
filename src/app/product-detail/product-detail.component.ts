import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../utils/products';
import { CartService } from '../cart.service';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})

export class ProductDetail implements OnInit {
  public product;

  constructor (
    private route: ActivatedRoute,
    private cartService: CartService) {
    
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const productId = params.get('productId')
      this.product = products.find(product => product.id === productId)
    })
  }

  addToCart (product) {
    this.cartService.addToCart(product);
    window.alert(`${product.name} 1잔을 주문 리스트에 추가하였습니다.`)
  }
}