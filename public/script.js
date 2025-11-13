document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");

    // Handle Login Form Submission
    loginForm.addEventListener("submit", async (event) => {
        event.preventDefault(); // Prevent default form submission

        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;

        try {
            const response = await fetch("http://localhost:5050/api/Login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();
            if (data.status === "success") {
                alert("Login Successful!");
                localStorage.setItem("token", data.Token); // Store JWT token
                window.location.href = "dashboard.html"; // Redirect after login
            } else {
                alert("Login Failed: " + data.message);
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred while logging in.");
        }
    });

    // Handle Register Form Submission
    registerForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const email = document.getElementById("registerEmail").value;
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const mobileNumber = document.getElementById("mobileNumber").value;
        const password = document.getElementById("registerPassword").value;

        try {
            const response = await fetch("http://localhost:5050/api/Registration", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, firstName, lastName, mobileNumber, password })
            });

            const data = await response.json();
            if (data.status === "success") {
                alert("Registration Successful!");
                toggleForm(); // Switch to login form
            } else {
                alert("Registration Failed: " + data.message);
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred while registering.");
        }
    });
});

// Toggle between login and register forms
function toggleForm() {
    const loginSection = document.querySelector(".container");
    const registerSection = document.getElementById("registerSection");

    if (loginSection.style.display === "none") {
        loginSection.style.display = "block";
        registerSection.style.display = "none";
    } else {
        loginSection.style.display = "none";
        registerSection.style.display = "block";
    }
}
