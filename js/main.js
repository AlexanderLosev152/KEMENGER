    //  модальное окно
    var modal = document.getElementById('myModal');
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];
    
    btn.onclick = function () {
      modal.style.display = "block";
    }
    // span.onclick = function () {
    //   modal.style.display = "none";
    // } 
     
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }

    //  ----------------------
    
    

    // swiper

     var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        mousewhell: true,
        keyboard: true,
        grabCursor:true,
      });




  function readMore(dotsId, moreId, btnId) {
  console.log('asdasdasdasd')
  const dots  = document.getElementById(dotsId);
  const more  = document.getElementById(moreId);
  const btn = document.getElementById(btnId);

  if(dots.style.display === "none"){
    dots.style.display="inline";
    btn.innerHTML="Подробнее...";
    more.style.display="none"
  } else {
    dots.style.display="none";
    btn.innerHTML="Cкрыть...";
    more.style.display="inline"
  }
}


document.getElementById("schoolBtn").addEventListener("click", () => {
  readMore("schoolDots", "schoolMore", "schoolBtn")
} );
document.getElementById("readingBtn").addEventListener("click", () => {
  readMore("readingDots", "readingMore", "readingBtn")
} );
document.getElementById("arithmeticBtn").addEventListener("click", ()=> {readMore("arithmeticDots", "arithmeticMore", "arithmeticBtn")});
document.getElementById("calligraphyBtn").addEventListener("click", ()=> {readMore("calligraphyDots", "calligraphyMore", "calligraphyBtn")});
document.getElementById("extendedBtn").addEventListener("click", ()=> {readMore("extendedDots", "extendedMore", "extendedBtn")});
