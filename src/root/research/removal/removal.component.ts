import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { AjaxResponse } from 'rxjs/ajax';
import { AccessArchiveService } from '../../access-archive.service';
import { Book } from '../../book';
import { Archive } from '../../archive';


@Component({
  selector: 'app-removal',
  templateUrl: './removal.component.html',
  styleUrls: ['./removal.component.css'],
  standalone: true,
  imports: [CommonModule],
  providers: [AccessArchiveService] 
})

export class RemovalComponent implements OnInit {
  @Input() singleBook: Book;
  @Output() removalEvent = new EventEmitter<string>();

  constructor(private aas: AccessArchiveService) {}

  removeBook() {
    let id: string = this.singleBook.position; 
    this.aas.getArchive().subscribe({
      next: (x:AjaxResponse<any>) => {
        let bookList: Array<Book> = JSON.parse(x.response);
        let archive: Archive = new Archive(bookList);
        archive.removeBook(id);        
        let newArchive: string = JSON.stringify(archive.elenco);
        this.aas.saveArchive(newArchive).subscribe({
          next: (x) => {this.removalEvent.emit('home')},
          error: (err) => console.log(err.response)
        });              
      },
      error: (err) => console.log(err.response)

    })

  }

  ngOnInit() {}

}