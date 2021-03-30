function showContent() {
    const invisibleContentBox = document.querySelectorAll(".third-part-content-box-container")
    const showMoreLink = document.querySelector(".show-more-link-text");

    if (showMoreLink.innerHTML == "View More") {

        for (let i = 0; i < invisibleContentBox.length; i++) {
            invisibleContentBox[i].classList.remove("d-none");
        }

        showMoreLink.innerHTML = "View Less";
    } else {
        for (let i = 3; i < invisibleContentBox.length; i++) {
            invisibleContentBox[i].classList.add("d-none");
        }

        showMoreLink.innerHTML = "View More";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll(".third-part-content-box-container");
    const circles = document.querySelectorAll(".circle-container");
    circleAppear(circles[0]);
    boxAppear(boxes[0])
    window.addEventListener("scroll", () => {
        circleAppear(circles[0]);
        boxAppear(boxes[0])
    });
})

function circleAppear(n) {
    const circles = document.querySelectorAll(".circle-container");
    if (window.pageYOffset > distanceFromTop(n) / 2) {
        for (let i = 0; i < circles.length; i++) {
            circles[i].style.animation = '1s appear'
            circles[i].style.opacity = '1'
        }
    }
}

function boxAppear(n) {
    const boxes = document.querySelectorAll(".third-part-content-box-container");
    console.log(window.pageYOffset > distanceFromTop(n) / 1.25)
    if (window.pageYOffset > distanceFromTop(n) / 1.25) {
        for (let j = 0; j < boxes.length; j++) {
            console.log('done')
            boxes[j].style.animation = '1s appear'
            boxes[j].style.opacity = '1'
        }
    }
}

function distanceFromTop(elem) {
    var location = 0;
    if (elem.offsetParent) {
        do {
            location += elem.offsetTop;
            elem = elem.offsetParent;
        } while (elem);
    }
    return location >= 0 ? location : 0;
};