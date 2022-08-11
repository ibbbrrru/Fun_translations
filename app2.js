var btntranslate = document.querySelector("#btn-translate")
var inputtext = document.querySelector("#input-text")
var outputtext = document.querySelector("#output-text")
var serverURL = "https://api.funtranslations.com/translate/groot.json"

function getTranslationURL(value) {
    return serverURL + "?" + "text=" + value
}

function errorHandler(error) {
    console.log("error occured", error) // error handling function if server is down
    alert("There is a Rate limit of 5 requests per hour for this API. So, guys try again after sometime")
}

function clickEventHandler() {

    var inputText = inputtext.value; //(INPUT PART)
    //CALLING SERVER FOR PROCESSING
    fetch(getTranslationURL(inputText)) // (PROCESSING PART) processing part this time went to server
        .then(response => response.json())

        .then(json => {
            var translatedText = json.contents.translated;
            outputtext.innerText = translatedText; //(OUTPUT PART)
        })
        .catch(errorHandler)
};

btntranslate.addEventListener("click", clickEventHandler)