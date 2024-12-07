import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextStatisticsComponent } from './Index/text-statistics.component';
import { RouterModule } from '@angular/router';
import { TEXTSTATISTICS_ROUTES } from './text-statistics-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';
import { SharedModule } from '../sharedModule/shared.module';


@NgModule({
  declarations: [
    TextStatisticsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(TEXTSTATISTICS_ROUTES),
    ReactiveFormsModule,
    FormsModule,
    ClipboardModule,
    SharedModule
  ]
})
export class TextStatisticsModule { }
