export const response = {
  city: {
    name: 'Ljubljana',
    lat: '46.0569',
    lon: '14.5058',
  },
  data: [
    {
      provider: 'accuWeather',
      forecast: [
        {
          id: 'accu-1',
          date: '2025-07-10',
          minTemp: '17',
          maxTemp: '29',
          windSpeed: '12',
          totalPrecipitationMm: '1.2',
          chanceOfRain: '30%',
          humidity: '60%',
        },
        {
          id: 'accu-2',
          date: '2025-07-11',
          minTemp: '18',
          maxTemp: '28',
          windSpeed: '10',
          totalPrecipitationMm: '0.5',
          chanceOfRain: '20%',
          humidity: '55%',
        },
        {
          id: 'accu-3',
          date: '2025-07-12',
          minTemp: '19',
          maxTemp: '31',
          windSpeed: '8',
          totalPrecipitationMm: '0',
          chanceOfRain: '10%',
          humidity: '50%',
        },
      ],
    },
    {
      provider: 'weatherAPI',
      forecast: [
        {
          id: 'api-1',
          date: '2025-07-10',
          minTemp: '16',
          maxTemp: '30',
          windSpeed: '14',
          totalPrecipitationMm: '2.0',
          chanceOfRain: '40%',
          humidity: '65%',
        },
        {
          id: 'api-2',
          date: '2025-07-11',
          minTemp: '17',
          maxTemp: '29',
          windSpeed: '11',
          totalPrecipitationMm: '0.0',
          chanceOfRain: '15%',
          humidity: '53%',
        },
        {
          id: 'api-3',
          date: '2025-07-12',
          minTemp: '18',
          maxTemp: '32',
          windSpeed: '9',
          totalPrecipitationMm: '0',
          chanceOfRain: '5%',
          humidity: '48%',
        },
      ],
    },
  ],
};
