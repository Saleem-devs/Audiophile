let checkMark1 = document.getElementById ("checkmark1");
let checkMark2 = document.getElementById ("checkmark2");
let border1 = document.getElementById ("border1");
let border2 = document.getElementById ("border2");
let delivery = document.querySelector(".delivery");
let eMoney = document.querySelector(".money-payment");
let emailField = document.getElementById("email-field");
let emailError = document.querySelector(".error");
let cartBtn = document.querySelector(".cart")
let cartBox = document.querySelector(".cart-section");
let menuBox = document.querySelectorAll(".menu-box");
let mneuIcon = document.querySelectorAll(".menu");

//PAYMENT OPTIONS

function checkBox2() {
    checkMark2.classList.add("checked");
    checkMark1.classList.remove("checked")
    border2.style.border = "1px solid #D87D4A";
    border1.style.border = "1px solid #CFCFCF";
    delivery.classList.add("show");
    eMoney.classList.remove ("show");
}
function checkBox1() {
    checkMark1.classList.add("checked");
    checkMark2.classList.remove("checked");
    border1.style.border = "1px solid #D87D4A";
    border2.style.border = "1px solid #CFCFCF";
    eMoney.classList.add ("show");
    delivery.classList.remove("show");
}
checkMark2.addEventListener("click", ()=>{
    checkBox2();
    
})
checkMark1.addEventListener("click", ()=>{
    checkBox1();
})

// EMAIL VALIDATION

function validateEmail() {
    if (!emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = "Wrong format";
        emailField.style.border = "2px solid #CD2C2C"
        return false;
    }
    emailError.innerHTML = "";
    emailField.style.border = "1px solid #CFCFCF"
    return true;
}
emailField.addEventListener("keyup", ()=> {
    validateEmail();
})

// SHOW CART

// function showCart(){
//     cartBox.classList.add("show");
// }
// cart.addEventListener("click", ()=> {
//     showCart()
// })

// cartBtn.onclick = () => {
//     cartBox.classList.add ("show")
// }

// MENU

function showMenu () {
    menuBox.classList.add ("show");
}
mneuIcon.addEventListener("click", ()=> {
    showMenu();
})