import  * as LAZR from './lazR/lazR.js';

const titleElement = document.getElementById('title');
titleElement.innerHTML = `Opale Makeup`;

LAZR.DOM.setViewportSize();

const prestationsColorDiv = document.getElementById('prestationsColorDiv');
prestationsColorDiv.innerHTML = `
    <img 
        id="" 
        src="./medias/images/GUI/plus.svg" 
        alt="un symbole + dans un rond" 
        class="colored-sub-div_plus-icon" 
        style="filter: ${LAZR.CSS.getRootColorFilterValue('--font-color-default')}" 
    />`

const contactColorDiv = document.getElementById('contactColorDiv');
contactColorDiv.innerHTML = `
    <img 
        id="" 
        src="./medias/images/GUI/plus.svg" 
        alt="un symbole + dans un rond" 
        class="colored-sub-div_plus-icon" 
        style="filter: ${LAZR.CSS.getRootColorFilterValue('--font-color-default')}" 
    />`

const openPageFromHome = (pageName) => {
    const colorDiv = document.getElementById(pageName + 'ColorDiv');
    const textDiv = document.getElementById(pageName + 'TextDiv');

    textDiv.classList.add('animate--text-div');
    colorDiv.classList.add('animate--colored-div');

    setTimeout(() => {
        window.location = './' + pageName + '.html';
    }, 500); // delai animation css

}
window.openPageFromHome = openPageFromHome;