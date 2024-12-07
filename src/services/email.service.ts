import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  sendEmail(emailData: any) {
    const endpoint = 'http://localhost:4200/send';

    return this.http.post(endpoint, emailData, { observe: 'response' });
  }
}

