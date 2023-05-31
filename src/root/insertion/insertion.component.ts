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
    document.getElementById('insAlert').innerHTML = '';
    let aut: string = ((document.getElementById('author') as HTMLInputElement).value).trim();
    let tit: string = ((document.getElementById('title') as HTMLInputElement).value).trim();
    let pos: string = ((document.getElementById('position') as HTMLInputElement).value).trim();
    if (!aut || !tit || !pos) {
      document.getElementById('insAlert').innerHTML = ' Inserisci tutti i parametri!';
      return;
    }
    let newBook: Book = new Book(pos, aut, tit); 
    this.aas.getArchive().subscribe({
      next: (x: AjaxResponse<string>) => {
        let archive: Archive = new Archive(JSON.parse(x.response));
        archive.addBook(newBook);       
        let newArchive: string = JSON.stringify(archive.elenco);
        this.aas.saveArchive(newArchive).subscribe({
          next: () => this.insertionEvent.emit('home'),
          error: (err) => console.log(err.response)
        });
      },
      error: (err) => console.log(err.response)
    });
  }

  ngOnInit() {}
}