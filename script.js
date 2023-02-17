'use strict';

document.querySelector('.show-modal')

document.querySelector('.hidden')

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');
const openModalButtons = document.querySelectorAll('.show-modal')

const openModalClick = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModalClick =  function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for (let i = 0; i < openModalButtons.length; i++){
    openModalButtons[i].addEventListener('click', openModalClick);
}

closeModal.addEventListener('click', closeModalClick);
overlay.addEventListener('click', closeModalClick);

//keyboard event: ESC key closes modal
document.addEventListener('keydown', function(event){
    if (event.key === 'Escape' && !modal.classList.contains('hidden')){
        closeModalClick();
    } else {
        alert(`You\'ve pressed the ${event.key}, please press the ESC button, click the X, or outside of the modal to close it.`)
    }
})