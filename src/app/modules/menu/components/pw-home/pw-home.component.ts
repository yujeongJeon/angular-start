import { Component, OnInit } from "@angular/core";
import { products } from '../../../../utils/products';

@Component({
  selector: 'app-pw-home',
  templateUrl: './pw-home.component.html',
  styleUrls: ['./pw-home.component.scss']
})
export class PwHomeComponent implements OnInit {
  _products?:Product.Coffee[]

  ngOnInit () {
    this._products = products;

    console.log(this._products);
  }
}