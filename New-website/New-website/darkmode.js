const toggle = document.getElementById("theme-switch");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // optional: save preference
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

// load saved theme
window.addEventListener("load", () => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
        document.body.classList.add("dark-mode");
    }
});