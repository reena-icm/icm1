function validation()
{
	var mail= document.getElementById("e").value;
	var mailformat=/^([a-zA-Z0-9\.-]+)@([a-z]{2,10})\.([a-z]{2,8})$/;
	if(mailformat.test(mail))
	{
	}
	else
	{
		alert("You have entered an invalid email");
	}
	var pass=document.getElementById("pas").value;
	var pasformat=/^[a-zA-Z0-9\@]+$/;
	if(pasformat.test(pass))
	{
		
	}
	else
	{
		alert("Invalid password");
	}
if(mailformat.test(mail)&&pasformat.test(pass))
	window.open('flowershop5.html')
}