import { Component } from "@angular/core";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pw-detail',
  templateUrl: './pw-detail.component.html',
  styleUrls: ['./pw-detail.component.scss']
})
export class PwDetailComponent {
  productId;

  constructor(private route:ActivatedRoute){
    this.productId = this.route.snapshot.params.productId;
  }
}