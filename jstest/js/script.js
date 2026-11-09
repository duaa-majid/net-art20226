// Variables
const heading = document.querySelector("#heading");
const message = document.querySelector("#message");
const button = document.querySelector("#myButton");

let isChanged = false;

// Function
function changePage() {

    console.log("The button was clicked!");

    if (isChanged === false) {
        heading.innerHTML = "You Changed the Page!";
        message.innerHTML = "JavaScript makes webpages interactive!";
        document.body.style.backgroundColor = "lightblue";
        isChanged = true;

    } else {
        heading.innerHTML = "Welcome to My Webpage!";
        message.innerHTML = "Click the button to change the page.";
        document.body.style.backgroundColor = "lavenderblush";
        isChanged = false;
    }
}

// Event listener
button.addEventListener("click", changePage);