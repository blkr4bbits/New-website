const themeSwitch = document.getElementById("theme-switch");

const enableDarkMode = () => {
    document.body.classList.add("dark-mode");
    localStorage.setItem("darkmode", "active");
};

const disableDarkMode = () => {
    document.body.classList.remove("dark-mode");
    localStorage.removeItem("darkmode");
};

if (localStorage.getItem("darkmode") === "active") {
    enableDarkMode();
}

themeSwitch.addEventListener("click", () => {
    document.body.classList.contains("dark-mode")
        ? disableDarkMode()
        : enableDarkMode();
});

// Dark mode on button click and apply theme that is stored on local storage
