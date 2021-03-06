const colors = {
  sad: "#3770C9",
  cute: "#E5C0C0",
  inspirational: "#D2E9C3",
  default: "#D3D8FF" };


const quotes = [
{
  text:
  "There is never a time or place for true love. It happens accidentally, in a heartbeat, in a single flashing, throbbing moment.",
  author: "Sarah Dessen",
  tag: "sad" },

{
  text:
  "Love is that condition in which the happiness of another person is essential to your own.",
  author: "Robert A. Heinlein",
  tag: "sad" },

{
  text: "He is not a lover who does not love forever.",
  author: "Euripides",
  tag: "sad" },

{
  text:
  "Love does not begin and end the way we seem to think it does. Love is a battle, love is a war; love is a growing up.",
  author: "James Baldwin",
  tag: "sad" },

{
  text:
  "In the end we discover that to love and let go can be the same thing.",
  author: "Jack Kornfield",
  tag: "sad" },

{
  text:
  "You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.",
  author: "Dr. Seuss",
  tag: "cute" },

{
  text: "Love is like the wind, you can’t see it but you can feel it.",
  author: "Nicholas Sparks",
  tag: "cute" },

{
  text: "Love is the magician that pulls man out of his own hat.",
  author: "Ben Hecht",
  tag: "cute" },

{
  text:
  "I would rather spend one lifetime with you, than face all the ages of this world alone.",
  author: "J.R.R. Tolkien",
  tag: "cute" },

{
  text: "My wish is that you may be loved to the point of madness.",
  author: "André Breton",
  tag: "cute" },

{
  text:
  "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
  author: "Martin Luther King Jr.",
  tag: "inspirational" },

{
  text:
  "Age does not protect you from love, but love to some extent protects you from age.",
  author: "Jeanne Moreau",
  tag: "inspirational" },

{
  text:
  "Love is never lost. If not reciprocated, it will flow back and soften and purify the heart.",
  author: "Washington Irving",
  tag: "inspirational" },

{
  text: "You never lose by loving. You always lose by holding back.",
  author: "Barbara De Angelis",
  tag: "inspirational" },

{
  text:
  "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
  author: "Lao Tzu",
  tag: "inspirational" }];



getRandomQuote = () => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

getNewQuote = () => {
  let quote = getRandomQuote();

  $("body").css("background-color", colors[quote.tag]);
  $(".btn-quote").css("background-color", colors[quote.tag]);
  $("#text").text('"' + quote.text + '"');
  $("#author").text(quote.author);
  $("#tag").
  text("#" + quote.tag).
  css("color", colors[quote.tag]);
  $("#tweet-quote").attr(
  "href",
  `https://twitter.com/intent/tweet?text=%22` +
  quote.text +
  `%22%20-%20` +
  quote.author +
  `%20%23` +
  quote.tag);

};

$(document).ready(function () {
  getNewQuote();

  $("#new-quote").on("click", getNewQuote);
});