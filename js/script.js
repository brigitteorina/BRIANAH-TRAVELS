alert("Nitamanage")
//fetching my data
//function fetchPackage(){
    fetch("http://localhost:3000/packages")
    .then(res=>res.json())
    .then(resp=>{console.log(resp)})
    .then((data)=>console.log(data))
//}
fetchPackage()


let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');
let registrationForm=document.querySelector('.registration-form-container')
let register=document.querySelector('.registerInfo')
let registerFormClose =document.querySelector('#register-Close')
let loginForm = document.querySelector('.login-form-container');
let loginFormClose = document.querySelector('#login-Close');
menu.onclick = () =>{
   menu.classList.toggle('fa-times');
   navbar.classList.toggle('active');
}