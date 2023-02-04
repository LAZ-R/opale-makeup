import { PRESTATIONS } from './data/prestations.data.js';
import  * as LAZR from './lazR/lazR.js';

const main = document.getElementById('main');

PRESTATIONS.forEach(prestationsGroup => {
    const prestationsGroupTile = LAZR.DOM.createElement('div', prestationsGroup.category_name, 'prestations-group-tile', `
        <h2>${prestationsGroup.category_name}</h2>
    `);
    prestationsGroup.prestations.forEach(prestation => {
        const prestationTile = LAZR.DOM.createElement('div', prestation.name , 'prestation-tile', `
            <div class="prestation-tile__image" style="background-image: url('./medias/images/prestations/${prestation.picture}')"></div>
            <div class="prestation-tile__infos">
                <h3>${prestation.name}</h3>
                <h4>${prestation.version != null ? prestation.version : ''}</h4>
                <p class="prestation-description">${prestation.description != null ? prestation.description : ''}</p>
                <span class="prestation-duration">${prestation.duration != null ? prestation.duration + ' min' : ''}</span>
                <span class="prestation-price">${prestation.price != null ? prestation.price + ' €' : ''}</span>
                <span class="prestation-option">${prestation.option != null ? prestation.option : ''}</span>
            </div>`);
        prestationsGroupTile.appendChild(prestationTile);
    });
    main.appendChild(prestationsGroupTile);
});