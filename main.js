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
// Import the necessary Firebase authentication provider
var googleProvider = new firebase.auth.GoogleAuthProvider();

function signInWithGoogle() {
    firebase.auth().signInWithPopup(googleProvider)
        .then(function(result) {
            // Redirect to a specific URL after successful login
            window.location.href = "https://example.com/dashboard"; // Replace with your desired URL
        })
        .catch(function(error) {
            alert("Error: " + error.message);
        });
}

function signInWithFacebook() {
    firebase.auth().signInWithPopup(facebookProvider)
        .then(function(result) {
            // Redirect to a specific URL after successful login
            window.location.href = "https://example.com/dashboard"; // Replace with your desired URL
        })
        .catch(function(error) {
            alert("Error: " + error.message);
        });
}
