function dwarfRollCall(dwarves) {
  var string = "";
  for (let i = dwarves.length / 2; i < dwarves.length; i++) {
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
    } else if (foods[i] === "swiss") {
      return foods[i];
    }
  }
  return 'no cheese!';
}


function startsWithB(words){
  var arr = [];
  
  for (i = 0; i < words.length; i++) {
    if (words[i].startsWith('b')) {
      arr.push(words[i]);
    }
  }
  
  return arr;
}

"alice".startsWith("b") // false
"bob".startsWith("b") // true

startsWithB(['brian', 'cody', 'cher']) // [ 'brian']
startsWithB(['banana', 'berry', 'cherry']) // [ 'banana', 'berry']
startsWithB(['chase', 'race', 'ace']) // []

