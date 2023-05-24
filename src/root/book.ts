export class Book {
  position: string;
  author: string;
  title: string;
  nominative: string | undefined;
  constructor(position:string, author:string, title:string, nominative:string|undefined) {
    this.position = position;
    this.author = author;
    this.title = title;
    this.nominative = nominative;
  }
}