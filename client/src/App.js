import React from "react";

import { Header } from "./components/header";
import { TotalCounter } from "./presentational/TotalCounter";
import { EventDashboard } from "./presentational/EventDashboard";
import { AddEvent } from "./presentational/AddEvent";
import { EventList } from "./presentational/EventList";
import { AppProviders } from "./context";

function App() {
  return (
    <AppProviders>
      <Header />
      <main className="container">
        <TotalCounter />
        <EventDashboard />
        <AddEvent />
        <EventList />
      </main>
    </AppProviders>
  );
}

export default App;
