import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GALLERY_ROUTES } from './picture-gallery-routing.module';
import { PictureGalleryHomeComponent } from './picture-gallery-home.component';
import { Router } from 'express';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    PictureGalleryHomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(GALLERY_ROUTES),
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class PictureGalleryModule { }
