import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, map } from 'rxjs';
import { Rates } from 'src/models/rates';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
 // private apiURL = 'https://api.exchangerate-api.com/v4/latest/';
 public exchangeApiURL = 'https://api.exchangerate-api.com/v4/latest/';
 public countryApiURL = 'https://restcountries.com/v3/all';

  constructor(private http: HttpClient) {}


  // getRates(base: string): Observable<Rates> {
  //   return this.http.get<Rates>(
  //     `https://api.apilayer.com/exchangerates_data/latest?apikey=hZqc0Gi4IrO3TFroyu46FDIe1Rh2CQgi&base=${base}`
  //   );
  // }



  // Fetch all countries and currencies

  
  getCurrencyAndFlags(): Observable<any[]> {
    return this.http.get<any[]>(this.countryApiURL).pipe(
      map((countries) =>
        countries.map((country) => ({
          code: country.currencies ? Object.keys(country.currencies)[0] : null,
          flag: country.flags.png, // Use the PNG flag URL
        })).filter((item) => item.code) // Filter out null codes
      )
    );
  }

  // Convert currency
  convert(from: string, to: string, amount: number): Observable<number> {
    return new Observable((observer) => {
      this.http.get<any>(`${this.exchangeApiURL}${from}`).subscribe((data) => {
        const rate = data.rates[to];
        observer.next(amount * rate);
        observer.complete();
      });
    });
  }
}
