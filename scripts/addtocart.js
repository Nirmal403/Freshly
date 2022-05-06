var cart =  JSON.parse(localStorage.getItem("cartPage"));


// var total = cart.reduce(function(sum,el){
//   return sum + Number(el.price);
// },0)
// console.log(total);
// var tot =  document.getElementById("total-price");
// tot.innerText = total;
// document.getElementById("total-div").append(tot);

  cart.map(function(el,index){

    var box = document.createElement("div");
    box.setAttribute('class','box')

    var name  = document.createElement("h5");
     name.innerText = el.title;
     name.setAttribute('class','name')

    // var price = document.createElement("p");
    //  price.innerText = el.price;

    var img = document.createElement("img");
    img.setAttribute('class','img')
     img.src = el.productImg;

     var rem = document.createElement("button");
     rem.setAttribute("id","remove");
      rem.innerText = "Remove";
       rem.addEventListener("click", function(){
        remFunc(el,index);
       })

     box.append(name,img,rem);

    
     document.getElementById("cart").append(box);
     

})




     function remFunc(el,index){
        
         cart.splice(index,1);
         localStorage.setItem("cartPage",JSON.stringify(cart));
         window.location.reload();

     }


     var count;

     document.getElementById("count").innerHTML="";
     if(cart == []){
         count = "";
     }
     else{
         count = cart.length + 0;
     }
      document.getElementById("count").append(count);
      //  cart.push(e);
       console.log(count);
      localStorage.setItem("count", JSON.stringify(count))
      
     



     
     