import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GALLERY_ROUTES } from './picture-gallery-routing.module';
import { PictureGalleryHomeComponent } from './picture-gallery-home.component';
import { Router } from 'express';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PictureGalleryHomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(GALLERY_ROUTES)
  ]
})
export class PictureGalleryModule { }
