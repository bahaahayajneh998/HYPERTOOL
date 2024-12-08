// item.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class EcommerceItemService {
    private jsonUrl = '../assets/json/EcommerceItems.json';  // Path to your JSON file

    constructor(private http: HttpClient) { }
  
    // Method to get the items from the JSON file
    getItems(): Observable<any[]> {
      return this.http.get<any[]>(this.jsonUrl);
    }
}
