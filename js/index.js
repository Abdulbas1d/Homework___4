const button = document.getElementById("btn");
const buttonEl = document.getElementById("btn2");
const button2 = document.getElementById("btn3");
const container = document.getElementById("container")

button.addEventListener('click', function() {
    container.style.backgroundColor = "yellow"
    button.style.width = "100px"
    button.style.backgroundColor = "green"
});

buttonEl.addEventListener('click', function() {
    container.style.backgroundColor = "blue"
    button.style.width = "100px"
    button.style.backgroundColor = "green"
});

button2.addEventListener('click', function() {
    container.style.backgroundColor = "green"
    button.style.width = "100px"
    button.style.backgroundColor = "yellow"
})
