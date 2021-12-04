import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CurrentWeatherResponse } from '../../@core/models/current-weather-response.model';
import { WeatherService } from '../../@core/http/weather.service';
import { CurrentWeatherRequest } from '../../@core/models/current-weather-request.model';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit, OnDestroy {

  weatherResponse!: CurrentWeatherResponse;
  city: string = 'Makati';

  private subscriptions = new Subscription();


  constructor(private _weatherService: WeatherService) {

  }

  ngOnInit(): void {
    this.getCurrentWeather();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  getCurrentWeather(): void {
    this.subscriptions.add(
      this._weatherService.getCurrentWeather({ city: this.city } as CurrentWeatherRequest)
        .subscribe(response => {
          this.weatherResponse = response;
        })
    );
  }
}