function dwarfRollCall(dwarves) {
  var string = "";
  for (let i = 0; i < dwarves.length; i++) {
    string += (`${i + 1}. ${dwarves[i]} `);
  }
  return string;
}

function summonCaptainPlanet(planeteerCalls){
  var arr = [];
  for (let i = 0; i < planeteerCalls.length; i++) {
    arr.push(`${planeteerCalls[i]}!`.toUpperCase());
  }
  return arr;
}

function longPlaneteerCalls(words) {
  var i = 0;
  if (words[i].length > 4) {
    return true;
  } else if (words[i].length <= 4) {
    return false;
  }
}

function findTheCheese (foods) {
  for (let i = 0; i < foods.length; i++) {
    if (foods[i] === "cheddar") {
      return foods[i];
    } else if (foods[i] === "gouda") {
      return foods[i];
    } else if (foods[i] === "camembert") {
      return foods[i];
    }
  }
  return 'no cheese!';
}

