import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SideBarComponent } from './sidebar/side-bar.component';
import { ToolBarComponent } from './toolbar/toolbar.component';
import { HeaderTopComponent } from './header-top/header-top.component';
import { PipeDateWithTimeModule } from 'src/app/pipes/date-format-with-time.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EcommerceCardComponent } from './ecommerce-card/ecommerce-card.component';
const SHARED_DECLARATIONS: Array<any> = [
  SideBarComponent,
  ToolBarComponent,
  HeaderTopComponent,
  EcommerceCardComponent]

@NgModule({
  declarations: [
    SHARED_DECLARATIONS,
    ToolBarComponent,
    HeaderTopComponent,
    EcommerceCardComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    PipeDateWithTimeModule.forRoot(),
    NgbModule
  ],
  exports: [
    SHARED_DECLARATIONS
  ]
})
export class SharedModule { }
