import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { ResponseGetApiWeather } from "@/types";
import React from "react";
import { getPokemonByType } from "../_actions";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface ShowProps {
  type: string;
  city: string;
  response: ResponseGetApiWeather;
  getAnotherPokemon: () => void;
}

const typeTranslations: { [key: string]: string } = {
  fire: "Fogo",
  water: "Água",
  grass: "Grama",
  rock: "Pedra",
  electric: "Elétrico",
  bug: "Inseto",
  normal: "Normal",
  ice: "Gelo",
  ground: "Terra",
};

export const ShowPokemon = ({
  type,
  city,
  response,
  getAnotherPokemon,
}: ShowProps) => {
  const [pokemon, setPokemon] = React.useState<string>();
  const [pokemonImage, setPokemonImage] = React.useState<string>();

  const translatedType = type
    ? typeTranslations[type.toLowerCase()] || type
    : "Tipo desconhecido";

  const fetchPokemon = React.useCallback(async () => {
    const res = await getPokemonByType(type);
    setPokemon(res?.name as string);
    setPokemonImage(res?.image as string);
  }, [type]);

  React.useEffect(() => {
    fetchPokemon();
  }, [fetchPokemon]);

  return (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Pokemon encontrado!</CardTitle>
        <CardDescription>
          Abaixo o pokemon {pokemon} do tipo {translatedType} encontrado na
          cidade {city}.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label>Nome do Pokemon</Label>
            <Input type="text" disabled value={pokemon} />
          </div>
          <div className="w-full items-center justify-center flex">
            <Image
              alt="Pokemon"
              src={pokemonImage as string}
              width={250}
              height={250}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label>Está chovendo?</Label>
              <Input
                type="text"
                disabled
                value={response.weather[0].main === "Rain" ? "Sim" : "Não"}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Graus em C°</Label>
              <Input
                type="text"
                disabled
                value={response.main.temp.toFixed(2)}
              />
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={() => getAnotherPokemon()} className="w-full">
          Procurar outro pokemon
        </Button>
      </CardFooter>
    </Card>
  );
};
