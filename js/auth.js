import { auth, db } from "./firebase-config.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { setDoc, doc } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";

// Handle User Registration
document.getElementById("register-form")?.addEventListener("submit", async function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Store user data in Firestore
        await setDoc(doc(db, "users", user.uid), {
            name: name,
            email: email,
            createdAt: new Date()
        });

        alert("Account created successfully!");
        window.location.href = "login.html"; // Redirect to login page
    } catch (error) {
        alert(error.message);
    }
});

// Handle User Login
document.getElementById("login-form")?.addEventListener("submit", async function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        alert("Login Successful!");
        window.location.href = "../index.html"; // Redirect to home page
    } catch (error) {
        alert("Invalid credentials! " + error.message);
    }
});
