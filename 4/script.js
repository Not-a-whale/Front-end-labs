const dropdownButton = document.getElementById("dropdownMenuLink");
const dropdownBlock = document.getElementById("dropdown-block");
const dropdownButtonkMobile = document.getElementById("navbarToggler");
const dropdownBlockMobile = document.getElementById("navbarCollapse");

window.onscroll = function() {scrollFunction()};


dropdownButton.addEventListener("click", () => {
    dropdownBlock.classList.toggle('show');
});

dropdownButtonkMobile.addEventListener("click", () => {
    dropdownBlockMobile.classList.toggle('show');
})

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("mainHeader").classList.add("header-scroll");
      console.log(document.getElementById("mainHeader").style.background)
    } else {
      document.getElementById("mainHeader").classList.remove("header-scroll");
    }
}