      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        mousewhell: true,
        keyboard: true,
      });

      let btns = document.querySelectorAll('.catalog__swiper--btn')
      
      for(btn of btns) {
        btn.addEventListener('click',  function () {
          let card = this.closest('.catalog__swiper-subject');
          let dots = card.querySelectorAll('.dots');
          let more = card.querySelectorAll('.more');

          if(dots.style.display === 'none') {
            dots.style.display = 'inline';
            more.style.display = 'none';
            this.textContent = 'Подробнее';
          }else {
            dots.style.display = 'none';
            more.style.display = 'inline';
            this.textContent = 'Скрыть';
          }
        
        })
      }

//   function readMore(dotsId, moreId, btnId) {
//   console.log('asdasdasdasd')
//   const dots  = document.getElementById(dotsId);
//   const more  = document.getElementById(moreId);
//   const btn = document.getElementById(btnId);

//   if(dots.style.display === "none"){
//     dots.style.display="inline";
//     btn.innerHTML="Подробнее...";
//     more.style.display="none"
//   } else {
//     dots.style.display="none";
//     btn.innerHTML="Cкрыть...";
//     more.style.display="inline"
//   }
// }


// document.getElementById("schoolBtn").addEventListener("click", () => {
//   readMore("schoolDots", "schoolMore", "schoolBtn")
// } );
// document.getElementById("readingBtn").addEventListener("click", () => {
//   readMore("readingDots", "readingMore", "readingBtn")
// } );
// document.getElementById("arithmeticBtn").addEventListener("click", ()=> {readMore("arithmeticDots", "arithmeticMore", "arithmeticBtn")});