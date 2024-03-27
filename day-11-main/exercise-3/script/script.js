function validate() {
    
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var address = document.getElementById('address').value;
    var gender = document.querySelectorAll("input[name='gender']");
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;
    var course = document.getElementById('course').value;

    if (fname == "") {
        document.getElementById('fname').select();
        document.getElementById('fname').focus();
        alert("First Name is required!");
        return false;
    }
    else if (lname == "") {
        document.getElementById('lname').select();
        document.getElementById('lname').focus();
        alert("Last Name is required!");
        return false;
    }
    else if (address == "") {
        document.getElementById('address').select();
        document.getElementById('address').focus();
        alert("Address is required!");
        return false;
    }
    var genderChecked = false;
    for (var i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            genderChecked = true;
        }
    }
    if (!genderChecked) {
        alert("Please select your gender.");
        return false;
    }
    else if (email == "") {
        document.getElementById('email').select();
        document.getElementById('email').focus();
        alert("Email is required!");
        return false;
    }
    else if (!checkEmail(email)) {
        document.getElementById('mobile').select();
        document.getElementById('mobile').focus();
        alert("Please type in the correct email format!");
        return false;
    }
    else if (mobile == "") {
        document.getElementById('mobile').select();
        document.getElementById('mobile').focus();
        alert("Mobile is required!");
        return false;
    }

    else if (!IsNumeric(mobile)) {
        document.getElementById('mobile').select();
        document.getElementById('mobile').focus();
        alert("Please type in the correct mobile format!");
        return false;
    }

    else if (course === "select course") {
        document.getElementById('course').focus();
        alert("Course is required!");
        return false;
    }

    alert(" First Name: " + fname + "\n Last Name: " + lname + "\n Address: " + address + "\n Gender: " + gender + "\n Email: " + email + "\n Phone Number: " + mobile + "\n Course: " + course);   
    return false;

}


function IsNumeric(numstr)
{
    mystring = numstr;
    if (mystring.match(/^\d{10}$/) ) {
        return true;
    }
    else {
        return false;
    }
}

//checks if email is in proper email format
function checkEmail(inputvalue){	
    var pattern=/^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
    if(pattern.test(inputvalue)) {         
        return true;
    } 
    else {   
        return false;
    }
    
}
