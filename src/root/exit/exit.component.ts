import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-exit',
  templateUrl: './exit.component.html',
  styleUrls: ['./exit.component.css'],
  standalone: true
})

export class ExitComponent {
  @Output() exitEvent = new EventEmitter<string>();
}
