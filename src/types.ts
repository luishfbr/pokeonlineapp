export interface ResponseGetApiWeather {
  weather: Weather;
  main: Main;
}

interface Main {
  temp: number;
  pressure: number;
  humidity: number;
  temp_min: number;
  temp_max: number;
}

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

