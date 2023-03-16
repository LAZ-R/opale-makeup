export const PRESTATIONS = [
    {
        category_name: 'Maquillages',
        prestations: [
            {
                id: 'MJN',
                name: 'Maquillage jour',
                version: 'Naturel',
                description: 'Teint, yeux, lèvres',
                duration: 30,
                price: 15,
                option: null,
                pictures: [
                    'jour', 'jour-2', 'jour-3', 'jour-4',
                ] 
            },
            {
                id: 'MJS',
                name: 'Maquillage jour',
                version: 'Sophistiqué',
                description: 'Teint, sourcils, yeux, lèvres',
                duration: 40,
                price: 20,
                option: null,
                pictures: [
                    'jour-sophistique', 'jour-sophistique-2', 'jour-sophistique-3', 'jour-sophistique-4',
                ] 
            },
            {
                id: 'MS',
                name: 'Maquillage soirée',
                version: null,
                description: 'Teint, contouring, sourcils, yeux, lèvres',
                duration: 45,
                price: 30,
                option: '+ 5€ pour faux-cils<br>(implants ou franges)',
                pictures: [
                    'soiree-2', 'soiree', 'soiree-3', 'soiree-4',
                ] 
            },
            {
                id: 'MAE',
                name: 'Maquillage anniversaire enfant',
                version: null,
                description: '10/15min par enfant<br>3 enfants minimum',
                duration: 45,
                price: 20,
                option: '+ 8€ par enfant supplémentaire',
                pictures: [
                    'enfants',
                    'enfants-2',
                    'enfants-3',
                    'enfants-4',
                    'enfants-5',
                    'enfants-6',
                    'enfants-7',
                    'enfants-8',
                ] 
            },
            {
                id: 'MEVN',
                name: 'Maquillage évènementiel',
                version: 'Halloween, carnaval, kermesse...',
                description: null,
                duration: null,
                price: null,
                option: 'Durée et tarif selon demande',
                pictures: [
                    'evenementiel', 'evenementiel-2', 'evenementiel-3',
                ] 
            },
        ]
    },
    {
        category_name: 'Mariage',
        prestations: [
            {
                id: 'MMN',
                name: 'Maquillage mariée<br>+ un essai',
                version: 'Naturel',
                description: 'Teint, sourcils, yeux, faux-cils (implants), lèvres',
                duration: 60,
                price: 70,
                option: null,
                pictures: [
                    'mariee-naturel', 'mariee-naturel-2', 'mariee-naturel-3', 'mariee-naturel-4',
                ] 
            },
            {
                id: 'MMS',
                name: 'Maquillage mariée<br>+ un essai',
                version: 'Sophistiqué',
                description: 'Teint, contouring, sourcils, yeux, faux-cils (implants ou franges), lèvres',
                duration: 75,
                price: 90,
                option: null,
                pictures: [
                    'mariage-sophistique', 'mariage-sophistique-2', 'mariage-sophistique-3', 'mariage-sophistique-4','mariage-sophistique-5',
                ] 
            },
            {
                id: 'FMNL',
                name: 'Forfait mariée<br>+ un essai',
                version: 'Maquillage naturel + coiffure lâchée',
                description: '',
                duration: 105,
                price: 95,
                option: '+ 5€ si déco cheveux',
                pictures: [
                    'laches', 'laches-3', 'laches-5',
                ] 
            },
            {
                id: 'FMNA',
                name: 'Forfait mariée<br>+ un essai',
                version: 'Maquillage naturel + coiffure attachée',
                description: '',
                duration: 135,
                price: 105,
                option: '+ 5€ si déco cheveux',
                pictures: [
                    'attaches', 'attaches-5', 'attaches-3', 'attaches-7',
                ] 
            },
            {
                id: 'FMSL',
                name: 'Forfait mariée<br>+ un essai',
                version: 'Maquillage sophistiqué + coiffure lâchée',
                description: '',
                duration: 120,
                price: 115,
                option: '+ 5€ si déco cheveux',
                pictures: [
                    'laches-2', 'laches-4', 'laches-6',
                ] 
            },
            {
                id: 'FMSA',
                name: 'Forfait mariée<br>+ un essai',
                version: 'Maquillage sophistiqué + coiffure attachée',
                description: '',
                duration: 165,
                price: 125,
                option: '+ 5€ si déco cheveux',
                pictures: [
                    'attaches-6', 'attaches-4', 'attaches-2', 'attaches-8',
                ] 
            },
            {
                id: 'MI',
                name: 'Maquillage invitée',
                version: 'Maquillage naturel',
                description: 'Teint, yeux, lèvres',
                duration: 45,
                price: 25,
                option: null,
                pictures: [
                    'jour', 'jour', 'jour', 'jour',
                ] 
            },
            {
                id: 'FI',
                name: 'Forfait invitée',
                version: 'Maquillage naturel + chignon classique "mariage"',
                description: null,
                duration: 90,
                price: 45,
                option: null,
                pictures: [
                    'forfait-invites', 'forfait-invites', 'forfait-invites', 'forfait-invites',
                ] 
            },
        ]
    },
    {
        category_name: 'Cours de maquillage',
        prestations: [
            {
                id: 'CIMJ',
                name: 'Cours individuel',
                version: 'Maquillage jour',
                description: 'Explication et démonstration des étapes sur un côté du visage, reproduction par le participant sur l\'autre côté à chaque étape.',
                duration: 60,
                price: 30,
                option: null,
                pictures: [
                    'cours1', 'cours1', 'cours1', 'cours1',
                ] 
            },
            {
                id: 'CIMS',
                name: 'Cours individuel',
                version: 'Maquillage soirée',
                description: 'Explication et démonstration des étapes sur un côté du visage, reproduction par le participant sur l\'autre côté à chaque étape.',
                duration: 75,
                price: 35,
                option: null,
                pictures: [
                    'cours2', 'cours2', 'cours2', 'cours2',
                ] 
            },
            {
                id: 'CC',
                name: 'Cours collectif',
                version: null,
                description: '3 personnes - Maquillage jour<br>1ère heure: Démonstration et explications du maquillage sur la moitié du visage du volontaire.<br>2ème heure: Les participants se maquillent eux-mêmes en appliquant les explications, avec l\'aide du maquilleur.',
                duration: 120,
                price: 75,
                option: '+ 20€ par participant supplémentaire',
                pictures: [
                    'cours3', 'cours3', 'cours3', 'cours3',
                ] 
            },
        ]
    },
]