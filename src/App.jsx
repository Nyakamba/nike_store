import React from "react";
import { FlexContent, Hero, Sales, Stories } from "./components";
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
        <FlexContent endpoint={highlight} ifExists />
        <Sales endpoint={toprateslaes} />

        <FlexContent endpoint={sneaker} />
        <Stories />
      </main>
    </>
  );
};

export default App;
