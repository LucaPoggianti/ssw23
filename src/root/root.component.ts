import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';
import { InsertionComponent } from './insertion/insertion.component';
import { ResearchComponent } from './research/research.component';
import { ExitComponent } from './exit/exit.component';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css'],
  standalone: true,
  imports: [CommonModule, TitleComponent, InsertionComponent, ResearchComponent, ExitComponent]
})

export class RootComponent implements OnInit {
  status: string = 'home';

  changeStatus(statusName:string) {
    this.status = statusName;
  }
  
  constructor() {}
  ngOnInit() {}
}