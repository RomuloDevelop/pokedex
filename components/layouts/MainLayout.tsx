import Head from "next/head";
import { ReactNode } from "react";
import { Navbar } from "../ui";

export const MainLayout = ({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) => {
  return (
    <>
      <Head>
        <title>{title || "Pokémon App"}</title>
        <meta name="author" content="Rómulo Corona" />
        <meta name="description" content={`Información del pokémon ${title}`} />
        <meta name="keywords" content={`pokémon, pokédex, ${title}`} />
      </Head>
      <Navbar />
      <main className="px-5">{children}</main>
    </>
  );
};
