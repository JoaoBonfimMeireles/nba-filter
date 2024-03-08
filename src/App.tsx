import React, { useState } from "react";
import { nbaTeams } from "./data/nbaTeams";
import "./App.css";

function App() {
  const [search, setSearch] = useState<string>("");
  const [searchClick, setSearchClick] = useState<string>("");
  const searchLowerCase = search.toLowerCase();

  const teams = nbaTeams.filter(
    (team) =>
      team.name.toLowerCase().includes(searchLowerCase) ||
      team.city.toLowerCase().includes(searchLowerCase)
  );

  const hasContent = searchClick !== "";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setSearchClick("");
  };

  const handleClick = (name: string) => {
    setSearchClick(name);
  };

  const selectedTeam = teams.find((team) => team.name === searchClick);

  let backgroundStyle = {};

  if (hasContent) {
    const selectedTeam = teams.find(
      (team) => team.name === search || team.name === searchClick
    );
    if (selectedTeam) {
      backgroundStyle = {
        backgroundImage: `url(${selectedTeam.cityLink})`,
      };
    }
  }

  return (
    <div className="App" style={backgroundStyle}>
      <div className="box-input">
        <h2>Times da NBA</h2>
        <input
          type="search"
          placeholder="Digite o nome ou cidade do time"
          value={searchClick || search}
          onChange={handleInputChange}
        />

        <ul className={`${hasContent ? "ul-dirty" : "ul-clean"}`}>
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
      {selectedTeam && (
        <div className="box-text">
          <div className="box-top">
            <img src={selectedTeam.logoImgLink} alt={searchClick} />
            <h1>{searchClick}</h1>
          </div>
          <div className="box-all">
            <p>Fundação: {selectedTeam.foundation}</p>
            <p>Cidade: {selectedTeam.city}</p>
            <p>Divisão do Pacífico: {selectedTeam.div}</p>
            <div className="box-list">
              <h3>Principais jogadores:</h3>
              <ul>
                {selectedTeam.players.map((player) => (
                  <li key={player}>{player}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
