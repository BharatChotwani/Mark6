var btnTranslate = document.querySelector(".btn-first");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector(".txt-output");

var serverUrl = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text){
    return serverUrl + "?" + "text=" + text
};

function errorHandler(error) {
    console.log("error occured", error);
    alert("max limit reached")
};

function clickHandler(){
    var inputText = txtInput.value  // taking input
    
    // calling server for processing
     fetch(getTranslationURL(inputText))
     .then (response => response.json())
     .then (json => {
         var translateText = json.contents.translated;
         txtOutput.innerText = translateText; // output
     })
     .catch (errorHandler)
};

btnTranslate.addEventListener("click", clickHandler)