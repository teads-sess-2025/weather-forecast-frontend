import { WEATHER_API_BASE_URL, ACCU_API_BASE_URL } from '../app.config';
import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { response } from '../data/response';
import { format } from 'date-fns';

@Component({
  selector: 'weather-data-view',
  imports: [RouterLink, FormsModule],
  templateUrl: './weather-data.view.html',
  styleUrl: './weather-data.view.less',
})
export class WeatherDataView {
  http = inject(HttpClient);

  constructor() {}

  public location = '';

  formatDate(date: string) {
    format(date, 'EEEE, d. M.');
  }

  submitLocation() {
    console.log('Location entered:', this.location);
    // Here, you could call a weather API or other service
  }

  response = response;

  // notes = signal<Note[]>([]);

  // ngOnInit(): void {
  //   this.http.get<Note[]>(WEATHER_API_BASE_URL)
  //     .subscribe(notes =>
  //       this.notes.set(notes)
  //     );
  // }
}
