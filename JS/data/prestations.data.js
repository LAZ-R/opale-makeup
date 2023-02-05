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
                    'jour', 'jour', 'jour', 'jour', 'jour', 'jour', 'jour', 'jour', 'jour'
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
                    'jour'
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
                    'soiree'
                ] 
            },
            {
                id: 'MAE',
                name: 'Maquillage anniversaire enfant',
                version: null,
                description: '10/15min par enfant, 3 enfants minimum',
                duration: 45,
                price: 20,
                option: '+ 8€ par enfant supplémentaire',
                pictures: [
                    'enfants'
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
                    'evenementiel'
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
                    'mariee-naturel'
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
                    'mariee-sophistique'
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
                    'mariee-cheveux-attaches'
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
                    'mariee-cheveux-attaches'
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
                    'mariee-cheveux-attaches'
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
                    'mariee-cheveux-attaches'
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
                    'jour'
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
                    'forfait-invites'
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
                description: 'Explication et démonstration des étapes sur un côté du visage, reproduction par le participant sur l\'autre côté',
                duration: 60,
                price: 30,
                option: null,
                pictures: [
                    'https://static.wixstatic.com/media/11062b_6cb5f8f1a81941d187804a376d4a321d~mv2.jpg/v1/crop/x_1164,y_0,w_2672,h_3333/fill/w_640,h_738,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Application%20de%20fard%20%C3%A0%20paupi%C3%A8res.jpg'
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
                    'https://www.shoppingaddict.fr/blogs/media/articles/articles/cours-de-maquillage-en-ligne.jpg'
                ] 
            },
            {
                id: 'CC',
                name: 'Cours collectif',
                version: 'Maquillage jour',
                description: '3 personnes<br>1ère heure: Démonstration et explications du maquillage sur la moitié du visage du volontaire.<br>2ème heure: Les participants se maquillent eux-mêmes en appliquant les explications, avec l\'aide du maquilleur.',
                duration: 120,
                price: 75,
                option: '+ 20€ par participant supplémentaire',
                pictures: [
                    'https://i0.wp.com/www.ifdmrelooking.com/wp-content/uploads/2020/04/atelier-auto-maquillage-scaled.jpg?fit=2560%2C1703&ssl=1'
                ] 
            },
        ]
    },
]