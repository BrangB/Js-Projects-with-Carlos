const number = document.querySelector(".number")
const reset = document.querySelector(".reset");
const desc = document.querySelector(".desc");
const inc = document.querySelector(".inc")

let initialValue = 0;
number.textContent = initialValue;

reset.onclick = () => {
    initialValue = 0
    number.textContent = initialValue;
}

desc.onclick = () => {
    initialValue -= 1
    number.textContent = initialValue;
}

inc.onclick = () => {
    initialValue += 1
    number.textContent = initialValue;
}