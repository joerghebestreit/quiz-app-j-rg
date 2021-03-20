let bookmarks = document.querySelectorAll(".icon4");
for ( let i= 0; i<bookmarks.length; i++) {
    bookmarks[i].addEventListener('click', () => {
        bookmarks[i].classList.toggle("icon4filled");
    });
}