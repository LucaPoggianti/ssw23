import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AjaxResponse } from 'rxjs/ajax';
import { Archive } from '../archive';
import { Book } from '../book';
import { AccessArchiveService } from '../access-archive.service';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css'],
  standalone: true,
  imports: [CommonModule],
  providers: [AccessArchiveService]
})

export class ResearchComponent implements OnInit {
  resResult: Array<Book> = [];
  status: string = 'res-home';
  singleBook: Book;
  loan: boolean = false;

  constructor(private aas: AccessArchiveService) {}

  findBook() {
    // 
  }

  ngOnInit() {}

}