import { Router } from '@angular/router';
import { Component } from "@angular/core";

@Component({
  selector: 'app-view-failure',
  templateUrl: './view-failure.component.html',
  styleUrls: ['./view-failure.component.scss']
})
export class ViewFailureComponent {
  goToHome(){
    this.router.navigate(['/'])
  }
  constructor(private router:Router){}
}