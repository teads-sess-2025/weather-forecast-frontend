import {
  ApplicationConfig, importProvidersFrom,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import {MarkdownModule} from 'ngx-markdown';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(),
    importProvidersFrom(MarkdownModule.forRoot()),
  ],
};

export const WEATHER_API_BASE_URL = 'http://localhost:80/weather/api';
export const WEATHER_API_BASE_URL_PROD ="https://weather-forecast-backend.greenisland-0015b907.westeurope.azurecontainerapps.io/weather/api";
