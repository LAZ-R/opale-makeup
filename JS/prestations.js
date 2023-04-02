import { PRESTATIONS } from './data/prestations.data.js';
import  * as LAZR from './lazR/lazR.js';

const titleElement = document.getElementById('title');
titleElement.innerHTML = `Opale Makeup - Prestations`;

LAZR.DOM.setViewportSize();

const main = document.getElementById('main');
main.classList.add('main--prestations');

const handleColorTileClick = (tileID) => {
    const tile = document.getElementById(tileID);
    const tileColorTile = document.getElementById(tileID + '_colorTile');
    const tileCaretDown = document.getElementById(tileID + '_carretDown');
    if (tile.style.height == '250px' || tile.style.height == '') {
        // fermer les autres
        /*
        PRESTATIONS.forEach(prestationsGroup => {
            prestationsGroup.prestations.forEach(prestation => {
                if (prestation.id != tileID) {
                    const tempTile = document.getElementById(prestation.id);
                    if (tempTile.style.height == '500px') {
                        tempTile.style.height = '250px';
                        document.getElementById(prestation.id + '_carretDown').style.transform = 'rotateZ(0deg)';
                        document.getElementById(prestation.id + '_colorTile').style.borderRadius = '10px 0 0 10px';
                    }
                }
            })
        });
        */
        tile.style.height = '500px';
        tileCaretDown.style.transform = 'rotateZ(180deg)';
        tileColorTile.style.borderRadius = '10px 0 0 0';
    } else {
        tile.style.height = '250px';
        tileCaretDown.style.transform = 'rotateZ(0deg)';
        tileColorTile.style.borderRadius = '10px 0 0 10px';
    }
    //setTimeout(() => {
        window.location = `#${tileID}`
    //}, 10);
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
        toReturn += '<div onclick="showFullscreenPicture(\'' + picture + '\')" class="prestation-picture" style="background-image: url(\'./medias/images/prestations/' + picture + '.webp\');"></div>';
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
            <div href="#${prestation.id}" id="${prestation.id}_colorTile" onclick="handleColorTileClick('${prestation.id}')" class="${
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

const goToHome = () => {
    window.location = './index.html';
}
window.goToHome = goToHome;
