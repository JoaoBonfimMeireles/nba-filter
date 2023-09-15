import React, { useState, useEffect } from "react";
import { nbaTeams } from "./data/nbaTeams";

import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [searchClick, setSearchClick] = useState("");

  console.log(search);

  const searchLowerCase = search.toLocaleLowerCase();

  const teams = nbaTeams.filter(
    (team) =>
      team.name.toLocaleLowerCase().includes(searchLowerCase) ||
      team.city.toLocaleLowerCase().includes(searchLowerCase)
  );
  //O To lowe case, deixa tudo em caixa baixa

  //const teams = nbaTeams.filter((team) => team.name.includes(search));
  //a pesquisa está funcionado com o const acima, porém não funciona com caixa alta

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setSearchClick("");
  };

  const handleClick = (name: string) => {
    setSearchClick(name);
  };

  console.log(searchClick);

  return (
    <div className="App">
      <input
        type="search"
        placeholder="Digite o nome ou cidade"
        value={searchClick + search}
        onChange={handleInputChange}
      />

      <ul>
        {teams.map((team) => (
          <li key={team.name} onClick={() => handleClick(team.name)}>
            <img
              className="logo-search"
              src={team.logoImgLink}
              alt={team.name}
            />
            <p>{team.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
