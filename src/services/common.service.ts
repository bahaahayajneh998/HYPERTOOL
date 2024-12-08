import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, map } from 'rxjs';
import { Rates } from 'src/models/rates';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

    commonColors = {
        primary:'#0d6efd',
        success:'#198754 ',
        danger:'#198754',
        white:'#fff'
    }

  constructor(private http: HttpClient) {}



}
