const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
]



function superbowlWin(array){
  const winningTeam = array.find(element => element.result === "W")
  return winningTeam ? winningTeam.year : undefined
  }











