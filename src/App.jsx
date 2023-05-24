import React from "react";
import { FlexContent, Hero, Sales } from "./components";
import {
  heroapi,
  highlight,
  popularsales,
  sneaker,
  toprateslaes,
} from "./data/data";

const App = () => {
  return (
    <>
      <main className="flex flex-col gap-16 relative">
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists />
        <FlexContent endpoint={highlight} />
        <Sales endpoint={toprateslaes} />

        <FlexContent endpoint={sneaker} />
      </main>
    </>
  );
};

export default App;
