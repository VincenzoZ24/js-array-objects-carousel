const arrImages = [
	{
		image: 'img/01.webp',
		title: "Marvel's Spiderman Miles Morale",
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
		text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
	},
	{
		image: 'img/04.webp',
		title: 'Stray',
		text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
	},
	{
		image: 'img/05.webp',
		title: "Marvel's Avengers",
		text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
	},
];

const eleSliderViewer = document.querySelector('.slider-viewer');
const eleSliderThumbs = document.querySelector('.thumbs');
const eleBtnLeft = document.querySelector('.btn-left');
const eleBtnRight = document.querySelector('.btn-right');


// creare i tag immagine nell'html
for (let i = 0; i < arrImages.length; i++) {
	
   
	const eleImg = document.createElement('img');
	eleImg.src = `${arrImages[i].image}`;
	eleImg.classList.add('slider-img');
    eleSliderViewer.appendChild(eleImg)
    const title = document.createElement("h3");
    title.innerHTML = `${arrImages[i].title}`
    eleSliderViewer.append(title);
    title.classList.add("titolo")

	if (i === 0) {
		eleImg.classList.add('active');
        title.classList.add("visiona")
	}
	eleSliderViewer.append(eleImg);

	const eleThumb = document.createElement('img');
	eleThumb.src = `${arrImages[i].image}`;
	eleThumb.classList.add('thumb-img');
	if (i === 0) {
		eleThumb.classList.add('active');
	}
	eleSliderThumbs.append(eleThumb);
}


const listEleImg = document.querySelectorAll('.slider-img'); 
const listThumbs = document.querySelectorAll('.thumb-img');
const listTile = document.querySelectorAll(".titolo");

let activeIndex = 0;
document.body.style.backgroundImage = `url('${arrImages[activeIndex]}')`;
document.body.style.backgroundSize = 'cover';


eleBtnRight.addEventListener('click', function () {
	
	listEleImg[activeIndex].classList.remove('active');
	listThumbs[activeIndex].classList.remove('active');
    listTile[activeIndex].classList.remove("visiona")


	activeIndex++;
	if (activeIndex === listEleImg.length) {
		activeIndex = 0;
	}

	
    listTile[activeIndex].classList.add("visiona")
	listEleImg[activeIndex].classList.add('active');
	listThumbs[activeIndex].classList.add('active');
	document.body.style.backgroundImage = `url('${arrImages[activeIndex]}')`;
	document.body.style.backgroundSize = 'cover';
});

eleBtnLeft.addEventListener('click', function () {
	// togliere la classe active dall'elemento attivo corrente
	listEleImg[activeIndex].classList.remove('active');
	listThumbs[activeIndex].classList.remove('active');

	// decrementare l'active index con reset per slider infinito
	/*
	if (activeIndex === 0) {
		activeIndex = listEleImg.length - 1;
	} else {
		activeIndex--;
	}
	*/

	if (activeIndex === 0) {
		activeIndex = listEleImg.length;
	}
	activeIndex--;

	// aggiungere la classe active all'elemento successivo
	listEleImg[activeIndex].classList.add('active');
	listThumbs[activeIndex].classList.add('active');
	document.body.style.backgroundImage = `url('${arrImages[activeIndex]}')`;
	document.body.style.backgroundSize = 'cover';
});