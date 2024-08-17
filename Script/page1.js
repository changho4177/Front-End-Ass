document.addEventListener("DOMContentLoaded", function () {
    const penangHillImage = document.getElementById("penang-hill");

    function checkScroll() {
        const rect = penangHillImage.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            penangHillImage.classList.add("visible");
        } else {
            penangHillImage.classList.remove("visible");
        }
    }
    window.addEventListener("scroll", checkScroll);
    checkScroll();
});

document.addEventListener("DOMContentLoaded", function () {
    const escapeThemeParkImage = document.getElementById("escape-theme-park");

    function checkScroll() {
        const rect = escapeThemeParkImage.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            escapeThemeParkImage.classList.add("visible");
        } else {
            escapeThemeParkImage.classList.remove("visible");
        }
    }

    window.addEventListener("scroll", checkScroll);

    checkScroll();
});

document.addEventListener("DOMContentLoaded", function () {
    const butterflyFarmImage = document.getElementById("penang-butterfly-farm");


    butterflyFarmImage.addEventListener("touchstart", function () {
        butterflyFarmImage.classList.add("active");
    });


});