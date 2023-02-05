import { PRESTATIONS } from './data/prestations.data.js';
import  * as LAZR from './lazR/lazR.js';

const main = document.getElementById('main');
main.classList.add('main--prestations');

const handleColorTileClick = (tileID) => {
    const tile = document.getElementById(tileID);
    const tileColorTile = document.getElementById(tileID + '_colorTile');
    const tileCaretDown = document.getElementById(tileID + '_carretDown');
    if (tile.style.height == '250px' || tile.style.height == '') {
        tile.style.height = '500px';
        tileCaretDown.style.transform = 'rotateZ(180deg)';
        tileColorTile.style.borderRadius = '10px 0 0 0';
    } else {
        tile.style.height = '250px';
        tileCaretDown.style.transform = 'rotateZ(0deg)';
        tileColorTile.style.borderRadius = '10px 0 0 10px';
    }
}
window.handleColorTileClick = handleColorTileClick;

const showFullscreenPicture = (picture) => {
    const fullscreenDiv = LAZR.DOM.createElement('div', 'fullscreenDiv', 'fullscreen-blacked-div', '');
    fullscreenDiv.addEventListener('click', () => {
        main.removeChild(fullscreenDiv);
    });
    const fullscreenimage = LAZR.DOM.createImgElement('fullscreenImage', 'fullscreen-image', './medias/images/prestations/' + picture + '.webp', '');
    fullscreenDiv.appendChild(fullscreenimage);
    main.appendChild(fullscreenDiv);
}
window.showFullscreenPicture = showFullscreenPicture;

const getPictureGroup = (pictureGroup) => {
    let toReturn = '';
    pictureGroup.forEach(picture => {
        toReturn += '<img onclick="showFullscreenPicture(\'' + picture + '\')" class="prestation-picture" src="./medias/images/prestations/' + picture + '.webp" />';
    });
    return toReturn;
}

PRESTATIONS.forEach(prestationsGroup => {
    const prestationsGroupTile = LAZR.DOM.createElement('div', prestationsGroup.category_name, 'prestations-group-tile', `
        <h2>${prestationsGroup.category_name}</h2>
    `);
    prestationsGroup.prestations.forEach(prestation => {
        const prestationTile = LAZR.DOM.createElement('div', prestation.id , 'prestation-tile', `
        <div class="small-tile-part">
            <div id="${prestation.id}_colorTile" onclick="handleColorTileClick('${prestation.id}')" class="${
                prestationsGroup.category_name == 'Maquillages'
                ? 'prestation-tile__color --palette-3'
                : prestationsGroup.category_name == 'Mariage'
                    ? 'prestation-tile__color --palette-2'
                    : 'prestation-tile__color --palette-1'}">
                <img id="${prestation.id}_carretDown" src="./medias/images/GUI/caret-down.svg" class="color-tile__down-arrow" style="filter: ${LAZR.CSS.getRootColorFilterValue('--font-color-default')}" />
            </div>
            
            <div class="prestation-tile__infos">
                <h3>${prestation.name}</h3>
                <h4>${prestation.version != null ? prestation.version : ''}</h4>
                <p class="prestation-description">${prestation.description != null ? prestation.description : ''}</p>
                <div class="prestation-dur-price-div">
                    <span class="prestation-duration">${prestation.duration != null ? prestation.duration + 'min' : ''}</span>
                    <span class="prestation-price">${prestation.price != null ? prestation.price + '<span class="prestation-currency">€</span>' : ''}</span>
                </div>
                
                <span class="prestation-option">${prestation.option != null ? prestation.option : ''}</span>
            </div>
        </div>
        <div class="image-tile-part">
            ${getPictureGroup(prestation.pictures)}
        </div>`);
        prestationsGroupTile.appendChild(prestationTile);
    });
    main.appendChild(prestationsGroupTile);
});



