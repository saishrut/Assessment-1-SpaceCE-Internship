document.getElementById("registrationForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let college = document.getElementById("college").value;
    let error = document.getElementById("error");

    if (name.length < 3) {
        error.textContent = "Name must be at least 3 characters";
        return;
    }

    if (!email.includes("@")) {
        error.textContent = "Enter a valid email";
        return;
    }

    if (college === "") {
        error.textContent = "College name is required";
        return;
    }

    error.textContent = "";
    alert("Registration Successful!");
});