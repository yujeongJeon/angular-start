import { MenuService } from './../../services/menu.service';
import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: 'app-pw-home',
  templateUrl: './pw-home.component.html',
  styleUrls: ['./pw-home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [MenuService]
})
export class PwHomeComponent implements OnInit {
  _products?:Product.Coffee[]

  ngOnInit () {
    this._products = this.menuService.getProducts();
  }

  setSearchResult(result){
    this._products = result;
  }

  constructor(private menuService:MenuService) {}
}