async function showContent() {
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

async function changeText() {
    const changingText = document.getElementById('bottom-span');
    const textArr = ["Help", "Innovate", "Challenge Conventions", "Break Barriers", "Donate", "Fight Evils", "Protect Rights", "Preserve Nature"];
    var text;
    do {
        text = textArr[Math.floor(Math.random() * textArr.length)];
    } while (text == changingText.innerHTML)
    changingText.style.animation = "2s appear";
    await sleep(100);
    changingText.innerHTML = text;
    await sleep(1000)
    changingText.style.animation = "none";

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


setInterval(changeText, 2500);

async function appear() {
    var content = document.querySelectorAll(".content-part");

    for (let i = 0; i < content.length; i++) {
        if (window.pageYOffset > distanceFromTop(content[i]) - 500 && content[i].style.opacity != '1') {
            content[i].style.animation = '1s fadeIn';
            await sleep(1000);
            content[i].style.opacity = '1';
            content[i].style.animation = 'none';
        }
    }
}