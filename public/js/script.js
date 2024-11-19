// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()

// eye toggle
function togglePasswordVisibility() {
    const passwordInput = document.getElementById("password");
    const togglePasswordIcon = document.getElementById("togglePasswordIcon");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePasswordIcon.classList.remove("fa-eye-slash");
        togglePasswordIcon.classList.add("fa-eye");
    } else {
        passwordInput.type = "password";
        togglePasswordIcon.classList.remove("fa-eye");
        togglePasswordIcon.classList.add("fa-eye-slash");
    }
}

// Function to toggle theme
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');

    // Update button text based on theme
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.textContent = body.classList.contains('dark-theme') ? 'Light Mode' : 'Dark Mode';

    // Save the current theme in localStorage
    localStorage.setItem('theme', body.classList.contains('dark-theme') ? 'dark' : 'light');
}