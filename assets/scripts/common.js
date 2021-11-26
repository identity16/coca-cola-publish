document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        const eLoading = document.querySelector(".loading");
        eLoading.classList.add("hide");
    }, 1200);
});

document.addEventListener("scroll", () => {
    const eGNB = document.getElementById("gnb");
    if (window.scrollY > 0) {
        eGNB.classList.add("stuck");
    } else {
        eGNB.classList.remove("stuck");
    }
});
