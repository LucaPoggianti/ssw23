export class Book {
  position: string;
  author: string;
  title: string;
  nominative?: string;
  
  constructor(position:string, author:string, title:string, nominative?:string) {
    this.position = position;
    this.author = author;
    this.title = title;
    this.nominative = nominative;
  }
}