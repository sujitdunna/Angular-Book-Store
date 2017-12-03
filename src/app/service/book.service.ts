import { Book } from './../domain/book';
import { Injectable } from '@angular/core';

@Injectable()
export class BookService {

  public books:Book[];

  constructor() { }

  GetBooks():Book[]
  {
    this.books = [
      {code:1,name:"The Da Vinci Code",publisher:"Dan Brown",price:168,imagepath:"1.jpg"},
      {code:2,name:"Angels & Demons",publisher:"Dan Brown",price:145,imagepath:"2.jpg"},
      {code:3,name:"The Girl with the Dragon Tattoo",publisher:"Stieg Larsson",price:156,imagepath:"3.jpg"},
      {code:4,name:"Harry Potter and the Half-Blood Prince",publisher:"J.K. Rowling, Mary GrandPre",price:254,imagepath:"4.jpg"},
      {code:5,name:"The Firm",publisher:"Robin A.H. Waterfield",price:148,imagepath:"5.jpg"},
      {code:6,name:"The Day of the Jackal",publisher:"Frederick Forsyth",price:190,imagepath:"6.jpg"},
      {code:7,name:"V for Vendetta",publisher:"Alan Moore",price:135,imagepath:"7.jpg"},
      {code:8,name:"Cries from the Deep",publisher:"Anthony Hulse",price:132,imagepath:"8.jpg"},
    ];

    return this.books;
  }
}
