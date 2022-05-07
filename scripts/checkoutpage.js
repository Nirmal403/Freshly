let checkout =JSON.parse(localStorage.getItem('cartPage'));
// console.log(checkout)

function checkoutpage(el){
   var checkout = localStorage.setItem("checkout",JSON.stringify(cart))
   window.location.href ="checkoutpage.html"
}


let showdata = (el)=>{
    let items=document.getElementById('items')
    el.forEach(function(el){
        let box = document.createElement('div')
        box.setAttribute('class','mainbox')
        
        let pic = document.createElement('img')
        pic.src=el.productImg
        pic.setAttribute('class','pic')

        let proName = document.createElement('p')
        proName.innerText=el.title;
        proName.setAttribute('class','proName')

        box.append(pic,proName)

        items.append(box);
        

    
    })
}

showdata(checkout);

let popup1 = document.getElementById("popup");

function onclickNext(){
  
    var retrievedObject = localStorage.getItem('owner');

var obj ={
    name: document.getElementById("firstname").value,
    lastname: document.getElementById("lastname").value,
    fullname: document.getElementById("fullname").value,
    address1: document.getElementById("address1").value,
    address2: document.getElementById("address2").value,
    city: document.getElementById("city").value,
    state: document.getElementById("State").value,
    Zip:document.getElementById("Zip").value,
    email:document.getElementById("email").value,
}
for (var key in obj)
{
    localStorage.setItem("owner",JSON.stringify(obj));
}



}


function onclickNext(){
    popup1.classList.add("open-popup");
}

function closePopup(){
    popup.classList.remove("open-popup");
    window.location.href="./index.html"
}








// let popup = document.getElementById("popup");

// function onclickNext(){
//     popup.classList.add("open-popup");
// }

// function closePopup(){
//     popup.classList.remove("open-popup");
// }