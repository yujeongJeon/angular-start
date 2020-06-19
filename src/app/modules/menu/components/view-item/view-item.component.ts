import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.scss']
})
export class ViewItemComponent {
  @Input() item?:Product.Coffee;
}