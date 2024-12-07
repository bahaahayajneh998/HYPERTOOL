import { DatePipe } from '@angular/common';
import { NgModule, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormatWithoutTime'
})
export class DateFormatWithoutTimePipe implements PipeTransform {


  transform(value: any): string | null {
    const datePipe = new DatePipe('en-US');
    return datePipe.transform(value, 'MMMM d, y');
  }

}
  @NgModule({
    imports: [],
    declarations: [DateFormatWithoutTimePipe],
    exports: [DateFormatWithoutTimePipe],
  })
  
  export class PipeDateWithoutTimeModule {
  
  static forRoot() {
    return {
      ngModule: PipeDateWithoutTimeModule,
      providers: [],
    };
  }
  

}
