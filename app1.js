/*// input
var username=prompt("what's your name?")
// processing
var welcomemessage= "Yes, I know that you're " + username
//output
alert(welcomemessage);*/
var btntranslate = document.querySelector("#btn-translate")
var inputtext = document.querySelector("#input-text")
var outputtext = document.querySelector("#output-text")
// outputtext.innerText = "ibru is good";
// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var serverURL = "https://api.funtranslations.com/translate/minion.json"
/*function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text
}*/
function getTranslationURL(value) {
    return serverURL + "?" + "text=" + value
}

function errorHandler(error) {
    console.log("error occured", error) // error handling function if server is down
    alert("There is a Rate limit of 5 requests per hour for this API. So, guys try again after sometime")
}

function clickEventHandler() {
    //   outputtext.innerText = "Banana " + inputtext.value;
    var inputText = inputtext.value; //(INPUT PART)
    //CALLING SERVER FOR PROCESSING
    fetch(getTranslationURL(inputText))// (PROCESSING PART) processing part this time went to server
        .then(response => response.json())
        // .then(json => console.log(json)) // this is to put the output on console
        // .then(json => console.log(json.contents.translated)) // this is to put only the translated output on console
        .then(json => {
            var translatedText = json.contents.translated;
            outputtext.innerText = translatedText;//(OUTPUT PART)
           })  
        .catch(errorHandler)
};
/*//iside catch code
   function catch(callbackfn){
    //do someting
    //something more
    callbackfn(error);
   } 
*/
btntranslate.addEventListener("click", clickEventHandler)