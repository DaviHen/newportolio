window.addEventListener("load", doFadeIn)

function doFadeIn() {
    const fadeInObjs = document.querySelectorAll(".fade-in");

    function checkFadeInObjs() {
        fadeInObjs.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            if (elementTop < window.innerHeight && elementBottom >= 0) {
                element.classList.add("makeElementVisible");
            } else {
                element.classList.remove("makeElementVisible");
            }
        });
    }

    checkFadeInObjs();
    window.addEventListener("scroll", checkFadeInObjs);
    window.addEventListener("resize", checkFadeInObjs);
}


