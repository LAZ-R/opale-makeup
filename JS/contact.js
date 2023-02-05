import  * as LAZR from './lazR/lazR.js';

const main = document.getElementById('main');
main.classList.add('main--contact');

const phoneTile = LAZR.DOM.createElement('div', 'contactTilePhone', 'contact-tile', `
    <div class="contact-tile__colorTile --palette-3">
        <img class="social-icon" src="./medias/images/GUI/phone.svg" style="filter: ${LAZR.CSS.getRootColorFilterValue('--font-color-default')}" />
    </div>
    <a href="tel:+33667709602" class="contact-info" style="font-size: 30px; ">06 67 70 96 02</a>
`);

const socialTile = LAZR.DOM.createElement('div', 'contactTileSocial', 'contact-tile', `
    <div class="contact-tile__colorTile --palette-3">
        <img class="social-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" />
    </div>
    <a href="https://www.instagram.com/opalemakeup/?hl=fr" class="contact-info" style="font-size: 25px;">@opalemakeup</a>
`);

const mailTile = LAZR.DOM.createElement('div', 'contactTileMail', 'contact-tile', `
    <div class="contact-tile__colorTile --palette-3">
        <img class="social-icon" src="./medias/images/GUI/mail.svg" style="filter: ${LAZR.CSS.getRootColorFilterValue('--font-color-default')}" />
    </div>
    <a href="mailto:contact.opalemakeup@gmail.com" class="contact-info" style="font-size: 14px;">contact.opalemakeup@gmail.com</a>
`);

main.appendChild(phoneTile);
main.appendChild(socialTile);
main.appendChild(mailTile);