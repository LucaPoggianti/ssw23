import { Book } from './book';

export class Archive {
  elenco: Array<Book>;

  constructor(elenco:Array<Book>) {
    this.elenco = elenco;
  }

  checkKey(key:string): Array<Book> {
    let result: Array<Book> = this.elenco.filter((book) => book.title.concat(' ', book.author).toLowerCase().includes(key.toLowerCase()));
    return result;
  }

  addBook(newBook:Book) {
    this.elenco.push(newBook);
  }

  removeBook(id:string) {
    this.elenco.splice(this.elenco.findIndex((book) => book.position === id), 1);
  }

  changeNominative(id:string, nominative?:string) {
    let index:number = this.elenco.findIndex((book) => book.position === id);
    this.elenco[index].nominative = nominative;
  }
}