if(localStorage.getItem('users') === null){
    localStorage.setItem('users', JSON.stringify([]))
}

let  userArr = []
function storeCredentials(){

    
    let email = document.getElementById('email').value


    let pass = document.getElementById('zip').value

    let p1 = new userdata(email,pass)

    userArr.push(p1)
   
    
   
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
    window.location.href='login.html'
    }
}

function userdata(e,pa){
    this.email = e ;
    this.pass=pa ;
}



function getData(){
    let alluser = JSON.parse(localStorage.getItem('user'))

    let email = document.getElementById('email').value

    let pass = document.getElementById('zip').value

    
    alluser.forEach(function(user){
    if((email===user.email && pass ===user.pass)||
     (email===user.Phone && pass===user.pass)){
         
         alert('Login Successful')
        
         window.location.href='index.html'
        
        
         return 

     }
     else if((email!=user.email && pass ===user.pass)||
     (email!=user.Phone && pass===user.pass) ) {
        alert('Invalid Email')
        return 
     }
     else if((email===user.email && pass !=user.pass)||
     (email===user.Phone && pass!=user.pass)){
        alert('Invalid ZIP Code')
        return 
     }
    });
    
}
    
