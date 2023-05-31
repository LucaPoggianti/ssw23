import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AjaxResponse } from 'rxjs/ajax';
import { Archive } from '../archive';
import { Book } from '../book';
import { ResultComponent } from './result/result.component';
import { DescriptionComponent } from './description/description.component';
import { LoanComponent } from './loan/loan.component';
import { RemovalComponent } from './removal/removal.component';
import { ReturnComponent } from './return/return.component';
import { AccessArchiveService } from '../access-archive.service';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css'],
  standalone: true,
  imports: [CommonModule, ResultComponent, DescriptionComponent, LoanComponent, RemovalComponent, ReturnComponent], 
  providers: [AccessArchiveService]
})

export class ResearchComponent implements OnInit {
  @Output() researchEvent = new EventEmitter<string>();
  statusRes: string = 'res-home';
  resResult: Array<Book> = [];

  constructor(private aas: AccessArchiveService) {}

  findBook() {
    let key: string = (document.getElementById('research') as HTMLInputElement).value.trim();
    if (!key) {
      this.resResult = [];
      return;
    }
    this.aas.getArchive().subscribe({
      next: (x: AjaxResponse<string>) => {
        let archive: Archive = new Archive(JSON.parse(x.response));
        this.resResult = archive.checkKey(key);
        if (this.resResult.length === 1) {
          this.statusRes = 'res-des';
        }
      },
      error: (err) => console.log(err.response)
    }); 
  }

  ngOnInit() {}
}