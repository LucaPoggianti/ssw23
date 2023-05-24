import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AjaxResponse } from 'rxjs/ajax';
import { Archive } from '../archive';
import { Book } from '../book';
import { ResultComponent } from './result/result.component';
import { DescriptionComponent } from './description/description.component';
import { AccessArchiveService } from '../access-archive.service';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css'],
  standalone: true,
  imports: [CommonModule, ResultComponent, DescriptionComponent],
  providers: [AccessArchiveService]
})

export class ResearchComponent implements OnInit {
  status: string = 'res-home';
  resResult: Array<Book> = [];
  singleBook: Book;
  loan: boolean = false;

  constructor(private aas: AccessArchiveService) {}

  findBook() {
    let input: string = (document.getElementById('research') as HTMLInputElement).value;
    if ((input.length === 0) || (input === ' ')) {
      this.resResult = [];
      return;
    }
    let key = input.toLocaleLowerCase().trim();
    this.aas.getArchive().subscribe({
      next: (x: AjaxResponse<any>) => {
        let bookList: Array<Book> = JSON.parse(x.response);
        let archive: Archive = new Archive(bookList);
        this.resResult = archive.checkKey(key);
        if (this.resResult.length === 1) {
          this.singleBook = this.resResult[0];
          if (this.resResult[0].nominative !== undefined) {
            this.loan = true;
          }
          this.status = 'res-des';
        }
      },
      error: (err) => console.log(err.response)
    }); 
  }

  ngOnInit() {}

}