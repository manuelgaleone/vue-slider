//Variabile slides
let { createApp } = Vue

  createApp({
    data() {
      return {
        imgAttiva: 0,
        slides:
        [{
            image: './img/01.webp',
            title: 'Marvel\'s Spiderman Miles Morale',
            text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.'
        },
        {
            image: './img/02.webp',
            title: 'Ratchet & Clank: Rift Apart',
            text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.'
        },
        {
            image: './img/03.webp',
            title: 'Fortnite',
            text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos."
        },
        {
            image: './img/04.webp',
            title: 'Stray',
            text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city'
        }, 
        {
            image: './img/05.webp',
            title: "Marvel's Avengers",
            text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.'
        }],
        active:".thumb.active"    
      
      }
    },
    methods: {
        precImg() {
          this.imgAttiva--

          if (this.imgAttiva < 0) {
            this.imgAttiva = this.slides.image.length - 1
          }

        },
        proxImg() {
          this.imgAttiva++

          if(this.imgAttiva > this.slides.length -1) {
            this.imgAttiva = 0;
        }

        },

        changeImage(i) {
          this.activeImage = i
          
        },
    
        cambiaImg(i) {
            //console.log(index);
            this.imgAttiva = i
          },
    
    },

      mounted() {
        setInterval(() => {
            this.proxImg();
        },1000)
      }

  }).mount('#app')