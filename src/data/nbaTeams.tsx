export interface NBATeams {
    city: string;
    cityLink: string;
    name: string;
    div: string;
    foundation: number;
    players: string[];
    logoImgLink: string;
}

export const nbaTeams: NBATeams[] = [
    {
      city: "Los Angeles",
      cityLink: "https://raw.githubusercontent.com/JoaoBonfimMeireles/nba-filter/5d78b94c760a51de9b1df1d7d5d4be2d6bcc9555/public/assets/los-angeles-new.jpg",
      name: "Lakers",
      div: "Pacific",
      foundation: 1947,
      players: ["LeBron James", "Anthony Davis", "Russell Westbrook", "Dwight Howard", "Kentavious Caldwell-Pope"],
      logoImgLink: "https://raw.githubusercontent.com/JoaoBonfimMeireles/nba-filter/main/public/assets/lakers.png",
    },
    {
      city: "Los Angeles",
      cityLink: "https://raw.githubusercontent.com/JoaoBonfimMeireles/nba-filter/5d78b94c760a51de9b1df1d7d5d4be2d6bcc9555/public/assets/los-angeles.jpg",
      name: "Clippers",
      div: "Pacific",
      foundation: 1970,
      players: ["Kawhi Leonard", "Paul George", "Serge Ibaka", "Marcus Morris Sr.", "Ivica Zubac"],
      logoImgLink: "https://raw.githubusercontent.com/JoaoBonfimMeireles/nba-filter/main/public/assets/Clippers.png",
    },
    {
      city: "Phoenix",
      cityLink: "https://raw.githubusercontent.com/JoaoBonfimMeireles/nba-filter/5d78b94c760a51de9b1df1d7d5d4be2d6bcc9555/public/assets/phoenix.jpg",
      name: "Suns",
      div: "Pacific",
      foundation: 1968,
      players: ["Devin Booker", "Chris Paul", "Deandre Ayton", "Mikal Bridges", "Jae Crowder"],
      logoImgLink: "https://raw.githubusercontent.com/JoaoBonfimMeireles/nba-filter/main/public/assets/Suns.png",
    },
    {
      city: "San Antonio",
      cityLink: "https://raw.githubusercontent.com/JoaoBonfimMeireles/nba-filter/5d78b94c760a51de9b1df1d7d5d4be2d6bcc9555/public/assets/san%20antonio.jpg",
      name: "Spurs",
      div: "Southwest",
      foundation: 1967,
      players: ["DeMar DeRozan", "Keldon Johnson", "Jakob Poeltl", "Lonnie Walker IV", "Derrick White"],
      logoImgLink: "https://raw.githubusercontent.com/JoaoBonfimMeireles/nba-filter/main/public/assets/Spurs.png",
    },
    {
      city: "Toronto",
      cityLink: "https://raw.githubusercontent.com/JoaoBonfimMeireles/nba-filter/5d78b94c760a51de9b1df1d7d5d4be2d6bcc9555/public/assets/toronto.jpg",
      name: "Raptors",
      div: "Atlantic",
      foundation: 1995,
      players: ["Pascal Siakam", "Fred VanVleet", "OG Anunoby", "Gary Trent Jr.", "Chris Boucher"],
      logoImgLink: "https://raw.githubusercontent.com/JoaoBonfimMeireles/nba-filter/main/public/assets/Raptors.png",
    },
    {
      city: "Utah",
      cityLink: "https://raw.githubusercontent.com/JoaoBonfimMeireles/nba-filter/5d78b94c760a51de9b1df1d7d5d4be2d6bcc9555/public/assets/utah.jpg",
      name: "Jazz",
      div: "Northwest",
      foundation: 1974,
      players: ["Donovan Mitchell", "Rudy Gobert", "Mike Conley", "Bojan Bogdanović", "Royce O'Neale"],
      logoImgLink: "https://raw.githubusercontent.com/JoaoBonfimMeireles/nba-filter/main/public/assets/Jazz.png",
    },
    {
      city: "Washington",
      cityLink: "https://raw.githubusercontent.com/JoaoBonfimMeireles/nba-filter/5d78b94c760a51de9b1df1d7d5d4be2d6bcc9555/public/assets/washington.jpg",
      name: "Wizards",
      div: "Southeast",
      foundation: 1961,
      players: ["Bradley Beal", "Russell Westbrook", "Thomas Bryant", "Rui Hachimura", "Daniel Gafford"],
      logoImgLink: "https://raw.githubusercontent.com/JoaoBonfimMeireles/nba-filter/main/public/assets/Wizards.png",
    },
  ];

  