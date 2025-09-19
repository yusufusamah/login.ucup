// Check if user is logged in
if (window.location.pathname.endsWith('portfolio.html')) {
    if (!localStorage.getItem('loggedIn')) {
        window.location.href = 'login.html';
    }
}

// Login form
if (document.getElementById('loginForm')) {
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser && storedUser.username === username && storedUser.password === password) {
            localStorage.setItem('loggedIn', 'true');
            window.location.href = 'portfolio.html';
        } else {
            document.getElementById('message').textContent = 'Invalid username or password';
        }
    });

    document.getElementById('registerLink').addEventListener('click', function() {
        window.location.href = 'register.html';
    });
}

// Register form
if (document.getElementById('registerForm')) {
    document.getElementById('registerForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('regUsername').value;
        const password = document.getElementById('regPassword').value;
        localStorage.setItem('user', JSON.stringify({username, password}));
        document.getElementById('regMessage').textContent = 'Account created successfully. Please login.';
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 2000);
    });
}

// Logout
if (document.getElementById('logout')) {
    document.getElementById('logout').addEventListener('click', function() {
        localStorage.removeItem('loggedIn');
        window.location.href = 'login.html';
    });
}
