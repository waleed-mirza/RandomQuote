const quote = document.querySelector("#text");
const author = document.querySelector("#author");
const newQuote = document.querySelector("#new-quote");
const tweet = document.querySelector("#tweet-quote");
const Quotesdata = [
  "A good novel tells us the truth about its hero; but a bad novel tells us the truth about its author. ",
  "I've got the key to my castle in the air, but whether I can unlock the door remains to be seen. ",
  "Anybody who has survived his childhood has enough information about life to last him the rest of his days. ",
  "Authors like cats because they are such quiet, lovable, wise creatures, and cats like authors for the same reasons. ",
  "When male authors write love stories, the heroine tends to end up dead. "
];
const authorsData = [
  "Susan Elizabeth Phillips, Ain't She Sweet?",
  "Robertson Davies",
  "Margaret Atwood , Negotiating with the Dead",
  "Dorothy Parker",
  "Stacia Kane"
];
newQuote.addEventListener("click", () => {
  let Randomquote = Math.floor(Math.random() * 5);
  quote.textContent = `${Quotesdata[Randomquote]}`;
  author.textContent = `${authorsData[Randomquote]}`;
});
tweet.addEventListener("click", () => {
  tweet.setAttribute(
    "href",
    "https://twitter.com/intent/tweet?text=" + quote.textContent
  );
});
