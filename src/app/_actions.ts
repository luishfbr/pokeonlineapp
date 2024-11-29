"use server";

export const getWeather = async (city: string) => {
  const API_KEY = process.env.OPEN_WEATHER_API_KEY;
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );
  const data = await response.json();
  return {
    status: response.status,
    data,
  };
};
