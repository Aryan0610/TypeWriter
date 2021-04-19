//import {getWordsLimit} from "./config.js";
var wordlim = 30
var givenLim = 25

var words =
[
  'whispering', 'rapid', 'art', 'cheese', 'coat', 'dream',
  "dream", "value", "left", "common", "theory", "daffy", "supreme", "saw", "appliance", "quarrelsome",
  "windy", "file", "majestic", "bottle", "pretty", "encourage", "terrific", "overjoyed", "root", "brown",
  "country", "fluttering", "pointless", "redundant", "royal", "understood", "ambitious", "reflect"
]
var newword = "";

function randomWord()
{
  newword = ""
  for(var i = 1; i <= wordlim; i++)
  {
    var random = Math.floor(Math.random() * words.length)
    var rword = (random, words[random])
    if(i == wordlim){rword = rword}
    else{rword = rword + " "}
    newword = newword + rword
    //console.log(random)
  }
  return newword
}

function setWordLim(lim)
{
  givenLim = lim
}

function WordsWithLim()
{
  newword = ""
  for(var i = 1; i <= givenLim; i++)
  {
    var random = Math.floor(Math.random() * words.length)
    var rword = (random, words[random])
    if(i == givenLim){rword = rword}
    else{rword = rword + " "}
    newword = newword + rword
    //console.log(random)
  }
  return newword
}

//export {returnQuote}
