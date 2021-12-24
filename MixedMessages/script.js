let btnQuote = document.querySelector('#button');
let result = document.querySelector('#quoteText');


// Messages 
const messages = [["When something is important enough, you do it even if the odds are not in your favor. - Elon Musk"], ["If you need inspiration, don't do it. - Elon Musk"], ["You should take the approach that you are wrong. Your goal is to be less wrong - Elon Musk"],
["One way to remember who you are is to remember who your heroes are. - Steve Jobs"], ["Sometimes life's going to hit you in the head with a brick. Don't lose faith. I'm convinced that the only thing that kept me going was that I loved what I did. - Steve Jobs"],
["The people who are crazy enough to think they can change the world are the ones who do. - Steve Jobs"], ["The Universe is under no obligation to make sense to you. - Neil deGrasse Tyson"], ["There is no greater education than one that is self-driven. - Neil deGrasse Tyson"],
["Knowing how to think empowers you far beyond those who know only what to think. - Neil deGrasse Tyson"], ["The good thing about science is that it's true whether or not you believe in it. - Neil deGrasse Tyson"],
["In the end, it's the people who are curious who change the world. - Neil deGrasse Tyson"], ["Unless you are breaking stuff, you are not moving fast enough. - Mark Zuckerberg"], ["We are stubborn on vision. We are flexible on details. - Jeff Bezos"],
["Start With the Customer and Work Backward - Jeff Bezos"], ["If you really want to be great at something you have to truly care about it. If you want to be great in a particular area, you have to obsess over it. - Kobe Bryant"], 
["Heroes come and go, but legends are forever. - Kobe Bryant"]];

function getRandomQuote(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;

    return result
}


btnQuote.addEventListener('click', () => {
    let index = getRandomQuote(0, messages.length-1);
    result.innerText = messages[index];
})