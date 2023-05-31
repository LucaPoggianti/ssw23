import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Book } from '../../book';
import { Archive } from '../../archive';
import { AjaxResponse } from 'rxjs/ajax';
import { AccessArchiveService } from '../../access-archive.service'; 

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css'],
  standalone: true,
  providers: [AccessArchiveService] 
})

export class LoanComponent implements OnInit {
  @Input() singleBook: Book;
  @Output() loanEvent = new EventEmitter<string>();

  constructor(private aas: AccessArchiveService) {}  

  doLoan() {
    document.getElementById('loanAlert').innerHTML = '';
    let id: string = this.singleBook.position;  
    var nominative: string = (document.getElementById('nominative') as HTMLInputElement).value.trim();
    if (!nominative) {
      document.getElementById('loanAlert').innerHTML = 'Inserisci un nominativo!';
      return;
    }
    this.aas.getArchive().subscribe({
      next: (x:AjaxResponse<string>) => {
        let archive: Archive = new Archive(JSON.parse(x.response));
        archive.changeNominative(id, nominative);             
        let newArchive: string = JSON.stringify(archive.elenco);
        this.aas.saveArchive(newArchive).subscribe({
          next: () => {this.loanEvent.emit('home')},
          error: (err) => console.log(err.response)
        });              
      },
      error: (err) => console.log(err.response)
    });
  }

  ngOnInit(){}
}