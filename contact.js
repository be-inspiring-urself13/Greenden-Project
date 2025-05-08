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