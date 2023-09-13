

export interface NBATeams {
    city: string;
    name: string;
    div: string;
    foundation: number;
    players: string[];
    logoImgLink: string;
}

export const nbaTeams: NBATeams[] = [
    {
      city: "Los Angeles",
      name: "Lakers",
      div: "Pacific",
      foundation: 1947,
      players: ["LeBron James", "Anthony Davis", "Russell Westbrook", "Dwight Howard", "Kentavious Caldwell-Pope"],
      logoImgLink: process.env.PUBLIC_URL + "/assets/Lakers.png",
    },
    {
      city: "Los Angeles",
      name: "Clippers",
      div: "Pacific",
      foundation: 1970,
      players: ["Kawhi Leonard", "Paul George", "Serge Ibaka", "Marcus Morris Sr.", "Ivica Zubac"],
      logoImgLink: "/assets/Clippers.png",
    },
    {
      city: "Phoenix",
      name: "Suns",
      div: "Pacific",
      foundation: 1968,
      players: ["Devin Booker", "Chris Paul", "Deandre Ayton", "Mikal Bridges", "Jae Crowder"],
      logoImgLink: "link-da-imagem-do-logo-do-Suns",
    },
    {
      city: "San Antonio",
      name: "Spurs",
      div: "Southwest",
      foundation: 1967,
      players: ["DeMar DeRozan", "Keldon Johnson", "Jakob Poeltl", "Lonnie Walker IV", "Derrick White"],
      logoImgLink: "link-da-imagem-do-logo-do-Spurs",
    },
    {
      city: "Toronto",
      name: "Raptors",
      div: "Atlantic",
      foundation: 1995,
      players: ["Pascal Siakam", "Fred VanVleet", "OG Anunoby", "Gary Trent Jr.", "Chris Boucher"],
      logoImgLink: "link-da-imagem-do-logo-do-Raptors",
    },
    {
      city: "Utah",
      name: "Jazz",
      div: "Northwest",
      foundation: 1974,
      players: ["Donovan Mitchell", "Rudy Gobert", "Mike Conley", "Bojan Bogdanović", "Royce O'Neale"],
      logoImgLink: "link-da-imagem-do-logo-do-Jazz",
    },
    {
      city: "Washington",
      name: "Wizards",
      div: "Southeast",
      foundation: 1961,
      players: ["Bradley Beal", "Russell Westbrook", "Thomas Bryant", "Rui Hachimura", "Daniel Gafford"],
      logoImgLink: "link-da-imagem-do-logo-do-Wizards",
    },
  ];

  