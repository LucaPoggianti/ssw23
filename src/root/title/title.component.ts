import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
  standalone: true,
})

export class TitleComponent implements OnInit {
  @Input() title: string = 'Titolo default';

  constructor() {}
  ngOnInit() {}
}