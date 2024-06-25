function validation()
{
	var name= document.getElementById("n").value;
	var nameformat=/^([a-zA-Z\.]+)$/;
	if(nameformat.test(name))
	{
		
	}
	else
	{
		alert("You have entered an invalid name");
	}
	var address=document.getElementById("ad").value;
	var addressformat=/^([a-zA-Z0-9\().]+)$/;
	if(addressformat.test(address))
	{
		
	}
	else
	{
		alert("You have entered an invalid address")
	}
	var mail= document.getElementById("e").value;
	var mailformat=/^([a-zA-Z0-9\.-]+)@([a-z]{2,10})\.([a-z]{2,8})$/;
	if(mailformat.test(mail))
	{
		
	}
	else{
		alert("You have entered an invalid email");
	}
	var pass=document.getElementById("pas").value;
	var pasformat=/^[a-zA-Z0-9\@]+$/;
	if(pasformat.test(pass))
	{
		
	}
	else{
		alert("You have entered an invalid password");
	}
	var pwd=document.getElementById("pwd").value;
	var pwdformat=/^[a-zA-Z0-9\@]+$/;
	if(pwdformat.test(pwd))
	if(pwd!=pass)
	{
		 alert("You have entered an invalid password");
	}
	if(pwd=="")
	{
	 alert("You have entered an invalid password");
	}
	if(nameformat.test(name)&&addressformat.test(address)&&mailformat.test(mail)&&pasformat.test(pass)&&pwdformat.test(pwd)&&pass==pwd)
	{	
		alert("You are successfully Registered");
		window.open('flowershop5.html')
    }
		
	
}