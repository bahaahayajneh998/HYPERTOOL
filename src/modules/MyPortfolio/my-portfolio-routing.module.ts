import {  Routes } from '@angular/router';
import { MyPortfolioComponent } from './my-portfolio.component';

export const MyPortfolio_ROUTES: Routes = [{
  path: '',
  children: [
    { path: '', component: MyPortfolioComponent },
  ]

}]

