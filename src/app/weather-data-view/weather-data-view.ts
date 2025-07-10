// import {WEATHER_API_BASE_URL, ACCU_API_BASE_URL} from '../app.config';
// import {Component, inject, OnInit, signal} from '@angular/core';
// import {RouterLink} from '@angular/router';
// import {HttpClient} from '@angular/common/http';
//
// @Component({
//   selector: 'weather-data-view',
//   imports: [RouterLink],
//   templateUrl: './weather-data-view.html',
//   styleUrl: './weather-data-view.less'
// })
//
// export class WeatherDataView implements OnInit {
//   http = inject(HttpClient);
//
//   notes = signal<Note[]>([]);
//
//   ngOnInit(): void {
//     this.http.get<Note[]>(WEATHER_API_BASE_URL)
//       .subscribe(notes =>
//         this.notes.set(notes)
//       );
//   }
// }
