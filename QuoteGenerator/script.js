const quotes = [
    {
      quote: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
    },
    {
      quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill",
    },
    {
      quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
      author: "Martin Luther King Jr.",
    },
    {
      quote: "Life is what happens when you're busy making other plans.",
      author: "John Lennon",
    },
    {
      quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      author: "Nelson Mandela",
    },
    {
      quote: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt",
    },
    {
      quote: "In three words I can sum up everything I've learned about life: it goes on.",
      author: "Robert Frost",
    },
    {
      quote: "Don't count the days, make the days count.",
      author: "Muhammad Ali",
    },
    {
      quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
      author: "Ralph Waldo Emerson",
    },
    {
      quote: "You miss 100% of the shots you don't take.",
      author: "Wayne Gretzky",
    },
    {
      quote: "The only limit to our realization of tomorrow will be our doubts of today.",
      author: "Franklin D. Roosevelt",
    },
    {
      quote: "The best way to predict the future is to create it.",
      author: "Peter Drucker",
    },
    {
      quote: "Success is walking from failure to failure with no loss of enthusiasm.",
      author: "Winston Churchill",
    },
    {
      quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
      author: "Albert Einstein",
    },
    {
      quote: "In the middle of every difficulty lies opportunity.",
      author: "Albert Einstein",
    },
    {
      quote: "It does not matter how slowly you go as long as you do not stop.",
      author: "Confucius",
    },
    {
      quote: "You are never too old to set another goal or to dream a new dream.",
      author: "C.S. Lewis",
    },
    {
      quote: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
    },
    {
      quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill",
    },
    {
      quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
      author: "Martin Luther King Jr.",
    },
  ];

const quote = document.querySelector(".quote")
const author = document.querySelector(".author")
const btn = document.querySelector(".btn")

btn.onclick = () => {
    const randomNumber = Math.floor(Math.random() * 20) + 1;
    quote.style.animation = "fade 1s infinite"
    author.style.animation = "fade 1s infinite"
    setTimeout(() => {
        quote.textContent = quotes[randomNumber].quote
        author.textContent = `- ${quotes[randomNumber].author}`
    }, 500);
    setTimeout(() => {
        quote.style.animation = "none"
        author.style.animation = "none"
    }, 1000);
}