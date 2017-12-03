import { Book } from './../domain/book';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bookFilter'
})
export class BookFilterPipe implements PipeTransform {

  transform(value: Book[], filtervalue: string): Book[] {
    filtervalue = filtervalue ? filtervalue.toLocaleLowerCase() : null;
    return filtervalue ? value.filter((books:Book)=>books.name.toLocaleLowerCase().indexOf(filtervalue) !== -1) : value;
  }
}
