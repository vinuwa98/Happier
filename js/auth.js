import { auth, db } from "./firebase-config.js";
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    sendPasswordResetEmail 
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { setDoc, doc } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";

// Ensure the DOM is fully loaded before accessing elements
document.addEventListener("DOMContentLoaded", function () {

    // Handle User Registration
    const registerForm = document.getElementById("register-form");
    if (registerForm) {
        registerForm.addEventListener("submit", async function (event) {
            event.preventDefault();
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            try {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;

                // Store user details in Firestore
                await setDoc(doc(db, "users", user.uid), {
                    name: name,
                    email: email,
                    createdAt: new Date()
                });

                alert("Account created successfully!");
                window.location.href = "login.html"; 
            } catch (error) {
                alert("Error: " + error.message);
            }
        });
    }

    // Handle User Login
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", async function (event) {
            event.preventDefault();
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            try {
                await signInWithEmailAndPassword(auth, email, password);
                alert("Login Successful!");
                window.location.href = "../index.html"; 
            } catch (error) {
                alert("Invalid credentials! " + error.message);
            }
        });
    }

    // Handle Password Reset
    const resetBtn = document.getElementById("reset-btn");
    if (resetBtn) {
        resetBtn.addEventListener("click", async function () {
            const email = document.getElementById("email").value;
            if (!email) {
                document.getElementById("message").innerText = "Please enter your email.";
                return;
            }

            try {
                await sendPasswordResetEmail(auth, email);
                document.getElementById("message").innerText = "Password reset email sent! Check your inbox.";
            } catch (error) {
                document.getElementById("message").innerText = "Error: " + error.message;
            }
        });
    }
});
