const dropdownButton = document.getElementById("dropdownMenuLink");
const dropdownBlock = document.getElementById("dropdown-block");

dropdownButton.addEventListener("click", () => {
    dropdownBlock.classList.toggle('show');
})