import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/services/weather.service';

@Component({
  selector: 'app-weather-city',
  templateUrl: './weather-city.component.html',
  styleUrls: ['./weather-city.component.scss']
})
export class WeatherCityComponent implements OnInit {

  cityName: string = 'Amman';
  cities: any[] = [];
  weatherData: any = null;
  errorMessage: string = '';
  today:Date = new Date();
  citySearchList = ['Amman','Checago','Karachi','Mecca Al Mukarama','Cairo',
    'Seoul','Kolkata','Riyadh','Moscow','Kazan','Stockholm','Rotterdam','Amsterdam',
    'Venice','Dubai','Munich','Izmir','Surabaya','Arequipa','Santiago','Cuba','Baghdad','Tamale',
    'Gondar','Auckland','Brisbane','Lagos',
  ]
  testimonialList = [{
    name:'Black Beard',
    location:'Chicago',
    text:'The Weather City App is my go-to for checking the weather every day. It’s fast, accurate, and has a beautiful design. I love how it tells me exactly what I need to know!',
    imageName:'Black Beard.jpg'
  },

  {
    name:'Rebecca Gill',
    location:'Moscow',
    text:'The Weather City App is my go-to for checking the weather every day. It’s fast, accurate, and has a beautiful design. I love how it tells me exactly what I need to know!',
    imageName:'Rebecca Gill.jpg'
  },
  {
    name:'Amira Salem',
    location:'Amman',
    text:'I use this app whenever I travel, and it’s always spot on. The layout is clear, and the icons make the data so much easier to understand. Keep it up!',
    imageName:'Lisa Hannigan.jpg'
  },
  {
    name:'David Link',
    location:'Los Angeles',
    text:'As a runner, knowing the weather is crucial for me. The Weather City App gives me just the right amount of information in one place—perfect for planning my runs.',
    imageName:'David-Link.jpg'
  },
  {
    name:'Emran Adam',
    location:'Karachi',
    text:'I use this app whenever I travel, and it’s always spot on. The layout is clear, and the icons make the data so much easier to understand. Keep it up!',
    imageName:'Emran Adam.jpg'
  }]
  ngOnInit() {
    this.fetchWeather();
  }
  constructor(private weatherService: WeatherService) {}

  // Search for cities based on user input
  // searchCities() {
  //   if (this.cityName.trim() === '') {
  //     this.errorMessage = 'Please enter a city name.';
  //     this.cities = [];
  //     this.weatherData = null;
  //     return;
  //   }

  //   this.fetchWeather();

  //   // this.weatherService.getCities(this.cityName).subscribe(
  //   //   (data) => {
  //   //     this.cities = data.geonames;  // Assuming the cities list is in 'geonames'
  //   //     this.errorMessage = '';
  //   //   },
  //   //   (error) => {
  //   //     this.errorMessage = 'No cities found. Please try again.';
  //   //     this.cities = [];
  //   //   }
  //   // );
  // }

  // Fetch weather data for the selected city
  fetchWeather() {
    if (this.cityName.trim() === '') {
      this.errorMessage = 'Please enter a city name.';
      this.cities = [];
      this.weatherData = null;
      return;
    }
    this.weatherService.getWeather(this.cityName).subscribe(
      (data) => {
        this.weatherData = data;
        this.errorMessage = '';
      },
      (error) => {
        this.errorMessage = 'City not found. Please try again.';
        this.weatherData = null;
      }
    );
  }

}
