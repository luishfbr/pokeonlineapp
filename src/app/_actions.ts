"use server";

import axios from "axios";

export const getWeather = async (city: string) => {
  try {
    const API_KEY = process.env.OPEN_WEATHER_API_KEY;
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    const data = {
      weather: response.data.weather,
      cityName: response.data.name,
      main: response.data.main,
    };

    return {
      status: 200,
      response: data,
    };
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      response: null,
    };
  }
};

export const getPokemonByType = async (type: string) => {
  try {
    const res = await axios.get(`https://pokeapi.co/api/v2/type/${type}`);

    const pokemons = res.data.pokemon;
    const numberOfPokemons = pokemons.length;

    let previousPokemon: string | null = null;

    const getNextPokemon = () => {
      let nextPokemon = null;
      let index = null;

      while (nextPokemon === previousPokemon) {
        const randomIndex = Math.floor(Math.random() * numberOfPokemons);
        nextPokemon = pokemons[randomIndex].pokemon.name;
        index = pokemons[randomIndex].pokemon.url.split("/")[6];
      }

      const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`;

      previousPokemon = nextPokemon;

      return { name: nextPokemon, image };
    };

    const nextPokemon = getNextPokemon();
    return nextPokemon;
  } catch (error) {
    console.error(error);
    return null;
  }
};
