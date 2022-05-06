let popup = document.getElementById("popup");

function onclickNext(){
    popup.classList.add("open-popup");
}

function closePopup(){
    popup.classList.remove("open-popup");
    window.location.href="./index.html"
}

