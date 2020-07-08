import { PAYMENT_TEXT } from './../../consts';
import { lastElem } from './../../../../utils/util';
import { LocalStorageService } from './../../../persist-state/services/local-storage.service';
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-complete',
  templateUrl: './view-complete.component.html',
  styleUrls: ['./view-complete.component.scss']
})
export class ViewCompleteComponent {
  get latestOrder() {
    const orderList = this.localService.get('orders');
    return lastElem(orderList);
  }

  get payment() {
    const idx = this.latestOrder.payment;
    return PAYMENT_TEXT[idx];
  }

  goToHome(){
    this.router.navigate(['/'])
  }

  constructor(private localService:LocalStorageService, private router:Router) {}
}