let description =JSON.parse(localStorage.getItem('ProductDescritionPage'));
// console.log(description);
// let slash = document.querySelector('.showdiv')
// slash.innerHTML = description[0].id+"/"+description[0].category+'/'+description[0].ProductNmae

let showdata = (el) =>{
    let container = document.getElementById('showdiv')  
   
    container.innerHTML=null;

    el.forEach(function(el){
        console.log(el);
        let maindiv = document.createElement('div')
        maindiv.setAttribute('class','maindiv')

        let title = document.createElement('h3')
        title.innerText = el.title;
        title.setAttribute('class','proName')


        let calories = document.createElement('p')
        calories.innerText = el.calories;
        calories.setAttribute('class','info')


        let type = document.createElement('p');
        type.innerText =el.type;
        type.setAttribute('class','info')


        let serve = document.createElement('p');
        serve.innerText =el.serve;
        serve.setAttribute('class','info')


        let picdiv =  document.createElement('div')
        picdiv.setAttribute('class','picdiv')

        let pic = document.createElement('img');
        pic.src = el.productImg;
        pic.setAttribute('class','pic')


        let addbtn = document.createElement('button')
        addbtn.innerHTML='ADD TO CART'
        addbtn.setAttribute('class','addbtn')

        addbtn.onclick= function () {
            cartPage(el)
            
        }
        maindiv.append(title,calories,type,serve,addbtn);
        picdiv.append(pic);
        container.append(maindiv,picdiv);
    })
}

showdata(description)

//pushing data to cart page
function cartPage(e){
    var cartPage = JSON.parse(localStorage.getItem("cartPage"))||[];
    e.quant=1;
    
    cartPage.push(e);
    
    localStorage.setItem("cartPage", JSON.stringify(cartPage));
    
     window.location.href = "addtocart.html";
    
    }

    //onmouse over change img function
// function currentImage1(elem,image){
//     image.src=elem.image[0];
// }
// function currentImage2(elem,image){
//     image.src=elem.image[1];
// }
// function currentImage3(elem,image){
//     image.src=elem.image[2];
// }
// function originalImage2(elem,image){
//     image.src=elem.image[0]
// }


