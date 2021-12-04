import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CurrentWeatherRequest } from '../models/current-weather-request.model';
import { CurrentWeatherResponse } from '../models/current-weather-response.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private _httpClient: HttpClient) { }

  getCurrentWeather(payload: CurrentWeatherRequest): Observable<CurrentWeatherResponse> {
    return this._httpClient.post<CurrentWeatherResponse>(`${environment.apiUrl}/api/weather/current`, payload);
  }
}
