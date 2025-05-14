// Button click: Change the text
const clickButton = document.getElementById("clickButton");
clickButton.addEventListener("click", () => {
    clickButton.textContent = "Clicked!";
});

// Hover effect
const hoverText = document.getElementById("hoverText");
hoverText.addEventListener("mouseover", () => {
    hoverText.style.backgroundColor = "blue";
});
hoverText.addEventListener("mouseout", () => {
    hoverText.style.backgroundColor = "white";
});

//Keypress detection
const keyInput = document.getElementById("keypress-input");
const keyOutput = document.getElementById("keypress-output");
keyInput.addEventListener("keyup", (event) =>  {
    keyOutput.textContent = `You pressed: ${event.key}`;
});

//Secret action: Double click
const secretButton = document.getElementById("secretButton");
const secretMessage = document.getElementById("secretMessage");
secretButton.addEventListener("dblclick", () => {
    secretMessage.textContent = "You found the secret!";
});

//Change color button
const colorChangeButton = document.getElementById("colorChangeButton");
colorChangeButton.addEventListener("click", () => {
    colorChangeButton.style.backgroundColor = "purple";
    colorChangeButton.style.color = "white";
});

//Image gallery
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;
const nextButton = document.getElementById("next-slide");
nextButton.addEventListener("click", () => {
    slides[currentSlide].classList.add("hidden");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.remove("hidden");
});

//Tabs
const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        contents.forEach(c => c.classList.add("hidden"));
        document.getElementById(`tab-${tab.dataset.tab}`).classList.remove("hidden");
    });
});

//Form validation
const form = document.getElementById("signup-form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const emailFeedback = document.getElementById("email-feedback");
const passwordFeedback = document.getElementById("password-feedback");
const formMessage = document.getElementById("form-message");

email.addEventListener("input", () => {
    const valid = email.validity.valid;
    emailFeedback.textContent = valid ? "" : "Invalid email address";
});

password.addEventListener("input", () => {
    passwordFeedback.textContent = password.value.length >= 6 ? "" : "Password must be at least 6 characters";
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (email.validity.valid && password.value.length >= 6) {
        formMessage.textContent = "Form submitted successfully!";
    } else {
        formMessage.textContent = "Please fix the errors above.";
    }
});
