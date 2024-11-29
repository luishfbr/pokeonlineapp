"use client";

import React, { useEffect } from "react";
import { GetCityForm } from "./_components/get-city";
import { ResponseGetApiWeather } from "@/types";

function TypeByTemperature(response: ResponseGetApiWeather) {
  const temp = response?.main.temp as number;
  const main = response?.weather.main as string;

  if (main === "Rain") {
    return 'electric';
  }

  if (temp < 5) {
    return 'ice';
  } else if (temp >= 5 && temp < 10) {
    return 'water';
  } else if (temp >= 12 && temp < 15) {
    return 'grass';
  } else if (temp >= 15 && temp < 21) {
    return 'ground';
  } else if (temp >= 23 && temp < 27) {
    return 'bug';
  } else if (temp >= 27 && temp <= 33) {
    return 'rock';
  } else if (temp > 33) {
    return 'fire';
  }

  return 'normal';
}

export default function Home() {
  const [response, setResponse] = React.useState<ResponseGetApiWeather>();
  const [type, setType] = React.useState<string>();

  useEffect(() => {
    if (response) {
      const res = TypeByTemperature(response);
      setType(res);
    }
  }, [response]);

  return (
    <>
      {!response && <GetCityForm getResponse={setResponse} />}
      {response && <div>{type}</div>}
    </>
  );
}
