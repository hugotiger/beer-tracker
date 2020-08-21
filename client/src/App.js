import React from "react";
import { Header } from "./components/header";
import { TotalCounter } from "./presentational/TotalCounter";
import { BeersDashboard } from "./presentational/BeersDashboard";
import { AddBeers } from "./presentational/AddBeers";
import { BeerList } from "./presentational/BeerList";
import { AppProviders } from "./context";

function App() {
  return (
    <AppProviders>
      <Header />
      <main className="container">
        <TotalCounter />
        <BeersDashboard />
        <AddBeers />
        <BeerList />
      </main>
    </AppProviders>
  );
}

export default App;
