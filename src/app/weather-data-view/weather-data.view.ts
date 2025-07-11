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
  loading = false

  providers: Record<string, string> = {
    "weather_api": "Weather API",
    "accu_weather": "AccuWeather"
  }

  formatDate(date: string) {
    return format(date, 'EEEE, d. M.');
  }

  submitLocation() {
    this.loading = true;
    console.log('Location entered:', this.location);
    const url = `${WEATHER_API_BASE_URL_PROD}/${this.location}`;
    console.log('Fetching weather data from:', url);

    this.http.get<any>(url).subscribe({
      next: (res) => {
        console.log('API response:', res);
        this.data = this.transformForecast(res);
        console.log(this.data);
        this.loading = false;
      },
      error: (err) => {
        console.error('API error:', err);
        this.loading = false;
      },
    });
  }

  transformForecast(response: any) {
    const data: any = {
      city: {
        name: response.city.name,
        lat: response.city.lat,
        lon: response.city.lon,
      },
      forecast: [],
      openAiAdvice: response.openAiAdvice
    };

    const dateMap: Map<string, any[]> = new Map();

    for (const entry of response.data) {
      // Normalize date (strip time if present)
      const normalizedDate = entry.date.split('T')[0];

      if (!dateMap.has(normalizedDate)) {
        dateMap.set(normalizedDate, []);
      }

      dateMap.get(normalizedDate)?.push({
        provider: entry.provider,
        minTemp: entry.minTemp,
        maxTemp: entry.maxTemp,
        windSpeed: entry.windSpeed,
        totalPrecipitationMm: entry.totalPrecipitationMm,
        chanceOfRain: entry.chanceOfRain,
        humidity: entry.humidity,
      });
    }

    for (const [date, forecasts] of dateMap.entries()) {
      data.forecast.push({ date, forecast: forecasts });
    }

    // Optional: sort by date ascending
    data.forecast.sort(
      (a:any, b:any) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );

    return data;
  }
}
