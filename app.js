//open
//open
const toggleBtn = document.querySelector(".toggle-btn")
const toggleBtnIcon = document.querySelector(".toggle-btn i")
const dropDwnMenu = document.querySelector(".dropdown-menu")

toggleBtn.onclick = function () {
    dropDwnMenu.classList.toggle("open")
    const isOpen = dropDwnMenu.classList.contains("open")

    toggleBtnIcon.classList = isOpen
    ? "fa-solid fa-xmark"
    : "fa-solid fa-bars"
}

let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselDom = document.querySelector('.carousel');
let listItemDom = document.querySelector('.carousel .list');
let thumbnailDom = document.querySelector('.carousel .thumbnail');

nextDom.onclick = function () {
    showSlider('next');
}
prevDom.onclick = function () {
    showSlider('prev');
}
let timeRunnig = 3000;
let timeAutoNext = 7000;
let runTimeOut;
let runAutoRun = setTimeout(() => {
    nextDom.click();
}, timeAutoNext);

function showSlider(type) {
    let itemSlider = document.querySelectorAll('.carousel .list .item');
    let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');

    if (type === 'next') {
        listItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        carouselDom.classList.add('next');
    } else {
        let positionLastItem = itemSlider.length - 1;
        listItemDom.prepend(itemSlider[positionLastItem]);
        thumbnailDom.prepend(itemThumbnail[positionLastItem]);
        carouselDom.classList.add('prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunnig)

    clearTimeout(runAutoRun);
    runAutoRun = setTimeout(() => {
        nextDom.click();
    }, timeAutoNext);
}


// LOGIN

let register_btn = document.querySelector(".register-btn")
let login_btn = document.querySelector("login-btn")
let close_btn = document.querySelector(".close-icon")
let login_nav_btn = document.querySelector(".nav-login-btn")


register_btn.addEventListener("click",()=>{
    document.querySelector(".form-box").classList.add("change-form")
})
login_btn.addEventListener("click",()=>{
    document.querySelector(".form-box").classList.remove("change-form")
})
close_btn.addEventListener("click",()=>{
    document.querySelector(".form-box").classList.add("close-form")
})
login_nav_btn.addEventListener("click",()=>{
    document.querySelector(".form-box").classList.remove("close-form")
})

