import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
  standalone: true,
})

export class TitleComponent implements OnInit {
  title: string = 'Gestione biblioteca';

  constructor() {}
  ngOnInit() {}
}
