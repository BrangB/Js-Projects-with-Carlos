const colors = [
    "#FF5733", // Red
    "#33FF57", // Green
    "#3366FF", // Blue
    "#FF33B2", // Pink
    "#FFDD33", // Yellow
    "#8433FF", // Purple
    "#33FFDD", // Cyan
    "#FF337A", // Magenta
    "#33FFAA", // Teal
    "#FF3366", // Orange
    "#FF5733", // Red
    "#33FF57", // Green
    "#3366FF", // Blue
    "#FF33B2", // Pink
    "#FFDD33", // Yellow
    "#8433FF", // Purple
    "#33FFDD", // Cyan
    "#FF337A", // Magenta
    "#33FFAA", // Teal
    "#FF3366", // Orange
    // Add more colors here
  ];
  
const card = document.querySelector(".card");
const hex = document.querySelector(".hex");
const btn = document.querySelector(".btn");

btn.onclick = () => {
    const randomNumber = Math.floor(Math.random() * 20) + 1;
    card.style.backgroundColor=colors[randomNumber]
    hex.textContent=colors[randomNumber]
}