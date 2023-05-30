import { Component, Input } from '@angular/core';
import { Book } from '../../book';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
  standalone: true
})

export class ResultComponent {
  @Input() resResult: Array<Book>;
}
