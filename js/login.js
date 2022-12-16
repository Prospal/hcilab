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

    // Check if the username and password are valid
    if (username.match(/[a-zA-Z0-9]+/) && password.match(/.{8,}/)) {
      // The input is valid, submit the form
        return true;
    } else {
        // The input is invalid, display an error message
        alert("Invalid username or password");
        return false;
    }
    //validate confirm password
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    if (password != confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }
    //validate terms and condition
    var terms = document.getElementById("terms").value;
    if (terms == false) {
        alert("Please accept terms and condition");
        return false;
    }
  }

