import  * as LAZR from './lazR/lazR.js';

const titleElement = document.getElementById('title');
titleElement.innerHTML = `Opale Makeup`;

LAZR.DOM.setViewportSize();

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

const goToHome = () => {
    window.location = './index.html';
}
window.goToHome = goToHome;

const prestationsColorDiv = document.getElementById('prestationsColorDiv');
const contactColorDiv = document.getElementById('contactColorDiv');

// TODO : seulement sur page accueil
prestationsColorDiv.innerHTML = `<img id="" src="./medias/images/GUI/plus.svg" class="colored-sub-div_plus-icon" style="filter: ${LAZR.CSS.getRootColorFilterValue('--font-color-default')}" />`
contactColorDiv.innerHTML = `<img id="" src="./medias/images/GUI/plus.svg" class="colored-sub-div_plus-icon" style="filter: ${LAZR.CSS.getRootColorFilterValue('--font-color-default')}" />`