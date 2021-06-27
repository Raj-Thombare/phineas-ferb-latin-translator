var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#text-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/ferb-latin.json";
// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function getTranslationURL(text){
    return serverURL + "?" + "text=" + text
};

function errorHandler(error){
    console.log("Error Occurred!", error)
    alert("something is wrong with server! please try again later")
}


function clickHandler(){

    var inputText = txtInput.value

    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
    })
    .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler)