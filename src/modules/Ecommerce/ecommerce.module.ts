import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ECOMMERCE_ROUTES } from './ecommerce-routing.module';
import { EcommerceHomeComponent } from './Home/ecommerce-home.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../sharedModule/shared.module';


@NgModule({
  declarations: [
    EcommerceHomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(ECOMMERCE_ROUTES)
  ]
})
export class EcommerceModule { }
