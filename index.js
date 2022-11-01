//JavaScript for Motivational Quote on Login Page
let quote = document.getElementById("quote");
let author = document.getElementById("author");

let getQuote = () => {
    fetch('https://api.quotable.io/random?tags=motivational')
        .then((data) => data.json())
        .then((item) => {
            quote.innerText = item.content;
            author.innerText = item.author;
        });
};

window.addEventListener("load", getQuote);

// Get the modal
let modal = document.getElementById("myModal");
// Get the button that opens the modal
let btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];
// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}





let signupmodal = document.getElementById("signupModal");
// Get the button that opens the modal
let signupbtn = document.getElementById("signupBtn");
// Get the <span> element that closes the modal
let close = document.getElementsByClassName("exit")[0];
// When the user clicks on the button, open the modal
signupbtn.onclick = function () {
    modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}