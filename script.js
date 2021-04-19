/*variable declaration*/
//miscellaneous
var nextText
var timeUsed = document.getElementById('timer').innerText
//keyboard variables
var backspace = false
//timer
var timer = false;
var timeMode = true
//timer
setInterval(updateTimer, 1000);
var sec = document.getElementById('timer').innerText
//textarea
var textarea_string
var textarea_value
//checkErrors
var textarea_array
var res_array
var i
//configuration
var setModeSec = 0
var setModeWord = 1
const defaultTimer = 30
var sec = defaultTimer
var newTime
var newWordLim
var words_limit = 20
var defaultWordLim = 20
//keylistener
var keylistener = true
//quote
var wordlim = 30
var givenLim = 25
var newword = "";
var words =
[
  'whispering', 'rapid', 'art', 'cheese', 'coat', 'dream',
  "dream", "value", "left", "common", "theory", "daffy", "supreme", "saw", "appliance", "quarrelsome",
  "windy", "file", "majestic", "bottle", "pretty", "encourage", "terrific", "overjoyed", "root", "brown",
  "country", "fluttering", "pointless", "redundant", "royal", "understood", "ambitious", "reflect"
]

/*functions*/
//timer update function
function updateTimer()
{
    sec = document.getElementById('timer').innerText
    if(timer)
    {
        if(timeMode == true)
        {
            if(sec == 0){sec = 0}
            else{sec = sec - 1}
        }
        else
        {
            document.getElementById('timer').innerText = 0
            sec++
        }
        document.getElementById('timer').innerText = sec
        if(sec == 0)
        {
            result()
        }
    }
}

//random word function
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
  }
  return newword
}

//setting words limit
function setWordLim(lim)
{
  givenLim = lim
}

//getting words with limit
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
  }
  return newword
}

//setting timer limit
function setTimerLim()
{
    var timer = document.getElementById('timer')
    if(document.getElementById('time-mode').classList == 'button time active_mode')
    {
        if(document.getElementById('time-button-15').classList == 'button active_config')
        {timer.innerText = 15}
        else if(document.getElementById('time-button-30').classList == 'button active_config')
        {timer.innerText = 30}
        else if(document.getElementById('time-button-45').classList == 'button active_config')
        {timer.innerText = 45}
        else if(document.getElementById('time-button-60').classList == 'button active_config')
        {timer.innerText = 60}
        else if(document.getElementById('time-button-120').classList == 'button active_config')
        {timer.innerText = 120}
    }
}

//textarea function
toSpan()
function toSpan()
{
    textarea_string = document.getElementById('textarea');

    if(document.getElementById('time-mode').classList == 'button time active_mode')
    {
        timeMode = true
        textarea_value = randomWord()
    }
    else if(document.getElementById('words-mode').classList == 'button words active_mode')
    {
        timeMode = false
        textarea_value = WordsWithLim()
    }
    textarea_array = Array.from(textarea_value);
    res_array = new Array(textarea_array.length)
    i = 0

    /**
     * this to divid the array of the textarea into words and more
     */
    var arrayInt = 0
    var spaceInt
    var arrayWords = new Array()
    var arrayWordsInt = 0
    var wordsInt = 0
    for(var j = 0; textarea_array.length>=j; j++)
    {
        if(textarea_array[j] == " ")
        {
            var x = ""
            while(j > arrayInt)
            {
                x = x + textarea_array[arrayInt]
                arrayInt++
            }
            arrayInt = j+1
            spaceInt = j
            arrayWords[arrayWordsInt] = x + "-" + wordsInt + " "
            arrayWordsInt++
        }
        else if(j == (textarea_array.length))
        {
            for(var l = textarea_array.length; l >= spaceInt; l--)
            {
                if(textarea_array[l] == " ")
                {
                    var x = ""
                    var o = l
                    o = o + 1
                    for(var m = o; m < textarea_array.length; m++){x = x + textarea_array[m]}
                    arrayWords[arrayWordsInt] = x + "-" + wordsInt + " "
                    arrayWordsInt++
                }
            }
        }
        wordsInt++
    }
    console.log(arrayWords)

    textarea_value.split('').forEach(character => {
        const characterSpan = document.createElement('span')
        characterSpan.innerHTML = character
        textarea_string.appendChild(characterSpan)
    })
}

//reset function
function reset()
{
    timer = false
    keylistener = true
    typedWordsInt = 0
    timeUsed = document.getElementById('timer').innerText
    document.getElementById('textarea').innerText = ""
    if(!timeMode){document.getElementById('timer').innerText = 0}
    setTimerLim()
    toSpan()
}

spanToWords()
function spanToWords()
{
    i = 0
    const arrayQuote = document.querySelectorAll('span')
    arrayQuote.forEach(function(characterSpan, index){

    })
}

//checkError function
var typedWordsInt = 0
var typedWrongWordsInt = 0
function errorCheck(char)
{
    var WordsInt = 0
    var WrongWordsInt = 0
    if(!timer)
    {
        timer = true
    }
    var res = char
    res_array[i] = res;

    const arrayQuote = document.querySelectorAll('span')
    const arrayValue = res_array
    arrayQuote.forEach((characterSpan, index) => {
        const character = arrayValue[index]
        if(character == null)
        {
            characterSpan.classList.remove('correct')
            characterSpan.classList.remove('incorrect')
        }
        else if(character == characterSpan.innerText)
        {
            characterSpan.classList.add('correct')
            characterSpan.classList.remove('incorrect')
            WordsInt++
        }
        else
        {
            characterSpan.classList.remove('correct')
            characterSpan.classList.add('incorrect')
            WrongWordsInt++
        }
    })

    if(i == 0)
    {
        arrayQuote[i+1].classList.add('active')
    }
    else if(typedWordsInt+1 >= arrayQuote.length)
    {
        if(sec != 0)
        {
            result()
        }
        else
        {
          arrayQuote[i].classList.remove('active')
        }
    }
    else if(typedWordsInt+1 < res_array.length)
    {
        arrayQuote[i].classList.remove('active')
        arrayQuote[i+1].classList.add('active')
    }

    typedWordsInt++
    typedWrongWordsInt = WrongWordsInt

    if(!timeMode)
    {
      if((i+1) >= res_array.length)
      {
        timeUsed = document.getElementById('timer').innerText
        result()
      }
    }
    i++
}

//getting results
function result()
{
  keylistener = false
  timer = false
  /*calculating wpm and accuracy*/
  var wpm
  var accuracy
  var typedRightWordsInt = typedWordsInt - typedWrongWordsInt

  //calculating wpm
  wpm = ((typedWordsInt/5 - typedWrongWordsInt) / (timeUsed/60))
  wpm = Math.round(wpm)
  wpm = Math.abs(wpm)
  console.log(wpm)

  //calculating accuracy
  accuracy = (typedRightWordsInt/typedWordsInt)*100
  accuracy = Math.round(accuracy)
  document.getElementById('textarea').innerText = "wpm: " + wpm + " " + "accuracy: " + accuracy + "%"
}

//setting mode
function setMode(setMode)
{
    /**setting mode to time */
    if(setMode == setModeSec)
    {
        document.getElementById('time-mode').classList.add('active_mode')
        document.getElementById('words-mode').classList.remove('active_mode')

        document.getElementById('time-options').classList.remove('false-mode')
        document.getElementById('word-options').classList.add('false-mode')

        /**setting limit to default i.e. 30s */
        words_limit = defaultTimer
    }
    /**setting mode to words */
    else if(setMode == setModeWord)
    {
        document.getElementById('words-mode').classList.add('active_mode')
        document.getElementById('time-mode').classList.remove('active_mode')

        document.getElementById('word-options').classList.remove('false-mode')
        document.getElementById('time-options').classList.add('false-mode')

        /**setting time to 0s */
        document.getElementById('timer').innerText = 0
    }
    reset()
}

//setting seconds
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

//setting words
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

//getting the limit for words
function getWordsLimit()
{
    return words_limit
}

/*Event Listeners*/
//event listner for setting mode
document.getElementById('time-mode').addEventListener("click", function(){setMode(0)})
document.getElementById('words-mode').addEventListener("click", function(){setMode(1)})
//event listner for setting seconds
document.getElementById('time-button-15').addEventListener("click", function(){setSeconds(15)})
document.getElementById('time-button-30').addEventListener("click", function(){setSeconds(30)})
document.getElementById('time-button-45').addEventListener("click", function(){setSeconds(45)})
document.getElementById('time-button-60').addEventListener("click", function(){setSeconds(60)})
document.getElementById('time-button-120').addEventListener("click", function(){setSeconds(120)})
//event listner for setting words
document.getElementById('word-button-25').addEventListener("click", function(){setWords(25)})
document.getElementById('word-button-50').addEventListener("click", function(){setWords(50)})
document.getElementById('word-button-75').addEventListener("click", function(){setWords(75)})
document.getElementById('word-button-100').addEventListener("click", function(){setWords(100)})
//event listner for getting keyinput
document.addEventListener("keypress", function(event)
{
    var char = event.key
    if(keylistener){errorCheck(char)}
})
document.addEventListener('keydown', function(event)
{
    var char = event.code
    if(char == 'Escape')
    {reset()}

    if(char == 'Backspace')
    {
        backspace = true
        console.log('backspaced')
    }
})
