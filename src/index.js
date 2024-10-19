import "./styles.css";
const quoteContainer = document.getElementById("quote-container");
const quoteContent = document.getElementById("quote-content");
const quoteAuthor = document.getElementById("quote-author");
const twitterButton = document.getElementById("twitter");
const newQuoteButton = document.getElementById("new-quote");
const whatsappButton = document.getElementById("whatsapp");
const loader = document.getElementById("loader");
document.body.style.backgroundImage = 'url("https://source.unsplash.com//collection/1319040/3840×1200")'
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = 'cover';


function loading(){
    loader.hidden = false;
    quoteContainer.hidden = true;
}
function complete(){
    if(!loader.hidden){
        loader.hidden = true;
        quoteContainer.hidden = false;
    }
}
async function getQUOTE(){
    loading()
    const url ="https://api.quotable.io/random";

    try{
        const r = await fetch(url);
        const data = await r.json();
        quoteAuthor.innerText = data.author;
        
        if(data.length > 120){
            quoteContent.classList.add('long-quote');
        }
        else{
            quoteContent.innerText= data.content;
        }
        quoteContent.innerText = data.content;
        complete()
    }
    catch(e){
        console.log("Error");
    }
}

function tweetQuote(){
    const tweetURL = `https://twitter.com/intent/tweet?text=${quoteContent.innerText}%0a- ${quoteAuthor.innerText}`;
    window.open(tweetURL,'_blank');
}

function change() {
    fetch('https://source.unsplash.com//collection/1319040/3840×1200').then(e => {document.body.style.backgroundImage = `url(${e.url})`;
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = 'cover';})
}

newQuoteButton.addEventListener("click",getQUOTE);
newQuoteButton.addEventListener("click", change);
twitterButton.addEventListener("click",tweetQuote);


function WhatappQuote(){
    const whatsappURL = `https://api.whatsapp.com/send?text=${quoteContent.innerText}%0a- ${quoteAuthor.innerText}`;
    window.open(whatsappURL,'_blank');
}

newQuoteButton.addEventListener("click",getQUOTE);
whatsappButton.addEventListener("click",WhatappQuote);

getQUOTE();
