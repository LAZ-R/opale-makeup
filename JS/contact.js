import  * as LAZR from './lazR/lazR.js';

const titleElement = document.getElementById('title');
titleElement.innerHTML = `Opale Makeup - Contact`;

LAZR.DOM.setViewportSize();

const main = document.getElementById('main');
main.classList.add('main--contact');

const fontColorFilter = `style="filter: ${LAZR.CSS.getRootColorFilterValue('--font-color-default')}"`;

const phoneTile = LAZR.DOM.createElement('div', 'contactTilePhone', 'contact-tile', `
    <div class="contact-tile__colorTile --palette-3">
        <img 
            src="./medias/images/GUI/phone.svg" 
            alt="Un combiné de téléphone fixe vu de profil, en lignes claires" 
            class="social-icon" ${fontColorFilter}
        />
    </div>
    <a href="tel:+33667709602" class="contact-info" style="font-size: 20px; ">06 67 70 96 02</a>
`);

const mailTile = LAZR.DOM.createElement('div', 'contactTileMail', 'contact-tile', `
    <div class="contact-tile__colorTile --palette-3">
        <img 
            src="./medias/images/GUI/mail.svg" 
            alt="Une enveloppe vue de face, en lignes claires" 
            class="social-icon" ${fontColorFilter}
        />
    </div>
    <a href="mailto:contact.opalemakeup@gmail.com" class="contact-info" style="font-size: 14px;">contact.opalemakeup@gmail.com</a>
`);

const instaTile = LAZR.DOM.createElement('div', 'contactTileInsta', 'contact-tile', `
    <div class="contact-tile__colorTile --palette-3">
        <img 
            src="./medias/images/GUI/instagram.svg" 
            alt="Le logo du réseau social Instagram, représentant un appareil photo simplifié, en lignes claires" 
            class="social-icon" ${fontColorFilter}
        />
    </div>
    <a href="https://www.instagram.com/opale_make_up/?hl=fr" class="contact-info" style="font-size: 20px;">@opale_make_up</a>
`);

const facebookTile = LAZR.DOM.createElement('div', 'contactTileFacebook', 'contact-tile', `
    <div class="contact-tile__colorTile --palette-3">
        <img 
            src="./medias/images/GUI/facebook.svg" 
            alt="Le logo du réseau social Facebook, un 'f' minuscule, dans un rond blanc" 
            class="social-icon" 
            ${fontColorFilter}
        />
    </div>
    <a href="https://www.facebook.com/profile.php?id=100090012348692" class="contact-info" style="font-size: 20px;">Opale MakeUp</a>
`);

main.appendChild(phoneTile);
main.appendChild(mailTile);
main.appendChild(instaTile);
main.appendChild(facebookTile);

const goToHome = () => {
    window.location = './index.html';
}
window.goToHome = goToHome;