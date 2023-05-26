import { Component, OnInit, EventEmitter, Output } from '@angular/core'; 
import { AjaxResponse } from 'rxjs/ajax';
import { Book } from '../book';
import { Archive } from '../archive';
import { AccessArchiveService } from '../access-archive.service';

@Component({
  selector: 'app-insertion',
  templateUrl: './insertion.component.html',
  styleUrls: ['./insertion.component.css'],
  standalone: true,
  providers: [AccessArchiveService]
})

export class InsertionComponent implements OnInit {
  @Output() insertionEvent = new EventEmitter<string>();

  constructor(private aas: AccessArchiveService) {}

  insertBook() {
    let aut: string = (document.getElementById('author') as HTMLInputElement).value;
    let tit: string = (document.getElementById('title') as HTMLInputElement).value;
    let pos: string = (document.getElementById('position') as HTMLInputElement).value;
    let newBook: Book = new Book(pos, aut, tit, undefined);    
    this.aas.getArchive().subscribe({
      next: (x: AjaxResponse<any>) => {
        let bookList: Array<Book> = JSON.parse(x.response);
        let archive: Archive = new Archive(bookList);
        archive.addBook(newBook);       
        let newArchive: string = JSON.stringify(archive.elenco);
        this.aas.saveArchive(newArchive).subscribe({
          next: (x) => {this.insertionEvent.emit('home')},
          error: (err) => console.log(err.response)
        });
      },
      error: (err) => console.log(err.response)
    }); 
  }

  ngOnInit() {}

}