let register_btn = document.querySelector(".register-btn")
let login_btn = document.querySelector(".login-btn")
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