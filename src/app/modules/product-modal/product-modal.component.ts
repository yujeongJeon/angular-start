import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.scss']
})

export class ProductModal {
  @Input() product;

  public modal:Boolean = false;

  public toggle () :void {
    this.modal = !this.modal;
  }
}