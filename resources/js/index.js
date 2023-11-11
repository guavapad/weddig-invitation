//ELEMENTS---------------------------
const elements = document.documentElement;

//PAGE------------------------------------
const cover = document.getElementById("cover")
const page0 = document.getElementsByClassName("page-0")
const page1 = document.getElementsByClassName("page-1")
const page2 = document.getElementsByClassName("page-2")
const page3 = document.getElementsByClassName("page-3")
const page4 = document.getElementsByClassName("page-4")
const page5 = document.getElementsByClassName("page-5")
const page6 = document.getElementsByClassName("page-6")
const page7 = document.getElementsByClassName("page-7")
const page8 = document.getElementsByClassName("page-8")
const page9 = document.getElementsByClassName("page-9")
const page10 = document.getElementsByClassName("page-10")
const page11 = document.getElementsByClassName("page-11")
//MENU------------------------------------
const menu = document.querySelectorAll(".menu");
const menuSection = document.getElementById("menuSection")

//PLAY--------------------------------------
const music = document.getElementById("music");
const audio = document.getElementById("audio");
const on = document.getElementById("on");
const off = document.getElementById("off");

function playAudio() {

  if (audio.paused) {
    audio.play();
    on.classList.remove("hidden")
    off.classList.add("hidden")
  }
  else{
    audio.pause();
    on.classList.add("hidden")
    off.classList.remove("hidden")
  }
}

//OPEN-FULL-SCREEN------------------------
const openFullScreen = () => {
  if (elements.requestFullscreen) {
    elements.requestFullscreen();
  } else if (elements.webkitRequestFullscreen) { /* Safari */
  elements.webkitRequestFullscreen();
  } else if (elements.msRequestFullscreen) { /* IE11 */
  elements.msRequestFullscreen();
  }
}

//EVENT------------------------------
const eventDateTime=["October 12 , 2023 08:00:00", "October 13 , 2023 08:00:00", "October 14 , 2023 08:00:00"]

const countDownEvents = () => {
  for(let index=0; index<eventDateTime.length;index++)
  {
    let countDownDate = new Date(eventDateTime[index]).getTime();

    let counter = setInterval(()=> {

      let now = new Date().getTime();
      let distance = countDownDate - now;

      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("days-"+index).innerHTML = days
      document.getElementById("hours-"+index).innerHTML = hours
      document.getElementById("minutes-"+index).innerHTML = minutes 
      document.getElementById("seconds-"+index).innerHTML = seconds ;

     if(distance < 0) {
      clearInterval(counter);
      }
    }, 1000);
  }
}
//SWIPER-----------------------------------------
  //PAGE
  const pageSwiper = new Swiper(".pageSwiper", {
    direction: "vertical",
    slidesPerView: 1,
    mousewheel: true,
    speed: 400,
    init: false,
  });
  //EVENTS
  const eventSwiper = new Swiper(".eventSwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    direction: "horizontal",
    spaceBetween: 30,
    rewind: true,
  });
//LOVE-STORY
const loveStorySwiper = new Swiper(".loveStorySwiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  direction: "horizontal",
  spaceBetween: 20,
  rewind: true,
  });
//Moments
const momentsSwiper = new Swiper(".momentsSwiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  direction: "horizontal",
  spaceBetween: 20,
  rewind: true,
  });
//RSVP
const rsvpSwiper = new Swiper(".rsvpSwiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  direction: "horizontal",
  spaceBetween: 30,
});
//Wishes
const wishesSwiper = new Swiper(".wishesSwiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  direction: "horizontal",
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
//OPEN-INVITATION-BUTTON---------------------
const openInvitation = () =>{
  cover.classList.add("hidden");
  openFullScreen()
  music.classList.remove("hidden")
  on.classList.remove("hidden")
  audio.play();
  menuSection.classList.remove("hidden")

  pageSwiper.on('init', function() {
    menu[0].classList.replace("fill-white", "fill-menuIcon")
    page0[0].classList.add("animate__fadeIn")
    page0[1].classList.add("animate-down")
    page0[2].classList.add("animate__slideInRight")
    page0[3].classList.add("animate__fadeInDown","animate__delay-1s")
    page0[4].classList.add("animate__fadeInLeft", "animate__delay-2s")
    page0[5].classList.add("animate__fadeInRight", "animate__delay-2s")
    page0[6].classList.add("animate__zoomIn", "animate__delay-3s")
    page0[7].classList.add("animate__fadeIn", "animate__delay-4s")
    page0[8].classList.add("animate__zoomIn", "animate__delay-5s")
    page0[9].classList.add("animate-up")
    page0[10].classList.add("animate__slideInLeft")
   
});
pageSwiper.init();

  countDownEvents()
}

//MODAL-------------------------------------
  //GALLERY-MODAL
  const galleryModal = document.getElementById("galleryModal")
  const imageModal = document.getElementById("imageModal")
  const formModal = document.getElementById("formModal")
    
  const  openGalleryModal = (src) => {
    galleryModal.classList.remove("hidden");
    imageModal.src = src;
  }
  const  closeGalleryModal = () => {
    galleryModal.classList.add("hidden");
  }
  //RSVP-FORM-MODAL-NOTIFICATION
  const  openFormModal = (event) => {
    formModal.classList.remove("hidden");
    formModal.classList.add("animate__fadeInDown")

    setTimeout(function(){
      formModal.classList.add("hidden");
      formModal.classList.remove("animate__fadeInDown")
    }, 2000);
    event.preventDefault()
  }
  //COPY------------------------------------
  const copy = (number) =>{
  navigator.clipboard.writeText(number);

  const copyModal = document.getElementById("copyModal")
  copyModal.classList.remove("hidden");
  copyModal.classList.add("animate__fadeInDown")

  setTimeout(function(){
    copyModal.classList.add("hidden");
  }, 1500);
  }
  

//SWIPER-------------------------------------
  pageSwiper.on('slideChange', function () {  
    for(let i = 0; i<menu.length;i++)
    {
      menu[i].classList.replace("fill-menuIcon", "fill-white")
    }

    if(pageSwiper.activeIndex===0)
    {
      menu[0].classList.replace("fill-white", "fill-menuIcon")
    }
    else if(pageSwiper.activeIndex===1||pageSwiper.activeIndex===2||pageSwiper.activeIndex===3||pageSwiper.activeIndex===4)
    {
      menu[1].classList.replace("fill-white", "fill-menuIcon")
    }
    else if(pageSwiper.activeIndex===5||pageSwiper.activeIndex===6||pageSwiper.activeIndex===7)
    {
      menu[2].classList.replace("fill-white", "fill-menuIcon")
    }
    else if(pageSwiper.activeIndex===8)
    {
      menu[3].classList.replace("fill-white", "fill-menuIcon")
    }
    else if(pageSwiper.activeIndex===9)
    {
      menu[4].classList.replace("fill-white", "fill-menuIcon")
    }
    else if(pageSwiper.activeIndex===10)
    {
      menu[5].classList.replace("fill-white", "fill-menuIcon")
    }
    else
    {
      menu[6].classList.replace("fill-white", "fill-menuIcon")
    }

    if(pageSwiper.activeIndex===0)
    {
    page0[0].classList.add("animate__fadeIn")
    page0[1].classList.add("animate-down")
    page0[2].classList.add("animate__slideInRight")
    page0[3].classList.add("animate__fadeInDown","animate__delay-1s")
    page0[4].classList.add("animate__fadeInLeft", "animate__delay-2s")
    page0[5].classList.add("animate__fadeInRight", "animate__delay-2s")
    page0[6].classList.add("animate__zoomIn", "animate__delay-3s")
    page0[7].classList.add("animate__fadeIn", "animate__delay-4s")
    page0[8].classList.add("animate__zoomIn", "animate__delay-5s")
    page0[9].classList.add("animate-up")
    page0[10].classList.add("animate__slideInLeft")
     
    }
    else{
    page0[0].classList.remove("animate__fadeIn")
    page0[1].classList.remove("animate-down")
    page0[2].classList.remove("animate__slideInRight")
    page0[3].classList.remove("animate__fadeInDown","animate__delay-1s")
    page0[4].classList.remove("animate__fadeInLeft", "animate__delay-2s")
    page0[5].classList.remove("animate__fadeInRight", "animate__delay-2s")
    page0[6].classList.remove("animate__zoomIn", "animate__delay-3s")
    page0[7].classList.remove("animate__fadeIn", "animate__delay-4s")
    page0[8].classList.remove("animate__zoomIn", "animate__delay-5s")
    page0[9].classList.remove("animate-up")
    page0[10].classList.remove("animate__slideInLeft")
    }
    if(pageSwiper.activeIndex===1)
    {
      page1[0].classList.add("animate__fadeIn")
      page1[1].classList.add("animate-down")
      page1[2].classList.add("animate__slideInRight")
      page1[3].classList.add("animate__fadeIn","animate__delay-2s")
      page1[4].classList.add("animate__fadeInLeft", "animate__delay-2s")
      page1[5].classList.add("animate__fadeInRight", "animate__delay-2s")
      page1[6].classList.add("animate__fadeIn", "animate__delay-3s")
      page1[7].classList.add("animate__slideInLeft")
    }
    else{
      page1[0].classList.remove("animate__fadeIn")
      page1[1].classList.remove("animate-down")
      page1[2].classList.remove("animate__slideInRight")
      page1[3].classList.remove("animate__fadeIn","animate__delay-2s")
      page1[4].classList.remove("animate__fadeInLeft", "animate__delay-2s")
      page1[5].classList.remove("animate__fadeInRight", "animate__delay-2s")
      page1[6].classList.remove("animate__fadeIn", "animate__delay-3s")
      page1[7].classList.remove("animate__slideInLeft")
    }
    if(pageSwiper.activeIndex===2)
    {
      page2[0].classList.add("animate__fadeIn")
      page2[1].classList.add("animate-down")
      page2[2].classList.add("animate__slideInRight")
      page2[3].classList.add("animate__fadeInDown","animate__delay-1s")
      page2[4].classList.add("animate__fadeInLeft", "animate__delay-2s")
      page2[5].classList.add("animate__fadeInRight", "animate__delay-2s")
      page2[6].classList.add("animate__zoomIn", "animate__delay-3s")
      page2[7].classList.add("animate__fadeIn", "animate__delay-4s")
      page2[8].classList.add("animate-up")
      page2[9].classList.add("animate__slideInLeft")
    }
    else{
      page2[0].classList.remove("animate__fadeIn")
      page2[1].classList.remove("animate-down")
      page2[2].classList.remove("animate__slideInRight")
      page2[3].classList.remove("animate__fadeInDown","animate__delay-1s")
      page2[4].classList.remove("animate__fadeInLeft", "animate__delay-2s")
      page2[5].classList.remove("animate__fadeInRight", "animate__delay-2s")
      page2[6].classList.remove("animate__zoomIn", "animate__delay-3s")
      page2[7].classList.remove("animate__fadeIn", "animate__delay-4s")
      page2[8].classList.remove("animate-up")
      page2[9].classList.remove("animate__slideInLeft")
    }
    if(pageSwiper.activeIndex===3)
    {
      page3[0].classList.add("animate__fadeIn")
      page3[1].classList.add("animate-down")
      page3[2].classList.add("animate__slideInRight")
      page3[3].classList.add("animate__fadeInDown","animate__delay-1s")
      page3[4].classList.add("animate__fadeInLeft", "animate__delay-2s")
      page3[5].classList.add("animate__fadeInRight", "animate__delay-2s")
      page3[6].classList.add("animate__zoomIn", "animate__delay-3s")
      page3[7].classList.add("animate__fadeIn", "animate__delay-4s")
      page3[8].classList.add("animate-up")
      page3[9].classList.add("animate__slideInLeft")
    }
    else{
      page3[0].classList.remove("animate__fadeIn")
      page3[1].classList.remove("animate-down")
      page3[2].classList.remove("animate__slideInRight")
      page3[3].classList.remove("animate__fadeInDown","animate__delay-1s")
      page3[4].classList.remove("animate__fadeInLeft", "animate__delay-2s")
      page3[5].classList.remove("animate__fadeInRight", "animate__delay-2s")
      page3[6].classList.remove("animate__zoomIn", "animate__delay-3s")
      page3[7].classList.remove("animate__fadeIn", "animate__delay-4s")
      page3[8].classList.remove("animate-up")
      page3[9].classList.remove("animate__slideInLeft")
    }
    if(pageSwiper.activeIndex===4)
    {
      loveStorySwiper.slideTo(0)
      page11[0].classList.add("animate__fadeIn")
      page11[1].classList.add("animate-down")
      page11[2].classList.add("animate__slideInRight")
      page11[3].classList.add("animate__fadeInUp", "animate__delay-1s")
      page11[4].classList.add("animate-up")
      page11[5].classList.add("animate__slideInLeft")
    }
    else{
      page11[0].classList.remove("animate__fadeIn")
      page11[1].classList.remove("animate-down")
      page11[2].classList.remove("animate__slideInRight")
      page11[3].classList.remove("animate__fadeInUp", "animate__delay-1s")
      page11[4].classList.remove("animate-up")
      page11[5].classList.remove("animate__slideInLeft")
    }
    if(pageSwiper.activeIndex===5)
    {
      page4[0].classList.add("animate__fadeIn")
      page4[1].classList.add("animate-down")
      page4[2].classList.add("animate__slideInRight")
      page4[3].classList.add("animate__zoomIn","animate__delay-1s")
      page4[4].classList.add("animate__fadeIn","animate__delay-2s")
      page4[5].classList.add("animate__fadeInLeft", "animate__delay-3s")
      page4[6].classList.add("animate__fadeInRight", "animate__delay-3s")
      page4[7].classList.add("animate__fadeInUp", "animate__delay-4s")
      page4[8].classList.add("animate-up")
      page4[9].classList.add("animate__slideInLeft","animate__delay-1s")
    }
    else{
      page4[0].classList.remove("animate__fadeIn")
      page4[1].classList.remove("animate-down")
      page4[2].classList.remove("animate__slideInRight")
      page4[3].classList.remove("animate__zoomIn","animate__delay-1s")
      page4[4].classList.remove("animate__fadeIn","animate__delay-2s")
      page4[5].classList.remove("animate__fadeInLeft", "animate__delay-3s")
      page4[6].classList.remove("animate__fadeInRight", "animate__delay-3s")
      page4[7].classList.remove("animate__fadeInUp", "animate__delay-4s")
      page4[8].classList.remove("animate-up")
      page4[9].classList.remove("animate__slideInLeft","animate__delay-1s")
    }
    if(pageSwiper.activeIndex===6)
    {
      page5[0].classList.add("animate__fadeIn")
      page5[1].classList.add("animate-down")
      page5[2].classList.add("animate__slideInRight")
      page5[3].classList.add("animate__zoomIn","animate__delay-1s")
      page5[4].classList.add("animate__fadeIn","animate__delay-2s")
      page5[5].classList.add("animate__fadeInLeft", "animate__delay-3s")
      page5[6].classList.add("animate__fadeInRight", "animate__delay-3s")
      page5[7].classList.add("animate__fadeInUp", "animate__delay-4s")
      page5[8].classList.add("animate-up","animate__delay-1s")
      page5[9].classList.add("animate__slideInLeft","animate__delay-1s")
    }
    else{
      page5[0].classList.remove("animate__fadeIn")
      page5[1].classList.remove("animate-down")
      page5[2].classList.remove("animate__slideInRight")
      page5[3].classList.remove("animate__zoomIn","animate__delay-1s")
      page5[4].classList.remove("animate__fadeIn","animate__delay-2s")
      page5[5].classList.remove("animate__fadeInLeft", "animate__delay-3s")
      page5[6].classList.remove("animate__fadeInRight", "animate__delay-3s")
      page5[7].classList.remove("animate__fadeInUp", "animate__delay-4s")
      page5[8].classList.remove("animate-up","animate__delay-1s")
      page5[9].classList.remove("animate__slideInLeft","animate__delay-1s")
    }
    
    if(pageSwiper.activeIndex===7)
      {
        page6[0].classList.add("animate__fadeIn")
        page6[1].classList.add("animate-down")
        page6[2].classList.add("animate__slideInRight")
        page6[3].classList.add("animate__zoomIn","animate__delay-1s")
        page6[4].classList.add("animate__fadeIn","animate__delay-2s")
        page6[5].classList.add("animate__fadeInLeft", "animate__delay-3s")
        page6[6].classList.add("animate__fadeInRight", "animate__delay-3s")
        page6[7].classList.add("animate__fadeInUp", "animate__delay-4s")
        page6[8].classList.add("animate-up","animate__delay-1s")
        page6[9].classList.add("animate__slideInLeft","animate__delay-1s")
      }
      else{
        page6[0].classList.remove("animate__fadeIn")
        page6[1].classList.remove("animate-down")
        page6[2].classList.remove("animate__slideInRight")
        page6[3].classList.remove("animate__zoomIn","animate__delay-1s")
        page6[4].classList.remove("animate__fadeIn","animate__delay-2s")
        page6[5].classList.remove("animate__fadeInLeft", "animate__delay-3s")
        page6[6].classList.remove("animate__fadeInRight", "animate__delay-3s")
        page6[7].classList.remove("animate__fadeInUp", "animate__delay-4s")
        page6[8].classList.remove("animate-up","animate__delay-1s")
        page6[9].classList.remove("animate__slideInLeft","animate__delay-1s")
      }
    
    if(pageSwiper.activeIndex===8)
    {
      momentsSwiper.slideTo(0)
      page7[0].classList.add("animate__fadeIn")
      page7[1].classList.add("animate-down")
      page7[2].classList.add("animate__slideInRight")
      page7[3].classList.add("animate__fadeInDown","animate__delay-2s")
      page7[4].classList.add("animate__fadeInRight","animate__delay-3s")
      page7[5].classList.add("animate-up")
      page7[6].classList.add("animate__slideInLeft")
    }
    else{
      page7[0].classList.remove("animate__fadeIn")
      page7[1].classList.remove("animate-down")
      page7[2].classList.remove("animate__slideInRight")
      page7[3].classList.remove("animate__fadeInDown","animate__delay-2s")
      page7[4].classList.remove("animate__fadeInRight","animate__delay-3s")
      page7[5].classList.remove("animate-up")
      page7[6].classList.remove("animate__slideInLeft")
    }
    if(pageSwiper.activeIndex===9)
    {
      rsvpSwiper.slideTo(0)
      page8[0].classList.add("animate__fadeIn")
      page8[1].classList.add("animate-down")
      page8[2].classList.add("animate__slideInRight")
      page8[3].classList.add("animate__fadeInDown","animate__delay-2s")
      page8[4].classList.add("animate__fadeInRight","animate__delay-3s")
      page8[5].classList.add("animate-up")
      page8[6].classList.add("animate__slideInLeft")
    }
    else{
      page8[0].classList.remove("animate__fadeIn")
      page8[1].classList.remove("animate-down")
      page8[2].classList.remove("animate__slideInRight")
      page8[3].classList.remove("animate__fadeInDown","animate__delay-2s")
      page8[4].classList.remove("animate__fadeInRight","animate__delay-3s")
      page8[5].classList.remove("animate-up")
      page8[6].classList.remove("animate__slideInLeft")
    }
    
    if(pageSwiper.activeIndex===10)
      {
        page9[0].classList.add("animate__fadeIn")
        page9[1].classList.add("animate-down")
        page9[2].classList.add("animate__slideInRight")
        page9[3].classList.add("animate__fadeInDown","animate__delay-2s")
        page9[4].classList.add("animate__fadeIn", "animate__delay-3s")
        page9[5].classList.add("animate__fadeInLeft", "animate__delay-4s")
        page9[6].classList.add("animate__fadeInRight", "animate__delay-4s")
        page9[7].classList.add("animate-up")
        page9[8].classList.add("animate__slideInLeft")  
      }
      else{
        page9[0].classList.remove("animate__fadeIn")
        page9[1].classList.remove("animate-down")
        page9[2].classList.remove("animate__slideInRight")
        page9[3].classList.remove("animate__fadeInDown","animate__delay-2s")
        page9[4].classList.remove("animate__fadeIn", "animate__delay-3s")
        page9[5].classList.remove("animate__fadeInLeft", "animate__delay-4s")
        page9[6].classList.remove("animate__fadeInRight", "animate__delay-4s")
        page9[7].classList.remove("animate-up")
        page9[8].classList.remove("animate__slideInLeft")
      }
    
      if(pageSwiper.activeIndex===11)
      {
        page10[0].classList.add("animate__fadeIn")
        page10[1].classList.add("animate-down")
        page10[2].classList.add("animate__slideInRight")
        page10[3].classList.add("animate__fadeIn","animate__delay-2s")
        page10[4].classList.add("animate__fadeInDown", "animate__delay-3s")
        page10[5].classList.add("animate__zoomIn", "animate__delay-4s")
        page10[6].classList.add("animate-up")
        page10[7].classList.add("animate__slideInLeft")
      }
      else{
        page10[0].classList.remove("animate__fadeIn")
        page10[1].classList.remove("animate-down")
        page10[2].classList.remove("animate__slideInRight")
        page10[3].classList.remove("animate__fadeIn","animate__delay-2s")
        page10[4].classList.remove("animate__fadeInDown", "animate__delay-3s")
        page10[5].classList.remove("animate__zoomIn", "animate__delay-4s")
        page10[6].classList.remove("animate-up")
        page10[7].classList.remove("animate__slideInLeft")
      }   
      
  });

  const menuPage = (index) => {
    pageSwiper.slideTo(index)
  }



