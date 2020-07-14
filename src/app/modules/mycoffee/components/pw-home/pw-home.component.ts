import { LocalStorageService } from './../../../persist-state/services/local-storage.service';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-pw-home',
  templateUrl: './pw-home.component.html',
  styleUrls: ['./pw-home.component.scss']
})
export class PwHomeComponent implements OnInit {
  activeTab?:string='order';

  toggleTab(tabId){
    this.activeTab = tabId;
  }

  get orders () {
    return this.localService.get('orders');
  }

  constructor(private localService:LocalStorageService) {}

  ngOnInit(){
    console.log(this.orders)
  }
}