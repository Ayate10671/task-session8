var quotes=[
"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”― Albert Einstein",
"“Be yourself; everyone else is already taken.”― Oscar Wilde",
"“So many books, so little time.”― Frank Zappa",
"“A room without books is like a body without a soul.”― Marcus Tullius Cicero",
"“You only live once, but if you do it right, once is enough.”― Mae West",
"“Be the change that you wish to see in the world.”― Mahatma Gandhi",
"“If you tell the truth, you don't have to remember anything.”― Mark Twain",
"“A friend is someone who knows all about you and still loves you.”― Elbert Hubbard",
"“To live is the rarest thing in the world. Most people exist, that is all.”― Oscar Wilde",

]
var old;

function newQuote() {
    // var randomNumber=Math.floor(Math.random()*(quotes.length));

    // var repeatRandomNumber=[];
   
    // console.log(randomNumber);
    
    // if(randomNumber!=repeatRandomNumber[repeatRandomNumber.length-1]){
    //     repeatRandomNumber.push(randomNumber);
    //     // document.getElementById('quoteDisplay').innerHTML=quotes[randomNumber+1];

    // }
    // // else{
    //     document.getElementById('quoteDisplay').innerHTML=quotes[randomNumber];
    // // }
    var index = Math.floor(Math.random()*(quotes.length));
    
    if(index===old){
        newQuote()
        console.log("test");
    }else{
        document.getElementById('quoteDisplay').innerHTML=quotes[index];
        console.log("test2");
    }
    old = index

    
}