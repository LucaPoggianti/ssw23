import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../../book';
import { Archive } from '../../archive';
import { AjaxResponse } from 'rxjs/ajax';
import { AccessArchiveService } from '../../access-archive.service'; 

@Component({
  selector: 'app-return',
  templateUrl: './return.component.html',
  styleUrls: ['./return.component.css'],
  standalone: true,
  providers: [AccessArchiveService] 
})

export class ReturnComponent implements OnInit {
  @Input() singleBook: Book;
  @Output() returnEvent = new EventEmitter<string>();

  constructor(private aas: AccessArchiveService) {}

  returnLoan() {
    let id: string = this.singleBook.position;
    this.aas.getArchive().subscribe({
      next: (x:AjaxResponse<string>) => {
        let archive: Archive = new Archive(JSON.parse(x.response));
        archive.changeNominative(id);             
        let newArchive: string = JSON.stringify(archive.elenco);
        this.aas.saveArchive(newArchive).subscribe({
          next: () => {this.returnEvent.emit('home')},
          error: (err) => console.log(err.response)
        });              
      },
      error: (err) => console.log(err.response)
    });
  }
  
  ngOnInit(){}
}