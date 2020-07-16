import { LocalStorageService } from './../../../persist-state/services/local-storage.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pw-detail',
  templateUrl: './pw-detail.component.html',
  styleUrls: ['./pw-detail.component.scss'],
})
export class PwDetailComponent implements OnInit {
  order$: Order.History;
  constructor(
    private activatedRoute: ActivatedRoute,
    private localService: LocalStorageService
  ) {}

  ngOnInit() {
    let orderIdx = this.activatedRoute.snapshot.paramMap.get('orderId');
    const orders: Order.History[] = this.localService.get('orders');
    this.order$ = orders[orderIdx];
    console.log(this.order$)
  }
}
