function validateForm() {
    // Get the values of the input fields
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    //validate email
    var email = document.getElementById("email").value;
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length) {
        alert("Not a valid e-mail address");
        return false;
    }


    //validate terms and condition
    var terms = document.getElementById("terms").value;
    if (terms == false) {
        alert("Please accept terms and condition");
        return false;
    }
    return true;
}

var check = function() {
    // Get the password and confirm_password values
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm_password').value;

    // Set up some basic rules for the password
    var minLength = 8;
    var hasLowercase = /[a-z]/;
    var hasUppercase = /[A-Z]/;
    var hasNumber = /[0-9]/;
    var hasSpecialChar = /[!@#$%^&*]/;

    // Check the password against the rules
    if (password.length < minLength) {
        // Password is too short
        document.getElementById('message').style.color = 'red';
        document.getElementById('message').innerHTML = 'Password must be at least 8 characters long';
    } else if (!hasLowercase.test(password)) {
        // Password does not contain a lowercase letter
        document.getElementById('message').style.color = 'red';
        document.getElementById('message').innerHTML = 'Password must contain at least one lowercase letter';
    } else if (!hasUppercase.test(password)) {
        // Password does not contain an uppercase letter
        document.getElementById('message').style.color = 'red';
        document.getElementById('message').innerHTML = 'Password must contain at least one uppercase letter';
    } else if (!hasNumber.test(password)) {
        // Password does not contain a number
        document.getElementById('message').style.color = 'red';
        document.getElementById('message').innerHTML = 'Password must contain at least one number';
    } else if (!hasSpecialChar.test(password)) {
        // Password does not contain a special character
        document.getElementById('message').style.color = 'red';
        document.getElementById('message').innerHTML = 'Password must contain at least one special character (!@#$%^&*)';
    } else if (password !== confirmPassword) {
        // Password and confirm_password do not match
        document.getElementById('message').style.color = 'red';
        document.getElementById('message').innerHTML = 'Passwords do not match';
        return false;
    } else {
        // Password is valid
        document.getElementById('message').style.color = 'green';
        document.getElementById('message').innerHTML = 'Password is valid';
    }
}

