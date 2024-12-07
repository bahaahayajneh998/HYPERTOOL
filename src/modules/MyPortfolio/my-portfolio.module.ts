import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyPortfolioComponent } from './my-portfolio.component';
import { RouterModule } from '@angular/router';
import { MyPortfolio_ROUTES } from './my-portfolio-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmailService } from 'src/services/email.service';


@NgModule({
  declarations: [
    MyPortfolioComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(MyPortfolio_ROUTES),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmailService]
})
export class MyPortfolioModule { }
