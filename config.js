//import {randomWord, setWordLim} from './Quote.js'
//import { reset } from './script.js'

/*var setModeSec = 0
var setModeWord = 1

const defaultTimer = 30
var sec = defaultTimer
var newTime
var newWordLim

var words_limit = 20
var defaultWordLim = 20

document.getElementById('time-mode').addEventListener("click", function(){setMode(0)})
document.getElementById('words-mode').addEventListener("click", function(){setMode(1)})
function setMode(setMode)
{
    if(setMode == setModeSec)
    {
        document.getElementById('time-mode').classList.add('active_mode')
        document.getElementById('words-mode').classList.remove('active_mode')

        document.getElementById('time-options').classList.remove('false-mode')
        document.getElementById('word-options').classList.add('false-mode')

        words_limit = defaultTimer //setting time to default i.e 30 sec
    }
    else if(setMode == setModeWord)
    {
        document.getElementById('words-mode').classList.add('active_mode')
        document.getElementById('time-mode').classList.remove('active_mode')

        document.getElementById('word-options').classList.remove('false-mode')
        document.getElementById('time-options').classList.add('false-mode')

        document.getElementById('timer').innerText = 0
    }
    reset()
}

document.getElementById('time-button-15').addEventListener("click", function(){setSeconds(15)})
document.getElementById('time-button-30').addEventListener("click", function(){setSeconds(30)})
document.getElementById('time-button-45').addEventListener("click", function(){setSeconds(45)})
document.getElementById('time-button-60').addEventListener("click", function(){setSeconds(60)})
document.getElementById('time-button-120').addEventListener("click", function(){setSeconds(120)})

function setSeconds(givenSec)
{
    document.getElementById('timer').innerText = givenSec

    var previousTime = newTime
    newTime = "-" + givenSec
    document.getElementById('time-button'+newTime).classList.add("active_config")
    if(previousTime != null)
    {document.getElementById('time-button'+previousTime).classList.remove("active_config")}
    else{document.getElementById('time-button'+'-30').classList.remove("active_config")}
    reset()
}

document.getElementById('word-button-25').addEventListener("click", function(){setWords(25)})
document.getElementById('word-button-50').addEventListener("click", function(){setWords(50)})
document.getElementById('word-button-75').addEventListener("click", function(){setWords(75)})
document.getElementById('word-button-100').addEventListener("click", function(){setWords(100)})

function setWords(givenWords)
{
    var previousWordLim = newWordLim

    newWordLim = "-" + givenWords
    document.getElementById('word-button'+newWordLim).classList.add("active_config")
    if(previousWordLim != null)
    {document.getElementById('word-button'+previousWordLim).classList.remove("active_config")}
    else{document.getElementById('word-button-25').classList.remove("active_config")}
    setWordLim(givenWords)
    document.getElementById('timer').innerText = 0
    reset()
}

function getWordsLimit()
{
    return words_limit
}*/
