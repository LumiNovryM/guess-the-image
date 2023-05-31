// Button Start
let startGame = document.getElementById('startGame');
// Container Description
let conDesc = document.getElementById('conDesc');
// Container Loader
let loader = document.getElementById('containerLoading');
// Container Input Name
let inputName = document.getElementById('inputName');

// Event
startGame.addEventListener('click', () => {
    // alert("Game Started");
    inputName.style.display = "none"
    conDesc.style.display = "none";
    loader.style.display = "block";

    setTimeout(() => {
        loader.style.display = "none";
        inputName.style.display = "block"
    },1500);
});