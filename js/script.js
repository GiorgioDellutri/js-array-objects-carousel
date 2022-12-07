const images = [
   {
      image: 'img/01.webp',
      title: 'Marvel\'s Spiderman Miles Morale',
      text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
   },
   {
      image: 'img/02.webp',
      title: 'Ratchet & Clank: Rift Apart',
      text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
   },
   {
      image: 'img/03.webp',
      title: 'Fortnite',
      text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
   },
   {
      image: 'img/04.webp',
      title: 'Stray',
      text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
   },
   {
      image: 'img/05.webp',
      title: "Marvel's Avengers",
      text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
   }
];

const containerWrapper  = document.querySelector('div.carousel-image');
console.log(parent)
let activeIndex = 0;

images.forEach((element, index ) => {
   containerWrapper.innerHTML += `
      <div class="my_carousel-item">
         <img src=" ${element.image}" alt="title image">
      </div> `
});

document.getElementsByClassName('my_carousel-item') [activeIndex].classList.add('active');

// Aggiungo l'event listener al bottone previous
const previousButton = document.querySelector('div.previous');
previousButton.addEventListener('click', function(){
      document.querySelector('div.my_carousel-item.active').classList.remove('active');
      if (activeIndex <= 0){
         activeIndex = 4;
      } else{
         activeIndex--;
      }
      document.getElementsByClassName('my_carousel-item')[activeIndex].classList.add('active');
}) 
   
const nextButton = document.querySelector('div.next')
nextButton.addEventListener('click', function(){
   document.querySelector('div.my_carousel-item.active').classList.remove('active');
   if (activeIndex >= 4){
      activeIndex = 0;
   } else{
      activeIndex++;
   }
   document.getElementsByClassName('my_carousel-item')[activeIndex].classList.add('active');
})





// let imgIndex = [];
// // let indexCounter = 0;


// // for(let i = 0; i < images.length; i++){
// //    let  divImg = document.createElement('div');
// //    divImg.innerHTML = `<img src= "./${images[i].image}">`;
// //    divImg.classList.add('my_carousel-item');
// //    parent.appendChild(divImg); 
// //    imgIndex.push(divImg);
// // }

// // console.log(imgIndex)

