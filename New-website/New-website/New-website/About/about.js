window.addEventListener("scroll", function () {
    const triangle = document.querySelector(".triangle-down");

    if (window.scrollY > 100) {
        triangle.style.opacity = "0";
    } else {
        triangle.style.opacity = "1";
    }
});