/**
 * auth-guard.js
 * Checks if a user is logged in and has the correct role.
 * Usage: Include this script in the <head> or top of <body>
 */

(function() {
    const userStr = localStorage.getItem('user');
    const token = localStorage.getItem('token');

    // 1. Check for valid session
    if (!userStr || !token) {
        console.warn('No active session found. Redirecting to login.');
        window.location.href = '../login.html'; // Adjust path if not in admin/
        return;
    }

    // 2. Parse User Data
    let user;
    try {
        user = JSON.parse(userStr);
    } catch (e) {
        console.error('Invalid user data. Clearing session.');
        localStorage.clear();
        window.location.href = '../login.html';
        return;
    }

    // 3. Role-Based Access Control (Optional but recommended)
    // Get current path to determine required role
    const path = window.location.pathname;
    
    // Admin Pages Protection
    if (path.includes('/admin/')) {
        const role = user.role;
        
        // Super Admin can access everything (logic simplification)
        if (role === 'SUPER_ADMIN') return;

        if (path.includes('super.html') && role !== 'SUPER_ADMIN') {
            alert('Unauthorized Access');
            window.location.href = '../dashboard.html';
        }
        else if (path.includes('reception.html') && role !== 'RECEPTIONIST') {
             alert('Unauthorized Access');
            window.location.href = '../dashboard.html';
        }
        else if (path.includes('kitchen.html') && role !== 'KITCHEN') {
             alert('Unauthorized Access');
            window.location.href = '../dashboard.html';
        }
        else if (path.includes('housekeeping.html') && role !== 'HOUSEKEEPING') {
             alert('Unauthorized Access');
            window.location.href = '../dashboard.html';
        }
    }

})();
