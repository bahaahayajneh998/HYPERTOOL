import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizBuilderHomeComponent } from './Home/quiz-builder-home.component';

export const QUIZBUILDER_ROUTES: Routes = [{
  path: '',
  children: [
    { path: '', component: QuizBuilderHomeComponent },
  ]

}]