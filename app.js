var btnTranslate = document.querySelector(".btn-first")
var txtInput = document.querySelector("#txt-input")
var txtOutput = document.querySelector(".txt-output")

var serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function getTranslationURL(text){
    return serverUrl + "?" + "text=" + text
}

function clickHandler(){
    var inputText = txtInput.value  // taking input
    
    // calling server for processing
     fetch(getTranslationURL(inputText))
     .then (response => response.json())
     .then (json => {
         var translateText = json.contents.translated;
         txtOutput.innerText = translateText; // output
     })
}

btnTranslate.addEventListener("click", clickHandler)