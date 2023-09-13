import React, { useState } from "react";
import { nbaTeams } from "./data/nbaTeams ";

import "./App.css";

function App() {
  const [search, setSearch] = React.useState("");

  console.log(search);

  const searchLowerCase = search.toLowerCase();

  const teams = nbaTeams.filter((team) => team.name.toLowerCase().includes(searchLowerCase));

  return (
    <div className="App">
      <input
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {teams.map((team) => (
          <li key={team.name}>
            <p>{team.name}</p>
          </li>
        ))}
      </ul>
      
    </div>
  );
}

export default App;
