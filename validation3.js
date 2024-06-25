function validation()
{
	var name= document.getElementById("name").value;
	var nameformat=/^([a-zA-Z\.]+)$/;
	if(nameformat.test(name))
	{
		
	}
	else
	{
		alert("You have entered an invalid name");
	}
	var no=document.getElementById("card-number").value;
	var noformat=/^(?:\d[ -]*?){13,16}$/
     if (noformat.test(no))
	    {
        }  
      else  
        {  
          alert("You have entered an invalid card number");  
        }  

   
	var date=document.getElementById("expiry").value;
    var dateformat=/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/
	if(dateformat.test(date))
	{
	}
	else
	{
		alert("You have entered an invalid date")
	}
	var cvv=document.getElementById("cvv").value;
    var cvvformat=/^[0-9]{4}$/;
	if(cvvformat.test(cvv))
	{
		
	}
	else
	{
		alert("You have entered an invalid cvv")
	}
  if(nameformat.test(name)&&noformat.test(no)&&dateformat.test(date)&&cvvformat.test(cvv))
            window.open('success.html')
}			
	