//select modal-btn . modal-overlay , close-btnW

//listen for click event on modal-btn and close-btn

//when user clicks modal-btn add .OPEN-MODAL to modal-overlay


const modalBtn = document.querySelector('.modal-btn');
const modal = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');

modalBtn.addEventListener('click' , function(){
    modal.classList.add("open-modal");
});

closeBtn.addEventListener('click' , function(){
    modal.classList.remove("open-modal");
});
