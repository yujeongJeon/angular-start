import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-ct-counter',
  templateUrl: './ct-counter.component.html',
  styleUrls: ['./ct-counter.component.scss']
})
export class CtCounterComponent{
  @Input() count:number;

  @Output() increase = new EventEmitter<void>();
  @Output() decrease = new EventEmitter<void>();
}