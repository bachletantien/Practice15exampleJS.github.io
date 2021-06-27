
//Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewports.



// ***************set date ********************
const date = document.getElementById('date');

date.innerHTML = new Date().getFullYear();
// ************ close links *********

const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function(){
    // linksContainer.classList.toggle("show-links");
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linkHeight = links.getBoundingClientRect().height;

    if(containerHeight === 0){
        linksContainer.style.height = `${linkHeight}px`
    }else{
        linksContainer.style.height = 0;
    }
});




// ************ fixed navbar *********


