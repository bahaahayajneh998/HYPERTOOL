import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ECOMMERCE_ROUTES } from './ecommerce-routing.module';
import { EcommerceHomeComponent } from './Home/ecommerce-home.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    EcommerceHomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ECOMMERCE_ROUTES)
  ]
})
export class EcommerceModule { }
