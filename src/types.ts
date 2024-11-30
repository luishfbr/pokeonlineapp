export interface ResponseGetApiWeather {
  weather: Weather[];
  main: Main;
  cityName: string;
}

interface Main {
  temp: number;
  pressure: number;
  humidity: number;
  temp_min: number;
  temp_max: number;
  sea_level: number;
  grnd_level: number;
  feels_like: number;
}

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}
