/* ============================================
   CHABELS DYNASTY — 3-Tier Power Rankings
   Based on Hashtag Basketball Dynasty Rankings
   ============================================ */

// Hashtag Basketball Dynasty Rankings (Top 450) — updated 02 July 2026
// Format: { name, rank, age, team, pos }
const DYNASTY_DB = [
  { name: "Victor Wembanyama", rank: 1, age: 22.5, team: "SA", pos: "PF,C" },
  { name: "Shai Gilgeous-Alexander", rank: 2, age: 28.0, team: "OKC", pos: "PG" },
  { name: "Luka Doncic", rank: 3, age: 27.3, team: "LAL", pos: "PG,SG" },
  { name: "Nikola Jokic", rank: 4, age: 31.4, team: "DEN", pos: "C" },
  { name: "Cade Cunningham", rank: 5, age: 24.8, team: "DET", pos: "PG,SG" },
  { name: "Cooper Flagg", rank: 6, age: 19.5, team: "DAL", pos: "PG,SG,SF" },
  { name: "Tyrese Maxey", rank: 7, age: 25.7, team: "PHI", pos: "PG" },
  { name: "Anthony Edwards", rank: 8, age: 24.9, team: "MIN", pos: "PG,SG" },
  { name: "Jalen Johnson", rank: 9, age: 24.5, team: "ATL", pos: "SF,PF" },
  { name: "Cameron Boozer", rank: 10, age: 19.0, team: "MEM", pos: "" },
  { name: "Jayson Tatum", rank: 11, age: 28.3, team: "BOS", pos: "SF,PF" },
  { name: "Scottie Barnes", rank: 12, age: 24.9, team: "TOR", pos: "SG,SF,PF,C" },
  { name: "Tyrese Haliburton", rank: 13, age: 26.3, team: "IND", pos: "PG,SG" },
  { name: "Chet Holmgren", rank: 14, age: 24.2, team: "OKC", pos: "PF,C" },
  { name: "Alperen Sengün", rank: 15, age: 23.9, team: "HOU", pos: "PF,C" },
  { name: "Evan Mobley", rank: 16, age: 25.0, team: "CLE", pos: "PF,C" },
  { name: "Dylan Harper", rank: 17, age: 20.3, team: "SA", pos: "PG,SG" },
  { name: "Darryn Peterson", rank: 18, age: 19.5, team: "UTA", pos: "" },
  { name: "Donovan Mitchell", rank: 19, age: 29.8, team: "CLE", pos: "PG,SG" },
  { name: "Jalen Williams", rank: 20, age: 25.2, team: "OKC", pos: "SF,PF" },
  { name: "Giannis Antetokounmpo", rank: 21, age: 31.6, team: "MIA", pos: "PF,C" },
  { name: "Trae Young", rank: 22, age: 27.8, team: "WAS", pos: "PG" },
  { name: "Trey Murphy III", rank: 23, age: 26.0, team: "NO", pos: "SG,SF,PF" },
  { name: "Amen Thompson", rank: 24, age: 23.4, team: "HOU", pos: "PG,SG,SF" },
  { name: "Austin Reaves", rank: 25, age: 28.1, team: "LAL", pos: "PG,SG,SF" },
  { name: "Devin Booker", rank: 26, age: 29.7, team: "PHO", pos: "PG,SG" },
  { name: "Karl-Anthony Towns", rank: 27, age: 30.6, team: "NY", pos: "PF,C" },
  { name: "Kon Knueppel", rank: 28, age: 20.9, team: "CHA", pos: "SG,SF" },
  { name: "AJ Dybantsa", rank: 29, age: 19.4, team: "WAS", pos: "" },
  { name: "Franz Wagner", rank: 30, age: 24.8, team: "ORL", pos: "SF,PF" },
  { name: "Deni Avdija", rank: 31, age: 25.5, team: "POR", pos: "SG,SF,PF" },
  { name: "Alexandre Sarr", rank: 32, age: 21.2, team: "WAS", pos: "C" },
  { name: "Jamal Murray", rank: 33, age: 29.4, team: "DEN", pos: "PG,SG" },
  { name: "Josh Giddey", rank: 34, age: 23.7, team: "CHI", pos: "PG,SG" },
  { name: "Jalen Duren", rank: 35, age: 22.6, team: "DET", pos: "C" },
  { name: "Jaren Jackson Jr.", rank: 36, age: 26.8, team: "UTA", pos: "PF,C" },
  { name: "Jalen Brunson", rank: 37, age: 29.8, team: "NY", pos: "PG" },
  { name: "LaMelo Ball", rank: 38, age: 24.9, team: "MIN", pos: "PG,SG" },
  { name: "Darius Garland", rank: 39, age: 26.4, team: "LAC", pos: "PG" },
  { name: "Stephon Castle", rank: 40, age: 21.7, team: "SA", pos: "PG,SG" },
  { name: "Caleb Wilson", rank: 41, age: 20.0, team: "CHI", pos: "" },
  { name: "Jaylen Brown", rank: 42, age: 29.7, team: "PHI", pos: "SG,SF" },
  { name: "VJ Edgecombe", rank: 43, age: 20.9, team: "PHI", pos: "PG,SG" },
  { name: "Keyonte George", rank: 44, age: 22.6, team: "UTA", pos: "PG,SG" },
  { name: "Bam Adebayo", rank: 45, age: 29.0, team: "MIA", pos: "PF,C" },
  { name: "Keaton Wagler", rank: 46, age: 19.4, team: "LAC", pos: "" },
  { name: "Donovan Clingan", rank: 47, age: 22.4, team: "POR", pos: "C" },
  { name: "Paolo Banchero", rank: 48, age: 23.6, team: "ORL", pos: "PF,C" },
  { name: "Anthony Davis", rank: 49, age: 33.3, team: "WAS", pos: "PF,C" },
  { name: "Tyler Herro", rank: 50, age: 26.4, team: "MIL", pos: "PG,SG" },
  { name: "De'Aaron Fox", rank: 51, age: 28.5, team: "SA", pos: "PG,SG" },
  { name: "Lauri Markkanen", rank: 52, age: 29.1, team: "UTA", pos: "SF,PF" },
  { name: "Matas Buzelis", rank: 53, age: 21.7, team: "CHI", pos: "SF,PF" },
  { name: "Zach Edey", rank: 54, age: 24.1, team: "MEM", pos: "C" },
  { name: "Mikel Brown Jr.", rank: 55, age: 20.2, team: "BKN", pos: "" },
  { name: "Darius Acuff Jr.", rank: 56, age: 19.6, team: "SAC", pos: "" },
  { name: "Onyeka Okongwu", rank: 57, age: 25.6, team: "ATL", pos: "PF,C" },
  { name: "Brandon Miller", rank: 58, age: 23.6, team: "CHA", pos: "SF,PF" },
  { name: "Pascal Siakam", rank: 59, age: 32.2, team: "IND", pos: "SF,PF,C" },
  { name: "Ivica Zubac", rank: 60, age: 29.3, team: "IND", pos: "C" },
  { name: "Domantas Sabonis", rank: 61, age: 30.2, team: "SAC", pos: "PF,C" },
  { name: "James Harden", rank: 62, age: 36.8, team: "CLE", pos: "PG,SG" },
  { name: "Stephen Curry", rank: 63, age: 38.3, team: "GS", pos: "PG" },
  { name: "Desmond Bane", rank: 64, age: 28.0, team: "ORL", pos: "SG,SF" },
  { name: "Kel'el Ware", rank: 65, age: 22.2, team: "MIL", pos: "PF,C" },
  { name: "OG Anunoby", rank: 66, age: 29.0, team: "NY", pos: "SF,PF" },
  { name: "Michael Porter Jr.", rank: 67, age: 28.0, team: "BKN", pos: "SF,PF" },
  { name: "Keegan Murray", rank: 68, age: 25.9, team: "SAC", pos: "SF,PF" },
  { name: "Derrick White", rank: 69, age: 32.0, team: "BOS", pos: "PG,SG" },
  { name: "Naz Reid", rank: 70, age: 26.9, team: "CHA", pos: "PF,C" },
  { name: "Walker Kessler", rank: 71, age: 24.9, team: "LAL", pos: "C" },
  { name: "Nickeil Alexander-Walker", rank: 72, age: 27.8, team: "ATL", pos: "PG,SG,SF" },
  { name: "Kevin Durant", rank: 73, age: 37.8, team: "HOU", pos: "SG,SF,PF" },
  { name: "Jaden McDaniels", rank: 74, age: 25.8, team: "MIN", pos: "SF,PF" },
  { name: "Brandon Ingram", rank: 75, age: 28.8, team: "LAC", pos: "SG,SF,PF" },
  { name: "Derik Queen", rank: 76, age: 21.5, team: "NO", pos: "PF,C" },
  { name: "Kingston Flemings", rank: 77, age: 19.5, team: "ATL", pos: "" },
  { name: "Zion Williamson", rank: 78, age: 26.0, team: "NO", pos: "SF,PF,C" },
  { name: "Brayden Burries", rank: 79, age: 20.8, team: "MIL", pos: "" },
  { name: "Ja Morant", rank: 80, age: 26.9, team: "POR", pos: "PG" },
  { name: "Collin Murray-Boyles", rank: 81, age: 21.1, team: "TOR", pos: "PF,C" },
  { name: "Reed Sheppard", rank: 82, age: 22.0, team: "HOU", pos: "PG,SG" },
  { name: "Immanuel Quickley", rank: 83, age: 27.0, team: "TOR", pos: "PG,SG" },
  { name: "Mikal Bridges", rank: 84, age: 29.8, team: "NY", pos: "SG,SF,PF" },
  { name: "Isaiah Hartenstein", rank: 85, age: 28.2, team: "OKC", pos: "C" },
  { name: "Ajay Mitchell", rank: 86, age: 24.0, team: "OKC", pos: "PG,SG" },
  { name: "Jalen Suggs", rank: 87, age: 25.1, team: "ORL", pos: "PG,SG" },
  { name: "Anthony Black", rank: 88, age: 22.4, team: "ORL", pos: "PG,SG,SF" },
  { name: "Kyshawn George", rank: 89, age: 22.6, team: "WAS", pos: "SG,SF,PF" },
  { name: "Kyrie Irving", rank: 90, age: 34.3, team: "DAL", pos: "PG" },
  { name: "Jabari Smith Jr.", rank: 91, age: 23.1, team: "HOU", pos: "SF,PF,C" },
  { name: "Mark Williams", rank: 92, age: 24.5, team: "PHO", pos: "C" },
  { name: "Nicolas Claxton", rank: 93, age: 27.2, team: "CHI", pos: "C" },
  { name: "Dejounte Murray", rank: 94, age: 29.8, team: "NO", pos: "PG,SG" },
  { name: "Jalen Green", rank: 95, age: 24.4, team: "PHO", pos: "PG,SG,SF" },
  { name: "Julius Randle", rank: 96, age: 31.6, team: "BKN", pos: "PF,C" },
  { name: "Joel Embiid", rank: 97, age: 32.3, team: "PHI", pos: "C" },
  { name: "Dyson Daniels", rank: 98, age: 23.3, team: "ATL", pos: "PG,SG,SF" },
  { name: "Norman Powell", rank: 99, age: 33.1, team: "MIA", pos: "SG,SF" },
  { name: "Deandre Ayton", rank: 100, age: 27.9, team: "LAL", pos: "C" },
  { name: "Myles Turner", rank: 101, age: 30.3, team: "MIL", pos: "C" },
  { name: "Fred VanVleet", rank: 102, age: 32.3, team: "HOU", pos: "PG" },
  { name: "Ace Bailey", rank: 103, age: 19.9, team: "UTA", pos: "SG,SF,PF" },
  { name: "Jeremiah Fears", rank: 104, age: 19.7, team: "NO", pos: "PG,SG" },
  { name: "Kawhi Leonard", rank: 105, age: 35.0, team: "TOR", pos: "SF,PF" },
  { name: "Morez Johnson Jr.", rank: 106, age: 20.4, team: "DAL", pos: "" },
  { name: "Jarrett Allen", rank: 107, age: 28.2, team: "CLE", pos: "C" },
  { name: "Kristaps Porzingis", rank: 108, age: 30.9, team: "GS", pos: "PF,C" },
  { name: "Rudy Gobert", rank: 109, age: 34.0, team: "MIN", pos: "C" },
  { name: "Zach LaVine", rank: 110, age: 31.3, team: "SAC", pos: "PG,SG,SF" },
  { name: "Coby White", rank: 111, age: 26.4, team: "CHA", pos: "PG,SG" },
  { name: "Peyton Watson", rank: 112, age: 23.8, team: "DEN", pos: "SF,PF" },
  { name: "Brandin Podziemski", rank: 113, age: 23.3, team: "GS", pos: "PG,SG" },
  { name: "Cedric Coward", rank: 114, age: 22.8, team: "MEM", pos: "SG,SF" },
  { name: "Jaime Jaquez Jr.", rank: 115, age: 25.4, team: "MIL", pos: "SG,SF,PF" },
  { name: "Hannes Steinbach", rank: 116, age: 20.2, team: "CHA", pos: "" },
  { name: "Ryan Kalkbrenner", rank: 117, age: 24.5, team: "CHA", pos: "C" },
  { name: "Shaedon Sharpe", rank: 118, age: 23.1, team: "POR", pos: "PG,SG,SF" },
  { name: "Devin Vassell", rank: 119, age: 25.9, team: "SA", pos: "SG,SF" },
  { name: "Ryan Rollins", rank: 120, age: 24.0, team: "MIL", pos: "PG,SG" },
  { name: "Ausar Thompson", rank: 121, age: 23.4, team: "DET", pos: "SG,SF,PF" },
  { name: "Toumani Camara", rank: 122, age: 26.1, team: "POR", pos: "SF,PF,C" },
  { name: "Paul George", rank: 123, age: 36.2, team: "BOS", pos: "SG,SF,PF" },
  { name: "Miles Bridges", rank: 124, age: 28.3, team: "PHO", pos: "SF,PF" },
  { name: "Yaxel Lendeborg", rank: 125, age: 23.8, team: "GS", pos: "" },
  { name: "Christian Braun", rank: 126, age: 25.2, team: "DEN", pos: "SG,SF,PF" },
  { name: "RJ Barrett", rank: 127, age: 26.0, team: "TOR", pos: "SG,SF,PF" },
  { name: "Payton Pritchard", rank: 128, age: 28.4, team: "BOS", pos: "PG" },
  { name: "Josh Hart", rank: 129, age: 31.3, team: "NY", pos: "SG,SF,PF" },
  { name: "Maxime Raynaud", rank: 130, age: 23.2, team: "SAC", pos: "C" },
  { name: "LeBron James", rank: 131, age: 41.5, team: "LAL", pos: "SF,PF" },
  { name: "Cason Wallace", rank: 132, age: 22.7, team: "OKC", pos: "PG,SG,SF" },
  { name: "Scoot Henderson", rank: 133, age: 22.4, team: "POR", pos: "PG" },
  { name: "Tre Johnson", rank: 134, age: 20.3, team: "WAS", pos: "PG,SG,SF" },
  { name: "Jakob Poeltl", rank: 135, age: 30.7, team: "TOR", pos: "C" },
  { name: "Dailyn Swain", rank: 136, age: 21.0, team: "CHI", pos: "" },
  { name: "Allen Graves", rank: 137, age: 19.9, team: "TOR", pos: "" },
  { name: "Bilal Coulibaly", rank: 138, age: 21.9, team: "WAS", pos: "SG,SF" },
  { name: "Nate Ament", rank: 139, age: 19.6, team: "MIL", pos: "" },
  { name: "Moussa Diabaté", rank: 140, age: 24.4, team: "CHA", pos: "C" },
  { name: "Day'Ron Sharpe", rank: 141, age: 24.7, team: "BKN", pos: "C" },
  { name: "Dereck Lively II", rank: 142, age: 22.4, team: "DAL", pos: "C" },
  { name: "Andrew Nembhard", rank: 143, age: 26.5, team: "IND", pos: "PG,SG" },
  { name: "Santi Aldama", rank: 144, age: 25.5, team: "DAL", pos: "PF,C" },
  { name: "Wendell Carter Jr.", rank: 145, age: 27.2, team: "ORL", pos: "C" },
  { name: "Collin Gillespie", rank: 146, age: 27.0, team: "PHO", pos: "PG,SG" },
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
  { name: "Bennedict Mathurin", rank: 161, age: 24.0, team: "LAC", pos: "SG,SF" },
  { name: "Egor Demin", rank: 162, age: 20.3, team: "BKN", pos: "PG,SG" },
  { name: "Robert Williams III", rank: 163, age: 28.7, team: "POR", pos: "C" },
  { name: "Kevin Porter Jr.", rank: 164, age: 26.2, team: "MIL", pos: "PG,SG" },
  { name: "Jaylon Tyson", rank: 165, age: 23.6, team: "CLE", pos: "SG,SF" },
  { name: "Zaccharie Risacher", rank: 166, age: 21.2, team: "ATL", pos: "SF,PF" },
  { name: "Aaron Gordon", rank: 167, age: 30.8, team: "DEN", pos: "PF,C" },
  { name: "Daniss Jenkins", rank: 168, age: 24.9, team: "DET", pos: "PG,SG" },
  { name: "Davion Mitchell", rank: 169, age: 27.8, team: "MIA", pos: "PG" },
  { name: "Damian Lillard", rank: 170, age: 36.0, team: "POR", pos: "PG" },
  { name: "Dillon Brooks", rank: 171, age: 30.4, team: "PHO", pos: "SF,PF" },
  { name: "Daniel Gafford", rank: 172, age: 27.8, team: "DAL", pos: "C" },
  { name: "Aday Mara", rank: 173, age: 21.2, team: "OKC", pos: "" },
  { name: "Grayson Allen", rank: 174, age: 30.7, team: "CHA", pos: "PG,SG,SF" },
  { name: "Ebuka Okorie", rank: 175, age: 19.2, team: "DET", pos: "" },
  { name: "Christian Anderson", rank: 176, age: 20.2, team: "CHA", pos: "" },
  { name: "Joshua Jefferson", rank: 177, age: 22.6, team: "BKN", pos: "" },
  { name: "Labaron Philon Jr.", rank: 178, age: 20.6, team: "PHI", pos: "" },
  { name: "Noah Clowney", rank: 179, age: 22.0, team: "BKN", pos: "PF,C" },
  { name: "Terrence Shannon Jr.", rank: 180, age: 25.9, team: "MIN", pos: "SF,PF" },
  { name: "Malik Monk", rank: 181, age: 28.4, team: "SAC", pos: "PG,SG" },
  { name: "Jonathan Kuminga", rank: 182, age: 23.7, team: "ATL", pos: "SF,PF" },
  { name: "Leonard Miller", rank: 183, age: 22.6, team: "CHI", pos: "SF,PF" },
  { name: "Jarace Walker", rank: 184, age: 22.8, team: "IND", pos: "SF,PF" },
  { name: "John Collins", rank: 185, age: 28.8, team: "LAC", pos: "PF,C" },
  { name: "Jordan Poole", rank: 186, age: 27.0, team: "NO", pos: "PG,SG" },
  { name: "Kyle Filipowski", rank: 187, age: 22.7, team: "UTA", pos: "PF,C" },
  { name: "Oso Ighodaro", rank: 188, age: 24.0, team: "PHO", pos: "C" },
  { name: "Gui Santos", rank: 189, age: 24.0, team: "GS", pos: "SF,PF" },
  { name: "Isaiah Collier", rank: 190, age: 21.7, team: "UTA", pos: "PG,SG" },
  { name: "Will Riley", rank: 191, age: 20.4, team: "WAS", pos: "SF,PF" },
  { name: "Rui Hachimura", rank: 192, age: 28.4, team: "LAL", pos: "SF,PF" },
  { name: "Jared McCain", rank: 193, age: 22.4, team: "OKC", pos: "PG,SG" },
  { name: "Carlton Carrington", rank: 194, age: 20.9, team: "WAS", pos: "PG,SG" },
  { name: "Ousmane Dieng", rank: 195, age: 23.1, team: "MIL", pos: "SF,PF,C" },
  { name: "Max Christie", rank: 196, age: 23.4, team: "DAL", pos: "SG,SF" },
  { name: "Nikola Vucevic", rank: 197, age: 35.7, team: "ORL", pos: "C" },
  { name: "Max Strus", rank: 198, age: 30.3, team: "CLE", pos: "SG,SF" },
  { name: "Cam Spencer", rank: 199, age: 26.2, team: "MEM", pos: "PG,SG" },
  { name: "Nique Clifford", rank: 200, age: 24.4, team: "SAC", pos: "SG,SF" },
  { name: "Jalen Smith", rank: 201, age: 26.3, team: "CHI", pos: "PF,C" },
  { name: "Collin Sexton", rank: 202, age: 27.5, team: "CHI", pos: "PG,SG" },
  { name: "Carter Bryant", rank: 203, age: 20.6, team: "SA", pos: "SF" },
  { name: "Rasheer Fleming", rank: 204, age: 22.0, team: "PHO", pos: "PF" },
  { name: "Joan Beringer", rank: 205, age: 19.6, team: "MIN", pos: "C" },
  { name: "Donte DiVincenzo", rank: 206, age: 29.4, team: "MIN", pos: "PG,SG" },
  { name: "Nikola Jovic", rank: 207, age: 23.1, team: "MIA", pos: "PF,C" },
  { name: "Ron Holland II", rank: 208, age: 21.0, team: "DET", pos: "SF,PF" },
  { name: "Cam Whitmore", rank: 209, age: 22.0, team: "WAS", pos: "SF,PF" },
  { name: "GG Jackson II", rank: 210, age: 21.5, team: "MEM", pos: "SF,PF,C" },
  { name: "Kasparas Jakucionis", rank: 211, age: 20.1, team: "MIL", pos: "PG" },
  { name: "Mitchell Robinson", rank: 212, age: 28.3, team: "NY", pos: "C" },
  { name: "Keon Ellis", rank: 213, age: 26.5, team: "CLE", pos: "PG,SG" },
  { name: "Jerami Grant", rank: 214, age: 32.3, team: "MEM", pos: "SF,PF" },
  { name: "Obi Toppin", rank: 215, age: 28.3, team: "IND", pos: "PF" },
  { name: "Cameron Carr", rank: 216, age: 21.6, team: "LAL", pos: "" },
  { name: "Dylan Cardwell", rank: 217, age: 24.5, team: "SAC", pos: "PF,C" },
  { name: "Neemias Queta", rank: 218, age: 27.0, team: "BOS", pos: "PF,C" },
  { name: "Zuby Ejiofor", rank: 219, age: 22.2, team: "ATL", pos: "" },
  { name: "Karim Lopez", rank: 220, age: 19.2, team: "MEM", pos: "" },
  { name: "Jayden Quaintance", rank: 221, age: 19.0, team: "SA", pos: "" },
  { name: "Jay Huff", rank: 222, age: 28.9, team: "IND", pos: "C" },
  { name: "Jamal Shead", rank: 223, age: 23.9, team: "TOR", pos: "PG" },
  { name: "Dru Smith", rank: 224, age: 28.5, team: "MIA", pos: "PG,SG" },
  { name: "Isaiah Jackson", rank: 225, age: 24.5, team: "LAC", pos: "C" },
  { name: "Drake Powell", rank: 226, age: 20.8, team: "BKN", pos: "SG" },
  { name: "Thomas Sorber", rank: 227, age: 20.5, team: "OKC", pos: "C" },
  { name: "Brice Sensabaugh", rank: 228, age: 22.7, team: "UTA", pos: "SG,SF,PF" },
  { name: "Saddiq Bey", rank: 229, age: 27.2, team: "NO", pos: "SF,PF" },
  { name: "De'Anthony Melton", rank: 230, age: 28.1, team: "GS", pos: "PG,SG" },
  { name: "Jrue Holiday", rank: 231, age: 36.1, team: "POR", pos: "PG,SG" },
  { name: "Taylor Hendricks", rank: 232, age: 22.6, team: "MEM", pos: "SF,PF,C" },
  { name: "Naji Marshall", rank: 233, age: 28.4, team: "DAL", pos: "SG,SF,PF" },
  { name: "Tobias Harris", rank: 234, age: 34.0, team: "DET", pos: "PF" },
  { name: "Yang Hansen", rank: 235, age: 21.0, team: "POR", pos: "C" },
  { name: "Jusuf Nurkic", rank: 236, age: 31.9, team: "UTA", pos: "C" },
  { name: "Kelly Oubre Jr.", rank: 237, age: 30.6, team: "PHI", pos: "SF,PF" },
  { name: "Quentin Grimes", rank: 238, age: 26.1, team: "PHI", pos: "SG,SF" },
  { name: "Alex Karaban", rank: 239, age: 23.6, team: "SAC", pos: "" },
  { name: "Ryan Conwell", rank: 240, age: 22.0, team: "MIA", pos: "" },
  { name: "Sergio de Larrea", rank: 241, age: 20.6, team: "DAL", pos: "" },
  { name: "Andrew Wiggins", rank: 242, age: 31.4, team: "MIA", pos: "SG,SF,PF" },
  { name: "Draymond Green", rank: 243, age: 36.3, team: "GS", pos: "PF,C" },
  { name: "Jaylin Williams", rank: 244, age: 24.0, team: "OKC", pos: "PF,C" },
  { name: "Henri Veesaar", rank: 245, age: 22.3, team: "ATL", pos: "" },
  { name: "Baba Miller", rank: 246, age: 22.4, team: "LAC", pos: "" },
  { name: "Richie Saunders", rank: 247, age: 24.8, team: "MEM", pos: "" },
  { name: "Jaron Pierre Jr.", rank: 248, age: 24.0, team: "NO", pos: "" },
  { name: "Tyler Bilodeau", rank: 249, age: 22.2, team: "BKN", pos: "" },
  { name: "Ryan Dunn", rank: 250, age: 23.5, team: "PHO", pos: "SF,PF" },
  { name: "Miles McBride", rank: 251, age: 25.8, team: "NY", pos: "PG,SG" },
  { name: "Danny Wolf", rank: 252, age: 22.2, team: "BKN", pos: "PF,C" },
  { name: "Cody Williams", rank: 253, age: 21.6, team: "UTA", pos: "SG,SF" },
  { name: "Josh Minott", rank: 254, age: 23.6, team: "BKN", pos: "SF,PF" },
  { name: "Justin Champagnie", rank: 255, age: 25.0, team: "WAS", pos: "SF,PF" },
  { name: "Luke Kornet", rank: 256, age: 31.0, team: "SA", pos: "C" },
  { name: "Nolan Traoré", rank: 257, age: 20.1, team: "BKN", pos: "PG" },
  { name: "Noa Essengue", rank: 258, age: 19.5, team: "CHI", pos: "PF" },
  { name: "Yves Missi", rank: 259, age: 22.1, team: "NO", pos: "C" },
  { name: "Pelle Larsson", rank: 260, age: 25.4, team: "MIA", pos: "SG,SF" },
  { name: "Julian Champagnie", rank: 261, age: 25.0, team: "SA", pos: "SG,SF" },
  { name: "Keldon Johnson", rank: 262, age: 26.7, team: "SA", pos: "SF,PF" },
  { name: "Sandro Mamukelashvili", rank: 263, age: 27.1, team: "TOR", pos: "PF,C" },
  { name: "Emanuel Sharp", rank: 264, age: 22.3, team: "SAC", pos: "" },
  { name: "Tarris Reed Jr.", rank: 265, age: 22.9, team: "SA", pos: "" },
  { name: "Isaiah Evans", rank: 266, age: 20.6, team: "MIN", pos: "" },
  { name: "Kobe Sanders", rank: 267, age: 24.1, team: "LAC", pos: "SG,SF" },
  { name: "Devin Carter", rank: 268, age: 24.3, team: "ATL", pos: "PG,SG" },
  { name: "Trevon Brazile", rank: 269, age: 23.5, team: "DEN", pos: "" },
  { name: "Izaiyah Nelson", rank: 270, age: 22.8, team: "ORL", pos: "" },
  { name: "Koa Peat", rank: 271, age: 19.4, team: "PHO", pos: "" },
  { name: "Bruce Thornton", rank: 272, age: 22.8, team: "HOU", pos: "" },
  { name: "D'Angelo Russell", rank: 273, age: 30.4, team: "WAS", pos: "PG" },
  { name: "Bradley Beal", rank: 274, age: 33.0, team: "LAC", pos: "SG,SF" },
  { name: "Goga Bitadze", rank: 275, age: 27.0, team: "ORL", pos: "C" },
  { name: "Gradey Dick", rank: 276, age: 22.6, team: "LAC", pos: "SG,SF" },
  { name: "Jordan Walsh", rank: 277, age: 22.3, team: "BOS", pos: "SG,SF,PF" },
  { name: "Luke Kennard", rank: 278, age: 30.0, team: "LAL", pos: "PG,SG" },
  { name: "Ty Jerome", rank: 279, age: 29.0, team: "MEM", pos: "PG,SG" },
  { name: "Jordan Miller", rank: 280, age: 26.4, team: "LAC", pos: "SG,SF" },
  { name: "Brandon Williams", rank: 281, age: 26.6, team: "DAL", pos: "PG" },
  { name: "Bennett Stirtz", rank: 282, age: 22.7, team: "OKC", pos: "" },
  { name: "Chris Cenac Jr.", rank: 283, age: 19.4, team: "BOS", pos: "" },
  { name: "Malique Lewis", rank: 284, age: 21.6, team: "MIL", pos: "" },
  { name: "Felix Okpara", rank: 285, age: 22.2, team: "WAS", pos: "" },
  { name: "Tobi Lawal", rank: 286, age: 23.2, team: "DAL", pos: "" },
  { name: "Vsevolod Ishchenko", rank: 287, age: 21.4, team: "DAL", pos: "" },
  { name: "Michael Ajayi", rank: 288, age: 23.1, team: "CHA", pos: "" },
  { name: "Jake LaRavia", rank: 289, age: 24.7, team: "LAL", pos: "SF,PF" },
  { name: "Moussa Cisse", rank: 290, age: 24.0, team: "", pos: "" },
  { name: "Aaron Wiggins", rank: 291, age: 27.5, team: "ATL", pos: "SG,SF" },
  { name: "Ryan Nembhard", rank: 292, age: 23.3, team: "DAL", pos: "PG" },
  { name: "Sion James", rank: 293, age: 23.6, team: "CHA", pos: "SG,SF" },
  { name: "Walter Clayton Jr.", rank: 294, age: 23.3, team: "MEM", pos: "PG,SG" },
  { name: "De'Andre Hunter", rank: 295, age: 28.6, team: "SAC", pos: "SF,PF" },
  { name: "Kyle Kuzma", rank: 296, age: 30.9, team: "MIL", pos: "SF,PF" },
  { name: "Gary Trent Jr.", rank: 297, age: 27.5, team: "MIL", pos: "SG,SF" },
  { name: "Luguentz Dort", rank: 298, age: 27.2, team: "OKC", pos: "SG,SF" },
  { name: "Scotty Pippen Jr.", rank: 299, age: 25.6, team: "MEM", pos: "PG,SG" },
  { name: "Bobby Portis", rank: 300, age: 31.4, team: "MIA", pos: "PF,C" },
  { name: "Adem Bona", rank: 301, age: 23.3, team: "PHI", pos: "C" },
  { name: "Moses Moody", rank: 302, age: 24.1, team: "GS", pos: "SG,SF,PF" },
  { name: "Cole Anthony", rank: 303, age: 26.1, team: "PHO", pos: "PG" },
  { name: "Pat Spencer", rank: 304, age: 30.0, team: "GS", pos: "PG,SG" },
  { name: "Tristan Da Silva", rank: 305, age: 25.1, team: "ORL", pos: "SF,PF" },
  { name: "Derrick Jones Jr.", rank: 306, age: 29.4, team: "LAC", pos: "SF,PF" },
  { name: "Bones Hyland", rank: 307, age: 25.8, team: "MIN", pos: "PG,SG" },
  { name: "Grant Williams", rank: 308, age: 27.6, team: "CHA", pos: "PF,C" },
  { name: "Andre Drummond", rank: 309, age: 32.9, team: "PHI", pos: "C" },
  { name: "Dennis Schröder", rank: 310, age: 32.8, team: "CLE", pos: "PG,SG" },
  { name: "Duncan Robinson", rank: 311, age: 32.2, team: "DET", pos: "SG,SF" },
  { name: "Spencer Jones", rank: 312, age: 25.0, team: "DEN", pos: "SG,SF" },
  { name: "Cam Thomas", rank: 313, age: 24.7, team: "MIL", pos: "SG,SF" },
  { name: "Caris LeVert", rank: 314, age: 31.9, team: "DET", pos: "SG,SF" },
  { name: "Marcus Smart", rank: 315, age: 32.3, team: "LAL", pos: "PG,SG" },
  { name: "Paul Reed", rank: 316, age: 27.0, team: "DET", pos: "PF,C" },
  { name: "Julian Strawther", rank: 317, age: 24.2, team: "DEN", pos: "SG,SF" },
  { name: "Rob Dillingham", rank: 318, age: 21.5, team: "CHI", pos: "PG" },
  { name: "Zach Collins", rank: 319, age: 28.6, team: "CHI", pos: "C" },
  { name: "Johnny Furphy", rank: 320, age: 21.6, team: "IND", pos: "SG,SF" },
  { name: "Quinten Post", rank: 321, age: 26.3, team: "GS", pos: "C" },
  { name: "Marcus Sasser", rank: 322, age: 25.8, team: "DET", pos: "PG" },
  { name: "Alex Caruso", rank: 323, age: 32.3, team: "OKC", pos: "SG,SF" },
  { name: "Precious Achiuwa", rank: 324, age: 26.8, team: "SAC", pos: "PF,C" },
  { name: "Cameron Payne", rank: 325, age: 31.9, team: "PHI", pos: "PG,SG" },
  { name: "Isaiah Joe", rank: 326, age: 27.0, team: "DET", pos: "SG,SF" },
  { name: "Hugo González", rank: 327, age: 20.4, team: "BOS", pos: "SF" },
  { name: "Killian Hayes", rank: 328, age: 24.9, team: "SAC", pos: "PG" },
  { name: "Caleb Love", rank: 329, age: 24.8, team: "POR", pos: "PG,SG" },
  { name: "Khris Middleton", rank: 330, age: 34.9, team: "DAL", pos: "SF,PF" },
  { name: "Jeremy Sochan", rank: 331, age: 23.1, team: "NY", pos: "PF,C" },
  { name: "DaRon Holmes II", rank: 332, age: 23.9, team: "DEN", pos: "PF,C" },
  { name: "Nikola Topic", rank: 333, age: 20.9, team: "OKC", pos: "PG" },
  { name: "Vince Williams Jr.", rank: 334, age: 25.8, team: "UTA", pos: "PG,SG,SF" },
  { name: "Jose Alvarado", rank: 335, age: 28.2, team: "NY", pos: "PG" },
  { name: "Nae'Qwan Tomlin", rank: 336, age: 25.6, team: "CLE", pos: "PF" },
  { name: "Ben Sheppard", rank: 337, age: 25.0, team: "IND", pos: "SG,SF" },
  { name: "Sam Merrill", rank: 338, age: 30.1, team: "CLE", pos: "SG,SF" },
  { name: "Brook Lopez", rank: 339, age: 38.3, team: "LAC", pos: "C" },
  { name: "Steven Adams", rank: 340, age: 33.0, team: "HOU", pos: "C" },
  { name: "Karlo Matkovic", rank: 341, age: 25.3, team: "NO", pos: "PF,C" },
  { name: "Jaxson Hayes", rank: 342, age: 26.1, team: "LAL", pos: "C" },
  { name: "Jase Richardson", rank: 343, age: 20.7, team: "ORL", pos: "SG" },
  { name: "Klay Thompson", rank: 344, age: 36.4, team: "DAL", pos: "SG,SF" },
  { name: "Kevin Huerter", rank: 345, age: 27.8, team: "DET", pos: "SG,SF" },
  { name: "Ziaire Williams", rank: 346, age: 24.8, team: "BKN", pos: "SG,SF" },
  { name: "Dean Wade", rank: 347, age: 29.6, team: "CLE", pos: "SF,PF" },
  { name: "Royce O'Neale", rank: 348, age: 33.1, team: "CHA", pos: "SF,PF" },
  { name: "Landry Shamet", rank: 349, age: 29.3, team: "NY", pos: "SG,SF" },
  { name: "Jordan Goodwin", rank: 350, age: 27.7, team: "PHO", pos: "PG,SG,SF" },
  { name: "Isaac Okoro", rank: 351, age: 25.4, team: "CHI", pos: "SF,PF" },
  { name: "Bronny James", rank: 352, age: 21.7, team: "LAL", pos: "PG,SG" },
  { name: "Moritz Wagner", rank: 353, age: 29.2, team: "ORL", pos: "C" },
  { name: "Kris Dunn", rank: 354, age: 32.3, team: "LAC", pos: "PG,SG" },
  { name: "Meleek Thomas", rank: 355, age: 19.9, team: "CLE", pos: "" },
  { name: "Dillon Mitchell", rank: 356, age: 22.7, team: "BOS", pos: "" },
  { name: "Nick Boyd", rank: 357, age: 25.2, team: "GS", pos: "" },
  { name: "Tyler Nickel", rank: 358, age: 22.8, team: "NY", pos: "" },
  { name: "Jack Kayil", rank: 359, age: 20.4, team: "NY", pos: "" },
  { name: "Aaron Nkrumah", rank: 360, age: 24.6, team: "DEN", pos: "" },
  { name: "Tyler Kolek", rank: 361, age: 25.3, team: "NY", pos: "PG" },
  { name: "Tyus Jones", rank: 362, age: 30.1, team: "DEN", pos: "PG" },
  { name: "Bruce Brown", rank: 363, age: 29.9, team: "DEN", pos: "PG,SG" },
  { name: "Lonzo Ball", rank: 364, age: 28.7, team: "UTA", pos: "PG,SG" },
  { name: "Tre Jones", rank: 365, age: 26.5, team: "CHI", pos: "PG,SG" },
  { name: "Micah Peavy", rank: 366, age: 24.9, team: "NO", pos: "SG,SF" },
  { name: "AJ Green", rank: 367, age: 26.8, team: "MIL", pos: "PG,SG,SF" },
  { name: "RayJ Dennis", rank: 368, age: 25.3, team: "ATL", pos: "PG" },
  { name: "Guerschon Yabusele", rank: 369, age: 30.5, team: "CHI", pos: "PF,C" },
  { name: "T.J. McConnell", rank: 370, age: 34.3, team: "IND", pos: "PG" },
  { name: "Patrick Williams", rank: 371, age: 24.8, team: "CHI", pos: "PF" },
  { name: "Dominick Barlow", rank: 372, age: 23.1, team: "PHI", pos: "PF,C" },
  { name: "Tyrese Martin", rank: 373, age: 27.3, team: "PHI", pos: "PG,SG,SF" },
  { name: "Javon Small", rank: 374, age: 23.5, team: "MEM", pos: "PG,SG" },
  { name: "Will Richard", rank: 375, age: 23.5, team: "GS", pos: "SG,SF" },
  { name: "Corey Kispert", rank: 376, age: 27.3, team: "ATL", pos: "SF,PF" },
  { name: "Jaden Hardy", rank: 377, age: 24.0, team: "WAS", pos: "PG,SG" },
  { name: "Ben Saraf", rank: 378, age: 20.2, team: "BKN", pos: "SG" },
  { name: "Sam Hauser", rank: 379, age: 28.6, team: "BOS", pos: "SF,PF" },
  { name: "Buddy Hield", rank: 380, age: 33.5, team: "ATL", pos: "SG,SF" },
  { name: "Tre Mann", rank: 381, age: 25.4, team: "CHA", pos: "PG,SG" },
  { name: "Vít Krejcí", rank: 382, age: 26.0, team: "POR", pos: "SG,SF" },
  { name: "Tim Hardaway Jr.", rank: 383, age: 34.3, team: "DEN", pos: "SG,SF" },
  { name: "Haywood Highsmith", rank: 384, age: 29.6, team: "PHO", pos: "SF,PF" },
  { name: "Dalton Knecht", rank: 385, age: 25.2, team: "LAL", pos: "SG,SF" },
  { name: "Mouhamed Gueye", rank: 386, age: 23.6, team: "ATL", pos: "PF,C" },
  { name: "Trendon Watford", rank: 387, age: 25.6, team: "PHI", pos: "PF,C" },
  { name: "Jonathan Isaac", rank: 388, age: 28.7, team: "ORL", pos: "SF,PF" },
  { name: "Jordan Hawkins", rank: 389, age: 24.2, team: "NO", pos: "SG,SF" },
  { name: "Asa Newell", rank: 390, age: 20.7, team: "ATL", pos: "PF" },
  { name: "Jordan Clarkson", rank: 391, age: 34.1, team: "NY", pos: "PG,SG" },
  { name: "Dariq Whitehead", rank: 392, age: 21.9, team: "MEM", pos: "SG,SF" },
  { name: "Olivier-Maxence Prosper", rank: 393, age: 24.0, team: "MEM", pos: "PF,C" },
  { name: "Jock Landale", rank: 394, age: 30.7, team: "ATL", pos: "C" },
  { name: "Tristan Vukcevic", rank: 395, age: 23.3, team: "WAS", pos: "PF,C" },
  { name: "Kris Murray", rank: 396, age: 25.9, team: "MEM", pos: "SF,PF" },
  { name: "Russell Westbrook", rank: 397, age: 37.6, team: "SAC", pos: "PG,SG" },
  { name: "Luka Garza", rank: 398, age: 27.5, team: "BOS", pos: "C" },
  { name: "Trayce Jackson-Davis", rank: 399, age: 26.4, team: "TOR", pos: "C" },
  { name: "Josh Green", rank: 400, age: 25.6, team: "MIN", pos: "SG,SF" },
  { name: "Noah Penda", rank: 401, age: 21.5, team: "ORL", pos: "SF" },
  { name: "Chaz Lanier", rank: 402, age: 24.5, team: "DET", pos: "SG" },
  { name: "Liam McNeeley", rank: 403, age: 20.7, team: "CHA", pos: "SF" },
  { name: "Thomas Bryant", rank: 404, age: 28.9, team: "CLE", pos: "C" },
  { name: "Jonathan Mogbo", rank: 405, age: 24.7, team: "TOR", pos: "PF,C" },
  { name: "Bogdan Bogdanovic", rank: 406, age: 33.9, team: "LAC", pos: "SG,SF" },
  { name: "Andre Jackson Jr.", rank: 407, age: 24.6, team: "MIL", pos: "SG,SF" },
  { name: "Alijah Martin", rank: 408, age: 24.5, team: "TOR", pos: "SG" },
  { name: "Johni Broome", rank: 409, age: 24.0, team: "PHI", pos: "C" },
  { name: "Adou Thiero", rank: 410, age: 22.1, team: "LAL", pos: "SF" },
  { name: "Chaz Lanier", rank: 411, age: 24.5, team: "DET", pos: "SG" },
  { name: "Chris Youngblood", rank: 412, age: 24.4, team: "POR", pos: "SG" },
  { name: "Ron Harper Jr.", rank: 413, age: 26.2, team: "BOS", pos: "SF" },
  { name: "Kelly Olynyk", rank: 414, age: 35.2, team: "SA", pos: "PF,C" },
  { name: "Koby Brea", rank: 415, age: 23.7, team: "PHO", pos: "SG" },
  { name: "Jarred Vanderbilt", rank: 416, age: 27.2, team: "LAL", pos: "PF,C" },
  { name: "Nick Richards", rank: 417, age: 28.6, team: "CHI", pos: "C" },
  { name: "Jonas Valanciunas", rank: 418, age: 34.2, team: "DEN", pos: "C" },
  { name: "Brandon Boston Jr", rank: 419, age: 24.6, team: "NO", pos: "SF,PF" },
  { name: "Jalen Wilson", rank: 420, age: 25.7, team: "BKN", pos: "SF,PF" },
  { name: "AJ Johnson", rank: 421, age: 23.6, team: "MEM", pos: "PG,SG" },
  { name: "Ben Simmons", rank: 422, age: 29.9, team: "LAC", pos: "PG,C" },
  { name: "Wendell Moore Jr.", rank: 423, age: 24.8, team: "DET", pos: "SF" },
  { name: "Nikola Djurisic", rank: 424, age: 22.4, team: "ATL", pos: "SF" },
  { name: "Jared Butler", rank: 425, age: 25.9, team: "PHO", pos: "PG,SG" },
  { name: "Ochai Agbaji", rank: 426, age: 26.2, team: "BKN", pos: "SG,SF" },
  { name: "Taurean Prince", rank: 427, age: 32.3, team: "MIL", pos: "SF" },
  { name: "Clint Capela", rank: 428, age: 32.1, team: "HOU", pos: "C" },
  { name: "Bol Bol", rank: 429, age: 26.6, team: "PHO", pos: "PF,C" },
  { name: "Tidjane Salaun", rank: 430, age: 20.9, team: "CHA", pos: "PF" },
  { name: "Caleb Martin", rank: 431, age: 30.8, team: "DAL", pos: "SF,PF" },
  { name: "Richaun Holmes", rank: 432, age: 32.7, team: "WAS", pos: "C" },
  { name: "Jett Howard", rank: 433, age: 22.8, team: "ORL", pos: "SF" },
  { name: "Dalano Banton", rank: 434, age: 26.7, team: "BOS", pos: "SG,SF" },
  { name: "John Konchar", rank: 435, age: 30.3, team: "UTA", pos: "SG,SF" },
  { name: "James Wiseman", rank: 436, age: 25.3, team: "IND", pos: "C" },
  { name: "Bobi Klintman", rank: 437, age: 23.3, team: "DET", pos: "PF" },
  { name: "Terance Mann", rank: 438, age: 29.7, team: "BKN", pos: "SG,SF" },
  { name: "Duop Reath", rank: 439, age: 30.0, team: "ATL", pos: "C" },
  { name: "Jaden Ivey", rank: 440, age: 24.4, team: "CHI", pos: "PG,SG" },
  { name: "Maxi Kleber", rank: 441, age: 34.4, team: "LAL", pos: "PF,C" },
  { name: "Georges Niang", rank: 442, age: 33.0, team: "MEM", pos: "PF" },
  { name: "Keon Johnson", rank: 443, age: 24.3, team: "BKN", pos: "PG,SG" },
  { name: "Ariel Hukporti", rank: 444, age: 24.2, team: "NY", pos: "C" },
  { name: "Spencer Dinwiddie", rank: 445, age: 33.2, team: "CHA", pos: "PG,SG" },
  { name: "Malaki Branham", rank: 446, age: 23.1, team: "CHA", pos: "SG,SF" },
  { name: "Dante Exum", rank: 447, age: 31.0, team: "WAS", pos: "PG,SG" },
  { name: "Eric Gordon", rank: 448, age: 37.5, team: "MEM", pos: "SG,SF" },
  { name: "Kentavious Caldwell-Pope", rank: 449, age: 33.4, team: "MEM", pos: "SG,SF" },
  { name: "Ja'Kobe Walter", rank: 450, age: 21.8, team: "TOR", pos: "PG,SG" },
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

  let rosters, users, allPlayers, tradedPicks;
  try {
    [rosters, users, allPlayers, tradedPicks] = await Promise.all([
      fetch(`${BASE}/league/${LEAGUE_ID}/rosters`).then(r => r.json()),
      fetch(`${BASE}/league/${LEAGUE_ID}/users`).then(r => r.json()),
      fetch(`${BASE}/players/nba`).then(r => r.json()),
      fetch(`${BASE}/league/${LEAGUE_ID}/traded_picks`).then(r => r.json())
    ]);
  } catch (e) {
    Object.values(containers).forEach(el => {
      if (el) el.innerHTML = '<p style="color:#999;">Failed to load data.</p>';
    });
    return;
  }

  // Build draft pick inventory
  const { inventory: pickInventory, teamRecords } = buildPickInventory(rosters, tradedPicks || []);

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
  ['1yr', '5yr', '10yr'].forEach(window => {
    const scored = teams.map(t => {
      let playerValue = 0;
      let topPlayers = [];

      t.playerNames.forEach(pName => {
        const dynMatch = findDynastyRank(pName);
        if (dynMatch) {
          const baseVal = rankToValue(dynMatch.rank);
          const mult = ageMultiplier(dynMatch.age, window);
          const val = baseVal * mult;
          playerValue += val;
          topPlayers.push({ name: dynMatch.name, rank: dynMatch.rank, age: dynMatch.age, value: val.toFixed(1) });
        }
      });

      topPlayers.sort((a, b) => b.value - a.value);

      // Draft capital
      const picks = pickInventory[t.roster_id] || [];
      const draftCapital = calcDraftCapitalValue(picks, teamRecords, window);

      // Historical performance
      const hist = calcHistoricalScore(t.roster_id);
      const histWeights = { '1yr': 0.35, '5yr': 0.20, '10yr': 0.10 };
      const playerWeights = { '1yr': 0.50, '5yr': 0.40, '10yr': 0.30 };
      const pickWeights = { '1yr': 0.15, '5yr': 0.25, '10yr': 0.35 };
      // Normalize: scale historical to be comparable
      const histValue = hist.score * 3; // scale up to match player/pick ranges

      const rawTotal = playerValue + draftCapital.total + histValue;
      // Weighted blend
      const totalPlayerPct = playerValue / (rawTotal || 1);
      const totalPickPct = draftCapital.total / (rawTotal || 1);
      const totalHistPct = histValue / (rawTotal || 1);
      const weightedScore = (playerValue * playerWeights[window] / (totalPlayerPct || 0.33))
        + (draftCapital.total * pickWeights[window] / (totalPickPct || 0.33))
        + (histValue * histWeights[window] / (totalHistPct || 0.33));
      // Simpler: just weight the components directly
      const powerScore = (playerValue * (playerWeights[window] / 0.5))
        + (draftCapital.total * (pickWeights[window] / 0.15))
        + (histValue * (histWeights[window] / 0.35));

      return {
        ...t,
        playerValue: playerValue,
        draftValue: draftCapital.total,
        histValue: histValue,
        hist: hist,
        powerScore: powerScore,
        topPlayers: topPlayers.slice(0, 10),
        topPicks: draftCapital.details.slice(0, 4)
      };
    });

    scored.sort((a, b) => b.powerScore - a.powerScore);

    const container = containers[window];
    if (!container) return;

    // Build roster name map for pick display
    const rosterNames = {};
    teams.forEach(tm => { rosterNames[tm.roster_id] = tm.name; });

    let html = '';
    scored.forEach((t, i) => {
      const topList = t.topPlayers.map(p =>
        `<span style="display:inline-block;background:rgba(212,175,55,0.1);padding:2px 8px;border-radius:4px;margin:2px;font-size:0.8rem;"><strong>${p.name}</strong> <span style="color:var(--gold);">#${p.rank}</span></span>`
      ).join(' ');

      const pickList = t.topPicks.length ? t.topPicks.map(p => {
        const origName = rosterNames[p.originalTeam] || ('Team ' + p.originalTeam);
        const ownerNote = origName !== t.name ? ` (${origName}'s pick)` : ' (own)';
        return `<span style="display:inline-block;background:rgba(100,200,100,0.1);border:1px solid rgba(100,200,100,0.2);padding:2px 8px;border-radius:4px;margin:2px;font-size:0.75rem;color:#7ddf7d;">🎯 ${p.label}${ownerNote}</span>`;
      }).join(' ') : '';

      const cardId = `card-${window}-${i}`;
      const chipBadge = t.hist.chips ? '🏆' : '';
      const trendIcon = t.hist.trend === 'rising' ? '📈' : t.hist.trend === 'falling' ? '📉' : '➡️';

      html += `<div class="pr-card" style="cursor:pointer;padding:0;" onclick="document.getElementById('${cardId}').style.display = document.getElementById('${cardId}').style.display === 'none' ? 'block' : 'none'; this.querySelector('.expand-icon').textContent = document.getElementById('${cardId}').style.display === 'none' ? '▶' : '▼';">
        <div style="display:flex;align-items:center;gap:1rem;padding:1.25rem 2rem;">
          <div class="pr-rank" style="font-size:2rem;">${i + 1}</div>
          <div style="flex:1;">
            <h3 style="margin-bottom:0.15rem;">${t.name} ${chipBadge}</h3>
            <span style="color:var(--gray-text);font-size:0.85rem;">${t.hist.careerW}-${t.hist.careerL} career (${(t.hist.winPct*100).toFixed(0)}%) ${trendIcon}</span>
          </div>
          <div style="text-align:right;">
            <div style="color:var(--gold);font-weight:700;font-size:1.2rem;">${t.powerScore.toFixed(1)}</div>
            <div style="color:var(--gray-text);font-size:0.7rem;">Power Score</div>
          </div>
          <span class="expand-icon" style="color:var(--gray-text);font-size:0.8rem;margin-left:0.5rem;">▶</span>
        </div>
        <div id="${cardId}" style="display:none;padding:0 2rem 1.25rem;border-top:1px solid rgba(255,255,255,0.05);">
          <p style="font-size:0.8rem;color:#888;margin:0.75rem 0 0.5rem;">Players: ${t.playerValue.toFixed(1)} + Picks: ${t.draftValue.toFixed(1)} + History: ${t.histValue.toFixed(1)}</p>
          <div style="margin-bottom:0.5rem;">${topList || '<span style="color:#666;">No ranked players found</span>'}</div>
          ${pickList ? '<div>' + pickList + '</div>' : ''}
        </div>
      </div>`;
    });

    container.innerHTML = html;
  });
}
