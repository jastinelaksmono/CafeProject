function validate()
{
    var uname = document.getElementById("uname").value;
	var pass = document.getElementById("pass").value;
	var genm = document.getElementById("genm").checked; 
 	var genf = document.getElementById("genf").checked; 
	var email = document.getElementById("email").value;
    var bean1 = document.getElementById("bean1").checked; 
    var bean2 = document.getElementById("bean2").checked; 
    var bean3 = document.getElementById("bean3").checked; 
    var drink = document.getElementById("drink").value;

	var errMsg = "";								/* stores the error message */
	var result = true;								/* assumes no errors */
	var pattern = /^[a-zA-Z ]+$/;					/* regular expression for letters and spaces only */
    var emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; /* email format only */

    //check whether Username is empty 
	if (uname == "") 
    {     
		errMsg += "Username cannot be empty.\n"; 
	} 

    //check whether Password is empty 
	if (pass == "") 
    {      
		errMsg += "Password cannot be empty.\n"; 
	} 

    //check whether gender is selected
	if ((!genm)&&(!genf)) 
    {    
		errMsg += "A gender must be selected.\n"; 
	} 

    //check whether Email is empty 
	if (email == "") 
    {      
		errMsg += "Email cannot be empty.\n"; 
	} 

     //check whether favourite coffee beans is selected at least 1
	if ((!bean1) && (!bean2) && (!bean3)) {    
		errMsg += "At least 1 favourite coffee bean must be selected.\n"; 
	} 

    //check whether Drink is empty 
	if (drink == "") 
    {     
		errMsg += "A Favourite Drink must be selected.\n"; 
	} 

    /*Check if user name contains only letters and spaces */ 
	if (! uname.match (pattern)) { 
		errMsg += "Username contains symbols.\n"; 
	}

    /*Check if email is valid */ 
	if (! email.match (emailPattern)) { 
		errMsg += "Email is invalid.\n"; 
	}

    /*Check that the password is at least 7-character long*/
    if(pass.length <7)
    {
        errMsg += "Password must be at least 7-character long.\n"; 
    }

    /*Display error message any error(s) is/are detected */
	if (errMsg != "") 
	{
		alert (errMsg);
		result = false;
	} 
    return result
}

/* link HTML elements to corresponding event function */
function init () 
{
	/* link the variables to the HTML elements */
    var regForm = document.getElementById("regform");

	/* assigns functions to corresponding events */
    regForm.onsubmit = validate;
}

/* execute the initialisation function once the window*/
window.onload = init;