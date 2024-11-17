// Event Listeners for sidebar functionality

        // Toggle sidebars open
        document.querySelector('.menu-btn').addEventListener('click', function() {
            document.getElementById('side-menu-left').classList.toggle('open');
        });
        document.querySelector('.login-btn').addEventListener('click', function() {
            document.getElementById('side-menu-right').classList.toggle('open');
        });

        // Toggle sidebar closed
        document.querySelector('.close-btn').addEventListener('click', function() {
            document.getElementById('side-menu-left').classList.remove('open');
        });
        document.querySelector('.right-close-btn').addEventListener('click', function() {
            document.getElementById('side-menu-right').classList.remove('open');
        });

        // Toggle registration form
        document.querySelector('.show-registration').addEventListener('click', function(e) {
            e.preventDefault();
            document.getElementById('registration-form').style.display = 'block';
            document.querySelector('form').style.display = 'none';
        });

        // Toggle login form
        document.querySelector('.show-login').addEventListener('click', function(e) {
            e.preventDefault();
            document.getElementById('registration-form').style.display = 'none';
            document.querySelector('form').style.display = 'block';
        });