import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  url = 'https://api.openweathermap.org/data/2.5/weather';
  apiKey = 'd5500e850e82aff5ff7a3c56509e1f6d';

  constructor( private http: HttpClient) { }

  getWeatherDataByCityName(city: string) {
    const params = new HttpParams()
    .set('q', city)
    .set('units', 'metric')
    .set('appid', this.apiKey);

    return this.http.get(this.url, {params});
  }
}
