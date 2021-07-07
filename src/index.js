'use strict';
// import {imgCollection} from './imgCollection';
let imageContainer = document.querySelector('.image-container');
let leftArrow =  document.querySelector('.item1');
let rightArrow = document.querySelector('.item2');
let slideDivImage = document.createElement('img');
let currentIndex = 0;
let menuBar = document.querySelector('.menu-bar');
let menu = document.querySelector('.menu');
let closeBtn = document.querySelector('.close');

let imgCollection = [
    {
        url: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Dhido_Nepali_food_in_Pokhara.jpg',
        alt: 'Nepali Dhido'
    },
    {
        url: 'https://cdn.pixabay.com/photo/2019/11/04/08/14/food-4600495_1280.jpg',
        alt: 'Chatpat Spicy'
    },
    {
        url: 'https://cdn.pixabay.com/photo/2018/06/18/16/19/food-3482767_1280.jpg',
        alt: 'Nepali Khana Set'
    },
    {
        url: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Nepali_Momo.jpg',
        alt: 'Nepali MoMo (Meat Dumplings)'
    },
    {
        url: 'https://thumbs.dreamstime.com/b/varieties-nepali-food-served-together-plate-sweet-yogurt-teej-ko-dar-special-platter-nepalese-cuisine-rice-pulao-209673986.jpg',
        alt: 'Nepali Khana'
    },
    {
        url: 'https://thumbs.dreamstime.com/b/selroti-famous-nepali-style-sweet-bread-food-made-rice-flour-sugar-ghee-popular-snacks-sel-roti-cusine-209579883.jpg',
        alt: 'Nepali Sel Roti'
    },
]


menuBar.addEventListener('click', () => {
    menu.classList.remove('hide');
});

closeBtn.addEventListener('click', () => {
    menu.classList.add('hide');
});



slideDivImage.src = imgCollection[0].url;
slideDivImage.alt = imgCollection[0].alt;
slideDivImage.classList.add('image-container_image');

imageContainer.appendChild(slideDivImage);

rightArrow.addEventListener('click', () => {
    if(currentIndex < imgCollection.length - 1) {
        currentIndex++;
        slideDivImage.src = imgCollection[currentIndex].url;
    }  
});

leftArrow.addEventListener('click', () => {
    if(currentIndex > 0) {
        currentIndex--;
        slideDivImage.src = imgCollection[currentIndex].url;
    }
})