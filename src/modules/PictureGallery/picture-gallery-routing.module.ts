import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PictureGalleryHomeComponent } from './picture-gallery-home.component';


export const GALLERY_ROUTES: Routes = [{
  path: '',
  children: [
    { path: '', component: PictureGalleryHomeComponent },
  ]

}]