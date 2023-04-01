'use strict'

//VARIABLES
let quotetext = document.querySelector('.quotetext')
let button = document.querySelector('.button')


//ARRAY OF QUOTES
let motivationalquotes = [
    "Success usually comes to those who are too busy looking for it.",
    "Never dreamed about success. I worked for it.",
    "Don't let yesterday take up too much of today.",
    "Learn as if you will live forever, live like you will die tomorrow.",
    "When you change your thoughts, remember to also change your world.",
    "If it makes you nervous, you're doing it right.",
    "Doubt is a killer. You just have to know who you are and what you stand for.",
    "Keep your eyes on the stars, and your feet on the ground.",
    "Get a good idea and stay with it. Dog it, and work at it until it's done right.",
    "When you arise in the morning think of what a privilege it is to be alive, to think, to enjoy, to love.",

]

//FUNCTION TO CREATE NEW QUOTE
const createnewquote = function(){
   let quotenumber = Math.floor(Math.random() *10)
   quotetext.innerHTML = motivationalquotes[quotenumber]//innerhtl-to change element.
}

//EVENT LISTENER
button.addEventListener('click', createnewquote)
