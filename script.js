let isLogin = true;

function toggleForm() {
    isLogin = !isLogin;
    
    const formTitle = document.getElementById('form-title');
    const submitButton = document.getElementById('submit-btn');
    const toggleText = document.getElementById('toggle-text');

    if (isLogin) {
        formTitle.textContent = 'Login';
        submitButton.textContent = 'Login';
        toggleText.innerHTML = "Don't have an account? <span onclick='toggleForm()'>Sign Up</span>";
    } else {
        formTitle.textContent = 'Sign Up';
        submitButton.textContent = 'Sign Up';
        toggleText.innerHTML = "Already have an account? <span onclick='toggleForm()'>Login</span>";
    }
}

function validateForm(event) {
    event.preventDefault();
    const contact = document.getElementById('contact').value;
    const password = document.getElementById('password').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    if (!emailRegex.test(contact) && !phoneRegex.test(contact)) {
        alert("Please enter a valid email or 10-digit mobile number.");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }

    alert(`${isLogin ? "Logged in" : "Signed up"} successfully!`);
}
