import { Book } from './book';

export class Archive {
  elenco: Array<Book>;

  constructor(elenco:Array<Book>) {
    this.elenco = elenco;
  }

  checkKey(key:string) {
    let result: Array<Book> = this.elenco.filter((book) => book.title.concat(' ', book.author).toLowerCase().includes(key.toLowerCase()));
    return result;
  }

  addBook(newBook:Book) {
    this.elenco.push(newBook);
  }
}