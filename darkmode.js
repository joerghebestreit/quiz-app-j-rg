let nightbutton = document.querySelector(".nightbutton");
let mainbox = document.querySelectorAll(".mainbox");
let layoutMain = document.querySelector(".layoutMain");
let layoutHeader = document.querySelector(".layoutHeader");
let layoutFooter = document.querySelector(".layoutFooter");

nightbutton.addEventListener('click', () => {
    layoutHeader.classList.toggle("layoutHeaderDark");
    layoutMain.classList.toggle("layoutMainDark");
    layoutFooter.classList.toggle("layoutFooterDark");
});


for ( let i= 0; i<mainbox.length; i++) {
    mainbox[i];
    nightbutton.addEventListener('click', () => {
        mainbox[i].classList.toggle("mainboxDark");
    });
}