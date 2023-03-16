import  * as LAZR from './lazR/lazR.js';

const main = document.getElementById('main');
main.classList.add('main--contact');

const phoneTile = LAZR.DOM.createElement('div', 'contactTilePhone', 'contact-tile', `
    <div class="contact-tile__colorTile --palette-3">
        <img class="social-icon" src="./medias/images/GUI/phone.svg" style="filter: ${LAZR.CSS.getRootColorFilterValue('--font-color-default')}" />
    </div>
    <a href="tel:+33667709602" class="contact-info" style="font-size: 20px; ">06 67 70 96 02</a>
`);

const mailTile = LAZR.DOM.createElement('div', 'contactTileMail', 'contact-tile', `
    <div class="contact-tile__colorTile --palette-3">
        <img class="social-icon" src="./medias/images/GUI/mail.svg" style="filter: ${LAZR.CSS.getRootColorFilterValue('--font-color-default')}" />
    </div>
    <a href="mailto:contact.opalemakeup@gmail.com" class="contact-info" style="font-size: 14px;">contact.opalemakeup@gmail.com</a>
`);

const instaTile = LAZR.DOM.createElement('div', 'contactTileInsta', 'contact-tile', `
    <div class="contact-tile__colorTile --palette-3">
        <img class="social-icon" src="./medias/images/GUI/instagram.svg" style="filter: ${LAZR.CSS.getRootColorFilterValue('--font-color-default')}" />
    </div>
    <a href="https://www.instagram.com/opale_make_up/?hl=fr" class="contact-info" style="font-size: 20px;">@opale_make_up</a>
`);

const facebookTile = LAZR.DOM.createElement('div', 'contactTileFacebook', 'contact-tile', `
    <div class="contact-tile__colorTile --palette-3">
        <img class="social-icon" src="./medias/images/GUI/facebook.svg" style="filter: ${LAZR.CSS.getRootColorFilterValue('--font-color-default')}" />
    </div>
    <a href="https://www.facebook.com/profile.php?id=100090012348692" class="contact-info" style="font-size: 20px;">Opale MakeUp</a>
`);



main.appendChild(phoneTile);
main.appendChild(mailTile);
main.appendChild(instaTile);
main.appendChild(facebookTile);