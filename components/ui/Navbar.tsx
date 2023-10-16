import Link from "next/link";
import { Spacer } from "@nextui-org/react";
import Image from "next/image";

export const Navbar = () => {
  return (
    <div className="flex w-full justify-start py-1 items-center px-5 bg-gray-900">
      <Image
        src={
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png"
        }
        alt="Icono de la app"
        width={70}
        height={70}
      />
      <h1 className="text-2xl flex justify-start items-center">
        <span className="text-4xl">P</span>
        ókedex
      </h1>
      <div className="grow" />
      <Link href={"./"}>Favoritos</Link>
    </div>
  );
};
