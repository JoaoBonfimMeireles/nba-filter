import React, { useState, ChangeEvent, useEffect } from "react";
import { nbaTeams } from "./data/nbaTeams";

import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [inputValue, setInputValue] = useState("");

  console.log(search);

  const searchLowerCase = search.toLowerCase();

  const teams = nbaTeams.filter((team) =>
    team.name.toLowerCase().includes(searchLowerCase)
  );

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleChooseTeam = (team: (typeof nbaTeams)[number]) => {
    setSearch(team.name);
    setInputValue(team.name);
  };

  return (
    <div className="App">
      <input type="search" value={inputValue} onChange={handleInputChange} />

      <ul>
        {teams.map((team) => (
          <li key={team.name} onClick={() => handleChooseTeam(team)}>
            <img className="logo-search" src={team.logoImgLink} alt={team.name} />
            <p>{team.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
