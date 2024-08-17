document.addEventListener("DOMContentLoaded", function () {
    const mountKinabaluImage = document.getElementById("mount-kinabalu");

    function checkScroll() {
        const rect = mountKinabaluImage.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        if (rect.top <= windowHeight && rect.bottom >= 0) {
            mountKinabaluImage.classList.add("visible");
        } else {
            mountKinabaluImage.classList.remove("visible");
        }
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();
});

document.addEventListener("DOMContentLoaded", function () {
    const nationalParkImage = document.getElementById("national-park");

    function checkScroll() {
        const rect = nationalParkImage.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            nationalParkImage.classList.add("visible");
        } else {
            nationalParkImage.classList.remove("visible");
        }
    }

    window.addEventListener("scroll", checkScroll);

    checkScroll();
});

document.addEventListener("DOMContentLoaded", function () {
    const turtleParkImage = document.getElementById("Turtle-Islands-Park");


    turtleParkImage.addEventListener("touchstart", function () {
        turtleParkImage.classList.add("active");
    });


});