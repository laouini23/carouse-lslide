// Select the button and the hidden menu
const menuButton = document.getElementById('menu-button');
const homeMenu = document.getElementById('home-menu');

// Add a click event listener to toggle the visibility
menuButton.addEventListener('click', () => {
    homeMenu.classList.toggle('show');
});