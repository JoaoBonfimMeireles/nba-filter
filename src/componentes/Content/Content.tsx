import "./Content.css";

interface NBATeamsProps {
  city: string;
  cityLink?: string;
  name: string;
  div: string;
  foundation: number;
  players: string[];
  logoImgLink: string;
}

export default function Content({city, name, div, foundation, players, logoImgLink}: NBATeamsProps) {
  return (
    <div className="box-text">
      <div className="box-top">
        <img
          src={logoImgLink}
          alt={name}
        />
        <h1>{name}</h1>
      </div>
      <div className="box-all">
        <p>Fundação: {foundation}</p>
        <p>Cidade: {city}</p>
        <p>Divisão do Pacífico: {div}</p>
        <div className="box-list">
          <h3>Principais jogadores:</h3>
          <ul>
            <li>{players}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
