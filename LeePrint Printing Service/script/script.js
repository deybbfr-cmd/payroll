const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    // this will toggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu");
});
    //this will close menu when u click close button
menuCloseButton.addEventListener("click", () => menuOpenButton.click 
());