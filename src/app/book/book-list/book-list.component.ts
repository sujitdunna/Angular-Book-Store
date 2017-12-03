import { BookService } from './../../service/book.service';
import { Book } from './../../domain/book';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Popup } from 'ng2-opd-popup';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books:Book[];
  showImage:boolean = false;
  filterValue:string;
  title:string = "List of Books";
  @ViewChild('deletepopup') deletePopup: Popup;
  @ViewChild('updatepopup') updatePopup: Popup;
  @ViewChild('addpopup') addPopup: Popup;
  private deleteBookCode:number = 0;
  private updatebook:Book;
  private addbook:Book;

  constructor(private _bookService : BookService) {
   }

  ngOnInit() {
    this.books = this._bookService.GetBooks();
  }

  ToggleImage()
  {
    this.showImage = !this.showImage;
  }

  DeleteBook(book:Book){
    this.deletePopup.options = {
      header: "Deleting Book : "+book.name,
      color: "#117a8b", // red, blue.... 
      widthProsentage: 40, // The with of the popou measured by browser width 
      animationDuration: 1, // in seconds, 0 = no animation 
      showButtons: true, // You can hide this in case you want to use custom buttons 
      confirmBtnContent: "Delete", // The text on your confirm button 
      cancleBtnContent: "Cancel", // the text on your cancel button 
      confirmBtnClass: "btn btn-danger", // your class for styling the confirm button 
      cancleBtnClass: "btn btn-secondary", // you class for styling the cancel button 
      animation: "bounceInDown" // 'fadeInLeft', 'fadeInRight', 'fadeInUp', 'bounceIn','bounceInDown' 
  };
    this.deleteBookCode = book.code;
    this.deletePopup.show(this.deletePopup.options);
  }

  ConfirmDelete()
  {
    if(this.deleteBookCode > 0)
    {
      console.log(this.deleteBookCode);
      let index = this.books.indexOf(this.books.find((book:Book)=>book.code===this.deleteBookCode));
      console.log(index); 
      if (index !== -1) this.books.splice(index, 1);
      this.deleteBookCode = 0
    }
    this.deletePopup.hide();
  }

  UpdateBook(book:Book){
    this.updatePopup.options = {
      header: "Updating Book : "+book.name,
      color: "#117a8b", // red, blue.... 
      widthProsentage: 40, // The with of the popou measured by browser width 
      animationDuration: 1, // in seconds, 0 = no animation 
      showButtons: true, // You can hide this in case you want to use custom buttons 
      confirmBtnContent: "Update", // The text on your confirm button 
      cancleBtnContent: "Cancel", // the text on your cancel button 
      confirmBtnClass: "btn btn-primary", // your class for styling the confirm button 
      cancleBtnClass: "btn btn-secondary", // you class for styling the cancel button 
      animation: "fadeInDown", // 'fadeInLeft', 'fadeInRight', 'fadeInUp', 'bounceIn','bounceInDown' 
  };
    this.updatebook = new Book;
    this.updatebook.code = book.code;
    this.updatebook.name = book.name;
    this.updatebook.publisher = book.publisher;
    this.updatebook.price = book.price;
    this.updatebook.imagepath = book.imagepath;
    this.updatePopup.show(this.updatePopup.options);
  }

  ConfirmUpdate()
  {
    if(this.updatebook)
    {
      let index = this.books.indexOf(this.books.find((book:Book)=>book.code===this.updatebook.code));
      if (index !== -1) this.books[index] = this.updatebook;
      this.updatebook = null;
    }
    this.updatePopup.hide();
  }

  AddBook(){
    this.updatePopup.options = {
      header: "Adding Book",
      color: "#117a8b", // red, blue.... 
      widthProsentage: 40, // The with of the popou measured by browser width 
      animationDuration: 1, // in seconds, 0 = no animation 
      showButtons: true, // You can hide this in case you want to use custom buttons 
      confirmBtnContent: "Add", // The text on your confirm button 
      cancleBtnContent: "Cancel", // the text on your cancel button 
      confirmBtnClass: "btn btn-success", // your class for styling the confirm button 
      cancleBtnClass: "btn btn-secondary", // you class for styling the cancel button 
      animation: "fadeInDown", // 'fadeInLeft', 'fadeInRight', 'fadeInUp', 'bounceIn','bounceInDown' 
  };
    this.addbook = new Book;
    this.addbook.code = this.books.map(book => book.code).length + 1;
    this.addPopup.show(this.updatePopup.options);
  }

  ConfirmAdd()
  {
    if(this.addbook)
    {
      this.books.push(this.addbook);
      this.addbook = null;
    }
    this.addPopup.hide();
  }
}
