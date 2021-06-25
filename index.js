// Code your crewMass function here:
const rocketFuelforOneKg = 9.5;
const uncrewedRocketWeight = 75000
function crewMass(crew){
let out= 0;
for(let i=0; i<crew.length; i++){
  if(crew[i]["species"]==="dog"||crew[i]["species"]==="cat"){
    out += 10;
  }
    out +=crew[i]["mass"]*9.5;
  }
 return Math.round(out);
}
// Code your fuelRequired function here:
/*
Our launch requires a safety margin for the fuel level, especially if the crew members are cute and fuzzy. Add an extra 200 kg of fuel for each dog or cat on board, but only an extra 100 kg for the other species. Update fuelRequired to account for this, then round the final amount of fuel UP to the nearest integer.
*/

function fuelRequired(uncrewedRocketWeight, massOfCrews){
  return uncrewedRocketWeight + massOfCrews;
}
// The pre-selected crew is in the array at the end of this file.
// Feel free to add, remove, or switch crew members as you see fit.

let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

let crew = [candidateB,candidateD,candidateF];

console.log(crewMass(crew));
console.log(fuelRequired(uncrewedRocketWeight, crewMass(crew)));

let fuelNeeded = fuelRequired(uncrewedRocketWeight, crewMass(crew));
let astronautsMass = crewMass(crew)


console.log(`The mission has a launch mass of ${astronautsMass}kg and requires ${fuelNeeded}kg of fuel.`)
