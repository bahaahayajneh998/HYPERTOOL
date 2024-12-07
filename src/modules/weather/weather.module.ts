import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherCityComponent } from './weather-city.component';
import { RouterModule } from '@angular/router';
import { WEATHER_ROUTES } from './weather-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../sharedModule/shared.module';
import { PipeDateWithTimeModule } from 'src/app/pipes/date-format-with-time.pipe';


@NgModule({
  declarations: [
    WeatherCityComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(WEATHER_ROUTES),
    ReactiveFormsModule,
    PipeDateWithTimeModule,
    FormsModule,
    SharedModule
  ]
})
export class WeatherModule { }
