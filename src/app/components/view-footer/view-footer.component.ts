import { fillObject } from './../../utils/util';
import { Router, RouterEvent } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-view-footer',
  templateUrl: './view-footer.component.html',
  styleUrls: ['./view-footer.component.scss'],
})
export class ViewFooterComponent  {
  active = {
    menu: 0,
    cart: 0,
    mycoffee: 0,
    order: 0
  };

  onClick(tag) {
    this.router.navigate([`${tag}`]);
  }

  constructor(private router: Router) {
    router.events.subscribe((e: RouterEvent) => {
      const currentUrl = window.location.pathname.replace(/^\/([^\/]*).*$/, '$1');
      fillObject(this.active, 0);
      this.active[currentUrl]=1;
    });
  }
}
