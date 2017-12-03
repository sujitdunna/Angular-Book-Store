import { Book } from './../../domain/book';
import { Component, OnInit, Input, Output } from '@angular/core';
import { ViewEncapsulation } from '@angular/core/src/metadata/view';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input('book') book:Book;

  constructor() { }

  ngOnInit() {
  }
}
