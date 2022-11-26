import React, { FC, PropsWithChildren } from "react";

import Head from "next/head";

interface Props {
  title?: string;
}

export const Layout: FC<PropsWithChildren<Props>> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{`${title || "Pokemon App"}`}</title>
        <meta name="author" content="Wilber Paredes" />
        <meta
          name="description"
          content={`Información sobre el pokemon ${title}`}
        />
        <meta name="keywords" content={`pokemon, pokedex, ash, pikachu`} />
      </Head>
      {/** Navbar */}
      <main>{children}</main>
    </>
  );
};
