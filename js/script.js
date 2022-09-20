// // alert("nitamanage");
// let menu = document.querySelector('#menu-btn');
// let navbar = document.querySelector('.header .navbar');
// let registrationForm=document.querySelector('.registration-form-container')
// let register=document.querySelector('.registerInfo')
// let registerFormClose =document.querySelector('#register-Close')
// let loginForm = document.querySelector('.login-form-container');
// let loginFormClose = document.querySelector('#login-Close');
// // menu.onclick = () =>{
// //    menu.classList.toggle('fa-times');
// //    navbar.classList.toggle('active');
// // };

// // window.onscroll = () =>{
// //    menu.classList.remove('fa-times');
// //    navbar.classList.remove('active');
// //    registrationForm.classList.remove('fa-times');
// //    loginForm.classList.remove('active');
// // };
// register.addEventListener('click' ,() =>{
//    registrationForm.classList.add('active')
// })
// registerFormClose.addEventListener('click' ,() => {
//    registrationForm.classList.remove('active')
//  })
// var swiper = new Swiper(".home-slider", {
//    loop:true,
//    navigation: {
//      nextEl: ".swiper-button-next",
//      prevEl: ".swiper-button-prev",
//    },
// });
// loginFormClose.addEventListener('click', () =>{
//    loginForm.classList.remove('active');

// });

// var swiper = new Swiper(".reviews-slider", {
//    grabCursor:true,
//    loop:true,
//    autoHeight:true,
//    spaceBetween: 20,
//    breakpoints: {
//       0: {
//         slidesPerView: 1,
//       },
//       700: {
//         slidesPerView: 2,
//       },
//       1000: {
//         slidesPerView: 3,
//       },
//    },
// });

// let loadMoreBtn = document.querySelector('.packages .load-more .btn');
// let currentItem = 3;
// //apponting the boxes to be displayed

// loadMoreBtn.onclick = () =>{
//    let boxes = [...document.querySelectorAll('.packages .box-container .box')];
//    //loop for the boxes

//    for (var i = currentItem; i < currentItem + 3; i++){
//       boxes[i].style.display = 'inline-block';
//    };
//    //loop
//    currentItem += 3;
//    if(currentItem >= boxes.length){
//       loadMoreBtn.style.display = 'none';
//    }
// }

//fetch json data
function packages(){
   fetch('./db.json')
   .then(response => response.json())
   .then(data => {
      let packages = data.packages;
      console.log(packages);
      let packagesContainer = document.querySelector('.home-packages .box-container');
      let packageHTML = '';
      packages.forEach(package => {
         packageHTML += `
         <div class="box">
            <div class="image">
               <img src="${package.img_url}" alt="">
            </div>
            <div class="content">
               <h3>${package.resort}</h3>
               <p>
               <p>${package.payment}</p>
               <h3>${package.country}</h3>
               ${package.description}
               <a href="#" class="btn">Read More</a>
            </div>
         </div>
         `;
      });
      packagesContainer.innerHTML += packageHTML;
   });
}

packages();

fetch('./db.json')
.then(response => response.json())
.then(data => {
   let destination = data.destinations;
   console.log(destination);
   let destinationContainer = document.querySelector('.packages .box-container');
   let destinationHTML = '';
   destination.forEach(destination => {
      destinationHTML += `
      <div class="box">
         <div class="image">
            <img src="${destination.img_url}" alt="">
         </div>
         <div class="content">
            <h3>${destination.resort}</h3>
            <p>
            <p>${destination.payment}</p>
            <h3>${destination.country}</h3>
            ${destination.description}
            <a href="#" class="btn">Read More</a>
         </div>
      </div>
      `;
   });
   destinationContainer.innerHTML += destinationHTML;
});

