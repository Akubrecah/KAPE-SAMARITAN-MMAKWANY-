document.addEventListener('DOMContentLoaded', () => {
    // --- LOGIN FORM LOGIC ---
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const submitBtn = document.getElementById('submit-btn');
            const errorDiv = document.getElementById('error-message');
            
            // Reset UI
            if (errorDiv) {
                errorDiv.style.display = 'none';
                errorDiv.textContent = '';
            }
            submitBtn.disabled = true;
            submitBtn.textContent = 'Signing In...';

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            try {
                const response = await fetch(`${CONFIG.API_URL}/api/users/login`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email, password })
                });

                const data = await response.json();

                if (response.ok) {
                    localStorage.setItem('user', JSON.stringify(data));
                    localStorage.setItem('token', data.token);
                    handleRoleRedirect(data.role);
                } else {
                    showError(data.message || 'Login failed. Please check your credentials.');
                }

            } catch (error) {
                console.error('Login Error:', error);
                showError('Network error. Is the backend server running?');
            } finally {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Sign In';
            }
        });
    }

    // --- REGISTER FORM LOGIC ---
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const submitBtn = document.getElementById('submit-btn');
            const errorDiv = document.getElementById('error-message');
            
            // Reset UI
            if (errorDiv) {
                errorDiv.style.display = 'none';
                errorDiv.textContent = '';
            }
            submitBtn.disabled = true;
            submitBtn.textContent = 'Registering...';

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            if (password !== confirmPassword) {
                showError('Passwords do not match');
                submitBtn.disabled = false;
                submitBtn.textContent = 'Register';
                return;
            }

            try {
                const response = await fetch(`${CONFIG.API_URL}/api/users/register`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ name, email, phone, password })
                });

                const data = await response.json();

                if (response.ok) {
                    localStorage.setItem('user', JSON.stringify(data));
                    localStorage.setItem('token', data.token);
                    window.location.href = 'dashboard.html';
                } else {
                    showError(data.message || 'Registration failed.');
                }

            } catch (error) {
                console.error('Registration Error:', error);
                showError('Network error. Is the backend server running?');
            } finally {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Register';
            }
        });
    }

    // --- UTILS ---
    function showError(msg) {
        const errorDiv = document.getElementById('error-message');
        if (errorDiv) {
            errorDiv.textContent = msg;
            errorDiv.style.display = 'block';
        } else {
            alert(msg);
        }
    }

    function handleRoleRedirect(role) {
        switch (role) {
            case 'SUPER_ADMIN':
                window.location.href = 'admin/super.html';
                break;
            case 'RECEPTIONIST':
                window.location.href = 'admin/reception.html';
                break;
            case 'KITCHEN':
                window.location.href = 'admin/kitchen.html';
                break;
            case 'HOUSEKEEPING':
                window.location.href = 'admin/housekeeping.html';
                break;
            case 'GUEST':
            default:
                window.location.href = 'dashboard.html';
        }
    }
});
