        
    // navbar import export
    
    import navbar from "./navbar.js";
        // console.log(navbar);
    
        let nav = document.getElementById("navbarz");
    
        nav.innerHTML = navbar();
    
    
        
      var prevScrollpos = window.pageYOffset;
      window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
          document.getElementById("navbar").style.top = "0";
        } else {
          document.getElementById("navbar").style.top = "-50px";
        }
        prevScrollpos = currentScrollPos;
      }
    
    
    
    
    //navbar
       
    var prevScrollpos = window.pageYOffset;
      window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
          document.getElementById("navbar1").style.top = "0";
        } else {
          document.getElementById("navbar1").style.top = "-50px";
        }
        prevScrollpos = currentScrollPos;
      }
    
    
    
    
      // //footer C
      import footer from "./footer.js";
      
    
      let foot = document.getElementById("footerz");
      foot.innerHTML = footer();
    