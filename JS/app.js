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