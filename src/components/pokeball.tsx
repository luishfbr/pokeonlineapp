import Image from "next/image";
import pokeball from "./assets/pokeball.png";

export default function PokeballLoading() {
  return (
    <Image
      className="h-4 w-4 animate-spin"
      src={pokeball}
      height={20}
      width={20}
      alt="pokeball"
    />
  );
}
