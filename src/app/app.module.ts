import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { SharedModule } from 'src/modules/sharedModule/shared.module';
import { DateFormatWithTimePipe } from './pipes/date-format-with-time.pipe';
import { DateFormatWithoutTimePipe } from './pipes/date-format-without-time.pipe';

@NgModule({
  declarations: [
    AppComponent,
   // DateFormatWithoutTimePipe,
   // DateFormatWithTimePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule  ],
  providers: [],
  bootstrap: [AppComponent],  
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
