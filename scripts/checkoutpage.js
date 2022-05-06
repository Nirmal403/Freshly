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
