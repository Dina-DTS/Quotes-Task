     
                                                    /*Quotes App */

const quotes = [
    {quote:"Be yourself; everyone else is already taken.",author:"Oscar Wilde"},
    { quote: "So many books, so little time.", author: " Frank Zappa " },
    { quote: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { quote: "A room without books is like a body without a soul.", author: "Marcus Tullius Cicero " },
    { quote: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    { quote: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
    { quote: "A friend is someone who knows all about you and still loves you.", author: " Elbert Hubbard" }
  ];

   var lastIndex=-1

  function generateQuote(){

    let index;
    do {
      index = Math.floor(Math.random() * quotes.length); 
      
    } while (index === lastIndex); 

  
    lastIndex = index;
   
    const selectedQuote = quotes[index].quote;
    const selectedAuthor = quotes[index].author;
  
    document.getElementById('quoteOutput').innerHTML = `"${selectedQuote}"`;  
  
    document.getElementById('authorOutput').innerHTML = `--${selectedAuthor}`;

    
}


  