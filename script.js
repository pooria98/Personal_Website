// HOME //
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
const skills = document.querySelectorAll('.skill');
const preloader = document.querySelector('.preloader');
const scrollBtn = document.querySelector('.scroll-btn');

const hueList = [15, 35, 200, 220, 240, 260, 280, 300, 320, 340];
let randomHue = Math.floor(Math.random() * hueList.length);
document.documentElement.style.setProperty('--nav-links-hover', `hsl(${hueList[randomHue]}, 90%, 75%)`);
document.documentElement.style.setProperty('--nav-links-active', `hsl(${hueList[randomHue]}, 85%, 55%)`);

window.addEventListener('load', function () {
    preloader.classList.add('hidepreloader');
});

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle('open');
    navLinks.classList.toggle('open');
});

skills.forEach(item => {
    const plusBtn = item.querySelector('.plus');
    const minusBtn = item.querySelector('.minus');
    item.addEventListener('click', function () {
        plusBtn.classList.toggle('d-none');
        minusBtn.classList.toggle('d-none');
    });
});

window.addEventListener('scroll', function () {
    if (window.scrollY > 500) {
        scrollBtn.classList.add('scroll-btn-visible');
    } else {
        scrollBtn.classList.remove('scroll-btn-visible');
    }
});

scrollBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, left: 0 });
});

// HOME //

// ART //

//image list
imageList = [
    {
        id: 0,
        thumbSource: "files/artwork/cg/thumbnails/LOGO_thumb.jpg",
        imgClass: "obj-pos-center",
        fullSource: "files/artwork/cg/LOGO.png",
        infoHeading: "Logo",
        infoDescription: "My first logo for my website and socials.",
        softwareUsed: "<li>Blender 3</li>",
        isVideo: false
    },
    {
        id: 0,
        thumbSource: "files/artwork/cg/thumbnails/W3ROC_thumb.jpg",
        imgClass: "obj-pos-center",
        fullSource: "files/artwork/cg/W3ROC.mp4",
        infoHeading: "Warcraft 3 Reign of Chaos Main Menu",
        infoDescription: "An attempt to recreate the main menu of warcraft 3 reign of chaos. nature assets are from quixel. main assets are hand crafted in blender and textured in substance painter. final render in UE5.",
        softwareUsed: "<li>Blender 3</li><li>Substance Painter</li><li>Unreal Engine 5</li><li>Quixel Megascans</li>",
        isVideo: true
    },
    {
        id: 0,
        thumbSource: "files/artwork/cg/thumbnails/Chess_2_thumb.jpg",
        imgClass: "obj-pos-center",
        fullSource: "files/artwork/cg/Chess_2.png",
        infoHeading: "Chess Set 2",
        infoDescription: "The chess set I created to practice modeling.",
        softwareUsed: "<li>Blender 3</li>",
        isVideo: false
    },
    {
        id: 0,
        thumbSource: "files/artwork/cg/thumbnails/Chess_1_thumb.jpg",
        imgClass: "obj-pos-center",
        fullSource: "files/artwork/cg/Chess_1.png",
        infoHeading: "Chess Set 1",
        infoDescription: "The chess set I created to practice modeling.",
        softwareUsed: "<li>Blender 3</li>",
        isVideo: false
    },
    {
        id: 0,
        thumbSource: "files/artwork/cg/thumbnails/Shomal_house (4)_thumb.jpg",
        imgClass: "obj-pos-center",
        fullSource: "files/artwork/cg/Shomal_house (4).png",
        infoHeading: "Villa Redesign",
        infoDescription: "Indoor architecture redesign of a real villa. I did this to pre-visualize the changes to the house.",
        softwareUsed: "<li>Blender 3</li>",
        isVideo: false
    },
    {
        id: 0,
        thumbSource: "files/artwork/cg/thumbnails/Shomal_house (3)_thumb.jpg",
        imgClass: "obj-pos-center",
        fullSource: "files/artwork/cg/Shomal_house (3).png",
        infoHeading: "Villa Redesign",
        infoDescription: "Indoor architecture redesign of a real villa. I did this to pre-visualize the changes to the house.",
        softwareUsed: "<li>Blender 3</li>",
        isVideo: false
    },
    {
        id: 0,
        thumbSource: "files/artwork/cg/thumbnails/Shomal_house (2)_thumb.jpg",
        imgClass: "obj-pos-center",
        fullSource: "files/artwork/cg/Shomal_house (2).png",
        infoHeading: "Villa Redesign",
        infoDescription: "Indoor architecture redesign of a real villa. I did this to pre-visualize the changes to the house.",
        softwareUsed: "<li>Blender 3</li>",
        isVideo: false
    },
    {
        id: 0,
        thumbSource: "files/artwork/cg/thumbnails/Shomal_house (1)_thumb.jpg",
        imgClass: "obj-pos-center",
        fullSource: "files/artwork/cg/Shomal_house (1).png",
        infoHeading: "Villa Redesign",
        infoDescription: "Indoor architecture redesign of a real villa. I did this to pre-visualize the changes to the house.",
        softwareUsed: "<li>Blender 3</li>",
        isVideo: false
    },
    {
        id: 0,
        thumbSource: "files/artwork/cg/thumbnails/DarkSouls2021Fire_thumb.jpg",
        imgClass: "obj-pos-left",
        fullSource: "files/artwork/cg/DarkSouls2021Fire.png",
        infoHeading: "Dark Souls Bonfire - Flame (2021 version)",
        infoDescription: "I tried recreating my old dark souls bonfire scene with a different location and mood. Flame lit scenario",
        softwareUsed: "<li>Blender 2.9</li><li>Quixel Megascans<li>",
        isVideo: false
    },
    {
        id: 0,
        thumbSource: "files/artwork/cg/thumbnails/DarkSouls2021_thumb.jpg",
        imgClass: "obj-pos-left",
        fullSource: "files/artwork/cg/DarkSouls2021.jpg",
        infoHeading: "Dark Souls Bonfire (2021 version)",
        infoDescription: "I tried recreating my old dark souls bonfire scene with a different location and mood. Moon lit scenario",
        softwareUsed: "<li>Blender 2.9</li><li>Quixel Megascans<li>",
        isVideo: false
    },
    {
        id: 0,
        thumbSource: "files/artwork/cg/thumbnails/Metro_4_thumb.jpg",
        imgClass: "obj-pos-center",
        fullSource: "files/artwork/cg/Metro_4.png",
        infoHeading: "Tehran Metro 4",
        infoDescription: "Tehran subway station recreation in 3D. everything is made from scratch.",
        softwareUsed: "<li>Blender 2.9</li><li>Substance Painter</li>",
        isVideo: false
    },
    {
        id: 0,
        thumbSource: "files/artwork/cg/thumbnails/Metro_3_thumb.jpg",
        imgClass: "obj-pos-center",
        fullSource: "files/artwork/cg/Metro_3.png",
        infoHeading: "Tehran Metro 3",
        infoDescription: "Tehran subway station recreation in 3D. everything is made from scratch.",
        softwareUsed: "<li>Blender 2.9</li><li>Substance Painter</li>",
        isVideo: false
    },
    {
        id: 0,
        thumbSource: "files/artwork/cg/thumbnails/Metro_2_thumb.jpg",
        imgClass: "obj-pos-center",
        fullSource: "files/artwork/cg/Metro_2.png",
        infoHeading: "Tehran Metro 2",
        infoDescription: "Tehran subway station recreation in 3D. everything is made from scratch.",
        softwareUsed: "<li>Blender 2.9</li><li>Substance Painter</li>",
        isVideo: false
    },
    {
        id: 0,
        thumbSource: "files/artwork/cg/thumbnails/Metro_1_thumb.jpg",
        imgClass: "obj-pos-center",
        fullSource: "files/artwork/cg/Metro_1.png",
        infoHeading: "Tehran Metro 1",
        infoDescription: "Tehran subway station recreation in 3D. everything is made from scratch.",
        softwareUsed: "<li>Blender 2.9</li><li>Substance Painter</li>",
        isVideo: false
    },
    {
        id: 0,
        thumbSource: "files/artwork/cg/thumbnails/RBITR.jpg",
        imgClass: "obj-pos-center",
        fullSource: "files/artwork/cg/RBITR.mp4",
        infoHeading: "RBITR Logo Animation",
        infoDescription: "A simple logo animation I did for a client.",
        softwareUsed: "<li>Blender 2.9</li><li>Photoshop</li><li>After Effects</li>",
        isVideo: true
    },
    {
        id: 0,
        thumbSource: "files/artwork/cg/thumbnails/Mushroom_thumb.jpg",
        imgClass: "obj-pos-right",
        fullSource: "files/artwork/cg/Mushroom.png",
        infoHeading: "Happy Mushroom",
        infoDescription: "A happy mushroom smiling at the sun. wait... mushrums don't like the sun.",
        softwareUsed: "<li>Blender 2.8</li><li>Photoshop</li>",
        isVideo: false
    },
    {
        id: 0,
        thumbSource: "files/artwork/cg/thumbnails/Rasht_shahrdari_rain.jpg",
        imgClass: "obj-pos-center",
        fullSource: "files/artwork/cg/Rasht_shahrdari_rain.mp4",
        infoHeading: "Shahrdari Rain",
        infoDescription: "I took this photo in Shahrdari square in Rasht. The rain had already stopped but I decided to add generated rain and make an animated image.",
        softwareUsed: "<li>After Effects</li>",
        isVideo: true
    },
    {
        id: 0,
        thumbSource: "files/artwork/cg/thumbnails/Topo_Landscape_Contrast_thumb.jpg",
        imgClass: "obj-pos-center",
        fullSource: "files/artwork/cg/Topo_Landscape_Contrast.png",
        infoHeading: "Topographic Landscape",
        infoDescription: "Playing with blender's modifiers to create some procedural stuff",
        softwareUsed: "<li>Blender 2.8</li>",
        isVideo: false
    },
    {
        id: 0,
        thumbSource: "files/artwork/cg/thumbnails/Saber02_thumb.jpg",
        imgClass: "obj-pos-top",
        fullSource: "files/artwork/cg/Saber02.png",
        infoHeading: "Light Saber 2",
        infoDescription: "Simple low poly hard surface modeling exercise.",
        softwareUsed: "<li>Blender 2.8</li><li>Substance Painter</li>",
        isVideo: false
    },
    {
        id: 0,
        thumbSource: "files/artwork/cg/thumbnails/Saber01_thumb.jpg",
        imgClass: "obj-pos-top",
        fullSource: "files/artwork/cg/Saber01.png",
        infoHeading: "Light Saber 1",
        infoDescription: "Simple low poly hard surface modeling exercise.",
        softwareUsed: "<li>Blender 2.8</li><li>Substance Painter</li>",
        isVideo: false
    },
    {
        id: 0,
        thumbSource: "files/artwork/cg/thumbnails/Lego_thumb.jpg",
        imgClass: "obj-pos-center",
        fullSource: "files/artwork/cg/Lego.png",
        infoHeading: "Lego man",
        infoDescription: "Simple low poly hard surface modeling exercise.",
        softwareUsed: "<li>Blender 2.8</li>",
        isVideo: false
    },
    {
        id: 0,
        thumbSource: "files/artwork/cg/thumbnails/Mjolnir_2_thumb.jpg",
        imgClass: "obj-pos-center",
        fullSource: "files/artwork/cg/Mjolnir_2.png",
        infoHeading: "Mjolnir 2",
        infoDescription: "I did this project to improve my hard surface modeling skills. The special thing about this one is that it's the first project that involved advanced procedural and hand painted texturing. this was also my first substance painter project. this one has some extra ornaments and emissive sign.",
        softwareUsed: "<li>Blender 2.79</li><li>Substance Painter</li>",
        isVideo: false
    },
    {
        id: 0,
        thumbSource: "files/artwork/cg/thumbnails/Mjolnir_1_thumb.jpg",
        imgClass: "obj-pos-bottom",
        fullSource: "files/artwork/cg/Mjolnir_1.png",
        infoHeading: "Mjolnir 1",
        infoDescription: "I did this project to improve my hard surface modeling skills. The special thing about this one is that it's the first project that involved advanced procedural and hand painted texturing. this was also my first substance painter project.",
        softwareUsed: "<li>Blender 2.79</li><li>Substance Painter</li>",
        isVideo: false
    },
    {
        id: 0,
        thumbSource: "files/artwork/cg/thumbnails/DarkSouls2017_thumb.jpg",
        imgClass: "obj-pos-left",
        fullSource: "files/artwork/cg/DarkSouls2017.jpg",
        infoHeading: "Dark Souls Bonfire (2017 version)",
        infoDescription: "This my very first major art in blender. I tried to make a view of a bonefire beside a tree where a knight is resting and emerald herald is standing near the cliff looking at the castle. It kinda didn't work out well. nature looks bad. lighting is bad. composition is not as good as what I expeced it to be. My shading looks bad because blender didn't have any bpr shading back then and I didn't know enough about shading nodes to make a realistic looking material. but I was glad that I finished something big and complex after making donuts.",
        softwareUsed: "<li>Blender 2.78</li>",
        isVideo: false
    },
    {
        id: 0,
        thumbSource: "files/artwork/cg/thumbnails/donuts_thumb.jpg",
        imgClass: "obj-pos-center",
        fullSource: "files/artwork/cg/donuts.jpg",
        infoHeading: "Donuts",
        infoDescription: "The famous blender guru donuts that are every true beginners' first render in blender.",
        softwareUsed: "<li>Blender 2.78</li>",
        isVideo: false
    }
];

// id numbering for image list
for (let i = 0; i < imageList.length; i++) {
    imageList[i].id = i;
}

// adding empty images to the photo-grid
const photoGrid = document.querySelector('.photo-grid');

for (let i = 0; i < imageList.length; i++) {
    photoGrid.innerHTML += '<div style="overflow:hidden;"><img class="thumbnail-img" loading="lazy"></div>';
}

// setting up thumbnail images
const thumbnails = document.querySelectorAll('.thumbnail-img');

for (let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].src = imageList[i].thumbSource;
    thumbnails[i].id = imageList[i].id;
    thumbnails[i].classList.add(imageList[i].imgClass);
}

// modal
const modal = document.querySelector('.modal-overlay');

const fullImg = document.querySelector('.full-img');
const fullVid = document.querySelector('.full-vid');
const infoTitle = document.querySelector('.info-title');
const infoDesc = document.querySelector('.info-desc');
const softwareContainer = document.querySelector('.software-container');

const closeBtn = document.querySelector('.close-btn');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentId = 0;

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener("click", function () {
        document.body.style.overflow = 'hidden';
        modal.style.display = 'flex';
        for (let i = 0; i < imageList.length; i++) {
            if (thumbnail.id == imageList[i].id) {
                currentId = imageList[i].id;
                if (imageList[i].isVideo) {
                    fullImg.style.display = 'none';
                    fullVid.style.display = 'block';
                    fullVid.src = imageList[i].fullSource;
                } else {
                    fullImg.style.display = 'block';
                    fullVid.style.display = 'none';
                    fullImg.src = imageList[i].fullSource;
                }
                infoTitle.innerHTML = imageList[i].infoHeading;
                infoDesc.innerHTML = imageList[i].infoDescription;
                softwareContainer.innerHTML = imageList[i].softwareUsed;
            }
        }
    });
});

// close modal
closeBtn.addEventListener('click', function () {
    document.body.style.overflow = 'auto';
    modal.style.display = 'none';
});

// next button
nextBtn.addEventListener('click', function () {
    if (currentId < imageList.length - 1) {
        currentId++;
        if (imageList[currentId].isVideo) {
            fullImg.style.display = 'none';
            fullVid.style.display = 'block';
            fullVid.src = imageList[currentId].fullSource;
        } else {
            fullImg.style.display = 'block';
            fullVid.style.display = 'none';
            fullImg.src = imageList[currentId].fullSource;
        }
        infoTitle.innerHTML = imageList[currentId].infoHeading;
        infoDesc.innerHTML = imageList[currentId].infoDescription;
        softwareContainer.innerHTML = imageList[currentId].softwareUsed;
    }
});

// previous button
prevBtn.addEventListener('click', function () {
    if (currentId > 0) {
        currentId--;
        if (imageList[currentId].isVideo) {
            fullImg.style.display = 'none';
            fullVid.style.display = 'block';
            fullVid.src = imageList[currentId].fullSource;
        } else {
            fullImg.style.display = 'block';
            fullVid.style.display = 'none';
            fullImg.src = imageList[currentId].fullSource;
        }
        infoTitle.innerHTML = imageList[currentId].infoHeading;
        infoDesc.innerHTML = imageList[currentId].infoDescription;
        softwareContainer.innerHTML = imageList[currentId].softwareUsed;
    }
});

// ART //
