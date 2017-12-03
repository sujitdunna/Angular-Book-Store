import { BookService } from './../service/book.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list/book-list.component';
import { FormsModule } from '@angular/forms';
import { BookComponent } from './book/book.component';
import { BookFilterPipe } from './book-filter.pipe';
import { PopupModule } from 'ng2-opd-popup';

@NgModule({
  declarations:[    
    BookListComponent, BookComponent, BookFilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    PopupModule.forRoot()
  ],
  exports:[
    BookListComponent,
    BookComponent
  ],
  providers:[
    BookService
  ]
})
export class BookModule { }
