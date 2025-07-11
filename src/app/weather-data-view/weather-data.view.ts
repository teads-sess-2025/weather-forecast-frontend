import { WEATHER_API_BASE_URL, ACCU_API_BASE_URL } from '../app.config';
import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { response } from '../data/response';
import { format } from 'date-fns';

@Component({
  selector: 'weather-data-view',
  imports: [FormsModule],
  templateUrl: './weather-data.view.html',
  styleUrl: './weather-data.view.less',
})
export class WeatherDataView {
  http = inject(HttpClient);

  constructor() {}

  public location = '';

  formatDate(date: string) {
    return format(date, 'EEEE, d. M.');
  }

  submitLocation() {
    console.log('Location entered:', this.location);
    const url = `${WEATHER_API_BASE_URL}/${this.location}`;
    console.log('Fetching weather data from:', url);

    this.http.get<any>(url).subscribe({
      next: (res) => {
        console.log('API response:', res);
        this.response = res;
      },
      error: (err) => {
        console.error('API error:', err);
      },
    });
  }

  response = response;
}
