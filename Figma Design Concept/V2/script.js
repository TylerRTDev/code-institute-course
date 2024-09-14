const loginIcon = document.querySelector('.login-icon');
        const loginSidebar = document.getElementById('loginSidebar');
        const registerSidebar = document.getElementById('registerSidebar');
        const toRegisterLink = document.getElementById('toRegister');
        const toLoginLink = document.getElementById('toLogin');
        const closeButtons = document.querySelectorAll('.close-btn');

        // Open login sidebar when clicking the login icon
        loginIcon.addEventListener('click', () => {
            loginSidebar.classList.add('sidebar-open');
            registerSidebar.classList.remove('sidebar-open');
        });

        // Switch to register sidebar when "Click Here" is clicked
        toRegisterLink.addEventListener('click', (e) => {
            e.preventDefault();
            loginSidebar.classList.remove('sidebar-open');
            registerSidebar.classList.add('sidebar-open');
        });

        // Switch to login sidebar when "Click Here" is clicked
        toLoginLink.addEventListener('click', (e) => {
            e.preventDefault();
            registerSidebar.classList.remove('sidebar-open');
            loginSidebar.classList.add('sidebar-open');
        });

        // Close sidebars when clicking the close button
        closeButtons.forEach(button => {
        button.addEventListener('click', closeSidebars);
        });

        function closeSidebars() {
            loginSidebar.classList.remove('sidebar-open');
            registerSidebar.classList.remove('sidebar-open');
        }

        // Close sidebars when clicking outside of them
        document.addEventListener('click', (e) => {
            if (!loginSidebar.contains(e.target) && !registerSidebar.contains(e.target) && !loginIcon.contains(e.target)) {
                closeSidebars();
            }
        });