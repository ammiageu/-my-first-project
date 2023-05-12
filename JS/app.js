// ------------------Go-top-button------------
document.getElementById("top").addEventListener("click", scrollUp);
function scrollUp(){
  var currentScroll = document.documentElement.scrollTop;
  if (currentScroll > 0){
    window.scrollTo (0, 0);
  }
}
// --------------dark-mode----------//
const btnSwitch = document.querySelector("#switch");
btnSwitch.addEventListener("click", () => {
document.body.classList.toggle("dark");
btnSwitch.classList.toggle("active");

// ---Save dark-mode localStorage---//
if (document.body.classList.contains("dark"))
{
    localStorage.setItem("dark-mode", "true");
}
else{
    localStorage.setItem("dark-mode", "false");
}
});
// -----------current mode----------//
if(localStorage.getItem("dark-mode") === "true"){
    document.body.classList.add("dark");
    btnSwitch.classList.add("active");
}
else {
    document.body.classList.remove("dark");
    btnSwitch.classList.remove("active");
}

// ---------------hiden menu---------
const navMenu = document.querySelector("#nav-menu");
const open = document.querySelector("#open");
const close = document.querySelector("#close")

open.addEventListener("click", () => {
  navMenu.classList.add("visible");
})

close.addEventListener("click", () => {
  navMenu.classList.remove("visible");
})