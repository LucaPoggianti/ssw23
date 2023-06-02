import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-exit',
  templateUrl: './exit.component.html',
  styleUrls: ['./exit.component.css'],
  standalone: true
})

export class ExitComponent implements OnInit {
  @Output() exitEvent = new EventEmitter<string>();

  constructor() {}
  ngOnInit() {}
}