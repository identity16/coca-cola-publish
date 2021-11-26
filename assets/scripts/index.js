document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        const eLoading = document.querySelector(".loading");
        eLoading.classList.add("hide");
    }, 1200);
});

const swiper = new Swiper(".hero-swiper", {
    loop: true,

    pagination: {
        el: ".swiper-pagination",
    },
});
