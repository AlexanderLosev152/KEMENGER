      var swiper = new Swiper(".swiper", {
        slidesPerView: 3,
        spaceBetween: 25,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        mousewhell: true,
        keyboard: true,
      });





 //  подробнее

 function schoolReadMore() {
    var schoolDots  = document.getElementById("schoolDots");
    var schoolMore  = document.getElementById("schoolMore");
    var schoolBtn = document.getElementById("schoolBtn");

    if(schoolDots.style.display === "none"){
      schoolDots.style.display="inline";
      schoolBtn.innerHTML="Подробнее...";
      schoolMore.style.display="none"
    } else {
      schoolDots.style.display="none";
      schoolBtn.innerHTML="Cкрыть...";
      schoolMore.style.display="inline"
    }
  }

  function readingReadMore() {
    var readingDots  = document.getElementById("readingDots");
    var readingMore  = document.getElementById("readingMore");
    var readingBtn = document.getElementById("readingBtn");

    if(readingDots.style.display === "none"){
      readingDots.style.display="inline";
      readingBtn.innerHTML="Подробнее...";
      readingMore.style.display="none"
    } else {
      readingDots.style.display="none";
      readingBtn.innerHTML="Cкрыть...";
      readingMore.style.display="inline"
    }
  }

   function arithmeticReadMore() {
    var arithmeticDots  = document.getElementById("arithmeticDots");
    var arithmeticMore  = document.getElementById("arithmeticMore");
    var arithmeticBtn = document.getElementById("arithmeticBtn");

    if(arithmeticDots.style.display === "none"){
      arithmeticDots.style.display="inline";
      arithmeticBtn.innerHTML="Подробнее...";
      arithmeticMore.style.display="none"
    } else {
      arithmeticDots.style.display="none";
      arithmeticBtn.innerHTML="Cкрыть...";
      arithmeticMore.style.display="inline"
    }
  }