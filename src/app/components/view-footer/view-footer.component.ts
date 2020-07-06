import { Router, RouterEvent } from '@angular/router';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-view-footer',
  templateUrl: './view-footer.component.html',
  styleUrls: ['./view-footer.component.scss']
})
export class ViewFooterComponent implements OnInit {
  url;

  onClick(tag){
    this.router.navigate([`${tag}`]);
  }

  constructor(private router:Router) {
    router.events.subscribe((e: RouterEvent) => {
     this.url = e.url;
   });
  }

  ngOnInit() {
    this.url = this.router.url;
  }
}