import { setHTMLTitle } from "./utils/utils.js";

/* ############################################################################
--------------------------------- CONSTANTES ---------------------------------
############################################################################ */
let maquillagesClosed = 4;
let maquillagesOpened = 0;

let mariagesClosed = 8; 
let mariagesOpened = 0;

let mainsClosed = 11;
let mainsOpened = 0;

let epilationClosed = 6;
let epilationOpened = 0;

let enfantsClosed = 2;
let enfantsOpened = 0;

let coursClosed = 6;
let coursOpened = 0;

// ----------------------------------------------------------------------------

const PRESTATIONS_PICTURES = [
  // Maquillages ------------------------------------------

  //  0 - jourNaturel
  [ 'jour', 'jour-2', 'jour-3', 'jour-4' ],
  
  //  1 - jourSophistique
  [ 'jour-sophistique', 'jour-sophistique-2', 'jour-sophistique-3', 'jour-sophistique-4' ],
  
  //  2 - soiree
  [ 'soiree-2', 'soiree', 'soiree-3', 'soiree-4', 'soiree-5', 'soiree-6' ],

  //  3 - evenementiel
  ['evenementiel', 'evenementiel-2', 'evenementiel-3', 'evenementiel-5', 'evenementiel-6', 'evenementiel-7', 'evenementiel-8', 'evenementiel-9'],

  // Mariages ---------------------------------------------

  //  4 - marieeNaturel
  ['mariee-naturel', 'mariee-naturel-2', 'mariee-naturel-3', 'mariee-naturel-4'],
  
  //  5 - marieeSophistique
  ['mariage-sophistique', 'mariage-sophistique-2', 'mariage-sophistique-3', 'mariage-sophistique-4','mariage-sophistique-5'],
  
  //  6 - marieeNaturelLache
  ['laches', 'laches-3', 'laches-5'],
  
  //  7 - marieeNaturelAttache
  ['attaches', 'attaches-5', 'attaches-3', 'attaches-7', 'attaches-9'],
  
  //  8 - marieeSophistiqueLache
  ['laches-2', 'laches-4', 'laches-6'],
  
  //  9 - marieeSophistiqueAttache
  ['attaches-6', 'attaches-4', 'attaches-2', 'attaches-8', 'attaches-10'],
  
  // 10 - invitee
  ['maquillage-invites-1', 'maquillage-invites-2', 'maquillage-invites-3', 'maquillage-invites-4', 'maquillage-invites-5'],
  
  // 11 - forfaitInvitee
  ['coiffure-invites-1', 'coiffure-invites-2', 'coiffure-invites-3', 'coiffure-invites-4', 'coiffure-invites-5'],

  // Mains ------------------------------------------------

  // 12 - Semi-permanent Uni
  ['semi-permanent-uni', 'semi-permanent-uni-2', 'semi-permanent-uni-3', 'semi-permanent-uni-4'],
  
  // Epilation --------------------------------------------

  // XX - Presta 1
  //['coiffure-invites-1', 'coiffure-invites-2', 'coiffure-invites-3', 'coiffure-invites-4', 'coiffure-invites-5'],
  
  // Enfants ----------------------------------------------

  // 13 - enfantsParticuliers
  ['enfants', 'enfants-2', 'enfants-3', 'enfants-4', 'enfants-5', 'enfants-6', 'enfants-7', 'enfants-8'],

  // 14 - enfantsEntreprise
  ['enfants-9', 'enfants-10', 'enfants-11', 'enfants-12', 'enfants-13', 'enfants-14', 'enfants-15', 'enfants-16', 'enfants-17'],
  
  
  // Cours ------------------------------------------------

  // XX - coursMaquilageJour
  /* ['cours1', 'cours1', 'cours1', 'cours1'],
  
  // XX - individuelSoiree
  ['cours2', 'cours2', 'cours2', 'cours2'],
  
  // XX - collectif
  ['cours3', 'cours3', 'cours3', 'cours3'], */
]

/* ############################################################################
---------------------------------- FONCTIONS ----------------------------------
############################################################################ */

// INTERACTIONS UTILISATEUR -------------------------------

const onMainIntroClick = () => {
  const bloc = document.getElementById('mainIntro');

  if (bloc.classList.contains('closed')) {
    bloc.classList.replace('closed', 'opened');
    bloc.style.minHeight = 'calc(3 * var(--magic-height))';
    bloc.style.height = 'calc(3 * var(--magic-height))';
  } else {
    bloc.classList.replace('opened', 'closed');
    bloc.style.minHeight = 'var(--magic-height)';
    bloc.style.height = 'var(--magic-height)';
  }
}
window.onMainIntroClick = onMainIntroClick;

const onPrestationGroupClick = (blocId) => {
  
  const setBlocState = (bloc, opened, closed, caretName) => {
    const caret = document.getElementById(caretName);

    if (bloc.classList.contains('closed')) { 
      bloc.classList.replace('closed', 'opened');
      setPrestationGroupBlocHeight(bloc, opened, closed);
      caret.style.transform = 'rotate(180deg)';
      setTimeout(() => {
        bloc.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
      }, 200);
    } else { 
      bloc.classList.replace('opened', 'closed'); 
      setPrestationGroupBlocHeight(bloc, 0, 0);
      caret.style.transform = 'rotate(0deg)';
    }
  }

  const bloc = document.getElementById(blocId);

  switch (blocId) {
    case 'maquillages':
      setBlocState(bloc,maquillagesOpened, maquillagesClosed, 'maquillagesCaret');
      break;
    case 'mariages':
      setBlocState(bloc,mariagesOpened, mariagesClosed, 'mariagesCaret');
      break;
    case 'mains':
      setBlocState(bloc,mainsOpened, mainsClosed, 'mainsCaret');
      break;
    case 'epilation':
      setBlocState(bloc,epilationOpened, epilationClosed, 'epilationCaret');
      break;
    case 'enfants':
      setBlocState(bloc,enfantsOpened, enfantsClosed, 'enfantsCaret');
      break;
    case 'cours':
      setBlocState(bloc,coursOpened, coursClosed, 'coursCaret');
      break;
  
    default:
      break;
  }

  /* document.getElementById('main').scrollTo({
    top: 100,
    left: 100,
    behavior: "smooth",
  }); */

  //
}
window.onPrestationGroupClick = onPrestationGroupClick;

const onPrestationClick = (blocId) => {

  const setBlocState = (bloc, parentBlocId, caretName) => {
    const caret = document.getElementById(caretName);
      switch (parentBlocId) {
        case 'maquillages':
          if (bloc.classList.contains('closed')) { 
            bloc.classList.replace('closed', 'opened');
            maquillagesOpened += 1; maquillagesClosed -= 1;
            caret.style.transform = 'rotate(180deg)';
          } else { 
            bloc.classList.replace('opened', 'closed'); 
            maquillagesOpened -= 1; maquillagesClosed += 1;
            caret.style.transform = 'rotate(0deg)';
          }
          setPrestationGroupBlocHeight(
            document.getElementById(parentBlocId), 
            maquillagesOpened, 
            maquillagesClosed);
          break;

        case 'mariages':
          if (bloc.classList.contains('closed')) { 
            bloc.classList.replace('closed', 'opened');
            mariagesOpened += 1; mariagesClosed -= 1;
            caret.style.transform = 'rotate(180deg)';
          } else { 
            bloc.classList.replace('opened', 'closed'); 
            mariagesOpened -= 1; mariagesClosed += 1;
            caret.style.transform = 'rotate(0deg)';
          }
          setPrestationGroupBlocHeight(
            document.getElementById(parentBlocId), 
            mariagesOpened, 
            mariagesClosed);
          break;

        case 'mains':
          if (bloc.classList.contains('closed')) { 
            bloc.classList.replace('closed', 'opened');
            mainsOpened += 1; mainsClosed -= 1;
            caret.style.transform = 'rotate(180deg)';
          } else { 
            bloc.classList.replace('opened', 'closed'); 
            mainsOpened -= 1; mainsClosed += 1;
            caret.style.transform = 'rotate(0deg)';
          }
          setPrestationGroupBlocHeight(
            document.getElementById(parentBlocId), 
            mainsOpened, 
            mainsClosed);
          break;
        case 'epilation':
          if (bloc.classList.contains('closed')) { 
            bloc.classList.replace('closed', 'opened');
            epilationOpened += 1; epilationClosed -= 1;
            caret.style.transform = 'rotate(180deg)';
          } else { 
            bloc.classList.replace('opened', 'closed'); 
            epilationOpened -= 1; epilationClosed += 1;
            caret.style.transform = 'rotate(0deg)';
          }
          setPrestationGroupBlocHeight(
            document.getElementById(parentBlocId), 
            epilationOpened, 
            epilationClosed);
          break;
        case 'enfants':
          if (bloc.classList.contains('closed')) { 
            bloc.classList.replace('closed', 'opened');
            caret.style.transform = 'rotate(180deg)';
            enfantsOpened += 1; enfantsClosed -= 1;
          } else { 
            bloc.classList.replace('opened', 'closed'); 
            enfantsOpened -= 1; enfantsClosed += 1;
            caret.style.transform = 'rotate(0deg)';
          }
          setPrestationGroupBlocHeight(
            document.getElementById(parentBlocId), 
            enfantsOpened, 
            enfantsClosed);
          break;

        case 'cours':
          if (bloc.classList.contains('closed')) { 
            bloc.classList.replace('closed', 'opened');
            caret.style.transform = 'rotate(180deg)';
            coursOpened += 1; coursClosed -= 1;
          } else { 
            bloc.classList.replace('opened', 'closed'); 
            coursOpened -= 1; coursClosed += 1;
            caret.style.transform = 'rotate(0deg)';
          }
          setPrestationGroupBlocHeight(
            document.getElementById(parentBlocId), 
            coursOpened, 
            coursClosed);
          break;
        default:
          break;
      }
    } 
  
  const bloc = document.getElementById(blocId);

  switch (blocId) {
    // MAQUILLAGES
    case 'maquillageJourNaturel':
      setBlocState(bloc, 'maquillages', `${blocId}Caret`);
      break;
    case 'maquillageJourSophistique':
      setBlocState(bloc, 'maquillages', `${blocId}Caret`);
      break;
    case 'maquillageSoiree':
      setBlocState(bloc, 'maquillages', `${blocId}Caret`);
      break;
    case 'evenementiel':
      setBlocState(bloc, 'maquillages', `${blocId}Caret`);
      break;

    // MARIAGES
    case 'marieeNaturel':
      setBlocState(bloc, 'mariages', `${blocId}Caret`);
      break;
    case 'marieeSophistique':
      setBlocState(bloc, 'mariages', `${blocId}Caret`);
      break;
    case 'marieeNaturelLache':
      setBlocState(bloc, 'mariages', `${blocId}Caret`);
      break;
    case 'marieeNaturelAttache':
      setBlocState(bloc, 'mariages', `${blocId}Caret`);
      break;
    case 'marieeSophistiqueLache':
      setBlocState(bloc, 'mariages', `${blocId}Caret`);
      break;
    case 'marieeSophistiqueAttache':
      setBlocState(bloc, 'mariages', `${blocId}Caret`);
      break;
    case 'invitee':
      setBlocState(bloc, 'mariages', `${blocId}Caret`);
      break;
    case 'forfaitInvitee':
      setBlocState(bloc, 'mariages', `${blocId}Caret`);
      break;
    
    // MAINS
    case 'semiPermanent':
      setBlocState(bloc, 'mains', `${blocId}Caret`);
      break;
    case 'semiPermanentFrench':
      setBlocState(bloc, 'mains', `${blocId}Caret`);
      break;
    case 'forfaitSemiPermanent':
      setBlocState(bloc, 'mains', `${blocId}Caret`);
      break;
    case 'forfaitFrench':
      setBlocState(bloc, 'mains', `${blocId}Caret`);
      break;
    case 'capsules':
      setBlocState(bloc, 'mains', `${blocId}Caret`);
      break;
    case 'capsulesCouleurUnie':
      setBlocState(bloc, 'mains', `${blocId}Caret`);
      break;
    case 'capsulesFrench':
      setBlocState(bloc, 'mains', `${blocId}Caret`);
      break;
    case 'depose':
      setBlocState(bloc, 'mains', `${blocId}Caret`);
      break;
    case 'decoration':
      setBlocState(bloc, 'mains', `${blocId}Caret`);
      break;
    case 'soinSimple':
      setBlocState(bloc, 'mains', `${blocId}Caret`);
      break;
    case 'soinComplet':
      setBlocState(bloc, 'mains', `${blocId}Caret`);
      break;
    
    // EPILATION
    case 'levreSuperieure':
      setBlocState(bloc, 'epilation', `${blocId}Caret`);
      break;
    case 'menton':
      setBlocState(bloc, 'epilation', `${blocId}Caret`);
      break;
    case 'sourcils':
      setBlocState(bloc, 'epilation', `${blocId}Caret`);
      break;
    case 'forfaitx2':
      setBlocState(bloc, 'epilation', `${blocId}Caret`);
      break;
    case 'forfaitx3':
      setBlocState(bloc, 'epilation', `${blocId}Caret`);
      break;
    case 'coursSourcils':
      setBlocState(bloc, 'epilation', `${blocId}Caret`);
      break;
    
    // ENFANTS
    case 'enfantsParticuliers':
      setBlocState(bloc, 'enfants', `${blocId}Caret`);
      break;
    case 'enfantsEntreprise':
      setBlocState(bloc, 'enfants', `${blocId}Caret`);
      break;

    // COURS
    case 'coursMaquilageJour':
      setBlocState(bloc, 'cours', `${blocId}Caret`);
      break;
    case 'coursMaquilageSoiree':
      setBlocState(bloc, 'cours', `${blocId}Caret`);
      break;
    case 'coursPersonnalise':
      setBlocState(bloc, 'cours', `${blocId}Caret`);
      break;
    case 'coursColorimetrie':
      setBlocState(bloc, 'cours', `${blocId}Caret`);
      break;
    case 'masterclass':
      setBlocState(bloc, 'cours', `${blocId}Caret`);
      break;
    case 'evjf':
      setBlocState(bloc, 'cours', `${blocId}Caret`);
      break;
    default:
      break;
  }
}
window.onPrestationClick = onPrestationClick;

const onPictureClick = (picturesGroupIndex, pictureIndex) => {
  renderFullScreenPicture(picturesGroupIndex, pictureIndex);
}
window.onPictureClick = onPictureClick;

const closePhotoViewer = () => {
  document.getElementById('photoViewerContainer').style.opacity = 0;
  setTimeout(() => {
    document.getElementById('photoViewerContainer').style.display = 'none';
  }, 200);
}
window.closePhotoViewer = closePhotoViewer;

const onPictureNavClick = (type, picturesGroupIndex, currentPictureIndex) => {
  const PICTURE_GROUP = PRESTATIONS_PICTURES[picturesGroupIndex];
  let newIndex = 0;
  if (type == 'previous') {
    if (currentPictureIndex == 0) {
      newIndex = PICTURE_GROUP.length - 1;
    } else {
      newIndex = currentPictureIndex - 1;
    }
  } else {
    if (currentPictureIndex == PICTURE_GROUP.length - 1) {
      newIndex = 0;
    } else {
      newIndex = currentPictureIndex + 1;
    }
  }

  document.getElementById('photoViewer').style.opacity = 0
  setTimeout(() => {
    document.getElementById('photoViewerContainer').innerHTML = `
    <div onclick="closePhotoViewer()" class="photo-viewer-background"></div>
    <div id="photoViewer" class="photo-viewer">
      <img src="./medias/images/prestations/${PICTURE_GROUP[newIndex]}.webp" />
      <button onclick="onPictureNavClick('previous', ${picturesGroupIndex}, ${newIndex})"><img src="./medias/images/font-awsome/caret-down.svg" /></button>
      <button onclick="onPictureNavClick('next', ${picturesGroupIndex}, ${newIndex})"><img src="./medias/images/font-awsome/caret-down.svg" /></button>
    </div>
    <button onclick="closePhotoViewer()" class="photo-viewer-close-button"><img src="./medias/images/font-awsome/plus.svg" /></button>
  `;
  }, 200);
}
window.onPictureNavClick = onPictureNavClick;

// GÉNÉRATION DOM -----------------------------------------
const setPrestationGroupBlocHeight = (bloc, openedSubBlocsNumber, closedSubBlocsNumber) => {
  if (openedSubBlocsNumber == 0 && closedSubBlocsNumber == 0) {
    bloc.style.minHeight = 'var(--magic-height)';
    bloc.style.height = 'var(--magic-height)';
  } else {
    bloc.style.minHeight = `calc(var(--magic-height) + (${openedSubBlocsNumber} * (var(--presta-height) + 30px)) + (${closedSubBlocsNumber} * (60px  + 30px)) + 30px)`;
    bloc.style.height = `calc(var(--magic-height) + (${openedSubBlocsNumber} * (var(--presta-height) + 30px)) + (${closedSubBlocsNumber} * (60px  + 30px)) + 30px)`;
  }
}

const renderFullScreenPicture = (picturesGroupIndex, pictureIndex) => {
  const PICTURE_GROUP = PRESTATIONS_PICTURES[picturesGroupIndex];
  document.getElementById('photoViewerContainer').style.display = 'flex';
  document.getElementById('photoViewerContainer').innerHTML = `
    <div onclick="closePhotoViewer()" class="photo-viewer-background"></div>
    <div id="photoViewer" class="photo-viewer">
      <img src="./medias/images/prestations/${PICTURE_GROUP[pictureIndex]}.webp" />
      <button onclick="onPictureNavClick('previous', ${picturesGroupIndex}, ${pictureIndex})"><img src="./medias/images/font-awsome/caret-down.svg" /></button>
      <button onclick="onPictureNavClick('next', ${picturesGroupIndex}, ${pictureIndex})"><img src="./medias/images/font-awsome/caret-down.svg" /></button>
    </div>
    <button onclick="closePhotoViewer()" class="photo-viewer-close-button"><img src="./medias/images/font-awsome/plus.svg" /></button>
  `;
  setTimeout(() => {
    document.getElementById('photoViewerContainer').style.opacity = 1;
  }, 10);
}

/* ############################################################################
---------------------------------- EXECUTION ----------------------------------
############################################################################ */

// Auto ---------------------------------------------------

// Manuelle -----------------------------------------------
setHTMLTitle(`Opale Makeup - Maquillage professionnel à domicile - Calais`);
document.getElementById('main').innerHTML = `
  <div id="mainIntro" class="main-intro-area closed">
    <button class="main-intro-header" onclick="onMainIntroClick()">
      <span class="name-intro">MATTHIEU DUQUENOY</span>
      <span class="pro-intro">MAQUILLEUR PROFESSIONNEL</span>
      <span class="sub-intro">EN DÉPLACEMENT SUR TOUTE LA CÔTE D'OPALE</span>
    </button>
    <div class="main-intro-content">
      <p class="main-intro">
        Passionné par le maquillage depuis mon adolescence et diplômé d'une formation "maquillage artistique" de l'école <a style="text-decoration: none; font-weight: 300;" href="http://www.metamake-up.com/">METAMORPHOSES</a> de Strasbourg depuis 2017, je suis à votre disposition pour répondre à toutes vos questions, et satisfaire au mieux votre demande en déplacement sur la Côte d'Opale.
    </p>
    </div>
  </div>

  <!-- ==================================================================================== -->
  <!-- ----------------------------------- MAQUILLAGES ------------------------------------ -->
  <!-- ==================================================================================== -->

  <div id="maquillages" class="prestation-group-container closed">

    <button id="maquillages-bloc-header" class="prestation-group-header" onclick="onPrestationGroupClick('maquillages')">
      <div class="group-name-container">
        <span>Maquillages</span>
        <img id="maquillagesCaret" src="medias/images/font-awsome/caret-down.svg" />
      </div>
    </button>

    <!-- -------------------------------------------------------------- -->
    <!-- ------------------- Maquillage jour natuel ------------------- -->
    <!-- -------------------------------------------------------------- -->

    <div id="maquillageJourNaturel" class="prestation-container closed">
      <button class="prestation-header" onclick="onPrestationClick('maquillageJourNaturel')">
        <div class="prestation-header-text">
          <span>Maquillage jour naturel</span> <span>18€</span>
        </div>
        <img id="maquillageJourNaturelCaret" src="medias/images/font-awsome/caret-down.svg" />
      </button>

      <div class="separator"></div>

      <div class="description-container"><span>Teint, yeux, lèvres</span></div>

      <div class="images-container">
        <button onclick="onPictureClick(0, 0)" class="prestation-picture" style="background-image: url('./medias/images/prestations/jour.webp');"></button>
        <button onclick="onPictureClick(0, 1)" class="prestation-picture" style="background-image: url('./medias/images/prestations/jour-2.webp');"></button>
        <button onclick="onPictureClick(0, 2)" class="prestation-picture" style="background-image: url('./medias/images/prestations/jour-3.webp');"></button>
        <button onclick="onPictureClick(0, 3)" class="prestation-picture" style="background-image: url('./medias/images/prestations/jour-4.webp');"></button>
      </div>
    </div>

    <!-- -------------------------------------------------------------- -->
    <!-- ---------------- Maquillage jour sophistiqué ----------------- -->
    <!-- -------------------------------------------------------------- -->

    <div id="maquillageJourSophistique" class="prestation-container closed">
      <button class="prestation-header" onclick="onPrestationClick('maquillageJourSophistique')">
        <div class="prestation-header-text">
          <span>Maquillage jour sophistiqué</span><span>23€</span>
        </div>
        <img id="maquillageJourSophistiqueCaret" src="medias/images/font-awsome/caret-down.svg" />
      </button>

      <div class="separator"></div>
      
      <div class="description-container"><span>Teint, sourcils, yeux, lèvres</span></div>

      <div class="images-container">
        <button onclick="onPictureClick(1, 0)" class="prestation-picture" style="background-image: url('./medias/images/prestations/jour-sophistique.webp');"></button>
        <button onclick="onPictureClick(1, 1)" class="prestation-picture" style="background-image: url('./medias/images/prestations/jour-sophistique-2.webp');"></button>
        <button onclick="onPictureClick(1, 2)" class="prestation-picture" style="background-image: url('./medias/images/prestations/jour-sophistique-3.webp');"></button>
        <button onclick="onPictureClick(1, 3)" class="prestation-picture" style="background-image: url('./medias/images/prestations/jour-sophistique-4.webp');"></button>
      </div>
    </div>

    <!-- -------------------------------------------------------------- -->
    <!-- --------------------- Maquillage soirée ---------------------- -->
    <!-- -------------------------------------------------------------- -->

    <div id="maquillageSoiree" class="prestation-container closed">
      <button class="prestation-header" onclick="onPrestationClick('maquillageSoiree')">
        <div class="prestation-header-text">
          <span>Maquillage soirée</span><span>33€</span>
        </div>
        <img id="maquillageSoireeCaret" src="medias/images/font-awsome/caret-down.svg" />
      </button>

      <div class="separator"></div>
      
      <div class="description-container">
        <span>Teint, contouring, sourcils, yeux, lèvres</span>
        <span>+ 5€ pour faux-cils (implants ou franges)</span>
      </div>

      <div class="images-container">
        <button onclick="onPictureClick(2, 0)" class="prestation-picture" style="background-image: url('./medias/images/prestations/soiree-2.webp');"></button>
        <button onclick="onPictureClick(2, 1)" class="prestation-picture" style="background-image: url('./medias/images/prestations/soiree.webp');"></button>
        <button onclick="onPictureClick(2, 2)" class="prestation-picture" style="background-image: url('./medias/images/prestations/soiree-3.webp');"></button>
        <button onclick="onPictureClick(2, 3)" class="prestation-picture" style="background-image: url('./medias/images/prestations/soiree-4.webp');"></button>
        <button onclick="onPictureClick(2, 4)" class="prestation-picture" style="background-image: url('./medias/images/prestations/soiree-5.webp');"></button>
        <button onclick="onPictureClick(2, 5)" class="prestation-picture" style="background-image: url('./medias/images/prestations/soiree-6.webp');"></button>
      </div>
    </div>

    <!-- -------------------------------------------------------------- -->
    <!-- --------------------- Évenementiel ---------------------- -->
    <!-- -------------------------------------------------------------- -->

    <div id="evenementiel" class="prestation-container closed">
      <button class="prestation-header" onclick="onPrestationClick('evenementiel')">
        <div class="prestation-header-text">
          <span>Évenementiel</span><span>sur devis</span>
        </div>
        <img id="evenementielCaret" src="medias/images/font-awsome/caret-down.svg" />
      </button>

      <div class="separator"></div>
      
      <div class="description-container">
        <span>Tarif et durée selon la demande</span>
      </div>

      <div class="images-container">
        <button onclick="onPictureClick(3, 0)" class="prestation-picture" style="background-image: url('./medias/images/prestations/evenementiel.webp');"></button>
        <button onclick="onPictureClick(3, 1)" class="prestation-picture" style="background-image: url('./medias/images/prestations/evenementiel-2.webp');"></button>
        <button onclick="onPictureClick(3, 2)" class="prestation-picture" style="background-image: url('./medias/images/prestations/evenementiel-3.webp');"></button>
        <button onclick="onPictureClick(3, 3)" class="prestation-picture" style="background-image: url('./medias/images/prestations/evenementiel-5.webp');"></button>
        <button onclick="onPictureClick(3, 4)" class="prestation-picture" style="background-image: url('./medias/images/prestations/evenementiel-6.webp');"></button>
        <button onclick="onPictureClick(3, 5)" class="prestation-picture" style="background-image: url('./medias/images/prestations/evenementiel-7.webp');"></button>
        <button onclick="onPictureClick(3, 6)" class="prestation-picture" style="background-image: url('./medias/images/prestations/evenementiel-8.webp');"></button>
        <button onclick="onPictureClick(3, 7)" class="prestation-picture" style="background-image: url('./medias/images/prestations/evenementiel-9.webp');"></button>
      </div>
    </div>

  </div>

  <!-- ==================================================================================== -->
  <!-- ------------------------------------- MARIAGES ------------------------------------- -->
  <!-- ==================================================================================== -->

  <div id="mariages" class="prestation-group-container closed">

    <button id="mariages-bloc-header" class="prestation-group-header" onclick="onPrestationGroupClick('mariages')">
      <div class="group-name-container">
        <span>Mariages</span>
        <img id="mariagesCaret" src="medias/images/font-awsome/caret-down.svg" />
      </div>
    </button>

    <!-- -------------------------------------------------------------- -->
    <!-- ----------------------- Mariée natuel ------------------------ -->
    <!-- -------------------------------------------------------------- -->

    <div id="marieeNaturel" class="prestation-container closed">
      <button class="prestation-header" onclick="onPrestationClick('marieeNaturel')">
        <div class="prestation-header-text">
          <span>Maquillage mariée naturel</span><span>75€</span>
        </div>
        <img id="marieeNaturelCaret" src="medias/images/font-awsome/caret-down.svg" />
      </button>

      <div class="separator"></div>
      
      <div class="description-container"><span>Teint, yeux, lèvres</span></div>

      <div class="images-container">
        <button onclick="onPictureClick(4, 0)" class="prestation-picture" style="background-image: url('./medias/images/prestations/mariee-naturel.webp');"></button>
        <button onclick="onPictureClick(4, 1)" class="prestation-picture" style="background-image: url('./medias/images/prestations/mariee-naturel-2.webp');"></button>
        <button onclick="onPictureClick(4, 2)" class="prestation-picture" style="background-image: url('./medias/images/prestations/mariee-naturel-3.webp');"></button>
        <button onclick="onPictureClick(4, 3)" class="prestation-picture" style="background-image: url('./medias/images/prestations/mariee-naturel-4.webp');"></button>
      </div>
    </div>

    <!-- -------------------------------------------------------------- -->
    <!-- --------------------- Mariée sophistiqué --------------------- -->
    <!-- -------------------------------------------------------------- -->

    <div id="marieeSophistique" class="prestation-container closed">
      <button class="prestation-header" onclick="onPrestationClick('marieeSophistique')">
        <div class="prestation-header-text">
          <span>Maquillage mariée sophistiqué</span><span>95€</span>
        </div>
        <img id="marieeSophistiqueCaret" src="medias/images/font-awsome/caret-down.svg" />
      </button>

      <div class="separator"></div>
      
      <div class="description-container">
        <span>Teint, contouring, sourcils, yeux, faux-cils (implants ou franges), lèvres</span>
      </div>

      <div class="images-container">
        <button onclick="onPictureClick(5, 0)" class="prestation-picture" style="background-image: url('./medias/images/prestations/mariage-sophistique.webp');"></button>
        <button onclick="onPictureClick(5, 1)" class="prestation-picture" style="background-image: url('./medias/images/prestations/mariage-sophistique-2.webp');"></button>
        <button onclick="onPictureClick(5, 2)" class="prestation-picture" style="background-image: url('./medias/images/prestations/mariage-sophistique-3.webp');"></button>
        <button onclick="onPictureClick(5, 3)" class="prestation-picture" style="background-image: url('./medias/images/prestations/mariage-sophistique-4.webp');"></button>
        <button onclick="onPictureClick(5, 4)" class="prestation-picture" style="background-image: url('./medias/images/prestations/mariage-sophistique-5.webp');"></button>
      </div>
    </div>

    <!-- -------------------------------------------------------------- -->
    <!-- ------------------- Mariée Naturel Lâchée -------------------- -->
    <!-- -------------------------------------------------------------- -->

    <div id="marieeNaturelLache" class="prestation-container closed">
      <button class="prestation-header" onclick="onPrestationClick('marieeNaturelLache')">
        <div class="prestation-header-text">
          <span>Forfait mariée<br>(naturel + lâchée)</span><span>104€</span>
        </div>
        <img id="marieeNaturelLacheCaret" src="medias/images/font-awsome/caret-down.svg" />
      </button>

      <div class="separator"></div>
      
      <div class="description-container">
        <span>Maquillage naturel / coiffure lâchée</span>
      </div>

      <div class="images-container">
        <button onclick="onPictureClick(6, 0)" class="prestation-picture" style="background-image: url('./medias/images/prestations/laches.webp');"></button>
        <button onclick="onPictureClick(6, 1)" class="prestation-picture" style="background-image: url('./medias/images/prestations/laches-3.webp');"></button>
        <button onclick="onPictureClick(6, 2)" class="prestation-picture" style="background-image: url('./medias/images/prestations/laches-5.webp');"></button>
      </div>
    </div>

    <!-- -------------------------------------------------------------- -->
    <!-- ------------------ Mariée Naturel Attachée ------------------- -->
    <!-- -------------------------------------------------------------- -->

    <div id="marieeNaturelAttache" class="prestation-container closed">
      <button class="prestation-header" onclick="onPrestationClick('marieeNaturelAttache')">
        <div class="prestation-header-text">
          <span>Forfait mariée<br>(naturel + attachée)</span><span>114€</span>
        </div>
        <img id="marieeNaturelAttacheCaret" src="medias/images/font-awsome/caret-down.svg" />
      </button>

      <div class="separator"></div>
      
      <div class="description-container">
        <span>Maquillage naturel / coiffure attachée</span>
      </div>

      <div class="images-container">
        <button onclick="onPictureClick(7, 0)" class="prestation-picture" style="background-image: url('./medias/images/prestations/attaches.webp');"></button>
        <button onclick="onPictureClick(7, 1)" class="prestation-picture" style="background-image: url('./medias/images/prestations/attaches-5.webp');"></button>
        <button onclick="onPictureClick(7, 2)" class="prestation-picture" style="background-image: url('./medias/images/prestations/attaches-3.webp');"></button>
        <button onclick="onPictureClick(7, 3)" class="prestation-picture" style="background-image: url('./medias/images/prestations/attaches-7.webp');"></button>
        <button onclick="onPictureClick(7, 4)" class="prestation-picture" style="background-image: url('./medias/images/prestations/attaches-9.webp');"></button>
      </div>
    </div>

    <!-- -------------------------------------------------------------- -->
    <!-- ----------------- Mariée Sophistiqué Lachée ------------------ -->
    <!-- -------------------------------------------------------------- -->

    <div id="marieeSophistiqueLache" class="prestation-container closed">
      <button class="prestation-header" onclick="onPrestationClick('marieeSophistiqueLache')">
        <div class="prestation-header-text">
          <span>Forfait mariée<br>(sophistiqué + lâchée)</span><span>124€</span>
        </div>
        <img id="marieeSophistiqueLacheCaret" src="medias/images/font-awsome/caret-down.svg" />
      </button>

      <div class="separator"></div>
      
      <div class="description-container">
        <span>Maquillage sophistiqué / coiffure lâchée</span>
      </div>

      <div class="images-container">
        <button onclick="onPictureClick(8, 0)" class="prestation-picture" style="background-image: url('./medias/images/prestations/laches-2.webp');"></button>
        <button onclick="onPictureClick(8, 1)" class="prestation-picture" style="background-image: url('./medias/images/prestations/laches-4.webp');"></button>
        <button onclick="onPictureClick(8, 2)" class="prestation-picture" style="background-image: url('./medias/images/prestations/laches-6.webp');"></button>
      </div>
    </div>

    <!-- -------------------------------------------------------------- -->
    <!-- ------------------ Mariée Sophistiqué Attachée ------------------- -->
    <!-- -------------------------------------------------------------- -->

    <div id="marieeSophistiqueAttache" class="prestation-container closed">
      <button class="prestation-header" onclick="onPrestationClick('marieeSophistiqueAttache')">
        <div class="prestation-header-text">
          <span>Forfait mariée<br>(sophistiqué + attachée)</span><span>134€</span>
        </div>
        <img id="marieeSophistiqueAttacheCaret" src="medias/images/font-awsome/caret-down.svg" />
      </button>

      <div class="separator"></div>
      
      <div class="description-container">
        <span>Maquillage sophistiqué / coiffure attachée</span>
      </div>

      <div class="images-container">
        <button onclick="onPictureClick(9, 0)" class="prestation-picture" style="background-image: url('./medias/images/prestations/attaches-6.webp');"></button>
        <button onclick="onPictureClick(9, 1)" class="prestation-picture" style="background-image: url('./medias/images/prestations/attaches-4.webp');"></button>
        <button onclick="onPictureClick(9, 2)" class="prestation-picture" style="background-image: url('./medias/images/prestations/attaches-2.webp');"></button>
        <button onclick="onPictureClick(9, 3)" class="prestation-picture" style="background-image: url('./medias/images/prestations/attaches-8.webp');"></button>
        <button onclick="onPictureClick(9, 4)" class="prestation-picture" style="background-image: url('./medias/images/prestations/attaches-10.webp');"></button>
      </div>
    </div>

    <!-- -------------------------------------------------------------- -->
    <!-- --------------------- Maquillage Invitée --------------------- -->
    <!-- -------------------------------------------------------------- -->

    <div id="invitee" class="prestation-container closed">
      <button class="prestation-header" onclick="onPrestationClick('invitee')">
        <div class="prestation-header-text">
          <span>Maquillage invitée</span><span>29€</span>
        </div>
        <img id="inviteeCaret" src="medias/images/font-awsome/caret-down.svg" />
      </button>

      <div class="separator"></div>
      
      <div class="description-container">
        <span>Teint, yeux, lèvres</span>
      </div>

      <div class="images-container">
        <button onclick="onPictureClick(10, 0)" class="prestation-picture" style="background-image: url('./medias/images/prestations/maquillage-invites-1.webp');"></button>
        <button onclick="onPictureClick(10, 1)" class="prestation-picture" style="background-image: url('./medias/images/prestations/maquillage-invites-2.webp');"></button>
        <button onclick="onPictureClick(10, 2)" class="prestation-picture" style="background-image: url('./medias/images/prestations/maquillage-invites-3.webp');"></button>
        <button onclick="onPictureClick(10, 3)" class="prestation-picture" style="background-image: url('./medias/images/prestations/maquillage-invites-4.webp');"></button>
        <button onclick="onPictureClick(10, 4)" class="prestation-picture" style="background-image: url('./medias/images/prestations/maquillage-invites-5.webp');"></button>
      </div>
    </div>

    <!-- -------------------------------------------------------------- -->
    <!-- --------------------- Forfait Invitée --------------------- -->
    <!-- -------------------------------------------------------------- -->

    <div id="forfaitInvitee" class="prestation-container closed">
      <button class="prestation-header" onclick="onPrestationClick('forfaitInvitee')">
        <div class="prestation-header-text">
          <span>Forfait invitée</span><span>49€</span>
        </div>
        <img id="forfaitInviteeCaret" src="medias/images/font-awsome/caret-down.svg" />
      </button>

      <div class="separator"></div>
      
      <div class="description-container">
        <span>Maquillage naturel / chignon classique "mariage"</span>
      </div>

      <div class="images-container">
        <button onclick="onPictureClick(11, 0)" class="prestation-picture" style="background-image: url('./medias/images/prestations/coiffure-invites-1.webp');"></button>
        <button onclick="onPictureClick(11, 1)" class="prestation-picture" style="background-image: url('./medias/images/prestations/coiffure-invites-2.webp');"></button>
        <button onclick="onPictureClick(11, 2)" class="prestation-picture" style="background-image: url('./medias/images/prestations/coiffure-invites-3.webp');"></button>
        <button onclick="onPictureClick(11, 3)" class="prestation-picture" style="background-image: url('./medias/images/prestations/coiffure-invites-4.webp');"></button>
        <button onclick="onPictureClick(11, 4)" class="prestation-picture" style="background-image: url('./medias/images/prestations/coiffure-invites-5.webp');"></button>
      </div>
    </div>

  </div>

  <!-- ==================================================================================== -->
  <!-- -------------------------------------- Mains --------------------------------------- -->
  <!-- ==================================================================================== -->

  <!-- <div id="mains" class="prestation-group-container closed">

    <!-- --------------------------- HEADER ---------------------------

    <button id="mains-bloc-header" class="prestation-group-header" onclick="onPrestationGroupClick('mains')">
      <div class="group-name-container">
        <span>Mains</span>
        <img id="mainsCaret" src="medias/images/font-awsome/caret-down.svg" />
      </div>
    </button>

    <!-- ------------------------ PRESTATIONS -------------------------

    <!-- --------------------------------------------------------------
    <!-- --------------------- Semi-permanent ---------------------
    <!-- --------------------------------------------------------------

    <div id="semiPermanent" class="prestation-container closed">
      <button class="prestation-header" onclick="onPrestationClick('semiPermanent')">
        <div class="prestation-header-text">
          <span>Semi-permanent</span><span>27€</span>
        </div>
        <img id="semiPermanentCaret" src="medias/images/font-awsome/caret-down.svg" />
      </button>

      <div class="separator"></div>
      
      <div class="description-container">
        <span>Couleur unie sans dépose</span>
      </div>

      <div class="images-container">
        <button onclick="onPictureClick(12, 0)" class="prestation-picture" style="background-image: url('./medias/images/prestations/semi-permanent-uni.webp');"></button>
        <button onclick="onPictureClick(12, 1)" class="prestation-picture" style="background-image: url('./medias/images/prestations/semi-permanent-uni-2.webp');"></button>
        <button onclick="onPictureClick(12, 2)" class="prestation-picture" style="background-image: url('./medias/images/prestations/semi-permanent-uni-3.webp');"></button>
        <button onclick="onPictureClick(12, 3)" class="prestation-picture" style="background-image: url('./medias/images/prestations/semi-permanent-uni-4.webp');"></button>
      </div>
    </div>

    <!-- --------------------------------------------------------------
    <!-- --------------------- Semi-permanent (French) ---------------------
    <!-- --------------------------------------------------------------

    <div id="semiPermanentFrench" class="prestation-container closed">
      <button class="prestation-header" onclick="onPrestationClick('semiPermanentFrench')">
        <div class="prestation-header-text">
          <span>Semi-permanent (French)</span><span>30€</span>
        </div>
        <img id="semiPermanentFrenchCaret" src="medias/images/font-awsome/caret-down.svg" />
      </button>

      <div class="separator"></div>
      
      <div class="description-container">
        <span>French sans dépose</span>
      </div>

      <div class="images-container">
      </div>
    </div>

    <!-- --------------------------------------------------------------
    <!-- --------------------- Forfait semi-permanent ---------------------
    <!-- --------------------------------------------------------------

    <div id="forfaitSemiPermanent" class="prestation-container closed">
      <button class="prestation-header" onclick="onPrestationClick('forfaitSemiPermanent')">
        <div class="prestation-header-text">
          <span>Forfait semi-permanent</span><span>35€</span>
        </div>
        <img id="forfaitSemiPermanentCaret" src="medias/images/font-awsome/caret-down.svg" />
      </button>

      <div class="separator"></div>
      
      <div class="description-container">
        <span>Dépose + repose (couleur unie)</span>
      </div>

      <div class="images-container">
      </div>
    </div>

    <!-- --------------------------------------------------------------
    <!-- --------------------- Forfait French ---------------------
    <!-- --------------------------------------------------------------

    <div id="forfaitFrench" class="prestation-container closed">
      <button class="prestation-header" onclick="onPrestationClick('forfaitFrench')">
        <div class="prestation-header-text">
          <span>Forfait French</span><span>39€</span>
        </div>
        <img id="forfaitFrenchCaret" src="medias/images/font-awsome/caret-down.svg" />
      </button>

      <div class="separator"></div>
      
      <div class="description-container">
        <span>Dépose + repose (semi-permanent French)</span>
      </div>

      <div class="images-container">
      </div>
    </div>

    <!-- --------------------------------------------------------------
    <!-- --------------------- Capsules ---------------------
    <!-- --------------------------------------------------------------

    <div id="capsules" class="prestation-container closed">
      <button class="prestation-header" onclick="onPrestationClick('capsules')">
        <div class="prestation-header-text">
          <span>Capsules</span><span>55€</span>
        </div>
        <img id="capsulesCaret" src="medias/images/font-awsome/caret-down.svg" />
      </button>

      <div class="separator"></div>
      
      <div class="description-container">
        <span>Pose capsules simples - vernis transparent</span>
      </div>

      <div class="images-container">
      </div>
    </div>

    <!-- --------------------------------------------------------------
    <!-- --------------------- Capsules (couleur unie) ---------------------
    <!-- --------------------------------------------------------------

    <div id="capsulesCouleurUnie" class="prestation-container closed">
      <button class="prestation-header" onclick="onPrestationClick('capsulesCouleurUnie')">
        <div class="prestation-header-text">
          <span>Capsules (couleur unie)</span><span>63€</span>
        </div>
        <img id="capsulesCouleurUnieCaret" src="medias/images/font-awsome/caret-down.svg" />
      </button>

      <div class="separator"></div>
      
      <div class="description-container">
        <span>Pose capsules simples avec vernis semi-permanent</span>
      </div>

      <div class="images-container">
      </div>
    </div>

    <!-- --------------------------------------------------------------
    <!-- --------------------- Capsules (French) ---------------------
    <!-- --------------------------------------------------------------

    <div id="capsulesFrench" class="prestation-container closed">
      <button class="prestation-header" onclick="onPrestationClick('capsulesFrench')">
        <div class="prestation-header-text">
          <span>Capsules (French)</span><span>65€</span>
        </div>
        <img id="capsulesFrenchCaret" src="medias/images/font-awsome/caret-down.svg" />
      </button>

      <div class="separator"></div>
      
      <div class="description-container">
        <span>Pose capsules simples avec vernis semi-permanent (French)</span>
      </div>

      <div class="images-container">
      </div>
    </div>

    <!-- --------------------------------------------------------------
    <!-- --------------------- Dépose ---------------------
    <!-- --------------------------------------------------------------

    <div id="depose" class="prestation-container closed">
      <button class="prestation-header" onclick="onPrestationClick('depose')">
        <div class="prestation-header-text">
          <span>Dépose</span><span>15€</span>
        </div>
        <img id="deposeCaret" src="medias/images/font-awsome/caret-down.svg" />
      </button>

      <div class="separator"></div>
      
      <div class="description-container">
        <span>Dépose seule + soin</span>
      </div>

      <div class="images-container">
      </div>
    </div>

    <!-- --------------------------------------------------------------
    <!-- --------------------- Décoration ---------------------
    <!-- --------------------------------------------------------------

    <div id="decoration" class="prestation-container closed">
      <button class="prestation-header" onclick="onPrestationClick('decoration')">
        <div class="prestation-header-text">
          <span>Décoration</span><span>0,50€<span>/ongle</span></span>
        </div>
        <img id="decorationCaret" src="medias/images/font-awsome/caret-down.svg" />
      </button>

      <div class="separator"></div>
      
      <div class="description-container">
        <span>Sur ongle vernis</span>
      </div>

      <div class="images-container">
      </div>
    </div>

    <!-- --------------------------------------------------------------
    <!-- --------------------- Soin (simple) ---------------------
    <!-- --------------------------------------------------------------

    <div id="soinSimple" class="prestation-container closed">
      <button class="prestation-header" onclick="onPrestationClick('soinSimple')">
        <div class="prestation-header-text">
          <span>Soin (simple)</span><span>30€</span>
        </div>
        <img id="soinSimpleCaret" src="medias/images/font-awsome/caret-down.svg" />
      </button>

      <div class="separator"></div>
      
      <div class="description-container">
        <span>Manucure complète + modelage + soin</span>
      </div>

      <div class="images-container">
      </div>
    </div>

    <!-- --------------------------------------------------------------
    <!-- --------------------- Soin (complet) ---------------------
    <!-- --------------------------------------------------------------

    <div id="soinComplet" class="prestation-container closed">
      <button class="prestation-header" onclick="onPrestationClick('soinComplet')">
        <div class="prestation-header-text">
          <span>Soin (complet)</span><span>39€</span>
        </div>
        <img id="soinCompletCaret" src="medias/images/font-awsome/caret-down.svg" />
      </button>

      <div class="separator"></div>
      
      <div class="description-container">
        <span>Manucure complète + gommage + modelage + masque + soin</span>
      </div>

      <div class="images-container">
      </div>
    </div>

  </div> -->

  <!-- ==================================================================================== -->
  <!-- -------------------------------------- Epilation --------------------------------------- -->
  <!-- ==================================================================================== -->

  <div id="epilation" class="prestation-group-container closed">

    <!-- --------------------------- HEADER --------------------------- -->

    <button id="epilation-bloc-header" class="prestation-group-header" onclick="onPrestationGroupClick('epilation')">
      <div class="group-name-container">
        <span>Épilation</span>
        <img id="epilationCaret" src="medias/images/font-awsome/caret-down.svg" />
      </div>
    </button>

    <!-- ------------------------ PRESTATIONS ------------------------- -->

    <!-- -------------------------------------------------------------- -->
    <!-- --------------------- Lèvre supérieure --------------------- -->
    <!-- -------------------------------------------------------------- -->

    <div id="levreSuperieure" class="prestation-container closed">
      <button class="prestation-header" onclick="onPrestationClick('levreSuperieure')">
        <div class="prestation-header-text">
          <span>Lèvre supérieure</span><span>9€</span>
        </div>
        <img id="levreSuperieureCaret" src="medias/images/font-awsome/caret-down.svg" />
      </button>

      <div class="separator"></div>
      
      <div class="description-container">
        <span>Épilation à la cire chaude</span>
        <span>Finitions à la pince à épiler</span>
      </div>

      <div class="images-container">
      </div>
    </div>

    <!-- -------------------------------------------------------------- -->
    <!-- --------------------- Menton --------------------- -->
    <!-- -------------------------------------------------------------- -->

    <div id="menton" class="prestation-container closed">
      <button class="prestation-header" onclick="onPrestationClick('menton')">
        <div class="prestation-header-text">
          <span>Menton</span><span>9€</span>
        </div>
        <img id="mentonCaret" src="medias/images/font-awsome/caret-down.svg" />
      </button>

      <div class="separator"></div>
      
      <div class="description-container">
        <span>Épilation à la cire chaude</span>
        <span>Finitions à la pince à épiler</span>
      </div>

      <div class="images-container">
      </div>
    </div>

    <!-- -------------------------------------------------------------- -->
    <!-- --------------------- Sourcils --------------------- -->
    <!-- -------------------------------------------------------------- -->

    <div id="sourcils" class="prestation-container closed">
      <button class="prestation-header" onclick="onPrestationClick('sourcils')">
        <div class="prestation-header-text">
          <span>Sourcils</span><span>9€</span>
        </div>
        <img id="sourcilsCaret" src="medias/images/font-awsome/caret-down.svg" />
      </button>

      <div class="separator"></div>
      
      <div class="description-container">
        <span>Épilation à la cire chaude</span>
        <span>Finitions à la pince à épiler</span>
      </div>

      <div class="images-container">
      </div>
    </div>

    <!-- -------------------------------------------------------------- -->
    <!-- --------------------- Forfait x2 --------------------- -->
    <!-- -------------------------------------------------------------- -->

    <div id="forfaitx2" class="prestation-container closed">
      <button class="prestation-header" onclick="onPrestationClick('forfaitx2')">
        <div class="prestation-header-text">
          <span>Forfait x2</span><span>16€</span>
        </div>
        <img id="forfaitx2Caret" src="medias/images/font-awsome/caret-down.svg" />
      </button>

      <div class="separator"></div>
      
      <div class="description-container">
        <span>2 épilations au choix</span>
      </div>

      <div class="images-container">
      </div>
    </div>

    <!-- -------------------------------------------------------------- -->
    <!-- --------------------- Forfait x3 --------------------- -->
    <!-- -------------------------------------------------------------- -->

    <div id="forfaitx3" class="prestation-container closed">
      <button class="prestation-header" onclick="onPrestationClick('forfaitx3')">
        <div class="prestation-header-text">
          <span>Forfait x3</span><span>25€</span>
        </div>
        <img id="forfaitx3Caret" src="medias/images/font-awsome/caret-down.svg" />
      </button>

      <div class="separator"></div>
      
      <div class="description-container">
        <span>Forfait complet épilation</span>
      </div>

      <div class="images-container">
      </div>
    </div>

    <!-- -------------------------------------------------------------- -->
    <!-- --------------------- Cours sourcils --------------------- -->
    <!-- -------------------------------------------------------------- -->

    <div id="coursSourcils" class="prestation-container closed">
      <button class="prestation-header" onclick="onPrestationClick('coursSourcils')">
        <div class="prestation-header-text">
          <span>Cours sourcils</span><span>25€</span>
        </div>
        <img id="coursSourcilsCaret" src="medias/images/font-awsome/caret-down.svg" />
      </button>

      <div class="separator"></div>
      
      <div class="description-container">
        <span>Styliser vos sourcils en fonction de la morphilogie de votre visage (épilation, forme et maquillage)</span>
      </div>

      <div class="images-container">
      </div>
    </div>

  </div>

  <!-- ==================================================================================== -->
  <!-- ------------------------------------- ENFANTS -------------------------------------- -->
  <!-- ==================================================================================== -->

  <div id="enfants" class="prestation-group-container closed">

    <!-- --------------------------- HEADER --------------------------- -->

    <button id="enfants-bloc-header" class="prestation-group-header" onclick="onPrestationGroupClick('enfants')">
      <div class="group-name-container">
        <span>Enfants</span>
        <img id="enfantsCaret" src="medias/images/font-awsome/caret-down.svg" />
      </div>
    </button>

    <!-- ------------------------ PRESTATIONS ------------------------- -->

    <!-- -------------------------------------------------------------- -->
    <!-- --------------------- Maquillage (Particuliers) --------------------- -->
    <!-- -------------------------------------------------------------- -->

    <div id="enfantsParticuliers" class="prestation-container closed">
      <button class="prestation-header" onclick="onPrestationClick('enfantsParticuliers')">
        <div class="prestation-header-text">
          <span>Maquillage<br>(Particuliers)</span><span>sur devis</span>
        </div>
        <img id="enfantsParticuliersCaret" src="medias/images/font-awsome/caret-down.svg" />
      </button>

      <div class="separator"></div>
      
      <div class="description-container">
        <span>Maquillage d'environ 15min</span>
        <span>3 enfants minimum, 8€/enfant</span>
      </div>

      <div class="images-container">
        <button onclick="onPictureClick(13, 0)" class="prestation-picture" style="background-image: url('./medias/images/prestations/enfants.webp');"></button>
        <button onclick="onPictureClick(13, 1)" class="prestation-picture" style="background-image: url('./medias/images/prestations/enfants-2.webp');"></button>
        <button onclick="onPictureClick(13, 2)" class="prestation-picture" style="background-image: url('./medias/images/prestations/enfants-3.webp');"></button>
        <button onclick="onPictureClick(13, 3)" class="prestation-picture" style="background-image: url('./medias/images/prestations/enfants-4.webp');"></button>
        <button onclick="onPictureClick(13, 4)" class="prestation-picture" style="background-image: url('./medias/images/prestations/enfants-5.webp');"></button>
        <button onclick="onPictureClick(13, 5)" class="prestation-picture" style="background-image: url('./medias/images/prestations/enfants-6.webp');"></button>
        <button onclick="onPictureClick(13, 6)" class="prestation-picture" style="background-image: url('./medias/images/prestations/enfants-7.webp');"></button>
        <button onclick="onPictureClick(13, 7)" class="prestation-picture" style="background-image: url('./medias/images/prestations/enfants-8.webp');"></button>
      </div>
    </div>

    <!-- -------------------------------------------------------------- -->
    <!-- --------------------- Maquillage (Entreprise) --------------------- -->
    <!-- -------------------------------------------------------------- -->

    <div id="enfantsEntreprise" class="prestation-container closed">
      <button class="prestation-header" onclick="onPrestationClick('enfantsEntreprise')">
        <div class="prestation-header-text">
          <span>Maquillage<br>(Entreprise)</span><span>sur devis</span>
        </div>
        <img id="enfantsEntrepriseCaret" src="medias/images/font-awsome/caret-down.svg" />
      </button>

      <div class="separator"></div>
      
      <div class="description-container">
        <span>Forfait à l'heure (2h minimum, 55€/heure)</span>
        <span>Déplacement (hors Calais) : 0,35€/km</span>
      </div>

      <div class="images-container">
        <button onclick="onPictureClick(14, 0)" class="prestation-picture" style="background-image: url('./medias/images/prestations/enfants-9.webp');"></button>
        <button onclick="onPictureClick(14, 1)" class="prestation-picture" style="background-image: url('./medias/images/prestations/enfants-10.webp');"></button>
        <button onclick="onPictureClick(14, 2)" class="prestation-picture" style="background-image: url('./medias/images/prestations/enfants-11.webp');"></button>
        <button onclick="onPictureClick(14, 3)" class="prestation-picture" style="background-image: url('./medias/images/prestations/enfants-12.webp');"></button>
        <button onclick="onPictureClick(14, 4)" class="prestation-picture" style="background-image: url('./medias/images/prestations/enfants-13.webp');"></button>
        <button onclick="onPictureClick(14, 5)" class="prestation-picture" style="background-image: url('./medias/images/prestations/enfants-14.webp');"></button>
        <button onclick="onPictureClick(14, 6)" class="prestation-picture" style="background-image: url('./medias/images/prestations/enfants-15.webp');"></button>
        <button onclick="onPictureClick(14, 7)" class="prestation-picture" style="background-image: url('./medias/images/prestations/enfants-16.webp');"></button>
        <button onclick="onPictureClick(14, 8)" class="prestation-picture" style="background-image: url('./medias/images/prestations/enfants-17.webp');"></button>
      </div>
    </div>

  </div>

  <!-- ==================================================================================== -->
  <!-- -------------------------------------- COURS --------------------------------------- -->
  <!-- ==================================================================================== -->

  <div id="cours" class="prestation-group-container closed">

    <!-- --------------------------- HEADER --------------------------- -->

    <button id="cours-bloc-header" class="prestation-group-header" onclick="onPrestationGroupClick('cours')">
      <div class="group-name-container">
        <span>Cours</span>
        <img id="coursCaret" src="medias/images/font-awsome/caret-down.svg" />
      </div>
    </button>

    <!-- ------------------------ PRESTATIONS ------------------------- -->

    <!-- -------------------------------------------------------------- -->
    <!-- --------------------- Cours Maquillage Jour --------------------- -->
    <!-- -------------------------------------------------------------- -->

    <div id="coursMaquilageJour" class="prestation-container closed">
      <button class="prestation-header" onclick="onPrestationClick('coursMaquilageJour')">
        <div class="prestation-header-text">
          <span>Cours maquillage jour<br>(Individuel ou collectif)</span><span>35€<span>/pers.</span></span>
        </div>
        <img id="coursMaquilageJourCaret" src="medias/images/font-awsome/caret-down.svg" />
      </button>

      <div class="separator"></div>
      
      <div class="description-container">
        <span>
          Durant le cours de maquillage jour, vous découvrirez les techniques fondamentales pour un maquillage naturel.<br>
          Je vous guiderai à travers chaque étape en utilisant vos propres produits et matériel.<br>
          Au programme : le teint, les yeux et les lèvres.
        </span>
      </div>

      <div class="images-container">
      </div>
    </div>

    <!-- -------------------------------------------------------------- -->
    <!-- --------------------- Cours Maquillage Soirée --------------------- -->
    <!-- -------------------------------------------------------------- -->

    <div id="coursMaquilageSoiree" class="prestation-container closed">
      <button class="prestation-header" onclick="onPrestationClick('coursMaquilageSoiree')">
        <div class="prestation-header-text">
          <span>Cours maquillage soirée<br>(Individuel ou collectif)</span><span>40€<span>/pers.</span></span>
        </div>
        <img id="coursMaquilageSoireeCaret" src="medias/images/font-awsome/caret-down.svg" />
      </button>

      <div class="separator"></div>
      
      <div class="description-container">
        <span>
          Durant le cours de maquillage soirée, réservé aux personnes ayant déjà des bases en maquillage, nous créerons ensemble un look plus intense.<br>
          Vous utiliserez vos propres produits et matériel tout en apprenant les techniques avancées pour un maquillage de soirée.<br>
          Au programme : le teint, le contouring, les yeux et les lèvres
        </span>
      </div>

      <div class="images-container">
      </div>
    </div>

    <!-- -------------------------------------------------------------- -->
    <!-- --------------------- Cours Personnalisé --------------------- -->
    <!-- -------------------------------------------------------------- -->

    <div id="coursPersonnalise" class="prestation-container closed">
      <button class="prestation-header" onclick="onPrestationClick('coursPersonnalise')">
        <div class="prestation-header-text">
          <span>Cours personnalisé<br>(Individuel ou collectif)</span><span>sur devis</span>
        </div>
        <img id="coursPersonnaliseCaret" src="medias/images/font-awsome/caret-down.svg" />
      </button>

      <div class="separator"></div>
      
      <div class="description-container">
        <span>
          Dans notre cours de maquillage personnalisé, nous nous concentrerons sur votre préparation pour des événements spécifiques tels qu'un gala de danse, une pièce de théâtre ou encore un mariage.
          Ensemble, nous créerons un look adapté à l'occasion, en utilisant vos produits et équipements.
          Au programme : des techniques spécialisées pour le teint, les yeux et les lèvres.
        </span>
      </div>

      <div class="images-container">
      </div>
    </div>

    <!-- -------------------------------------------------------------- -->
    <!-- --------------------- Cours de Colorimétrie --------------------- -->
    <!-- -------------------------------------------------------------- -->

    <div id="coursColorimetrie" class="prestation-container closed">
      <button class="prestation-header" onclick="onPrestationClick('coursColorimetrie')">
        <div class="prestation-header-text">
          <span>Cours de colorimétrie<br>(Individuel ou collectif)</span><span>50€<span>/pers.</span></span>
        </div>
        <img id="coursColorimetrieCaret" src="medias/images/font-awsome/caret-down.svg" />
      </button>

      <div class="separator"></div>
      
      <div class="description-container">
        <span>
          Durant le cours de colorimétrie, vous découvrirez comment certaines couleurs peuvent mieux mettre en valeur votre teint que d'autres.<br>
          Je vous guiderai dans le choix des couleurs adaptées à votre teint pour les vêtements, le maquillage et les bijoux, afin de sublimer votre apparence. 
        </span>
      </div>

      <div class="images-container">
      </div>
    </div>

    <!-- -------------------------------------------------------------- -->
    <!-- --------------------- Masterclass --------------------- -->
    <!-- -------------------------------------------------------------- -->

    <div id="masterclass" class="prestation-container closed">
      <button class="prestation-header" onclick="onPrestationClick('masterclass')">
        <div class="prestation-header-text">
          <span>Masterclass<br>(Individuel ou collectif)</span><span>25€<span>/pers.</span></span>
        </div>
        <img id="masterclassCaret" src="medias/images/font-awsome/caret-down.svg" />
      </button>

      <div class="separator"></div>
      
      <div class="description-container">
        <span>
          Durant cette masterclasse dédiée à la mise en beauté du regard, vous apprendrez comment sublimer vos yeux en fonction de leur couleur et de leur forme.<br>
          Nous explorerons les techniques et les astuces pour mettre en valeur vos yeux.</span>
      </div>

      <div class="images-container">
      </div>
    </div>

    <!-- -------------------------------------------------------------- -->
    <!-- --------------------- EVJF --------------------- -->
    <!-- -------------------------------------------------------------- -->

    <div id="evjf" class="prestation-container closed">
      <button class="prestation-header" onclick="onPrestationClick('evjf')">
        <div class="prestation-header-text">
          <span>E.V.J.F.</span><span>sur devis</span>
        </div>
        <img id="evjfCaret" src="medias/images/font-awsome/caret-down.svg" />
      </button>

      <div class="separator"></div>
      
      <div class="description-container">
        <span>
          Choisissez parmi les cours proposés, avec la possibilité de combiner deux sessions pour une expérience encore plus enrichissante.<br>
          De plus, offrez à la future mariée et à ses amies la possibilité de découvrir la collection de bijoux de Victoria, avec la participation d'une <a href="https://www.facebook.com/profile.php?id=100077311025019">conseillère</a> experte qui pourra également réaliser des perçages d'oreilles.
        </span>
      </div>

      <div class="images-container">
      </div>
    </div>

  </div>

  <div class="ghost-footer"></div>
`;