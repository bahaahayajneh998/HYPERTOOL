import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QUIZBUILDER_ROUTES } from './quiz-builder-routing.module';
import { QuizBuilderHomeComponent } from './Home/quiz-builder-home.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../sharedModule/shared.module';
import { FormsModule } from '@angular/forms';
import { PipeDateWithoutTimeModule } from 'src/app/pipes/date-format-without-time.pipe';


@NgModule({
  declarations: [
    QuizBuilderHomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(QUIZBUILDER_ROUTES),
    SharedModule,
    FormsModule,
    PipeDateWithoutTimeModule
  ]
})
export class QuizBuilderModule { }
