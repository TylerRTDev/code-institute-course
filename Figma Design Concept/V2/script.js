const loginIcon = document.querySelector('.login-icon');
const menuIcon = document.querySelector('.menu-icon');
const loginSidebar = document.getElementById('loginSidebar');
const registerSidebar = document.getElementById('registerSidebar');
const menuSidebar = document.getElementById('menuSidebar');
const toRegisterLink = document.getElementById('toRegister');
const toLoginLink = document.getElementById('toLogin');
const closeButtons = document.querySelectorAll('.close-btn');

// Open login sidebar when clicking the login icon
loginIcon.addEventListener('click', () => {
    loginSidebar.classList.add('right-sidebar-open');
    registerSidebar.classList.remove('right-sidebar-open');
    menuSidebar.classList.remove('left-sidebar-open');
});

// Open menu sidebar when clicking the menu icon
menuIcon.addEventListener('click', (e) => {
    e.stopPropagation();
    menuSidebar.classList.add('left-sidebar-open');
    loginSidebar.classList.remove('right-sidebar-open');
    registerSidebar.classList.remove('right-sidebar-open');
});

// Switch to register sidebar when "Click Here" is clicked
toRegisterLink.addEventListener('click', (e) => {
    e.preventDefault();
    loginSidebar.classList.remove('right-sidebar-open');
    registerSidebar.classList.add('right-sidebar-open');
});

// Switch to login sidebar when "Click Here" is clicked
toLoginLink.addEventListener('click', (e) => {
    e.preventDefault();
    registerSidebar.classList.remove('right-sidebar-open');
    loginSidebar.classList.add('right-sidebar-open');
});

// Close sidebars when clicking the close button
closeButtons.forEach(button => {
    button.addEventListener('click', closeSidebars);
});

function closeSidebars() {
    loginSidebar.classList.remove('right-sidebar-open');
    registerSidebar.classList.remove('right-sidebar-open');
    menuSidebar.classList.remove('left-sidebar-open');
}

// Close sidebars when clicking outside of them
document.addEventListener('click', (e) => {
    if (!loginSidebar.contains(e.target) && !registerSidebar.contains(e.target) && !menuSidebar.contains(e.target) && !loginIcon.contains(e.target) && !menuIcon.contains(e.target)) {
        closeSidebars();
    }
});

// Prevent the menu sidebar from closing when clicking inside it
menuSidebar.addEventListener('click', (e) => {
    e.stopPropagation();
});
