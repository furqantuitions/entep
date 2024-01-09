function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function(user) {
            alert("Login successful!");
        })
        .catch(function(error) {
            alert("Error: " + error.message);
        });
}

function register() {
    var regEmail = document.getElementById("reg-email").value;
    var regPassword = document.getElementById("reg-password").value;

    firebase.auth().createUserWithEmailAndPassword(regEmail, regPassword)
        .then(function(user) {
            alert("Registration successful!");
        })
        .catch(function(error) {
            alert("Error: " + error.message);
        });
}
function toggleForm() {
    var loginForm = document.getElementById('login-form');
    var registerForm = document.createElement('div');
    registerForm.innerHTML = `
        <h2>Register</h2>
        <form id="register-form">
                    <label for="name">Name:</label>
            <input type="name" id="name" required>
            <label for="reg-email">Email:</label>
            <input type="email" id="reg-email" required>
            <label for="reg-password">Password:</label>
            <input type="password" id="reg-password" required>
            <button type="button" onclick="register()">Register</button>
        </form>
    `;
    if (loginForm.parentNode) {
        loginForm.parentNode.replaceChild(registerForm, loginForm);
    } else {
        loginForm.style.display = 'none';
        document.getElementById('wrapper').appendChild(registerForm);
    }
}
// Import the necessary Firebase authentication provider
var googleProvider = new firebase.auth.GoogleAuthProvider();
function signInWithGoogle() {
    firebase.auth().signInWithPopup(googleProvider)
        .then(function(result) {
            // Redirect to a specific URL after successful login
            window.location.href = "https://google.com"; // Replace with your desired URL
        })
        .catch(function(error) {
            alert("Error: " + error.message);
        });
}