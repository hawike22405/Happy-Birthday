const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", async () => {

    if (music.paused) {

        try {

            await music.play();

            musicBtn.innerHTML = "⏸ Pause Our Song ❤️";

        } catch (err) {

            console.log(err);

        }

    } else {

        music.pause();

        musicBtn.innerHTML = "▶ Play Our Song ❤️";

    }

});

const beginBtn = document.getElementById("beginBtn");

beginBtn.onclick = function () {


    document.querySelector(".letter-section").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

};

// Floating Hearts
function createHeart() {
    const heart = document.createElement("div");
    heart.className = "floating-heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (3 + Math.random() * 5) + "s";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 7000);
}

setInterval(createHeart, 500);

const memories = [

{
image:"assets/timeline/01.jpeg",
title:"Our First Picture ❤️",
date:"23 June 2024",
description:"The very first picture of us. We didn't know then that this simple moment would become the beginning of the most beautiful chapter of my life."
},

{
image:"assets/timeline/02.jpeg",
title:"First Picture After Relationship",
date:"03 July 2024",
description:"Our first picture after becoming a couple. Seeing us together like this still makes my heart smile every time."
},

{
image:"assets/timeline/03.jpeg",
title:"Our First Date",
date:"03 July 2024",
description:"Our first date—filled with excitement, shy smiles, and the beginning of countless unforgettable memories together."
},

{
image:"assets/timeline/04.jpeg",
title:"Our Hand Picture",
date:"18 July 2024",
description:"A simple picture of our hands, but it reminds me that no matter where life takes us, I always want to hold your hand forever."
},

{
image:"assets/timeline/05.jpeg",
title:"First Durga Puja Together",
date:"11 October 2024",
description:"Our first Durga Puja together. The festival became even more special because I had you beside me."
},

{
image:"assets/timeline/06.jpeg",
title:"Our First Kiss",
date:"10 December 2024",
description:"Our first kiss—a tiny moment in time that became one of the sweetest memories I'll always treasure."
},

{
image:"assets/timeline/07.jpeg",
title:"Bishnupur Mela",
date:"25 December 2024",
description:"Our first Bishnupur Mela together. The lights, laughter and happiness were beautiful, but you were the best part."
},

{
image:"assets/timeline/08.jpeg",
title:"6 Months Together",
date:"28 December 2024",
description:"Six wonderful months together, filled with love, trust and countless reasons to smile every single day."
},

{
image:"assets/timeline/09.jpeg",
title:"First Picture of 2025",
date:"05 January 2025",
description:"A new year began, but my favorite part remained the same—you."
},

{
image:"assets/timeline/10.jpeg",
title:"Shadow Picture",
date:"06 January 2025",
description:"Even our shadows looked perfect together, proving that love shines in every little moment."
},

{
image:"assets/timeline/11.jpeg",
title:"First Saraswati Puja",
date:"03 February 2025",
description:"Our first Saraswati Puja together—a day filled with blessings, happiness and unforgettable memories."
},

{
image:"assets/timeline/12.jpeg",
title:"First Holi",
date:"14 March 2025",
description:"Our first Holi together. Every color that touched us only made our love more vibrant and beautiful."
},

{
image:"assets/timeline/13.jpeg",
title:"Lalband Memories",
date:"23 March 2025",
description:"One of our happiest moments at Lalband where laughter echoed louder than words."
},

{
image:"assets/timeline/14.jpeg",
title:"Happy Moments",
date:"22 June 2025",
description:"Sometimes happiness doesn't need a reason. Being with you is enough."
},

{
image:"assets/timeline/15.jpeg",
title:"Our First Anniversary",
date:"28 June 2025",
description:"One year together. Thank you for making every single day worth remembering."
},

{
image:"assets/timeline/16.jpeg",
title:"Sweet Moment",
date:"23 July 2025",
description:"Just another sweet moment with you—but moments like these are the ones I treasure the most."
},

{
image:"assets/timeline/17.jpeg",
title:"First Train Journey",
date:"15 August 2025",
description:"Our first train journey together. Every destination felt wonderful because I was traveling with you."
},

{
image:"assets/timeline/18.jpeg",
title:"Durga Puja Saptami",
date:"29 September 2025",
description:"A day filled with festive joy, laughter and beautiful memories with you."
},

{
image:"assets/timeline/19.jpeg",
title:"Durga Puja Ashtami",
date:"30 September 2025",
description:"Another festival, another memory, another reason to fall in love with you again."
},

{
image:"assets/timeline/20.jpeg",
title:"Diwali Together",
date:"22 October 2025",
description:"Among thousands of lights, your smile was the brightest one in my world."
},

{
image:"assets/timeline/21.jpeg",
title:"Bishnupur Mela Again",
date:"25 December 2025",
description:"Back to Bishnupur Mela again. Every visit with you creates a brand-new memory."
},

{
image:"assets/timeline/22.jpeg",
title:"Second Saraswati Puja",
date:"23 January 2026",
description:"Time passed so quickly, but my love for you only grew stronger."
},

{
image:"assets/timeline/23.jpeg",
title:"First Picture at Kolkata",
date:"05 April 2026",
description:"Exploring a new city was exciting, but sharing it with you made it unforgettable."
},

{
image:"assets/timeline/24.jpeg",
title:"Second Anniversary",
date:"28 June 2026",
description:"Two beautiful years together. Through every smile, every challenge and every memory, you've been my favorite person."
},

{
image:"assets/timeline/25.jpeg",
title:"Our Last Meet",
date:"25 July 2026",
description:"Our last meeting before today. We may not always be together in person, but every memory with you lives forever in my heart."
}

];

let currentPhoto = 0;

const timelineImage = document.getElementById("timelineImage");
const timelineTitle = document.getElementById("timelineTitle");
const timelineDate = document.getElementById("timelineDate");
const timelineDescription = document.getElementById("timelineDescription");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function showMemory(index){

    timelineImage.classList.add("fade");

    setTimeout(() => {

        timelineImage.src = memories[index].image;
        timelineTitle.innerText = memories[index].title;
        timelineDate.innerText = memories[index].date;
        timelineDescription.innerText = memories[index].description;

        timelineImage.classList.remove("fade");

    }, 300);

}

showMemory(currentPhoto);

nextBtn.addEventListener("click", () => {

    currentPhoto++;

    if (currentPhoto >= memories.length) {
        currentPhoto = 0;
    }

    showMemory(currentPhoto);

});

prevBtn.addEventListener("click", () => {

    currentPhoto--;

    if (currentPhoto < 0) {
        currentPhoto = memories.length - 1;
    }

    showMemory(currentPhoto);

});

// Auto slideshow

setInterval(() => {

    currentPhoto++;

    if (currentPhoto >= memories.length) {
        currentPhoto = 0;
    }

    showMemory(currentPhoto);

}, 5000);

const confettiBtn = document.getElementById("confettiBtn");

confettiBtn.addEventListener("click", () => {

    for(let i=0;i<150;i++){

        const confetti = document.createElement("div");

        confetti.innerHTML = ["🎉","❤️","💖","✨","🎊"][Math.floor(Math.random()*5)];

        confetti.style.position="fixed";
        confetti.style.left=Math.random()*100+"vw";
        confetti.style.top="-50px";
        confetti.style.fontSize=(20+Math.random()*25)+"px";
        confetti.style.zIndex="9999";
        confetti.style.transition="4s linear";

        document.body.appendChild(confetti);

        setTimeout(()=>{

            confetti.style.top="110vh";
            confetti.style.transform=`rotate(${Math.random()*720}deg)`;

        },100);

        setTimeout(()=>{

            confetti.remove();

        },4500);

    }

    document.getElementById("lovePopup").classList.add("show");
});

/* ========================= */
/* Scroll Animation */
/* ========================= */

const hiddenSections = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

hiddenSections.forEach(section=>{

    observer.observe(section);

});

document.addEventListener("click", function firstClick() {

    music.play().catch(() => {});

    document.removeEventListener("click", firstClick);

});

const closePopup = document.getElementById("closePopup");

closePopup.addEventListener("click", () => {

    document.getElementById("lovePopup").classList.remove("show");

});