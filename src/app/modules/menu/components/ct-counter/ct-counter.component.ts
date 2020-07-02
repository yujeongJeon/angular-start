import { OrderService } from './../../../shared/services/order.service';
import { Component, Input, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: 'app-ct-counter',
  templateUrl: './ct-counter.component.html',
  styleUrls: ['./ct-counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CtCounterComponent{
  @Input() coffee;

  constructor(private orderService:OrderService){}

  increase(){
    this.orderService.addCoffee(this.coffee);
  }

  decrease(){
    this.orderService.deleteCoffee(this.coffee);
  }

  get count () {
    const orderedCoffee = this.orderService.getCoffee(this.coffee.productId);

    return orderedCoffee ? orderedCoffee.count : 0;
  }
}