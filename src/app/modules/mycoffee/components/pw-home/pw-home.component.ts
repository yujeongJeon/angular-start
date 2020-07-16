import { Router } from '@angular/router';
import { LocalStorageService } from './../../../persist-state/services/local-storage.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pw-home',
  templateUrl: './pw-home.component.html',
  styleUrls: ['./pw-home.component.scss'],
})
export class PwHomeComponent {
  activeTab?: string = 'order';

  toggleTab(tabId) {
    this.activeTab = tabId;
  }

  gotoDetail(index) {
    this.router.navigate([`mycoffee/order/detail/${index}`]);
  }

  get orders() {
    return this.localService.get('orders');
  }

  constructor(
    private localService: LocalStorageService,
    private router: Router
  ) {}
}
