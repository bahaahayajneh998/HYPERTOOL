import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }
  private geoNamesUrl = 'http://api.geonames.org/searchJSON';  // GeoNames API for city search
  private weatherApiUrl = 'https://api.openweathermap.org/data/2.5/weather';  // OpenWeatherMap API for weather
  private geoNamesUsername = 'bahaa';  // Replace with your GeoNames username
  private openWeatherApiKey = '07a2834a9ab53bd7582c68b3445ada9d';  // Replace with your OpenWeatherMap API key
  // Get cities by name from GeoNames API
  getCities(cityName: string): Observable<any> {
    const url = `${this.geoNamesUrl}?q=${cityName}&maxRows=10&username=${this.geoNamesUsername}`;
    return this.http.get(url);
  }

  // Get weather data for a city from OpenWeatherMap API
  getWeather(city: string): Observable<any> {
    const url = `${this.weatherApiUrl}?q=${city}&appid=${this.openWeatherApiKey}&units=metric`;
    return this.http.get(url);
  }

  get7DayForecast(lat: number, lon: number): Observable<any> {
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=${this.openWeatherApiKey}&units=metric`;
    return this.http.get<any>(url);
  }
}