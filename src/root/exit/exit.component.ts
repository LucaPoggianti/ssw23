import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exit',
  templateUrl: './exit.component.html',
  styleUrls: ['./exit.component.css'],
  standalone: true,
  imports: [CommonModule]
})

export class ExitComponent implements OnInit {
  @Output() exitEvent = new EventEmitter<string>();

  emitStatus(statusName:string) {
    this.exitEvent.emit(statusName);
  }

  constructor() {}

  ngOnInit() {}

}