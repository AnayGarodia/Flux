function showContent() {
    const invisibleContentBox = document.querySelectorAll(".third-part-content-box-container")
    const showMoreLink = document.querySelector(".show-more-link-text");

    if (showMoreLink.innerHTML == "View More") {

        for (let i = 0; i < invisibleContentBox.length; i++) {
            invisibleContentBox[i].classList.remove("d-none");
        }

        showMoreLink.innerHTML = "View Less";
    }

    else {
        for (let i = 3; i < invisibleContentBox.length; i++) {
            invisibleContentBox[i].classList.add("d-none");
        }

        showMoreLink.innerHTML = "View More";
    }


}