import { PAYMENT_TEXT } from './../../consts';
import { firstElem } from './../../../../utils/util';
import { LocalStorageService } from './../../../persist-state/services/local-storage.service';
import { Component } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-complete',
  templateUrl: './view-complete.component.html',
  styleUrls: ['./view-complete.component.scss']
})
export class ViewCompleteComponent {
  get latestOrder() {
    const orders = this.localService.get('orders');
    return firstElem(orders);
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