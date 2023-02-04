import { PRESTATIONS } from './data/prestations.data.js';
import  * as LAZR from './lazR/lazR.js';

const main = document.getElementById('main');
main.classList.add('main--prestations');

PRESTATIONS.forEach(prestationsGroup => {
    const prestationsGroupTile = LAZR.DOM.createElement('div', prestationsGroup.category_name, 'prestations-group-tile', `
        <h2>${prestationsGroup.category_name}</h2>
    `);
    prestationsGroup.prestations.forEach(prestation => {
        const prestationTile = LAZR.DOM.createElement('div', prestation.name , 'prestation-tile', `
         <div class="${
            prestationsGroup.category_name == 'Maquillages'
            ? 'prestation-tile__color --palette-3'
            : prestationsGroup.category_name == 'Mariage'
                ? 'prestation-tile__color --palette-2'
                : 'prestation-tile__color --palette-1'}"></div>
         <!-- <div class="prestation-tile__image" style="${prestationsGroup.category_name == 'Cours de maquillage' ? 'background-image: url(\'' + prestation.picture + '\')': 'background-image: url(\'./medias/images/prestations/' + prestation.picture + '.webp\')'}"></div> -->
            <div class="prestation-tile__infos">
                <h3>${prestation.name}</h3>
                <h4>${prestation.version != null ? prestation.version : ''}</h4>
                <p class="prestation-description">${prestation.description != null ? prestation.description : ''}</p>
                <span class="prestation-duration">${prestation.duration != null ? prestation.duration + ' min' : ''}</span>
                <span class="prestation-price">${prestation.price != null ? prestation.price + '<span class="prestation-currency">€</span>' : ''}</span>
                <span class="prestation-option">${prestation.option != null ? prestation.option : ''}</span>
            </div>`);
        prestationsGroupTile.appendChild(prestationTile);
    });
    main.appendChild(prestationsGroupTile);
});