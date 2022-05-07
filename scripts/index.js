function gotosignup(){
    let email = document.getElementById("email").value || document.getElementById("email1").value;
    let pass = document.getElementById("zip").value || document.getElementById("zip1").value;


    if((email==="")&&(pass===""))
    {
        alert("Please Enter Credentials")
    }
    else if(email==="")
    {
        alert("Please Enter mail")
    }
    else if(pass==="")
    {
        alert("Please Enter ZIP")
    }
    else
    {
    localStorage.setItem("user",JSON.stringify(userArr))
    window.location.href=("signup.html")
    }
   
  }


 