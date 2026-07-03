/* ============================================
   CHABELS DYNASTY — 3-Tier Power Rankings
   Based on Hashtag Basketball Dynasty Rankings
   ============================================ */

// Hashtag Basketball POINTS-LEAGUE Dynasty Rankings (Top 460) — updated 02 July 2026
// Format: { name, rank, age, team, pos }
const DYNASTY_DB = [
  { name: "Victor Wembanyama", rank: 1, age: 22.5, team: "SA", pos: "PF,C" },
  { name: "Shai Gilgeous-Alexander", rank: 2, age: 28, team: "OKC", pos: "PG" },
  { name: "Luka Doncic", rank: 3, age: 27.3, team: "LAL", pos: "PG,SG" },
  { name: "Nikola Jokic", rank: 4, age: 31.4, team: "DEN", pos: "C" },
  { name: "Giannis Antetokounmpo", rank: 5, age: 31.6, team: "MIA", pos: "PF,C" },
  { name: "Cade Cunningham", rank: 6, age: 24.8, team: "DET", pos: "PG,SG" },
  { name: "Cooper Flagg", rank: 7, age: 19.5, team: "DAL", pos: "PG,SG,SF" },
  { name: "Tyrese Maxey", rank: 8, age: 25.7, team: "PHI", pos: "PG" },
  { name: "Anthony Edwards", rank: 9, age: 24.9, team: "MIN", pos: "PG,SG" },
  { name: "Scottie Barnes", rank: 10, age: 24.9, team: "TOR", pos: "SG,SF,PF,C" },
  { name: "Alperen Sengün", rank: 11, age: 23.9, team: "HOU", pos: "PF,C" },
  { name: "Jalen Johnson", rank: 12, age: 24.5, team: "ATL", pos: "SF,PF" },
  { name: "Cameron Boozer", rank: 13, age: 19, team: "MEM", pos: "" },
  { name: "Jayson Tatum", rank: 14, age: 28.3, team: "BOS", pos: "SF,PF" },
  { name: "Tyrese Haliburton", rank: 15, age: 26.3, team: "IND", pos: "PG,SG" },
  { name: "Chet Holmgren", rank: 16, age: 24.2, team: "OKC", pos: "PF,C" },
  { name: "Evan Mobley", rank: 17, age: 25, team: "CLE", pos: "PF,C" },
  { name: "Dylan Harper", rank: 18, age: 20.3, team: "SA", pos: "PG,SG" },
  { name: "Darryn Peterson", rank: 19, age: 19.5, team: "UTA", pos: "" },
  { name: "Donovan Mitchell", rank: 20, age: 29.8, team: "CLE", pos: "PG,SG" },
  { name: "Jalen Williams", rank: 21, age: 25.2, team: "OKC", pos: "SF,PF" },
  { name: "Trae Young", rank: 22, age: 27.8, team: "WAS", pos: "PG" },
  { name: "Trey Murphy III", rank: 23, age: 26, team: "NO", pos: "SG,SF,PF" },
  { name: "Amen Thompson", rank: 24, age: 23.4, team: "HOU", pos: "PG,SG,SF" },
  { name: "Austin Reaves", rank: 25, age: 28.1, team: "LAL", pos: "PG,SG,SF" },
  { name: "Devin Booker", rank: 26, age: 29.7, team: "PHO", pos: "PG,SG" },
  { name: "Paolo Banchero", rank: 27, age: 23.6, team: "ORL", pos: "PF,C" },
  { name: "Josh Giddey", rank: 28, age: 23.7, team: "CHI", pos: "PG,SG" },
  { name: "AJ Dybantsa", rank: 29, age: 19.4, team: "WAS", pos: "" },
  { name: "Alexandre Sarr", rank: 30, age: 21.2, team: "WAS", pos: "C" },
  { name: "Deni Avdija", rank: 31, age: 25.5, team: "POR", pos: "SG,SF,PF" },
  { name: "Karl-Anthony Towns", rank: 32, age: 30.6, team: "NY", pos: "PF,C" },
  { name: "Kon Knueppel", rank: 33, age: 20.9, team: "CHA", pos: "SG,SF" },
  { name: "Franz Wagner", rank: 34, age: 24.8, team: "ORL", pos: "SF,PF" },
  { name: "Jamal Murray", rank: 35, age: 29.4, team: "DEN", pos: "PG,SG" },
  { name: "Jalen Duren", rank: 36, age: 22.6, team: "DET", pos: "C" },
  { name: "Jaren Jackson Jr.", rank: 37, age: 26.8, team: "UTA", pos: "PF,C" },
  { name: "Jalen Brunson", rank: 38, age: 29.8, team: "NY", pos: "PG" },
  { name: "LaMelo Ball", rank: 39, age: 24.9, team: "MIN", pos: "PG,SG" },
  { name: "Zion Williamson", rank: 40, age: 26, team: "NO", pos: "SF,PF,C" },
  { name: "Stephon Castle", rank: 41, age: 21.7, team: "SA", pos: "PG,SG" },
  { name: "Donovan Clingan", rank: 42, age: 22.4, team: "POR", pos: "C" },
  { name: "Darius Garland", rank: 43, age: 26.4, team: "LAC", pos: "PG" },
  { name: "Caleb Wilson", rank: 44, age: 20, team: "CHI", pos: "" },
  { name: "Jaylen Brown", rank: 45, age: 29.7, team: "PHI", pos: "SG,SF" },
  { name: "VJ Edgecombe", rank: 46, age: 20.9, team: "PHI", pos: "PG,SG" },
  { name: "Keyonte George", rank: 47, age: 22.7, team: "UTA", pos: "PG,SG" },
  { name: "Bam Adebayo", rank: 48, age: 29, team: "MIA", pos: "PF,C" },
  { name: "Keaton Wagler", rank: 49, age: 19.4, team: "LAC", pos: "" },
  { name: "Anthony Davis", rank: 50, age: 33.3, team: "WAS", pos: "PF,C" },
  { name: "Tyler Herro", rank: 51, age: 26.5, team: "MIL", pos: "PG,SG" },
  { name: "De'Aaron Fox", rank: 52, age: 28.5, team: "SA", pos: "PG,SG" },
  { name: "Mikel Brown Jr.", rank: 53, age: 20.2, team: "BKN", pos: "" },
  { name: "Darius Acuff Jr.", rank: 54, age: 19.6, team: "SAC", pos: "" },
  { name: "James Harden", rank: 55, age: 36.9, team: "CLE", pos: "PG,SG" },
  { name: "Stephen Curry", rank: 56, age: 38.3, team: "GS", pos: "PG" },
  { name: "RJ Barrett", rank: 57, age: 26.1, team: "TOR", pos: "SG,SF,PF" },
  { name: "Domantas Sabonis", rank: 58, age: 30.2, team: "SAC", pos: "PF,C" },
  { name: "Lauri Markkanen", rank: 59, age: 29.1, team: "UTA", pos: "SF,PF" },
  { name: "Matas Buzelis", rank: 60, age: 21.7, team: "CHI", pos: "SF,PF" },
  { name: "Zach Edey", rank: 61, age: 24.1, team: "MEM", pos: "C" },
  { name: "Onyeka Okongwu", rank: 62, age: 25.6, team: "ATL", pos: "PF,C" },
  { name: "Brandon Miller", rank: 63, age: 23.6, team: "CHA", pos: "SF,PF" },
  { name: "Pascal Siakam", rank: 64, age: 32.3, team: "IND", pos: "SF,PF,C" },
  { name: "Ivica Zubac", rank: 65, age: 29.3, team: "IND", pos: "C" },
  { name: "Desmond Bane", rank: 66, age: 28, team: "ORL", pos: "SG,SF" },
  { name: "Kel'el Ware", rank: 67, age: 22.2, team: "MIL", pos: "PF,C" },
  { name: "OG Anunoby", rank: 68, age: 29, team: "NY", pos: "SF,PF" },
  { name: "Michael Porter Jr.", rank: 69, age: 28, team: "BKN", pos: "SF,PF" },
  { name: "Keegan Murray", rank: 70, age: 25.9, team: "SAC", pos: "SF,PF" },
  { name: "Jalen Green", rank: 71, age: 24.4, team: "PHO", pos: "PG,SG,SF" },
  { name: "Ja Morant", rank: 72, age: 26.9, team: "POR", pos: "PG" },
  { name: "Julius Randle", rank: 73, age: 31.6, team: "BKN", pos: "PF,C" },
  { name: "Fred VanVleet", rank: 74, age: 32.4, team: "HOU", pos: "PG" },
  { name: "Scoot Henderson", rank: 75, age: 22.4, team: "POR", pos: "PG" },
  { name: "Derrick White", rank: 76, age: 32, team: "BOS", pos: "PG,SG" },
  { name: "Naz Reid", rank: 77, age: 26.9, team: "CHA", pos: "PF,C" },
  { name: "Walker Kessler", rank: 78, age: 24.9, team: "LAL", pos: "C" },
  { name: "Nickeil Alexander-Walker", rank: 79, age: 27.8, team: "ATL", pos: "PG,SG,SF" },
  { name: "Kevin Durant", rank: 80, age: 37.8, team: "HOU", pos: "SG,SF,PF" },
  { name: "Jaden McDaniels", rank: 81, age: 25.8, team: "MIN", pos: "SF,PF" },
  { name: "Brandon Ingram", rank: 82, age: 28.8, team: "LAC", pos: "SG,SF,PF" },
  { name: "Derik Queen", rank: 83, age: 21.5, team: "NO", pos: "PF,C" },
  { name: "Kingston Flemings", rank: 84, age: 19.5, team: "ATL", pos: "" },
  { name: "Brayden Burries", rank: 85, age: 20.8, team: "MIL", pos: "" },
  { name: "Collin Murray-Boyles", rank: 86, age: 21.1, team: "TOR", pos: "PF,C" },
  { name: "Reed Sheppard", rank: 87, age: 22, team: "HOU", pos: "PG,SG" },
  { name: "Immanuel Quickley", rank: 88, age: 27, team: "TOR", pos: "PG,SG" },
  { name: "Mikal Bridges", rank: 89, age: 29.8, team: "NY", pos: "SG,SF,PF" },
  { name: "Isaiah Hartenstein", rank: 90, age: 28.2, team: "OKC", pos: "C" },
  { name: "Ajay Mitchell", rank: 91, age: 24, team: "OKC", pos: "PG,SG" },
  { name: "Jalen Suggs", rank: 92, age: 25.1, team: "ORL", pos: "PG,SG" },
  { name: "Anthony Black", rank: 93, age: 22.5, team: "ORL", pos: "PG,SG,SF" },
  { name: "Kyshawn George", rank: 94, age: 22.6, team: "WAS", pos: "SG,SF,PF" },
  { name: "Kyrie Irving", rank: 95, age: 34.3, team: "DAL", pos: "PG" },
  { name: "Jabari Smith Jr.", rank: 96, age: 23.1, team: "HOU", pos: "SF,PF,C" },
  { name: "Mark Williams", rank: 97, age: 24.5, team: "PHO", pos: "C" },
  { name: "Nicolas Claxton", rank: 98, age: 27.2, team: "CHI", pos: "C" },
  { name: "Dejounte Murray", rank: 99, age: 29.8, team: "NO", pos: "PG,SG" },
  { name: "Joel Embiid", rank: 100, age: 32.3, team: "PHI", pos: "C" },
  { name: "Dyson Daniels", rank: 101, age: 23.3, team: "ATL", pos: "PG,SG,SF" },
  { name: "Norman Powell", rank: 102, age: 33.1, team: "MIA", pos: "SG,SF" },
  { name: "Deandre Ayton", rank: 103, age: 27.9, team: "LAL", pos: "C" },
  { name: "Myles Turner", rank: 104, age: 30.3, team: "MIL", pos: "C" },
  { name: "Ace Bailey", rank: 105, age: 19.9, team: "UTA", pos: "SG,SF,PF" },
  { name: "Jeremiah Fears", rank: 106, age: 19.7, team: "NO", pos: "PG,SG" },
  { name: "Kawhi Leonard", rank: 107, age: 35, team: "TOR", pos: "SF,PF" },
  { name: "Morez Johnson Jr.", rank: 108, age: 20.4, team: "DAL", pos: "" },
  { name: "Jarrett Allen", rank: 109, age: 28.2, team: "CLE", pos: "C" },
  { name: "Kristaps Porzingis", rank: 110, age: 30.9, team: "GS", pos: "PF,C" },
  { name: "Rudy Gobert", rank: 111, age: 34, team: "MIN", pos: "C" },
  { name: "Zach LaVine", rank: 112, age: 31.3, team: "SAC", pos: "PG,SG,SF" },
  { name: "Coby White", rank: 113, age: 26.4, team: "CHA", pos: "PG,SG" },
  { name: "Peyton Watson", rank: 114, age: 23.8, team: "DEN", pos: "SF,PF" },
  { name: "Brandin Podziemski", rank: 115, age: 23.4, team: "GS", pos: "PG,SG" },
  { name: "Cedric Coward", rank: 116, age: 22.8, team: "MEM", pos: "SG,SF" },
  { name: "Jaime Jaquez Jr.", rank: 117, age: 25.4, team: "MIL", pos: "SG,SF,PF" },
  { name: "Hannes Steinbach", rank: 118, age: 20.2, team: "CHA", pos: "" },
  { name: "Ryan Kalkbrenner", rank: 119, age: 24.5, team: "CHA", pos: "C" },
  { name: "Shaedon Sharpe", rank: 120, age: 23.1, team: "POR", pos: "PG,SG,SF" },
  { name: "Devin Vassell", rank: 121, age: 25.9, team: "SA", pos: "SG,SF" },
  { name: "Ryan Rollins", rank: 122, age: 24, team: "MIL", pos: "PG,SG" },
  { name: "Ausar Thompson", rank: 123, age: 23.4, team: "DET", pos: "SG,SF,PF" },
  { name: "Toumani Camara", rank: 124, age: 26.2, team: "POR", pos: "SF,PF,C" },
  { name: "Paul George", rank: 125, age: 36.2, team: "BOS", pos: "SG,SF,PF" },
  { name: "Miles Bridges", rank: 126, age: 28.3, team: "PHO", pos: "SF,PF" },
  { name: "Yaxel Lendeborg", rank: 127, age: 23.8, team: "GS", pos: "" },
  { name: "Christian Braun", rank: 128, age: 25.2, team: "DEN", pos: "SG,SF,PF" },
  { name: "Payton Pritchard", rank: 129, age: 28.4, team: "BOS", pos: "PG" },
  { name: "Josh Hart", rank: 130, age: 31.3, team: "NY", pos: "SG,SF,PF" },
  { name: "Maxime Raynaud", rank: 131, age: 23.2, team: "SAC", pos: "C" },
  { name: "LeBron James", rank: 132, age: 41.5, team: "LAL", pos: "SF,PF" },
  { name: "Cason Wallace", rank: 133, age: 22.7, team: "OKC", pos: "PG,SG,SF" },
  { name: "Tre Johnson", rank: 134, age: 20.3, team: "WAS", pos: "PG,SG,SF" },
  { name: "Jakob Poeltl", rank: 135, age: 30.7, team: "TOR", pos: "C" },
  { name: "Dailyn Swain", rank: 136, age: 21, team: "CHI", pos: "" },
  { name: "Allen Graves", rank: 137, age: 19.9, team: "TOR", pos: "" },
  { name: "Bilal Coulibaly", rank: 138, age: 21.9, team: "WAS", pos: "SG,SF" },
  { name: "Nate Ament", rank: 139, age: 19.6, team: "MIL", pos: "" },
  { name: "Moussa Diabaté", rank: 140, age: 24.4, team: "CHA", pos: "C" },
  { name: "Day'Ron Sharpe", rank: 141, age: 24.7, team: "BKN", pos: "C" },
  { name: "Dereck Lively II", rank: 142, age: 22.4, team: "DAL", pos: "C" },
  { name: "Andrew Nembhard", rank: 143, age: 26.5, team: "IND", pos: "PG,SG" },
  { name: "Santi Aldama", rank: 144, age: 25.5, team: "DAL", pos: "PF,C" },
  { name: "Wendell Carter Jr.", rank: 145, age: 27.2, team: "ORL", pos: "C" },
  { name: "Collin Gillespie", rank: 146, age: 27, team: "PHO", pos: "PG,SG" },
  { name: "Tari Eason", rank: 147, age: 25.1, team: "HOU", pos: "SG,SF,PF" },
  { name: "Cameron Johnson", rank: 148, age: 30.3, team: "DEN", pos: "SG,SF,PF" },
  { name: "DeMar DeRozan", rank: 149, age: 36.9, team: "SAC", pos: "SF,PF" },
  { name: "Jaylen Wells", rank: 150, age: 22.9, team: "MEM", pos: "SG,SF" },
  { name: "Ayo Dosunmu", rank: 151, age: 26.5, team: "MIN", pos: "PG,SG,SF" },
  { name: "CJ McCollum", rank: 152, age: 34.8, team: "ATL", pos: "PG,SG" },
  { name: "Jimmy Butler", rank: 153, age: 36.8, team: "GS", pos: "SG,SF,PF" },
  { name: "Khaman Maluach", rank: 154, age: 19.8, team: "PHO", pos: "C" },
  { name: "Anfernee Simons", rank: 155, age: 27.1, team: "CHI", pos: "PG,SG" },
  { name: "Aaron Nesmith", rank: 156, age: 26.7, team: "IND", pos: "SG,SF" },
  { name: "Isaiah Stewart", rank: 157, age: 25.1, team: "MEM", pos: "PF,C" },
  { name: "Yanic Konan Niederhauser", rank: 158, age: 23.3, team: "LAC", pos: "C" },
  { name: "Herbert Jones", rank: 159, age: 27.7, team: "NO", pos: "SG,SF,PF" },
  { name: "P.J. Washington", rank: 160, age: 27.9, team: "DAL", pos: "SF,PF,C" },
  { name: "Bennedict Mathurin", rank: 161, age: 24, team: "LAC", pos: "SG,SF" },
  { name: "Egor Demin", rank: 162, age: 20.3, team: "BKN", pos: "PG,SG" },
  { name: "Robert Williams III", rank: 163, age: 28.7, team: "POR", pos: "C" },
  { name: "Kevin Porter Jr.", rank: 164, age: 26.2, team: "MIL", pos: "PG,SG" },
  { name: "Jaylon Tyson", rank: 165, age: 23.6, team: "CLE", pos: "SG,SF" },
  { name: "Zaccharie Risacher", rank: 166, age: 21.2, team: "ATL", pos: "SF,PF" },
  { name: "Aaron Gordon", rank: 167, age: 30.8, team: "DEN", pos: "PF,C" },
  { name: "Daniss Jenkins", rank: 168, age: 24.9, team: "DET", pos: "PG,SG" },
  { name: "Davion Mitchell", rank: 169, age: 27.8, team: "MIA", pos: "PG" },
  { name: "Damian Lillard", rank: 170, age: 36, team: "POR", pos: "PG" },
  { name: "Dillon Brooks", rank: 171, age: 30.4, team: "PHO", pos: "SF,PF" },
  { name: "Daniel Gafford", rank: 172, age: 27.8, team: "DAL", pos: "C" },
  { name: "Aday Mara", rank: 173, age: 21.2, team: "OKC", pos: "" },
  { name: "Grayson Allen", rank: 174, age: 30.7, team: "CHA", pos: "PG,SG,SF" },
  { name: "Ebuka Okorie", rank: 175, age: 19.2, team: "DET", pos: "" },
  { name: "Christian Anderson", rank: 176, age: 20.3, team: "CHA", pos: "" },
  { name: "Joshua Jefferson", rank: 177, age: 22.6, team: "BKN", pos: "" },
  { name: "Labaron Philon Jr.", rank: 178, age: 20.6, team: "PHI", pos: "" },
  { name: "Noah Clowney", rank: 179, age: 22, team: "BKN", pos: "PF,C" },
  { name: "Terrence Shannon Jr.", rank: 180, age: 25.9, team: "MIN", pos: "SF,PF" },
  { name: "Malik Monk", rank: 181, age: 28.4, team: "SAC", pos: "PG,SG" },
  { name: "Jonathan Kuminga", rank: 182, age: 23.7, team: "ATL", pos: "SF,PF" },
  { name: "Leonard Miller", rank: 183, age: 22.6, team: "CHI", pos: "SF,PF" },
  { name: "Jarace Walker", rank: 184, age: 22.8, team: "IND", pos: "SF,PF" },
  { name: "John Collins", rank: 185, age: 28.8, team: "LAC", pos: "PF,C" },
  { name: "Jordan Poole", rank: 186, age: 27, team: "NO", pos: "PG,SG" },
  { name: "Kyle Filipowski", rank: 187, age: 22.7, team: "UTA", pos: "PF,C" },
  { name: "Oso Ighodaro", rank: 188, age: 24, team: "PHO", pos: "C" },
  { name: "Gui Santos", rank: 189, age: 24, team: "GS", pos: "SF,PF" },
  { name: "Isaiah Collier", rank: 190, age: 21.7, team: "UTA", pos: "PG,SG" },
  { name: "Will Riley", rank: 191, age: 20.4, team: "WAS", pos: "SF,PF" },
  { name: "Rui Hachimura", rank: 192, age: 28.4, team: "LAL", pos: "SF,PF" },
  { name: "Jared McCain", rank: 193, age: 22.4, team: "OKC", pos: "PG,SG" },
  { name: "Carlton Carrington", rank: 194, age: 21, team: "WAS", pos: "PG,SG" },
  { name: "Ousmane Dieng", rank: 195, age: 23.1, team: "MIL", pos: "SF,PF,C" },
  { name: "Max Christie", rank: 196, age: 23.4, team: "DAL", pos: "SG,SF" },
  { name: "Nikola Vucevic", rank: 197, age: 35.7, team: "ORL", pos: "C" },
  { name: "Donte DiVincenzo", rank: 198, age: 29.4, team: "MIN", pos: "PG,SG" },
  { name: "Caris LeVert", rank: 199, age: 31.9, team: "DET", pos: "SG,SF" },
  { name: "Max Strus", rank: 200, age: 30.3, team: "CLE", pos: "SG,SF" },
  { name: "Cam Spencer", rank: 201, age: 26.2, team: "MEM", pos: "PG,SG" },
  { name: "Nique Clifford", rank: 202, age: 24.4, team: "SAC", pos: "SG,SF" },
  { name: "Jalen Smith", rank: 203, age: 26.3, team: "CHI", pos: "PF,C" },
  { name: "Collin Sexton", rank: 204, age: 27.5, team: "CHI", pos: "PG,SG" },
  { name: "Carter Bryant", rank: 205, age: 20.6, team: "SA", pos: "SF" },
  { name: "Rasheer Fleming", rank: 206, age: 22, team: "PHO", pos: "PF" },
  { name: "Joan Beringer", rank: 207, age: 19.6, team: "MIN", pos: "C" },
  { name: "Nikola Jovic", rank: 208, age: 23.1, team: "MIA", pos: "PF,C" },
  { name: "Ron Holland II", rank: 209, age: 21, team: "DET", pos: "SF,PF" },
  { name: "Cam Whitmore", rank: 210, age: 22, team: "WAS", pos: "SF,PF" },
  { name: "GG Jackson II", rank: 211, age: 21.5, team: "MEM", pos: "SF,PF,C" },
  { name: "Kasparas Jakucionis", rank: 212, age: 20.1, team: "MIL", pos: "PG" },
  { name: "Mitchell Robinson", rank: 213, age: 28.3, team: "NY", pos: "C" },
  { name: "Keon Ellis", rank: 214, age: 26.5, team: "CLE", pos: "PG,SG" },
  { name: "Jerami Grant", rank: 215, age: 32.3, team: "MEM", pos: "SF,PF" },
  { name: "Obi Toppin", rank: 216, age: 28.3, team: "IND", pos: "PF" },
  { name: "Cameron Carr", rank: 217, age: 21.6, team: "LAL", pos: "" },
  { name: "Dylan Cardwell", rank: 218, age: 24.5, team: "SAC", pos: "PF,C" },
  { name: "Neemias Queta", rank: 219, age: 27, team: "BOS", pos: "PF,C" },
  { name: "Zuby Ejiofor", rank: 220, age: 22.2, team: "ATL", pos: "" },
  { name: "Karim Lopez", rank: 221, age: 19.2, team: "MEM", pos: "" },
  { name: "Jayden Quaintance", rank: 222, age: 19, team: "SA", pos: "" },
  { name: "Jay Huff", rank: 223, age: 28.9, team: "IND", pos: "C" },
  { name: "Jamal Shead", rank: 224, age: 23.9, team: "TOR", pos: "PG" },
  { name: "Dru Smith", rank: 225, age: 28.5, team: "MIA", pos: "PG,SG" },
  { name: "Isaiah Jackson", rank: 226, age: 24.5, team: "LAC", pos: "C" },
  { name: "Drake Powell", rank: 227, age: 20.8, team: "BKN", pos: "SG" },
  { name: "Thomas Sorber", rank: 228, age: 20.5, team: "OKC", pos: "C" },
  { name: "Brice Sensabaugh", rank: 229, age: 22.7, team: "UTA", pos: "SG,SF,PF" },
  { name: "Saddiq Bey", rank: 230, age: 27.2, team: "NO", pos: "SF,PF" },
  { name: "De'Anthony Melton", rank: 231, age: 28.1, team: "GS", pos: "PG,SG" },
  { name: "Jrue Holiday", rank: 232, age: 36.1, team: "POR", pos: "PG,SG" },
  { name: "Taylor Hendricks", rank: 233, age: 22.6, team: "MEM", pos: "SF,PF,C" },
  { name: "Naji Marshall", rank: 234, age: 28.4, team: "DAL", pos: "SG,SF,PF" },
  { name: "Tobias Harris", rank: 235, age: 34, team: "DET", pos: "PF" },
  { name: "Yang Hansen", rank: 236, age: 21, team: "POR", pos: "C" },
  { name: "Jusuf Nurkic", rank: 237, age: 31.9, team: "UTA", pos: "C" },
  { name: "Kelly Oubre Jr.", rank: 238, age: 30.6, team: "PHI", pos: "SF,PF" },
  { name: "Quentin Grimes", rank: 239, age: 26.2, team: "PHI", pos: "SG,SF" },
  { name: "Alex Karaban", rank: 240, age: 23.6, team: "SAC", pos: "" },
  { name: "Ryan Conwell", rank: 241, age: 22, team: "MIA", pos: "" },
  { name: "Sergio de Larrea", rank: 242, age: 20.6, team: "DAL", pos: "" },
  { name: "Andrew Wiggins", rank: 243, age: 31.4, team: "MIA", pos: "SG,SF,PF" },
  { name: "Draymond Green", rank: 244, age: 36.3, team: "GS", pos: "PF,C" },
  { name: "Jaylin Williams", rank: 245, age: 24, team: "OKC", pos: "PF,C" },
  { name: "Henri Veesaar", rank: 246, age: 22.3, team: "ATL", pos: "" },
  { name: "Baba Miller", rank: 247, age: 22.4, team: "LAC", pos: "" },
  { name: "Richie Saunders", rank: 248, age: 24.8, team: "MEM", pos: "" },
  { name: "Jaron Pierre Jr.", rank: 249, age: 24, team: "NO", pos: "" },
  { name: "Tyler Bilodeau", rank: 250, age: 22.2, team: "BKN", pos: "" },
  { name: "Ryan Dunn", rank: 251, age: 23.5, team: "PHO", pos: "SF,PF" },
  { name: "Miles McBride", rank: 252, age: 25.8, team: "NY", pos: "PG,SG" },
  { name: "Danny Wolf", rank: 253, age: 22.2, team: "BKN", pos: "PF,C" },
  { name: "Cody Williams", rank: 254, age: 21.6, team: "UTA", pos: "SG,SF" },
  { name: "Josh Minott", rank: 255, age: 23.6, team: "BKN", pos: "SF,PF" },
  { name: "Justin Champagnie", rank: 256, age: 25, team: "WAS", pos: "SF,PF" },
  { name: "Luke Kornet", rank: 257, age: 31, team: "SA", pos: "C" },
  { name: "Nolan Traoré", rank: 258, age: 20.1, team: "BKN", pos: "PG" },
  { name: "Noa Essengue", rank: 259, age: 19.5, team: "CHI", pos: "PF" },
  { name: "Yves Missi", rank: 260, age: 22.1, team: "NO", pos: "C" },
  { name: "Pelle Larsson", rank: 261, age: 25.4, team: "MIA", pos: "SG,SF" },
  { name: "Julian Champagnie", rank: 262, age: 25, team: "SA", pos: "SG,SF" },
  { name: "Keldon Johnson", rank: 263, age: 26.7, team: "SA", pos: "SF,PF" },
  { name: "Sandro Mamukelashvili", rank: 264, age: 27.1, team: "TOR", pos: "PF,C" },
  { name: "Emanuel Sharp", rank: 265, age: 22.3, team: "SAC", pos: "" },
  { name: "Tarris Reed Jr.", rank: 266, age: 22.9, team: "SA", pos: "" },
  { name: "Isaiah Evans", rank: 267, age: 20.6, team: "MIN", pos: "" },
  { name: "Kobe Sanders", rank: 268, age: 24.1, team: "LAC", pos: "SG,SF" },
  { name: "Devin Carter", rank: 269, age: 24.3, team: "ATL", pos: "PG,SG" },
  { name: "Trevon Brazile", rank: 270, age: 23.5, team: "DEN", pos: "" },
  { name: "Izaiyah Nelson", rank: 271, age: 22.8, team: "ORL", pos: "" },
  { name: "Koa Peat", rank: 272, age: 19.4, team: "PHO", pos: "" },
  { name: "Bruce Thornton", rank: 273, age: 22.8, team: "HOU", pos: "" },
  { name: "D'Angelo Russell", rank: 274, age: 30.4, team: "WAS", pos: "PG" },
  { name: "Bradley Beal", rank: 275, age: 33, team: "LAC", pos: "SG,SF" },
  { name: "Goga Bitadze", rank: 276, age: 27, team: "ORL", pos: "C" },
  { name: "Gradey Dick", rank: 277, age: 22.6, team: "LAC", pos: "SG,SF" },
  { name: "Jordan Walsh", rank: 278, age: 22.3, team: "BOS", pos: "SG,SF,PF" },
  { name: "Luke Kennard", rank: 279, age: 30, team: "LAL", pos: "PG,SG" },
  { name: "Ty Jerome", rank: 280, age: 29, team: "MEM", pos: "PG,SG" },
  { name: "Jordan Miller", rank: 281, age: 26.4, team: "LAC", pos: "SG,SF" },
  { name: "Brandon Williams", rank: 282, age: 26.6, team: "DAL", pos: "PG" },
  { name: "Bennett Stirtz", rank: 283, age: 22.7, team: "OKC", pos: "" },
  { name: "Chris Cenac Jr.", rank: 284, age: 19.4, team: "BOS", pos: "" },
  { name: "Malique Lewis", rank: 285, age: 21.6, team: "MIL", pos: "" },
  { name: "Felix Okpara", rank: 286, age: 22.2, team: "WAS", pos: "" },
  { name: "Tobi Lawal", rank: 287, age: 23.2, team: "DAL", pos: "" },
  { name: "Vsevolod Ishchenko", rank: 288, age: 21.4, team: "DAL", pos: "" },
  { name: "Michael Ajayi", rank: 289, age: 23.1, team: "CHA", pos: "" },
  { name: "Jake LaRavia", rank: 290, age: 24.7, team: "LAL", pos: "SF,PF" },
  { name: "Moussa Cisse", rank: 291, age: 24.0, team: "", pos: "" },
  { name: "Aaron Wiggins", rank: 292, age: 27.5, team: "ATL", pos: "SG,SF" },
  { name: "Ryan Nembhard", rank: 293, age: 23.3, team: "DAL", pos: "PG" },
  { name: "Sion James", rank: 294, age: 23.6, team: "CHA", pos: "SG,SF" },
  { name: "Walter Clayton Jr.", rank: 295, age: 23.3, team: "MEM", pos: "PG,SG" },
  { name: "De'Andre Hunter", rank: 296, age: 28.6, team: "SAC", pos: "SF,PF" },
  { name: "Kyle Kuzma", rank: 297, age: 30.9, team: "MIL", pos: "SF,PF" },
  { name: "Gary Trent Jr.", rank: 298, age: 27.5, team: "MIL", pos: "SG,SF" },
  { name: "Luguentz Dort", rank: 299, age: 27.2, team: "OKC", pos: "SG,SF" },
  { name: "Russell Westbrook", rank: 300, age: 37.6, team: "SAC", pos: "PG,SG" },
  { name: "Scotty Pippen Jr.", rank: 301, age: 25.6, team: "MEM", pos: "PG,SG" },
  { name: "Bobby Portis", rank: 302, age: 31.4, team: "MIA", pos: "PF,C" },
  { name: "Adem Bona", rank: 303, age: 23.3, team: "PHI", pos: "C" },
  { name: "Moses Moody", rank: 304, age: 24.1, team: "GS", pos: "SG,SF,PF" },
  { name: "Cole Anthony", rank: 305, age: 26.1, team: "PHO", pos: "PG" },
  { name: "Pat Spencer", rank: 306, age: 30, team: "GS", pos: "PG,SG" },
  { name: "Tristan Da Silva", rank: 307, age: 25.1, team: "ORL", pos: "SF,PF" },
  { name: "Derrick Jones Jr.", rank: 308, age: 29.4, team: "LAC", pos: "SF,PF" },
  { name: "Bones Hyland", rank: 309, age: 25.8, team: "MIN", pos: "PG,SG" },
  { name: "Grant Williams", rank: 310, age: 27.6, team: "CHA", pos: "PF,C" },
  { name: "Andre Drummond", rank: 311, age: 32.9, team: "PHI", pos: "C" },
  { name: "Dennis Schröder", rank: 312, age: 32.8, team: "CLE", pos: "PG,SG" },
  { name: "Duncan Robinson", rank: 313, age: 32.2, team: "DET", pos: "SG,SF" },
  { name: "Spencer Jones", rank: 314, age: 25.1, team: "DEN", pos: "SG,SF" },
  { name: "Cam Thomas", rank: 315, age: 24.7, team: "MIL", pos: "SG,SF" },
  { name: "Marcus Smart", rank: 316, age: 32.3, team: "LAL", pos: "PG,SG" },
  { name: "Paul Reed", rank: 317, age: 27.1, team: "DET", pos: "PF,C" },
  { name: "Julian Strawther", rank: 318, age: 24.2, team: "DEN", pos: "SG,SF" },
  { name: "Rob Dillingham", rank: 319, age: 21.5, team: "CHI", pos: "PG" },
  { name: "Zach Collins", rank: 320, age: 28.6, team: "CHI", pos: "C" },
  { name: "Johnny Furphy", rank: 321, age: 21.6, team: "IND", pos: "SG,SF" },
  { name: "Quinten Post", rank: 322, age: 26.3, team: "GS", pos: "C" },
  { name: "Marcus Sasser", rank: 323, age: 25.8, team: "DET", pos: "PG" },
  { name: "Alex Caruso", rank: 324, age: 32.3, team: "OKC", pos: "SG,SF" },
  { name: "Precious Achiuwa", rank: 325, age: 26.8, team: "SAC", pos: "PF,C" },
  { name: "Cameron Payne", rank: 326, age: 31.9, team: "PHI", pos: "PG,SG" },
  { name: "Isaiah Joe", rank: 327, age: 27, team: "DET", pos: "SG,SF" },
  { name: "Hugo González", rank: 328, age: 20.4, team: "BOS", pos: "SF" },
  { name: "Killian Hayes", rank: 329, age: 24.9, team: "SAC", pos: "PG" },
  { name: "Caleb Love", rank: 330, age: 24.8, team: "POR", pos: "PG,SG" },
  { name: "Khris Middleton", rank: 331, age: 34.9, team: "DAL", pos: "SF,PF" },
  { name: "Jeremy Sochan", rank: 332, age: 23.1, team: "NY", pos: "PF,C" },
  { name: "DaRon Holmes II", rank: 333, age: 23.9, team: "DEN", pos: "PF,C" },
  { name: "Nikola Topic", rank: 334, age: 20.9, team: "OKC", pos: "PG" },
  { name: "Vince Williams Jr.", rank: 335, age: 25.8, team: "UTA", pos: "PG,SG,SF" },
  { name: "Jose Alvarado", rank: 336, age: 28.2, team: "NY", pos: "PG" },
  { name: "Nae'Qwan Tomlin", rank: 337, age: 25.6, team: "CLE", pos: "PF" },
  { name: "Ben Sheppard", rank: 338, age: 25, team: "IND", pos: "SG,SF" },
  { name: "Sam Merrill", rank: 339, age: 30.1, team: "CLE", pos: "SG,SF" },
  { name: "Brook Lopez", rank: 340, age: 38.3, team: "LAC", pos: "C" },
  { name: "Steven Adams", rank: 341, age: 33, team: "HOU", pos: "C" },
  { name: "Karlo Matkovic", rank: 342, age: 25.3, team: "NO", pos: "PF,C" },
  { name: "Jaxson Hayes", rank: 343, age: 26.1, team: "LAL", pos: "C" },
  { name: "Jase Richardson", rank: 344, age: 20.7, team: "ORL", pos: "SG" },
  { name: "Klay Thompson", rank: 345, age: 36.4, team: "DAL", pos: "SG,SF" },
  { name: "Kevin Huerter", rank: 346, age: 27.8, team: "DET", pos: "SG,SF" },
  { name: "Ziaire Williams", rank: 347, age: 24.8, team: "BKN", pos: "SG,SF" },
  { name: "Dean Wade", rank: 348, age: 29.6, team: "CLE", pos: "SF,PF" },
  { name: "Royce O'Neale", rank: 349, age: 33.1, team: "CHA", pos: "SF,PF" },
  { name: "Landry Shamet", rank: 350, age: 29.3, team: "NY", pos: "SG,SF" },
  { name: "Jordan Goodwin", rank: 351, age: 27.7, team: "PHO", pos: "PG,SG,SF" },
  { name: "Isaac Okoro", rank: 352, age: 25.4, team: "CHI", pos: "SF,PF" },
  { name: "Bronny James", rank: 353, age: 21.7, team: "LAL", pos: "PG,SG" },
  { name: "Moritz Wagner", rank: 354, age: 29.2, team: "ORL", pos: "C" },
  { name: "Kris Dunn", rank: 355, age: 32.3, team: "LAC", pos: "PG,SG" },
  { name: "Meleek Thomas", rank: 356, age: 19.9, team: "CLE", pos: "" },
  { name: "Dillon Mitchell", rank: 357, age: 22.7, team: "BOS", pos: "" },
  { name: "Nick Boyd", rank: 358, age: 25.2, team: "GS", pos: "" },
  { name: "Tyler Nickel", rank: 359, age: 22.8, team: "NY", pos: "" },
  { name: "Jack Kayil", rank: 360, age: 20.4, team: "NY", pos: "" },
  { name: "Aaron Nkrumah", rank: 361, age: 24.6, team: "DEN", pos: "" },
  { name: "Tyler Kolek", rank: 362, age: 25.3, team: "NY", pos: "PG" },
  { name: "Tyus Jones", rank: 363, age: 30.1, team: "DEN", pos: "PG" },
  { name: "Bruce Brown", rank: 364, age: 29.9, team: "DEN", pos: "PG,SG" },
  { name: "Lonzo Ball", rank: 365, age: 28.7, team: "UTA", pos: "PG,SG" },
  { name: "Tre Jones", rank: 366, age: 26.5, team: "CHI", pos: "PG,SG" },
  { name: "Micah Peavy", rank: 367, age: 24.9, team: "NO", pos: "SG,SF" },
  { name: "AJ Green", rank: 368, age: 26.8, team: "MIL", pos: "PG,SG,SF" },
  { name: "RayJ Dennis", rank: 369, age: 25.3, team: "ATL", pos: "PG" },
  { name: "Guerschon Yabusele", rank: 370, age: 30.5, team: "CHI", pos: "PF,C" },
  { name: "T.J. McConnell", rank: 371, age: 34.3, team: "IND", pos: "PG" },
  { name: "Patrick Williams", rank: 372, age: 24.9, team: "CHI", pos: "PF" },
  { name: "Dominick Barlow", rank: 373, age: 23.1, team: "PHI", pos: "PF,C" },
  { name: "Tyrese Martin", rank: 374, age: 27.3, team: "PHI", pos: "PG,SG,SF" },
  { name: "Javon Small", rank: 375, age: 23.5, team: "MEM", pos: "PG,SG" },
  { name: "Will Richard", rank: 376, age: 23.5, team: "GS", pos: "SG,SF" },
  { name: "Corey Kispert", rank: 377, age: 27.3, team: "ATL", pos: "SF,PF" },
  { name: "Jaden Hardy", rank: 378, age: 24, team: "WAS", pos: "PG,SG" },
  { name: "Ben Saraf", rank: 379, age: 20.2, team: "BKN", pos: "SG" },
  { name: "Sam Hauser", rank: 380, age: 28.6, team: "BOS", pos: "SF,PF" },
  { name: "Buddy Hield", rank: 381, age: 33.5, team: "ATL", pos: "SG,SF" },
  { name: "Tre Mann", rank: 382, age: 25.4, team: "CHA", pos: "PG,SG" },
  { name: "Vít Krejcí", rank: 383, age: 26, team: "POR", pos: "SG,SF" },
  { name: "Tim Hardaway Jr.", rank: 384, age: 34.3, team: "DEN", pos: "SG,SF" },
  { name: "Haywood Highsmith", rank: 385, age: 29.6, team: "PHO", pos: "SF,PF" },
  { name: "Dalton Knecht", rank: 386, age: 25.2, team: "LAL", pos: "SG,SF" },
  { name: "Mouhamed Gueye", rank: 387, age: 23.6, team: "ATL", pos: "PF,C" },
  { name: "Trendon Watford", rank: 388, age: 25.6, team: "PHI", pos: "PF,C" },
  { name: "Jonathan Isaac", rank: 389, age: 28.7, team: "ORL", pos: "SF,PF" },
  { name: "Jordan Hawkins", rank: 390, age: 24.2, team: "NO", pos: "SG,SF" },
  { name: "Asa Newell", rank: 391, age: 20.7, team: "ATL", pos: "PF" },
  { name: "Jordan Clarkson", rank: 392, age: 34.1, team: "NY", pos: "PG,SG" },
  { name: "Dariq Whitehead", rank: 393, age: 21.9, team: "MEM", pos: "SG,SF" },
  { name: "Olivier-Maxence Prosper", rank: 394, age: 24, team: "MEM", pos: "PF,C" },
  { name: "Jock Landale", rank: 395, age: 30.7, team: "ATL", pos: "C" },
  { name: "Tristan Vukcevic", rank: 396, age: 23.3, team: "WAS", pos: "PF,C" },
  { name: "Kris Murray", rank: 397, age: 25.9, team: "MEM", pos: "SF,PF" },
  { name: "Luka Garza", rank: 398, age: 27.5, team: "BOS", pos: "C" },
  { name: "Trayce Jackson-Davis", rank: 399, age: 26.4, team: "TOR", pos: "C" },
  { name: "Josh Green", rank: 400, age: 25.6, team: "MIN", pos: "SG,SF" },
  { name: "Noah Penda", rank: 401, age: 21.5, team: "ORL", pos: "SF" },
  { name: "Chaz Lanier", rank: 402, age: 24.5, team: "DET", pos: "SG" },
  { name: "Liam McNeeley", rank: 403, age: 20.7, team: "CHA", pos: "SF" },
  { name: "Thomas Bryant", rank: 404, age: 28.9, team: "CLE", pos: "C" },
  { name: "Ben Simmons", rank: 405, age: 30, team: "LAC", pos: "PG,C" },
  { name: "Jonathan Mogbo", rank: 406, age: 24.7, team: "TOR", pos: "PF,C" },
  { name: "Bogdan Bogdanovic", rank: 407, age: 33.9, team: "LAC", pos: "SG,SF" },
  { name: "Andre Jackson Jr.", rank: 408, age: 24.6, team: "MIL", pos: "SG,SF" },
  { name: "Alijah Martin", rank: 409, age: 24.5, team: "TOR", pos: "SG" },
  { name: "Johni Broome", rank: 410, age: 24, team: "PHI", pos: "C" },
  { name: "Adou Thiero", rank: 411, age: 22.2, team: "LAL", pos: "SF" },
  { name: "Chris Youngblood", rank: 413, age: 24.4, team: "POR", pos: "SG" },
  { name: "Ron Harper Jr.", rank: 414, age: 26.2, team: "BOS", pos: "SF" },
  { name: "Kelly Olynyk", rank: 415, age: 35.2, team: "SA", pos: "PF,C" },
  { name: "Koby Brea", rank: 416, age: 23.7, team: "PHO", pos: "SG" },
  { name: "Jarred Vanderbilt", rank: 417, age: 27.2, team: "LAL", pos: "PF,C" },
  { name: "Nick Richards", rank: 418, age: 28.6, team: "CHI", pos: "C" },
  { name: "Jonas Valanciunas", rank: 419, age: 34.2, team: "DEN", pos: "C" },
  { name: "Brandon Boston Jr", rank: 420, age: 24.6, team: "NO", pos: "SF,PF" },
  { name: "Jalen Wilson", rank: 421, age: 25.7, team: "BKN", pos: "SF,PF" },
  { name: "AJ Johnson", rank: 422, age: 23.6, team: "MEM", pos: "PG,SG" },
  { name: "Wendell Moore Jr.", rank: 423, age: 24.8, team: "DET", pos: "SF" },
  { name: "Nikola Djurisic", rank: 424, age: 22.4, team: "ATL", pos: "SF" },
  { name: "Jared Butler", rank: 425, age: 25.9, team: "PHO", pos: "PG,SG" },
  { name: "Ochai Agbaji", rank: 426, age: 26.2, team: "BKN", pos: "SG,SF" },
  { name: "Jaden Ivey", rank: 427, age: 24.4, team: "CHI", pos: "PG,SG" },
  { name: "Taurean Prince", rank: 428, age: 32.3, team: "MIL", pos: "SF" },
  { name: "Clint Capela", rank: 429, age: 32.1, team: "HOU", pos: "C" },
  { name: "Bol Bol", rank: 430, age: 26.6, team: "PHO", pos: "PF,C" },
  { name: "Tidjane Salaun", rank: 431, age: 20.9, team: "CHA", pos: "PF" },
  { name: "Caleb Martin", rank: 432, age: 30.8, team: "DAL", pos: "SF,PF" },
  { name: "Richaun Holmes", rank: 433, age: 32.7, team: "WAS", pos: "C" },
  { name: "Jett Howard", rank: 434, age: 22.8, team: "ORL", pos: "SF" },
  { name: "Dalano Banton", rank: 435, age: 26.7, team: "BOS", pos: "SG,SF" },
  { name: "John Konchar", rank: 436, age: 30.3, team: "UTA", pos: "SG,SF" },
  { name: "James Wiseman", rank: 437, age: 25.3, team: "IND", pos: "C" },
  { name: "Bobi Klintman", rank: 438, age: 23.3, team: "DET", pos: "PF" },
  { name: "Terance Mann", rank: 439, age: 29.7, team: "BKN", pos: "SG,SF" },
  { name: "Duop Reath", rank: 440, age: 30, team: "ATL", pos: "C" },
  { name: "Maxi Kleber", rank: 441, age: 34.4, team: "LAL", pos: "PF,C" },
  { name: "Georges Niang", rank: 442, age: 33, team: "MEM", pos: "PF" },
  { name: "Keon Johnson", rank: 443, age: 24.3, team: "BKN", pos: "PG,SG" },
  { name: "Ariel Hukporti", rank: 444, age: 24.2, team: "NY", pos: "C" },
  { name: "Spencer Dinwiddie", rank: 445, age: 33.2, team: "CHA", pos: "PG,SG" },
  { name: "Malaki Branham", rank: 446, age: 23.1, team: "CHA", pos: "SG,SF" },
  { name: "Dante Exum", rank: 447, age: 31, team: "WAS", pos: "PG,SG" },
  { name: "Eric Gordon", rank: 448, age: 37.5, team: "MEM", pos: "SG,SF" },
  { name: "Kentavious Caldwell-Pope", rank: 449, age: 33.4, team: "MEM", pos: "SG,SF" },
  { name: "Markelle Fultz", rank: 450, age: 28.1, team: "TOR", pos: "PG,SG" },
  { name: "Ja'Kobe Walter", rank: 451, age: 21.8, team: "TOR", pos: "PG,SG" },
  { name: "Harrison Barnes", rank: 452, age: 34.1, team: "SA", pos: "SF,PF" },
  { name: "Marvin Bagley III", rank: 453, age: 27.3, team: "DAL", pos: "PF,C" },
  { name: "Baylor Scheierman", rank: 454, age: 25.8, team: "BOS", pos: "SF" },
  { name: "Jabari Walker", rank: 455, age: 23.9, team: "PHI", pos: "PF,C" },
  { name: "Craig Porter Jr.", rank: 456, age: 26.3, team: "CLE", pos: "PG,SG" },
  { name: "Matisse Thybulle", rank: 457, age: 29.3, team: "POR", pos: "SG,SF" },
  { name: "Tosan Evbuomwan", rank: 458, age: 25.4, team: "CHA", pos: "SF,PF" },
  { name: "MarJon Beauchamp", rank: 459, age: 25.7, team: "PHI", pos: "SG,SF" },
  { name: "Larry Nance Jr.", rank: 460, age: 33.5, team: "CLE", pos: "PF,C" },
];

// Value function: convert rank to value points (higher = better)
function rankToValue(rank) {
  if (!rank || rank > 450) return 0.5;
  if (rank <= 10) return 100 - (rank - 1) * 5;     // 100, 95, 90...
  if (rank <= 30) return 55 - (rank - 10) * 1.5;    // 55 → 25
  if (rank <= 60) return 25 - (rank - 30) * 0.5;    // 25 → 10
  if (rank <= 120) return 10 - (rank - 60) * 0.1;   // 10 → 4
  if (rank <= 160) return 4 - (rank - 120) * 0.05;  // 4 → 2
  if (rank <= 220) return 2 - (rank - 160) * 0.02;  // 2 → 0.8
  if (rank <= 450) return 0.8 - (rank - 220) * 0.002;  // 0.8 → 0.34
  return 0.5;
}

// Age decay for different windows
function ageMultiplier(age, window) {
  if (window === '1yr') {
    // Next season: prime years are best, age doesn't matter much unless very old
    if (age >= 36) return 0.6;
    if (age >= 33) return 0.8;
    if (age >= 30) return 0.95;
    return 1.0;
  } else if (window === '5yr') {
    // 5-year window: youth matters more
    if (age >= 36) return 0.2;
    if (age >= 33) return 0.4;
    if (age >= 30) return 0.65;
    if (age >= 28) return 0.8;
    if (age >= 25) return 0.95;
    if (age >= 22) return 1.1;
    return 1.2; // Under 22 = premium
  } else {
    // 10-year window: youth is king
    if (age >= 36) return 0.05;
    if (age >= 33) return 0.15;
    if (age >= 30) return 0.3;
    if (age >= 28) return 0.5;
    if (age >= 25) return 0.75;
    if (age >= 22) return 1.1;
    return 1.4; // Under 22 = massive premium
  }
}

// ===== Draft Pick Valuation =====
// Round-based base values (10-team league)
function pickRoundValue(round) {
  switch(round) {
    case 1: return 30;  // 1st rounders are gold
    case 2: return 15;
    case 3: return 8;
    case 4: return 5;
    case 5: return 3;
    case 6: return 2;
    case 7: return 1;
    default: return 1;
  }
}

// Boost pick value based on how bad the original team is (worse team = higher pick)
function teamStrengthMultiplier(wins, losses) {
  const totalGames = wins + losses || 1;
  const winPct = wins / totalGames;
  // Worse team = better pick = higher multiplier
  if (winPct <= 0.25) return 1.5;  // Lottery pick territory
  if (winPct <= 0.35) return 1.3;
  if (winPct <= 0.45) return 1.1;
  if (winPct <= 0.55) return 0.9;
  return 0.7;  // Contender pick = late round
}

// Time window multiplier for picks
function pickWindowMultiplier(season, window) {
  const yr = parseInt(season);
  if (window === '1yr') {
    // Next season: 2026 picks are about to be used, very valuable
    return yr === 2026 ? 1.2 : 0.7;
  } else if (window === '5yr') {
    // 5yr: all picks matter
    return yr <= 2027 ? 1.0 : 0.8;
  } else {
    // 10yr: future picks are premium
    return yr <= 2027 ? 0.9 : 1.1;
  }
}

// Build draft pick inventory for each roster
function buildPickInventory(rosters, tradedPicks) {
  const NUM_ROUNDS = 7;
  const SEASONS = ['2026', '2027'];

  // Team record lookup by roster_id
  const teamRecords = {};
  rosters.forEach(r => {
    teamRecords[r.roster_id] = {
      wins: r.settings?.wins || 0,
      losses: r.settings?.losses || 0
    };
  });

  // Initialize: each team owns their own picks
  // Key: roster_id → array of { season, round, originalTeamId }
  const inventory = {};
  rosters.forEach(r => {
    inventory[r.roster_id] = [];
    SEASONS.forEach(s => {
      for (let rd = 1; rd <= NUM_ROUNDS; rd++) {
        inventory[r.roster_id].push({
          season: s,
          round: rd,
          originalTeamId: r.roster_id
        });
      }
    });
  });

  // Process trades: remove from previous owner, add to new owner
  tradedPicks.forEach(tp => {
    const fromId = tp.previous_owner_id;
    const toId = tp.owner_id;
    if (fromId === toId) return; // not actually traded

    // Remove from previous owner
    if (inventory[fromId]) {
      const idx = inventory[fromId].findIndex(p =>
        p.season === tp.season && p.round === tp.round && p.originalTeamId === tp.roster_id
      );
      if (idx >= 0) inventory[fromId].splice(idx, 1);
    }

    // Add to new owner
    if (inventory[toId]) {
      inventory[toId].push({
        season: tp.season,
        round: tp.round,
        originalTeamId: tp.roster_id
      });
    }
  });

  return { inventory, teamRecords };
}

// Calculate total draft capital value for a team in a given window
function calcDraftCapitalValue(picks, teamRecords, window) {
  let total = 0;
  const pickDetails = [];

  picks.forEach(p => {
    const baseVal = pickRoundValue(p.round);
    const rec = teamRecords[p.originalTeamId] || { wins: 20, losses: 20 };
    const strengthMult = teamStrengthMultiplier(rec.wins, rec.losses);
    const windowMult = pickWindowMultiplier(p.season, window);
    const val = baseVal * strengthMult * windowMult;
    total += val;

    if (p.round <= 2) { // Only show 1st and 2nd round picks in display
      pickDetails.push({
        label: `${p.season} Rd${p.round}`,
        originalTeam: p.originalTeamId,
        value: val.toFixed(1)
      });
    }
  });

  pickDetails.sort((a, b) => b.value - a.value);
  return { total, details: pickDetails };
}

// ===== Historical Performance Data (3 seasons from Sleeper) =====
const LEAGUE_HISTORY = {
  // roster_id -> historical data
  1: { name: 'Sneaky Athleticism', seasons: [{w:22,l:18,pf:8399},{w:25,l:15,pf:9840},{w:30,l:10,pf:9978}], chips: 0 },
  2: { name: 'Truz the Process', seasons: [{w:15,l:25,pf:7970},{w:8,l:32,pf:8558},{w:18,l:22,pf:9460}], chips: 0 },
  3: { name: 'Jschomm', seasons: [{w:11,l:29,pf:7525},{w:16,l:24,pf:9072},{w:17,l:23,pf:9285}], chips: 0 },
  4: { name: 'TrustTheProcess', seasons: [{w:6,l:34,pf:7084},{w:7,l:33,pf:8365},{w:6,l:34,pf:8483}], chips: 0 },
  5: { name: 'The Shams Bombs', seasons: [{w:25,l:15,pf:8606},{w:28,l:12,pf:10531},{w:25,l:15,pf:9883}], chips: 0 },
  6: { name: 'nmalo', seasons: [{w:17,l:23,pf:7968},{w:27,l:13,pf:10159},{w:10,l:30,pf:8633}], chips: 1 },
  7: { name: 'slipperynoodle69', seasons: [{w:22,l:18,pf:8251},{w:24,l:16,pf:10054},{w:34,l:6,pf:10462}], chips: 1 },
  8: { name: 'GetCade\'d', seasons: [{w:30,l:10,pf:8469},{w:18,l:22,pf:9307},{w:37,l:3,pf:10743}], chips: 0 },
  9: { name: 'massett2', seasons: [{w:31,l:9,pf:9411},{w:26,l:14,pf:9979},{w:14,l:26,pf:9166}], chips: 1 },
  10: { name: 'AustinCarter5', seasons: [{w:21,l:19,pf:8412},{w:21,l:19,pf:9731},{w:9,l:31,pf:8854}], chips: 0 }
};

function calcHistoricalScore(rosterId) {
  const h = LEAGUE_HISTORY[rosterId];
  if (!h) return { score: 0, winPct: 0, chips: 0, trend: 'flat', careerW: 0, careerL: 0 };

  let totalW = 0, totalL = 0, totalPF = 0;
  h.seasons.forEach(s => { totalW += s.w; totalL += s.l; totalPF += s.pf; });
  const totalG = totalW + totalL || 1;
  const winPct = totalW / totalG;

  // Trend: compare last season to first
  const first = h.seasons[0];
  const last = h.seasons[h.seasons.length - 1];
  const firstWP = first.w / (first.w + first.l || 1);
  const lastWP = last.w / (last.w + last.l || 1);
  const trendVal = lastWP - firstWP; // positive = improving
  const trend = trendVal > 0.1 ? 'rising' : trendVal < -0.1 ? 'falling' : 'steady';

  // Score: win% (0-100) + championship bonus + trend bonus
  let score = winPct * 60; // max 60
  score += h.chips * 20;   // 20 per championship
  score += trendVal * 30;  // trend bonus/penalty
  // PF bonus (normalized)
  const avgPF = totalPF / h.seasons.length;
  score += (avgPF - 8500) / 100; // roughly 0-25 range

  return { score: Math.max(0, score), winPct, chips: h.chips, trend, careerW: totalW, careerL: totalL };
}

// Main: Fetch rosters + users, calculate rankings
async function renderThreeTierRankings() {
  const containers = {
    '1yr': document.getElementById('rankings-1yr'),
    '5yr': document.getElementById('rankings-5yr'),
    '10yr': document.getElementById('rankings-10yr')
  };

  Object.values(containers).forEach(el => {
    if (el) el.innerHTML = '<div class="loading">Loading power rankings</div>';
  });

  // Fetch data
  const BASE = 'https://api.sleeper.app/v1';
  const LEAGUE_ID = '1221920986723528704';

  let rosters, users, allPlayers;
  try {
    [rosters, users, allPlayers] = await Promise.all([
      fetch(`${BASE}/league/${LEAGUE_ID}/rosters`).then(r => r.json()),
      fetch(`${BASE}/league/${LEAGUE_ID}/users`).then(r => r.json()),
      fetch(`${BASE}/players/nba`).then(r => r.json())
    ]);
  } catch (e) {
    Object.values(containers).forEach(el => {
      if (el) el.innerHTML = '<p style="color:#999;">Failed to load data.</p>';
    });
    return;
  }

  // Owner name map (real names)
  const ownerNames = {
    '962450663101853696': 'Peter',
    '1002735718667612160': 'CJ',
    '738932675783647232': 'Schommer',
    '1013525285951606784': 'Schu',
    '1013523219346829312': 'Noah',
    '1015453331403218944': 'Noah', // co-owner
    '1013530783035850752': 'Nolan',
    '596410270528622592': 'Mitch', // co-owner with Christian
    '996235223224500224': 'Christian/Mitch',
    '878478967190016000': 'Austin'
  };
  // Roster ID to owner name fallback
  const rosterOwnerMap = {1:'Peter',2:'CJ',3:'Schommer',4:'Schu',5:'Noah',6:'Nolan',7:'Logan',8:'Kaleb',9:'Christian/Mitch',10:'Austin'};

  const userMap = {};
  users.forEach(u => {
    userMap[u.user_id] = ownerNames[u.user_id] || u.metadata?.team_name || u.display_name || u.username;
  });
  // Special: find Logan and Kaleb by roster
  // They'll get mapped via rosterOwnerMap below

  // Build team data with player names
  const teams = rosters.map(r => {
    const teamName = userMap[r.owner_id] || rosterOwnerMap[r.roster_id] || `Team ${r.roster_id}`;
    const playerNames = (r.players || []).map(pid => {
      const p = allPlayers[pid];
      if (!p) return null;
      return p.full_name || `${p.first_name} ${p.last_name}`;
    }).filter(Boolean);

    return {
      name: teamName,
      roster_id: r.roster_id,
      wins: r.settings?.wins || 0,
      losses: r.settings?.losses || 0,
      fpts: (r.settings?.fpts || 0) + (r.settings?.fpts_decimal || 0) / 100,
      playerNames: playerNames
    };
  });

  // Normalize accented characters to ASCII for matching
  function normalizeAccents(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }
  // Match player name to dynasty DB (handles accents and suffixes)
  function findDynastyRank(playerName) {
    if (!playerName) return null;
    const clean = normalizeAccents(playerName.toLowerCase().trim());
    // Exact match (accent-normalized)
    let match = DYNASTY_DB.find(d => normalizeAccents(d.name.toLowerCase()) === clean);
    if (match) return match;
    // Try removing suffixes like Jr., III, II from both sides
    const stripSuffix = s => s.replace(/\s+(jr\.?|sr\.?|ii|iii|iv)$/i, '').trim();
    const cleaned = stripSuffix(clean);
    match = DYNASTY_DB.find(d => stripSuffix(normalizeAccents(d.name.toLowerCase())) === cleaned);
    return match || null;
  }

  // Calculate scores for each window
  // Power score = blend of two CURRENT-ROSTER signals only (no draft capital, no history):
  //   1. Depth value  — age-adjusted sum of every ranked player (rewards depth + youth)
  //   2. Top-15 talent — average dynasty rank of each team's 15 best players (pure talent)
  // Both are normalized 0-100 across the league each render, then blended 50/50.
  ['1yr', '5yr', '10yr'].forEach(window => {
    // Blend weights per window: win-now leans on top-15 talent,
    // longer windows lean a bit more on age-adjusted depth/youth.
    const blendWeights = {
      '1yr':  { depth: 0.45, top15: 0.55 },
      '5yr':  { depth: 0.50, top15: 0.50 },
      '10yr': { depth: 0.55, top15: 0.45 }
    }[window];

    // Pass 1: compute raw component values per team
    const pre = teams.map(t => {
      let depthValue = 0;
      let topPlayers = [];
      let rankedRanks = [];

      t.playerNames.forEach(pName => {
        const dynMatch = findDynastyRank(pName);
        if (dynMatch) {
          const baseVal = rankToValue(dynMatch.rank);
          const mult = ageMultiplier(dynMatch.age, window);
          const val = baseVal * mult;
          depthValue += val;
          rankedRanks.push(dynMatch.rank);
          topPlayers.push({ name: dynMatch.name, rank: dynMatch.rank, age: dynMatch.age, value: val });
        }
      });

      topPlayers.sort((a, b) => b.value - a.value);

      // Top-15 average dynasty rank (lower = better). Fall back to whatever is
      // available if a roster somehow has fewer than 15 ranked players.
      const best15 = rankedRanks.slice().sort((a, b) => a - b).slice(0, 15);
      const avgTop15 = best15.length ? (best15.reduce((s, r) => s + r, 0) / best15.length) : 460;

      return { ...t, depthValue, avgTop15, topPlayers };
    });

    // Pass 2: normalize each component 0-100 across the league, then blend
    const depthVals = pre.map(t => t.depthValue);
    const maxDepth = Math.max(...depthVals);
    const minDepth = Math.min(...depthVals);
    const avgVals = pre.map(t => t.avgTop15);
    const bestAvg = Math.min(...avgVals);  // lowest avg rank = best
    const worstAvg = Math.max(...avgVals);

    const norm = (v, lo, hi) => (hi > lo ? (v - lo) / (hi - lo) : 1);

    const scored = pre.map(t => {
      const depthScore = norm(t.depthValue, minDepth, maxDepth) * 100;         // higher raw = higher
      const talentScore = (1 - norm(t.avgTop15, bestAvg, worstAvg)) * 100;     // lower avg = higher
      const powerScore = depthScore * blendWeights.depth + talentScore * blendWeights.top15;
      return {
        ...t,
        depthScore,
        talentScore,
        powerScore,
        topPlayers: t.topPlayers.slice(0, 10)
      };
    });

    scored.sort((a, b) => b.powerScore - a.powerScore);

    const container = containers[window];
    if (!container) return;

    let html = '';
    scored.forEach((t, i) => {
      const topList = t.topPlayers.map(p =>
        `<span style="display:inline-block;background:rgba(212,175,55,0.1);padding:2px 8px;border-radius:4px;margin:2px;font-size:0.8rem;"><strong>${p.name}</strong> <span style="color:var(--gold);">#${p.rank}</span></span>`
      ).join(' ');

      const cardId = `card-${window}-${i}`;

      html += `<div class="pr-card" style="cursor:pointer;padding:0;" onclick="document.getElementById('${cardId}').style.display = document.getElementById('${cardId}').style.display === 'none' ? 'block' : 'none'; this.querySelector('.expand-icon').textContent = document.getElementById('${cardId}').style.display === 'none' ? '▶' : '▼';">
        <div style="display:flex;align-items:center;gap:1rem;padding:1.25rem 2rem;">
          <div class="pr-rank" style="font-size:2rem;">${i + 1}</div>
          <div style="flex:1;">
            <h3 style="margin-bottom:0.15rem;">${t.name}</h3>
            <span style="color:var(--gray-text);font-size:0.85rem;">Top-15 avg rank: ${t.avgTop15.toFixed(1)}</span>
          </div>
          <div style="text-align:right;">
            <div style="color:var(--gold);font-weight:700;font-size:1.2rem;">${t.powerScore.toFixed(1)}</div>
            <div style="color:var(--gray-text);font-size:0.7rem;">Power Score</div>
          </div>
          <span class="expand-icon" style="color:var(--gray-text);font-size:0.8rem;margin-left:0.5rem;">▶</span>
        </div>
        <div id="${cardId}" style="display:none;padding:0 2rem 1.25rem;border-top:1px solid rgba(255,255,255,0.05);">
          <p style="font-size:0.8rem;color:#888;margin:0.75rem 0 0.5rem;">Talent (Top-15): ${t.talentScore.toFixed(0)}/100 &nbsp;•&nbsp; Depth (age-adj): ${t.depthScore.toFixed(0)}/100</p>
          <div style="margin-bottom:0.5rem;">${topList || '<span style="color:#666;">No ranked players found</span>'}</div>
        </div>
      </div>`;
    });

    container.innerHTML = html;
  });
}
