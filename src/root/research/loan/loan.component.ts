import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../book';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css'],
  standalone: true
})

export class LoanComponent implements OnInit {
  @Input() singleBook: Book;

  constructor() {}

  ngOnInit() {}

}