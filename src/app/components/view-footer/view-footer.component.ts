import { Router } from '@angular/router';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-view-footer',
  templateUrl: './view-footer.component.html',
  styleUrls: ['./view-footer.component.scss']
})
export class ViewFooterComponent implements OnInit {
  url;
  constructor(private router:Router) {}

  ngOnInit() {
    this.url = this.router.url;
  }
}