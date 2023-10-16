/* eslint-disable react/no-unescaped-entities */
import { Image as UIImage } from "@nextui-org/image";
import { MainLayout } from "../components/layouts";
import { ReactNode } from "react";
import { GetStaticProps } from "next";
import { pokeApi } from "@/services";
import { PokemonItem, PokemonList } from "@/interfaces/pokemon";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import Image from "next/image";

type Props = {
  pokemons: PokemonItem[];
};
export default function Home({ pokemons }: Props) {
  return (
    <>
      <h1>Lista de Pokemons</h1>
      <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))]">
        {pokemons.map((pokemon, index) => (
          <Card
            shadow="sm"
            key={index}
            isPressable
            onPress={() => console.log("item pressed")}
          >
            <CardBody className="overflow-visible p-2">
              <Image
                width={140}
                height={140}
                style={{
                  objectFit: "contain",
                }}
                alt={pokemon.name}
                className="w-full object-cover h-[140px]"
                src={pokemon.image}
              />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <strong className="capitalize">{pokemon.name}</strong>
              <b>#{pokemon.id}</b>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}

Home.getLayout = function getLayout(page: ReactNode) {
  return <MainLayout title="Lista pokemons">{page}</MainLayout>;
};

export const getStaticProps: GetStaticProps = async () => {
  const {
    data: { results },
  } = await pokeApi.get<PokemonList>("/pokemon?limit=151");
  const pokemons: PokemonItem[] = results.map((pokemon, index) => {
    const split = pokemon.url.split("/");
    const id = split[split.length - 2];
    return {
      ...pokemon,
      id,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`,
    };
  });

  return {
    props: {
      pokemons,
    },
  };
};
