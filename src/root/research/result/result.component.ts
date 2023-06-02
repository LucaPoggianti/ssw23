import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../book';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
  standalone: true
})

export class ResultComponent implements OnInit {
  @Input() resResult: Array<Book>;

  constructor() {}
  ngOnInit(){}
}