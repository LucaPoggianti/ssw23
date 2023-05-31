import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../../book';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css'],
  standalone: true,
  imports: [CommonModule]
})

export class DescriptionComponent implements OnInit {
  @Input() singleBook: Book;

  constructor() {}
  ngOnInit() {}
}