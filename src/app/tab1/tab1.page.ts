import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  weather;
  location: {
    city: string,
    state: string
  };

  constructor(
    private weatherService: WeatherService,
    private storage: Storage) { }

  ionViewWillEnter() {
    this.storage.get('location').then((val) => {
      if (val != null) {
        this.location = JSON.parse(val);
      } else {
        this.location = {
          city: 'Rawalpindi',
          state: 'PK'
        };
      }
      this.getCity('rawalpindi');
    });
  }

  async getCity(city) {
    this.weatherService.getWeatherDataByCityName(this.location.city).subscribe(
      weather => {
        this.weather = weather;
      },
      error => {
        console.log(error);
      }
    );
  }

}
