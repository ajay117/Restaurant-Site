import { imgCollection } from '../modules/imgObject';
import './styles.css';

let imageContainer = document.querySelector('.image-container');
let leftArrow =  document.querySelector('.item1');
let rightArrow = document.querySelector('.item2');
let slideDivImage = document.createElement('img');
let currentIndex = 0;
let menuBar = document.querySelector('.menu-bar');
let menu = document.querySelector('.menu');
let closeBtn = document.querySelector('.close');


menuBar.addEventListener('click', () => {
    menu.classList.remove('hide');
});

closeBtn.addEventListener('click', () => {
    menu.classList.add('hide');
});



slideDivImage.src = imgCollection[0].url;
slideDivImage.alt = imgCollection[0].alt;
slideDivImage.classList.add('image-container_image');

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