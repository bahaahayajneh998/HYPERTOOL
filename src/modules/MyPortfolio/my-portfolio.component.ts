import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { json } from 'body-parser';
import { EmailService } from 'src/services/email.service';

@Component({
  selector: 'app-my-portfolio',
  templateUrl: './my-portfolio.component.html',
  styleUrls: ['./my-portfolio.component.scss']
})
export class MyPortfolioComponent implements OnInit {
  isDarkMode: boolean = false;
  myEmail ='bahaahayajneh3@gmail.com';
  lstImgsCategories = ['Image.png', 'Image (1).png', 'Image (2).png',
        'Image (3).png','Image (4).png','Image (5).png','Image (6).png','Image (7).png'];
        contactForm: FormGroup;
        emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
        successMessage: string = '';
        showForm: boolean = true;
        constructor(private fb: FormBuilder, private emailService: EmailService) {
          this.contactForm = this.fb.group({
            name: ['', Validators.required],
            subject: ['', Validators.required],
            email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
            message: ['', Validators.required]
          })
        }
  ngOnInit(): void {
    const isDarkMode = sessionStorage.getItem('isDarkMode') === 'true';
    this.isDarkMode = isDarkMode;
    this.changeTheme(this.isDarkMode);
  }

  convertToDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    sessionStorage.setItem('isDarkMode', JSON.stringify(this.isDarkMode));
    this.changeTheme(this.isDarkMode);
  }

  changeTheme(isDarkMode: boolean) {
    const root = document.documentElement;
  
    if (isDarkMode) {
      root.style.setProperty('--background-color', '#2B2B2B');
      root.style.setProperty('--text-color', '#fff');
      root.style.setProperty('--text-header-color', '#fff');
      root.style.setProperty('--diff-text-color', '#fff');
      root.style.setProperty('--main-background-color', '#2B2B2B');
    } else {
      root.style.setProperty('--background-color', '#fff');
      root.style.setProperty('--text-color', '#767676');
      root.style.setProperty('--text-header-color', '#2B2B2B');
      root.style.setProperty('--diff-text-color', '#2B2B2B');
      root.style.setProperty('--main-background-color', '#E4E6EB');

    }
  }
  

  selectCategory(category: string) {
    if(category === 'All') {
      this.lstImgsCategories =['Image.png', 'Image (1).png', 'Image (2).png',
        'Image (3).png','Image (4).png','Image (5).png','Image (6).png','Image (7).png']
    }
    else if(category === 'Design') {
      this.lstImgsCategories =['Image.png', 'Image (1).png','Image (2).png']
    }
    else if(category === 'Web') {
      this.lstImgsCategories =['Image.png', 'Image (3).png','Image (4).png']
    }
    else if(category === 'Logo') {
      this.lstImgsCategories =['Image (5).png', 'Image (6).png','Image (7).png']
    }
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const formValues = this.contactForm.value;
      console.log('Form submitted with values:', formValues);

      const formData = new FormData();
      formData.append('name', formValues.name);
      formData.append('subject', formValues.subject);
      formData.append('email', formValues.email);
      formData.append('message', formValues.message);

      this.emailService.sendEmail(formData).subscribe({
        next: (response: HttpResponse<any>) => {
          if (response.ok) {
            this.successMessage = response.body.message;
            this.showForm = false;
            this.clearSuccessMessage();
            this.contactForm.reset();
          }
        },
        error: (error: any) => {
          console.error('Error sending email:', error);
        }
      });

    } else {
      // Form is invalid, display error messages
      // Additional validation logic or user feedback here
    }
  }

  clearSuccessMessage() {
    setTimeout(() => {
      this.successMessage = '';
      this.showForm = true;
    }, 5000);
  }

  get name() {
    return this.contactForm.get('name');
  }

  get subject() {
    return this.contactForm.get('subject');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get message() {
    return this.contactForm.get('message');
  }
}
