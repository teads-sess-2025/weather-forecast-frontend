import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { format } from 'date-fns';
import { WEATHER_API_BASE_URL_PROD } from '../app.config';
import {MarkdownComponent} from 'ngx-markdown';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'weather-data-view',
  imports: [RouterLink, FormsModule, MarkdownComponent, MarkdownModule],
  templateUrl: './weather-data.view.html',
  styleUrl: './weather-data.view.less',
})
export class WeatherDataView {
  http = inject(HttpClient);
  data: any;

  constructor() {}

  public location = '';

  formatDate(date: string) {
    return format(date, 'EEEE, d. M.');
  }

  submitLocation() {
    console.log('Location entered:', this.location);
    const url = `${WEATHER_API_BASE_URL_PROD}/${this.location}`;
    console.log('Fetching weather data from:', url);

    this.http.get<any>(url).subscribe({
      next: (res) => {
        console.log('API response:', res);
        this.data = this.transformForecast(res);
      },
      error: (err) => {
        console.error('API error:', err);
      },
    });
  }

  transformForecast(response: any) {
    const data: any = {
      city: response.city,
      forecast: [],
      openAiAdvice: response.openAiAdvice,
    };

    // Map to group forecasts by date
    const dateMap: Map<string, any[]> = new Map();

    for (const forecast of response.data) {
      if (!dateMap.has(forecast.date)) {
        dateMap.set(forecast.date, []);
      }

      // Push forecast with provider info into the correct date group
      dateMap.get(forecast.date)?.push({
        provider: forecast.provider,
        minTemp: forecast.minTemp,
        maxTemp: forecast.maxTemp,
        windSpeed: forecast.windSpeed,
        totalPrecipitationMm: forecast.totalPrecipitationMm,
        chanceOfRain: forecast.chanceOfRain,
        humidity: forecast.humidity,
      });
    }

    // Convert map to array
    for (const [date, forecasts] of dateMap.entries()) {
      data.forecast.push({
        date,
        forecast: forecasts,
      });
    }

    // Optional: sort by date
    data.forecast.sort(
      (a: any, b: any) =>
        new Date(a.date).getTime() - new Date(b.date).getTime()
    );

    console.log(data);
    return data;
  }
}
