import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css'],
  standalone: true,
  imports: [CommonModule, TitleComponent]
})

export class RootComponent implements OnInit {
  status: string = 'home';

  constructor() {}

  ngOnInit() {}

}