import { DatePipe } from '@angular/common';
import { NgModule, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormatWithTime'
})
export class DateFormatWithTimePipe implements PipeTransform {

  transform(value: any): string | null {
    const datePipe = new DatePipe('en-US');
    return datePipe.transform(value, 'MMMM d, y hh:mm a');
  }

}
  @NgModule({
    imports: [],
    declarations: [DateFormatWithTimePipe],
    exports: [DateFormatWithTimePipe],
  })
  
  export class PipeDateWithTimeModule {
  
  static forRoot() {
    return {
      ngModule: PipeDateWithTimeModule,
      providers: [],
    };
  }
  }


