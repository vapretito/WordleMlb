export interface MLBPlayers {
  id: number;
  name: string;
  lastname: string;
  country: string;
  team: string;
  mvp: boolean;
  record: string;
  otherLeague: boolean;
  position: string;
  img: string;
}

export const MLBPlayersData: MLBPlayers[] = [
    {
      id: 1,
      name: "Mike",
      lastname: "Trout",
      country: "United States",
      team: "Los Angeles Angels",
      mvp: true,
      record: "Multiple",
      otherLeague: false,
      position: "Outfielder", 
      img: "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/545361/headshot/67/current"
    },
    {
      id: 2,
      name: "Mookie",
      lastname: "Betts",
      country: "United States",
      team: "Los Angeles Dodgers",
      mvp: true,
      record: "World Series Champion",
      otherLeague: false,
      position: "Outfielder",
      img: "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/605141/headshot/67/current"
    },
    {
      id: 3,
      name: "José",
      lastname: "Altuve",
      country: "Venezuela",
      team: "Houston Astros",
      mvp: true,
      record: "World Series Champion",
      otherLeague: false,
      position: "Second Baseman",
      img: "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/514888/headshot/67/current"
    },
    {
      id: 4,
      name: "Gerrit",
      lastname: "Cole",
      country: "United States",
      team: "New York Yankees",
      mvp: false,
      record: "All-Star",
      otherLeague: false,
      position: "Pitcher",
      img: "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/543037/headshot/67/current"
    },
    {
      id: 5,
      name: "Freddie",
      lastname: "Freeman",
      country: "United States",
      team: "Atlanta Braves",
      mvp: false,
      record: "World Series Champion",
      otherLeague: false,
      position: "First Baseman",
      img: "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/518692/headshot/67/current"
    },
    {
      id: 6,
      name: "Jacob",
      lastname: "deGrom",
      country: "United States",
      team: "New York Mets",
      mvp: false,
      record: "Cy Young Award Winner",
      otherLeague: false,
      position: "Pitcher",
      img: "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/594798/headshot/67/current"
    },
    {
      id: 7,
      name: "Bryce",
      lastname: "Harper",
      country: "United States",
      team: "Philadelphia Phillies",
      mvp: false,
      record: "All-Star",
      otherLeague: false,
      position: "Outfielder",
      img: "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/547180/headshot/67/current"
    },
    {
      id: 8,
      name: "Ronald",
      lastname: "Acuña Jr.",
      country: "Venezuela",
      team: "Atlanta Braves",
      mvp: false,
      record: "All-Star",
      otherLeague: false,
      position: "Outfielder",
      img: "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/660670/headshot/67/current"
    },
    {
      id: 9,
      name: "Fernando",
      lastname: "Tatis Jr.",
      country: "Dominican Republic",
      team: "San Diego Padres",
      mvp: false,
      record: "All-Star",
      otherLeague: false,
      position: "Shortstop",
      img: "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/665487/headshot/67/current"
    },
    {
      id: 10,
      name: "Juan",
      lastname: "Soto",
      country: "Dominican Republic",
      team: "Washington Nationals",
      mvp: false,
      record: "All-Star",
      otherLeague: false,
      position: "Outfielder",
      img: "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/665742/headshot/67/current"
    },
    {
      id: 11,
      name: "Pablo",
      lastname: "Sandoval",
      country: "Venezuela",
      team: "Free Agent",
      mvp: false,
      record: "World Series Champion",
      otherLeague: false,
      position: "Third Baseman",
       img: "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/467055/headshot/67/current"
    },
    {
      id: 12,
      name: "Miguel",
      lastname: "Cabrera",
      country: "Venezuela",
      team: "Detroit Tigers",
      mvp: true,
      record: "Triple Crown Winner",
      otherLeague: false,
      position: "First Baseman",
      img: "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/467055/headshot/67/current"
    },
    {
      id: 13,
      name: "Bob",
      lastname: "Abreu",
      country: "Venezuela",
      team: "Retired",
      mvp: false,
      record: "All-Star",
      otherLeague: true,
      position: "Outfielder",
      img: "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/110029/headshot/67/current"
    },
    {
      id: 14,
      name: "Clayton",
      lastname: "Kershaw",
      country: "United States",
      team: "Los Angeles Dodgers",
      mvp: true,
      record: "Cy Young Award Winner",
      otherLeague: false,
      position: "Pitcher", 
      img: "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/477132/headshot/67/current"
    },
    {
      id: 15,
      name: "Nolan",
      lastname: "Arenado",
      country: "United States",
      team: "St. Louis Cardinals",
      mvp: false,
      record: "Gold Glove Award Winner",
      otherLeague: false,
      position: "Third Baseman",
      img: "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/571448/headshot/67/current"
    },
    {
      id: 16,
      name: "Anthony",
      lastname: "Rendon",
      country: "United States",
      team: "Los Angeles Angels",
      mvp: false,
      record: "World Series Champion",
      otherLeague: false,
      position: "Third Baseman",
      img: "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/543685/headshot/67/current"
    },
]