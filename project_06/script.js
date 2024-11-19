const quote = document.getElementById("quote");
const author = document.getElementById("author");
const url = 'https://quotes15.p.rapidapi.com/quotes/random/?language_code=en';
const fetchQuote = async () => {
    const options  = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'a73e1b585bmsh7157c7c70a46309p1bb493jsna41afb4fe69c',
            'x-rapidapi-host': 'quotes15.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        quote.innerHTML = result.content;
        author.innerHTML = result.originator.name;
    } catch (error) {
        console.error(error);
    }
}

fetchQuote();

function tweet(){
    window.open(href="https://twitter.com/intent/tweet?text=" + quote.innerHTML + "---- by "+ author.innerHTML, "Tweet Window", "width=600, height=300");
}

// getquote(api_url);