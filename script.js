function validateForm(event)  {
    event.preventDefault();

    // ===== assign Elements =====

    const fullNameInput = document.getElementById("fullName");
    const emailInput = document.getElementById("email");
    const sexRadios = document.getElementsByName("sex");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");
    const progInput = document.getElementById("prog");
    const birthdateInput = document.getElementById("birthdate");
const programCheckboxes = document.getElementsByName("program");  // uses name

    // ===== Assigns "" to all error messages This clears stale content from any previous submission attempt, including the success message. =====

    document.getElementById("EmailError").innerHTML = "";
    document.getElementById("UsernameError").innerHTML = "";
    document.getElementById("PasswordError").innerHTML = "";
    document.getElementById("confirmPasswordError").innerHTML = "";
    document.getElementById("progError").innerHTML = "";
    document.getElementById("programError").innerHTML = "";
    document.getElementById("successMsg").innerHTML = "";
    document.getElementById("BdateError").innerHTML = "";
    document.getElementById("sexError").innerHTML = "";
    document.getElementById("FnameError").innerHTML = "";
    document.getElementById("radError").innerHTML = "";
    
     // Hide success message at the start of validation
    const successBox = document.getElementById("successMsg");
    successBox.style.display = "none";
    
    // ===== validation assigned to true initially =====
    let isValid = true;

    // ===== GET VALUES =====

    let fullName = fullNameInput.value.trim();
    let email = emailInput.value.trim();
    let username = usernameInput.value.trim();
    let password = passwordInput.value;
    let confirmPassword = confirmPasswordInput.value;
    let prog = progInput.value;
    let birthdate = birthdateInput.value;

    // ===== PERSONAL INFORMATIONN ============ ======= ========

    // Full Name checker
    if (fullName.length === 0) {
        document.getElementById("FnameError").innerHTML = "Full name is required.";
        isValid = false;
    } else if (fullName.length < 2) {
        document.getElementById("FnameError").innerHTML = "Full name must be at least 2 characters.";
        isValid = false;
    }
    


    // Birthdate checker

    if (birthdate === "") {
        document.getElementById("BdateError").innerHTML = "Please enter your birthdate.";
        isValid = false;

    } else {
        let today = new Date();
        let birth = new Date(birthdate);
        //subtracts the birth year from the current year to get the age
        let age = today.getFullYear() - birth.getFullYear();

        // using the month it checks if they really are 13 years old by subtracting the present month with their orig birth month and if their birthday not yet happened this year, I decided to subtract 1 from age
        let monthchecker = today.getMonth() - birth.getMonth();
        if ( monthchecker < 0 || (monthchecker === 0 && today.getDate() < birth.getDate())) {
            age = age -1;
        }

        if (age < 13) {
            document.getElementById("BdateError").innerHTML = "You must be at least 13 years old.";
            isValid = false;
        }
    }

    // Check Sex using radio buttons, use sexchosen to scan if there is a chosen sex. If false, it will say error and set isValid to false.
    let sexChosen = false;

    for (let i = 0; i < sexRadios.length; i++) {
        if (sexRadios[i].checked) {
            sexChosen = true;
            break;
        }
    }

    if (sexChosen === false) {
        document.getElementById("sexError").innerHTML = "Please select your sex.";
        isValid = false;
    }

    // Email checkr

if (email.length === 0) {
    document.getElementById("EmailError").innerHTML =  "Email is required.";
    isValid = false;

  
} else if (email.indexOf("@") === -1) {  // If email does not contain @, it will say error and set isValid to false.
        document.getElementById("EmailError").innerHTML = "Email must contain @.";
        isValid = false;
    } else if (email.indexOf(".") === -1) {
        document.getElementById("EmailError").innerHTML = "Email must contain a dot.";
        isValid = false;
    } else if (email.indexOf("@") > email.lastIndexOf(".")) {
        document.getElementById("EmailError").innerHTML = "Dot must come after @.";
        isValid = false;
    }


    // ===== ACCOUNT DETAILS ==== ======= ====== = =

    // Username checker if username length is 0, less than 8, more than 20, or contains special characters. It will say error and set isValid to false.
    
    const lettersAndNumbers = /^[a-zA-Z0-9]+$/; 


    if (username.length === 0) {
        document.getElementById("UsernameError").innerHTML =  "Kindly input your username.";
        isValid = false;
    } else if (username.length < 8 || username.length > 20) {
        document.getElementById("UsernameError").innerHTML =   "Username must be between 8 and 20 characters.";
        isValid = false;
    } else if (!lettersAndNumbers.test(username)) { 
   document.getElementById("UsernameError").innerHTML = "Username may only contain letters and numbers. No special characters and spaces allowed."; 
   isValid = false; 
}


    // Password
    if (password.length === 0) {
        document.getElementById("PasswordError").innerHTML =
            "Password is required.";
        isValid = false;
    } else if (password.length < 10) {
        document.getElementById("PasswordError").innerHTML =
            "Password must be at least 10 characters.";
        isValid = false;
    } else if (!/[A-Z]/.test(password)) { // If password does not contain an uppercase letter, it will say error and set isValid to false.
        document.getElementById("PasswordError").innerHTML =
            "Password requires an uppercase letter.";
        isValid = false;
    } else if (!/[a-z]/.test(password)) { // If password does not contain a lowercase letter, it will  say error and set isValid to false
        document.getElementById("PasswordError").innerHTML =
            "Password requires a lowercase letter.";
        isValid = false;
    } else if (!/[0-9]/.test(password)) { // If password does not contain a number, it will say error and set isValid to false
        document.getElementById("PasswordError").innerHTML =
            "Password requires a number.";
        isValid = false;
    
    }


    // Confirm Password
    if (confirmPassword.length === 0) {
        document.getElementById("confirmPasswordError").innerHTML = "Kindly confirm your password.";
        isValid = false;
    } else if (confirmPassword !== password) {  // checks if password and confirm password are the same. If not, it will say error and set isValid to false.
   
        document.getElementById("confirmPasswordError").innerHTML = "Passwords do not match.";
        isValid = false;
    }

    // ========== TOPIC QUESTIONS ===================== =  =  =

    // Dropdow
    if (prog === "") {
        document.getElementById("progError").innerHTML = "Kindly select an option.";
        isValid = false;
    }

    // Checkbox programsss
    let isProgramSelected = false;

    for (let i = 0; i < programCheckboxes.length; i++) {
        if (programCheckboxes[i].checked) {
            isProgramSelected = true;
            break;
        }
    }

    if (!isProgramSelected) {
        document.getElementById("programError").innerHTML = "Select at least one organization.";
        isValid = false;
    }

    // Raddddd (radio)
    const radRadios = document.getElementsByName("rad");
    let radSelected = false;

    for (let i = 0; i < radRadios.length; i++) {
        if (radRadios[i].checked) {
            radSelected = true;
            break;
        }
    }

    if (!radSelected) {
        document.getElementById("radError").innerHTML = "Select how many times you donate blood per week.";
        isValid = false;
    }
    
    // ==== FINAL RESULTS =====

     if (isValid) {
    successBox.style.display = "block";
    successBox.innerHTML = "Signup successful! Click on HOME PAGE now to find ways to help save more lives!";
}

 return isValid; //instructed in instructions 
}
