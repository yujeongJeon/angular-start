import { OnInit } from '@angular/core';
import {
  Component,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewItemComponent {
  @Input() item?:Product.Coffee;
  isOpen: boolean = false;

  toggle(e) {
    e.preventDefault();
    this.isOpen = !this.isOpen;
  }

  onClick(e) {
    e.preventDefault();
    this.router.navigate([`menu/detail/${this.item.productId}`])
  }

  constructor(private router:Router) {
  }
}
