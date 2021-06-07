var btnTranslate = document.querySelector(".btn-first")
var txtInput = document.querySelector("#txt-input")
var txtOutput = document.querySelector(".txt-output")

function clickHandler(){
    var inputText = txtInput.value
    console.log(inputText)

}

btnTranslate.addEventListener("click", clickHandler)