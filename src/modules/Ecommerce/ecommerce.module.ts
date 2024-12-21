import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ECOMMERCE_ROUTES } from './ecommerce-routing.module';
import { EcommerceHomeComponent } from './Home/ecommerce-home.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../sharedModule/shared.module';
import { EcommerceDetailsComponent } from './details/ecommerce-details.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EcommerceHomeComponent,
    EcommerceDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule,
    RouterModule.forChild(ECOMMERCE_ROUTES)
  ]
})
export class EcommerceModule { }
