"use strict";

const usStates = {
  "al": "alabama",
  "ak": "alaska",
  "as": "american samoa",
  "az": "arizona",
  "ar": "arkansas",
  "ca": "california",
  "co": "colorado",
  "ct": "connecticut",
  "de": "delaware",
  "dc": "district of columbia",
  "fl": "florida",
  "ga": "georgia",
  "gu": "guam",
  "hi": "hawaii",
  "id": "idaho",
  "il": "illinois",
  "in": "indiana",
  "ia": "iowa",
  "ks": "kansas",
  "ky": "kentucky",
  "la": "louisiana",
  "me": "maine",
  "md": "maryland",
  "ma": "massachusetts",
  "mi": "michigan",
  "mn": "minnesota",
  "ms": "mississippi",
  "mo": "missouri",
  "mt": "montana",
  "ne": "nebraska",
  "nv": "nevada",
  "nh": "new hampshire",
  "nj": "new jersey",
  "nm": "new mexico",
  "ny": "new york",
  "nc": "north carolina",
  "nd": "north dakota",
  "oh": "ohio",
  "ok": "oklahoma",
  "or": "oregon",
  "pw": "palau",
  "pa": "pennsylvania",
  "pr": "puerto rico",
  "ri": "rhode island",
  "sc": "south carolina",
  "sd": "south dakota",
  "tn": "tennessee",
  "tx": "texas",
  "ut": "utah",
  "vt": "vermont",
  "vi": "virgin islands",
  "va": "virginia",
  "wa": "washington",
  "wv": "west virginia",
  "wi": "wisconsin",
  "wy": "wyoming"
}

const regions = {
     "northeast": ["connecticut", "delaware", "maine", "maryland", "massachusetts", "new-hampshire", "new-jersey", "new-york", "pennsylvania", "rhode-island", "vermont"],
     "southeast": ["alabama", "arkansas", "florida", "georgia", "kentucky", "louisiana", "mississippi", "north-carolina", "south-carolina", "tennessee", "virginia", "west-virginia"],
     "midwest": ["illinois", "indiana", "iowa", "kansas", "michigan", "minnesota", "missouri", "nebraska", "north-dakota", "ohio", "south-dakota", "wisconsin"],
     "southwest": ["arizona", "new-mexico", "oklahoma", "texas"],
     "western": ["alaska", "california", "colorado", "hawaii", "idaho", "montana", "nevada", "oregon", "utah", "washington", "wyoming"]
 }

const isUSState = (s) => {
  const state = s.toLowerCase();
  const keys = Object.keys(usStates);
  if(keys.indexOf(state) > -1) return true;

  const values = Object.values(usStates);
  if(values.indexOf(state) > -1) return true;

  return false;
}

const getRegion = (s) => {
  const state = s.toLowerCase();
  const keys = Object.keys(regions);
  let theRegion = "";
  for(let i = 0; i < keys.length; i++){
    let region = keys[i];
    let states = regions[region];

    if(states.indexOf(state) > -1) {
        theRegion = region;
        break;
    }
  }
  return theRegion;
}


module.exports = {
  isUSState: isUSState,
  getRegion: getRegion,
  states: usStates,
  regions: regions,

}
