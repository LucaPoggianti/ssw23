import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';
import { ExitComponent } from './exit/exit.component';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css'],
  standalone: true,
  imports: [CommonModule, TitleComponent, ExitComponent]
})

export class RootComponent implements OnInit {
  status: string = 'home';

  changeStatus(statusName:string) {
    this.status = statusName;
  }

  constructor() {}

  ngOnInit() {}

}