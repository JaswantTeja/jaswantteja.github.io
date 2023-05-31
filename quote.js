// Array of famous quotes
const quotes = [
  "The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela",
  "The way to get started is to quit talking and begin doing. -Walt Disney",
  "If life were predictable it would cease to be life, and be without flavor. -Eleanor Roosevelt",
  "Life is what happens when you're busy making other plans. -John Lennon",
  "Spread love everywhere you go. Let no one ever come to you without leaving happier. -Mother Teresa",
  "The best and most beautiful things in the world cannot be seen or even touched -- they must be felt with the heart. -Helen Keller",
  "In three words I can sum up everything I've learned about life: it goes on. -Robert Frost",
  "The only impossible journey is the one you never begin. -Tony Robbins",
  "Believe you can and you're halfway there. -Theodore Roosevelt",
  "The greatest wealth is to live content with little. -Plato"
];

// Function to generate a random quote
function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  return quote;
}

// On page load, display a random quote
window.onload = function() {
  document.getElementById("quote").innerHTML = generateQuote();
}
