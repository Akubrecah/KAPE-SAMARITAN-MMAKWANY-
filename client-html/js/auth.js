document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const errorDiv = document.getElementById('error-message');
    const submitBtn = document.getElementById('submit-btn');

    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Reset UI
            errorDiv.style.display = 'none';
            errorDiv.textContent = '';
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
                    // Save to LocalStorage
                    localStorage.setItem('user', JSON.stringify(data));
                    localStorage.setItem('token', data.token);

                    // Handle Redirects based on Role (PRD Requirement)
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

    function showError(msg) {
        errorDiv.textContent = msg;
        errorDiv.style.display = 'block';
    }

    function handleRoleRedirect(role) {
        // Map roles to vanilla HTML pages
        // Note: We need to create these pages next
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
