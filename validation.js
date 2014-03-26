function validateForm(formName)
{

	var name=document.forms[formName]["namei"].value;
	var ssn=document.forms[formName]["ssni"].value;
	var birth=document.forms[formName]["birthi"].value;
	var income=document.forms[formName]["incomei"].value;


	// check if any fields are empty
	if (name==null || name=="" || ssn==null || ssn=="" || birth==null || birth=="" || income==null || income=="")
	{
		alert("Please Fill All Required Field");
		return false;
	}

	if(!validateName(name))
	{
		return false;
	}
	
	if(!validateSsn(ssn))
	{
		return false;
	}
	if(!validateDob(birth))
	{
		return false;
	}

	if(!validateIncome(income))
	{
		return false;
	}

	return true;
}


function validateName(name)
{
	if (!(/^[a-zA-Z ]+$/.test(name)))	// more than one words, case ignored
	{
		alert("Name Is Not In Proper Format\n\ne.g. Firstname Lastname");
		return false;
	}
	return true;
}

function validateSsn(ssn)
{
	if (!(/^\d{3}-\d{2}-\d{4}$/.test(ssn)))
	{
		alert("SSN Is Not In Proper Format\n\ne.g. xxx-xx-xxxx");
		return false;
	}
	return true;
}

//Referentce: http://www.jsmadeeasy.com/javascripts/Forms/Date%20Validation/template.htm
function validateDob(birth)
{

	// Checks for the following valid date formats:
	// MM/DD/YYYY

		var datePat = /^(\d{2})(\/)(\d{2})(\/)(\d{4})$/;

		var matchArray = birth.match(datePat); // is the format ok?

		if (matchArray == null) 
		{
			alert("Date Of Birth Is Not In Proper Format\n\ne.g. MM/DD/YYYY")
			return false;
		}

		month = matchArray[1]; // parse date into variables
		day = matchArray[3];
		year = matchArray[5];

		if (month < 1 || month > 12)	// check month range
		{
			alert("Month Must Be Between 1 And 12");
			return false;
		}

		if (day < 1 || day > 31) 
		{
			alert("Day Must Be Between 1 And 31");
			return false;
		}

		if ((month==4 || month==6 || month==9 || month==11) && day==31) 
		{
			alert("Month "+month+" Doesn't Have 31 Days!")
			return false;
		}
	
		if (month == 2)	// check for february 29th
		{ 
			var isleap = (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0));
			if (day>29 || (day==29 && !isleap)) 
			{
				alert("February " + year + " Doesn't Have " + day + " Days!");
				return false;
			}
		}

		var now = new Date();
		var dob = new Date(birth);
		if (dob > now)
		{
			alert("Future Dates Cannot Be The Date Of Birth!");
			return false;
		}
		
		return true;  // date is valid

}

function validateIncome(income)
{
	if (!(/^\$\d+(\.\d{1,2})?$/.test(income)))
	{
		alert("Income Is Not In Proper Format\n\ne.g. $1000.00");
		return false;
	}
	return true;
}

