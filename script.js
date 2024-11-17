
const quotes=[
    '"A room without books is like a body without a soul."',
    '"Let my country die for me."',
    '"Be yourself; everyone else is already taken."',
    '"So many books, so little time."',
    '"You only live once, but if you do it right, once is enough."',
    '"Coding like poetry should be short and concise."',
    '"Confusion is part of programming."',
    '"First, solve the problem. Then, write the code."',
    '"Clean code always looks like it was written by someone who cares."',
    '"Programming is the art of algorithm design and the craft of debugging errant code."',
    '"Patience is a key element of success."'
]
const speakers=[
    '― Marcus Tullius Cicero',
    '― James Joyce, Ulysses',
    '― Oscar Wilde',
    '― Frank Zappa',
    '― Mae West',
    '― Santosh Kalwar',
    '― Felienne Hermans',
    '– John Johnson',
    '— Robert C. Martin',
    '– Ellen Ullman',
    '--Bill Gates'
]

let quote = document.getElementById("quote");
let speaker = document.getElementById("speaker");




function generateQuote(){
    let index=Math.round(Math.random()*10);
    quote.innerHTML = quotes[index];
    speaker.innerHTML = speakers[index];
}





