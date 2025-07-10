export type City = {
  id: number;
  name: string;
  lat: number;
  lon: number;
  date: string; // ISO date string (e.g. "2025-07-10")
};

export type WeatherForecast = {
  id: number;
  city: City;
  provider: string; // e.g., "weather_api"
  date: string; // ISO date string
  minTemp: number;
  maxTemp: number;
  windSpeed: number;
  totalPrecipitationMm: number;
  chanceOfRain: number;
  humidity: number;
};

export type ForecastResponse = {
  city: City;
  data: WeatherForecast[];
};
