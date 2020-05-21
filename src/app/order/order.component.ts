import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})

export class OrderComponent implements OnInit {
  items:Array<any>;
  count:Number;
  totalPrice:Number;
  form;
  message:string = "";

  constructor (
    private cartService:CartService,
    private formBuilder:FormBuilder) {
      this.form = this.formBuilder.group({
        account: '',
        password: '',
        name: ''
      })
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    const { data, count, totalPrice } = this.cartService.getItems();
    this.items = data;
    this.count = count;
    this.totalPrice = totalPrice;
  }

  onSubmit (requestForm) {
    this.message = `${requestForm.account}계정으로 ${requestForm.name}님의 주문이 접수되었습니다.`;
    this.form.reset();
  }
}