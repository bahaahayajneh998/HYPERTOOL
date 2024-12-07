import { Routes } from "@angular/router";
import { WeatherCityComponent } from "./weather-city.component";

export const WEATHER_ROUTES: Routes = [{
  path: '',
  children: [
    { path: '', component: WeatherCityComponent },
  ]

}]