import { Button } from "@/components/ui/button";
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
import { useToast } from "@/hooks/use-toast";
import { ResponseGetApiWeather } from "@/types";
import React from "react";
import { getWeather } from "../_actions";
import PokeballLoading from "@/components/pokeball";

interface ResponseProps {
  getResponse: (response: ResponseGetApiWeather) => void;
}

export const GetCityForm = ({ getResponse }: ResponseProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [city, setCity] = React.useState<string | null>(null);

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);
      const res = await getWeather(city as string);
      if (res.status !== 200) {
        toast({
          title: "Cidade não encontrada",
          description: "Tente novamente com outra cidade.",
          variant: "destructive",
        });
      }
      getResponse(res.response as ResponseGetApiWeather);
    } catch (error) {
      console.error(error);
      toast({
        title: "Erro",
        description: "Algo deu errado, tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>PokeCity and Luis Henrique</CardTitle>
        <CardDescription>
          Informe o nome de alguma cidade, e retornaremos um pokemon aleatório
          com base no clima da cidade informada.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          <Label>Nome da cidade</Label>
          <Input value={city || ""} onChange={(e) => setCity(e.target.value)} />
        </div>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full"
          onClick={handleSubmit}
          variant="outline"
          disabled={!city || isSubmitting}
        >
          {isSubmitting ? <PokeballLoading /> : "Capturar pokemon"}
        </Button>
      </CardFooter>
    </Card>
  );
};
