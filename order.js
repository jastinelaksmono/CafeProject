/*Enabling or desabling street and zip input field for delivery process*/
function deliveryChecked(isChecked)
{
    var street = document.getElementById("street"); 
	var zip = document.getElementById("zip");

    if(isChecked)
    {
        street.disabled = false;
        zip.disabled = false;
    }
    else
    {
        street.value = "";
        zip.value = "";
        street.disabled = true;
        zip.disabled = true;
    }

}

/*Make billing zip and street to appear or dissapear depends on the 'same as delivery' billing option*/
function billAddVisibility(element)
{
    var billStreet = document.getElementById("billStreet");
    var billZip = document.getElementById("billZip");
    
    if(element.checked)
    {
        billStreet.style.visibility = 'hidden';
        billZip.style.visibility = 'hidden';
    }
    else
    {
        billStreet.style.visibility = 'visible';
        billZip.style.visibility = 'visible';
    }
}

/*Setting the cards option inside the form*/
function cardOption(isChecked)
{
    var visa = document.getElementById("visa");
 	var masterCard = document.getElementById("masterCard");
    var americanExpress = document.getElementById("americanExpress");

    //enable/disable the button of each card type and reset it when disabled
    if(isChecked)
    {
        visa.disabled = false;
        masterCard.disabled = false;
        americanExpress.disabled = false;
    }
    else
    {
        visa.checked = false;
        masterCard.checked = false;
        americanExpress.checked = false;
        visa.disabled = true;
        masterCard.disabled = true;
        americanExpress.disabled = true;
    }
}

/*Enabling or disabling card details depends on card option that is ticked*/
function cardDetails(isChecked)
{
    var cardNumber = document.getElementById("cardNumber");

    if(isChecked)
    {
        cardNumber.disabled = false;
    }
    else
    {
        cardNumber.value = "";
        cardNumber.disabled = true;
    }
}

/*Automatically fill in billing address same as delivery address*/
function fillBillingAddress()
{
    var billStreet = document.getElementById("billStreet");
    var billZip = document.getElementById("billZip");
    var street = document.getElementById("street").value;
	var zip = document.getElementById("zip").value;

    billStreet.value = street;
    billZip.value = zip;
}

/*Choosing coffee bean using the picture menu and automatically assign the chosen bean in the form*/
function chooseCoffeeBean(id)
{   
    var bean1 = document.getElementById("bean1");
 	var bean2 = document.getElementById("bean2");
    var bean3 = document.getElementById("bean3");

    if(id == bean1)
    {
        bean1.checked = true;
    }
    else if(id == bean2)
    {
        bean2.checked = true;
    }
    else if(id == bean3)
    {
        bean3.checked = true;
    }
}

/*Choosing coffee drink using the picture menu and automatically assign the chosen drink in the form*/
function chooseCoffeeDrink(valueToSelect)
{   
    var drink = document.getElementById("drink");

    drink.value = valueToSelect;
}

/*Enabling amount field based on the number of drink ordered*/
function enableAmount()
{
    var drink = document.getElementById("drink").value;
    var amount = document.getElementById("amount");
    var price = document.getElementById("price");

    amount.disabled = false;
    if(amount.value == "")
    {
        amount.value = 1;
    }

    //changing the price field based od the number of drink ordered
    switch(drink)
    {
        case "espresso":
            price.value = "AUD " + (4.00*amount.value).toFixed(2);
            break;
        case "americano":
        case "cortado":
            price.value = "AUD " + (6.00*amount.value).toFixed(2);
            break;
        case "caffeLatte":
        case "panna":
            price.value = "AUD " + (5.00*amount.value).toFixed(2);
            break;
        case "cappuccino":
            price.value = "AUD " + (6.30*amount.value).toFixed(2);
            break;
        case "longBlack":
            price.value = "AUD " + (4.30*amount.value).toFixed(2);
            break;
        case "flatWhite":
        case "macchiato":
            price.value = "AUD " + (5.30*amount.value).toFixed(2);
            break;
        case "mocha":
            price.value = "AUD " + (7.00*amount.value).toFixed(2);
            break;
    }
    
}

function validate()
{
    var delivery = document.getElementById("delivery").checked;
	var pickup = document.getElementById("pickup").checked;
    var street = document.getElementById("street").value;
	var zip = document.getElementById("zip").value;
	var bean1 = document.getElementById("bean1").checked; 
 	var bean2 = document.getElementById("bean2").checked; 
    var bean3 = document.getElementById("bean3").checked; 
    var drink = document.getElementById("drink").value;
    var amount = document.getElementById("amount").value;
    var billingAdd = document.getElementById("billingAdd").checked; 
    var billStreet = document.getElementById("billStreet").value; 
    var billZip = document.getElementById("billZip").value; 
    var phone = document.getElementById("phone").value;
	var email = document.getElementById("email").value;
    var cod = document.getElementById("cod").checked; 
    var online = document.getElementById("online").checked; 
    var visa = document.getElementById("visa").checked; 
 	var masterCard = document.getElementById("masterCard").checked; 
    var americanExpress = document.getElementById("americanExpress").checked; 
    var cardNumber = document.getElementById("cardNumber").value;

	var errMsg = "";								//stores the error message 
	var result = true;							    // assumes no errors 
    var numericPattern = /^\d+/;                    // numerical characters

    //check whether shipping method is selected
	if ((!delivery)&&(!pickup)) 
    {    
		errMsg += "A shipping method must be selected.\n"; 
	}
    else if(delivery)
    {
        //Check whether delivery address has been filled when same as delivery address option is checked
        if(((billingAdd) && street == ""))
        {
            errMsg += "Please enter your delivery address first.\n"
        }
        //check if street address is empty
        if(street == "")
        {
            errMsg += "Street address must be filled.\n";
        }
        //check if zip address is empty
        if(zip == "")
        {
            errMsg += "Zip address must be filled.\n"; 
        }
        //check that the postcode is 4-digit
        if(zip.length != 4)
        {
            errMsg += "Postcode must be 4-digit\n"; 
        }
        /*Check if zip is numeric characters only */ 
        if (! zip.match (numericPattern)) 
        { 
            errMsg += "zip must be numeric characters only.\n"; 
        }
    }

    //Check whether delivery option has been ticked when same as delivery address option is ticked
    if(billingAdd && (!delivery))
    {
        errMsg += "Tick the delivery option to proceed.\n";
    }

    //check whether coffee bean is selected
	if ((!bean1) && (!bean2) && (!bean3)) {    
		errMsg += "A coffee bean must be selected.\n"; 
	} 

    //check whether Drink is empty 
	if (drink == "") 
    {     
		errMsg += "A Favourite Drink must be selected.\n"; 
	}

    //check whether Email is empty 
	if (email == "") 
    {      
		errMsg += "Email cannot be empty.\n"; 
	}

    //check whether phone number is empty 
	if (phone == "") 
    {      
		errMsg += "Contact number cannot be empty.\n"; 
	} 
    else
    {
        //check whether phone number is numberic character only 
        if (! phone.match (numericPattern)) 
        {      
            errMsg += "Contact number must be numeric character only.\n"; 
        } 
    }

    

    //check whether paying method is selected
	if ((!cod)&&(!online)) 
    {    
		errMsg += "A paying method must be selected.\n"; 
	}
    else if(online)
    {
        //check whether a card type is selected
        if((!visa) && (!masterCard) && (!americanExpress))
        {
            errMsg += "A card type must be selected.\n"; 
        }
        else{
            //check whether card number is empty
            if(cardNumber == "")
            {
                errMsg += "Card number must be filled.\n"; 
            }
            else
            {
                //check if card number numeric characters only 
                if(! cardNumber.match(numericPattern))
                {
                    errMsg += "Card number must be numeric characters only.\n"; 
                }
                //check ic card number digit based on each card type requirement
                if((visa) && cardNumber.length != 16)
                {
                    errMsg += "Visa card number must be 16 digits.\n"; 
                }
                else if((masterCard) && cardNumber.length != 16)
                {
                    errMsg += "MasterCard card number must be 16 digits.\n";
                }
                else if((americanExpress) && cardNumber.length != 15)
                {
                    errMsg += "American Express card number must be 15 digits.\n";
                }
            }
        }
    }

    // Check whether billing address is empty
    if(!billingAdd)
    {
        if(billStreet == "")
        {
            errMsg += "Billing street must be filled.\n";
        }

        if(billZip == "")
        {
            errMsg += "Billing zip must be filled.\n";
        }
        else
        {
            //check that the billing address postcode is 4-digit
            if(billZip.length != 4)
            {
                errMsg += "Billing address postcode must be 4-digit\n"; 
            }
        }

    }
    else
    {
        // Assign billing address to delivery address
        fillBillingAddress();
    }


    /*Display error message any error(s) is/are detected */
	if (errMsg != "") {
		alert (errMsg);
		result = false;
	} 
    return result
}

/* link HTML elements to corresponding event function */
function init () {

	/* link the variables to the HTML elements */
    var regForm = 	document.getElementById("regform");

	/* assigns functions to corresponding events */
    regForm.onsubmit = validate;
}

/* execute the initialisation function once the window*/
window.onload = init;