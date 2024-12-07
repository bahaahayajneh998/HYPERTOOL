import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CURRENCY_ROUTES } from './currency-convertor-routing.module';
import { CurrencyConvertorComponent } from './currency-convertor.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    CurrencyConvertorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(CURRENCY_ROUTES),
  ]
})
export class CurrencyConvertorModule { }
