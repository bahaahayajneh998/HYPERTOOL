import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-picture-gallery-home',
  templateUrl: './picture-gallery-home.component.html',
  styleUrls: ['./picture-gallery-home.component.scss']
})
export class PictureGalleryHomeComponent implements OnInit {
  ngOnInit(): void {
    
  }
  // Questions array to hold all created questions
  questions: any[] = [];

  // New question model
  newQuestion: any = {
    text: '',
    type: 'radio',
    options: [''],
  };

  // Add a new question to the questions array
  addQuestion(): void {
    if (this.newQuestion.type === 'text') {
      this.newQuestion.options = []; // Clear options for text type
    }
    this.questions.push({ ...this.newQuestion });
    this.resetForm();
  }

  // Add an option to the new question
  addOption(): void {
    this.newQuestion.options.push('');
  }

  // Remove an option by index
  removeOption(index: number): void {
    this.newQuestion.options.splice(index, 1);
  }

  // Reset the form to initial state
  resetForm(): void {
    this.newQuestion = {
      text: '',
      type: 'radio',
      options: [''],
    };
  }
}
