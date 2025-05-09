//selecting  Side Navbar, Menuicon
function togglemenu() {
  let mobileMenu = document.getElementById("mobile-div");
  mobileMenu.classList.remove("translate-x-full");
  mobileMenu.classList.add("translate-x-0");

}

function closeup() {
  let mobileMenu = document.getElementById("mobile-div");
  mobileMenu.classList.remove("translate-x-0");
  mobileMenu.classList.add("translate-x-full");
}


//Product Search Functionality

var Search = document.getElementById("searchInput");
var container = document.getElementById("productGrid");
var ProductList = container.querySelectorAll("div");

Search.addEventListener("keyup", function(event) {
  var enteredValue = event.target.value.toUpperCase()

  for (count = 0; count < ProductList.length; count = count + 1) {
    
    var productname = ProductList[count].querySelector("h1").textContent

    if (productname.toUpperCase().indexOf(enteredValue) < 0)
       {
      ProductList[count].style.display="none"
    }
    else{
     ProductList[count].style.display="block"
    }
  }
})