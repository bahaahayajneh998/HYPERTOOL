import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-picture-gallery-home',
  templateUrl: './picture-gallery-home.component.html',
  styleUrls: ['./picture-gallery-home.component.scss']
})
export class PictureGalleryHomeComponent implements OnInit {
  ngOnInit(): void {
    
  }
  currentPage= 1;
  collection:any = [];
  constructor() {
    for (let i = 1; i <= 100; i++) {
      this.collection.push(`item ${i}`);
    }
  }
}
