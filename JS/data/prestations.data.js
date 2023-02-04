export const PRESTATIONS = [
    {
        category_name: 'Maquillages',
        prestations: [
            {
                name: 'Maquillage jour',
                version: 'Naturel',
                description: 'Teint, yeux, lèvres',
                duration: 30,
                price: 15,
                option: null,
                picture: 'jour'
            },
            {
                name: 'Maquillage jour',
                version: 'Sophistiqué',
                description: 'Teint, sourcils, yeux, lèvres',
                duration: 40,
                price: 20,
                option: null,
                picture: 'jour'
            },
            {
                name: 'Maquillage soirée',
                version: null,
                description: 'Teint, contouring, sourcils, yeux, lèvres, faux-cils',
                duration: 45,
                price: 30,
                option: '+ 5€ pour faux-cils (implants ou franges)',
                picture: 'soiree'
            },
            {
                name: 'Maquillage anniversaire enfant',
                version: null,
                description: '10/15min par enfant, 3 enfants minimum',
                duration: 45,
                price: 20,
                option: '+ 8€ par enfant supplémentaire',
                picture: 'enfants'
            },
            {
                name: 'Maquillage évènementiel',
                version: null,
                description: 'Halloween, carnaval, kermesse...',
                duration: null,
                price: null,
                option: 'Durée et tarif selon demande',
                picture: 'evenementiel'
            },
        ]
    },
    {
        category_name: 'Mariage',
        prestations: [
            {
                name: 'Maquillage mariée + un essai',
                version: 'Naturel',
                description: 'Teint, sourcils, yeux, faux-cils (implants), lèvres',
                duration: 60,
                price: 70,
                option: null,
                picture: 'mariee-naturel'
            },
            {
                name: 'Maquillage mariée + un essai',
                version: 'Sophistiqué',
                description: 'Teint, contouring, sourcils, yeux, faux-cils (implants ou franges), lèvres',
                duration: 75,
                price: 90,
                option: null,
                picture: 'mariee-sophistique'
            },
            {
                name: 'Forfait mariée + un essai',
                version: 'Maquillage naturel + coiffure lâchée',
                description: '',
                duration: 105,
                price: 95,
                option: '+ 5€ si déco cheveux',
                picture: 'mariee-cheveux-attaches'
            },
            {
                name: 'Forfait mariée + un essai',
                version: 'Maquillage naturel + coiffure attachée',
                description: '',
                duration: 135,
                price: 105,
                option: '+ 5€ si déco cheveux',
                picture: 'mariee-cheveux-attaches'
            },
            {
                name: 'Forfait mariée + un essai',
                version: 'Maquillage sophistiqué + coiffure lâchée',
                description: '',
                duration: 120,
                price: 115,
                option: '+ 5€ si déco cheveux',
                picture: 'mariee-cheveux-attaches'
            },
            {
                name: 'Forfait mariée + un essai',
                version: 'Maquillage sophistiqué + coiffure attachée',
                description: '',
                duration: 165,
                price: 125,
                option: '+ 5€ si déco cheveux',
                picture: 'mariee-cheveux-attaches'
            },
            {
                name: 'Maquillage invitée',
                version: 'Maquillage naturel',
                description: 'Teint, yeux, lèvres',
                duration: 45,
                price: 25,
                option: null,
                picture: 'jour'
            },
            {
                name: 'Forfait invitée',
                version: 'Maquillage naturel + chignon classique "mariage"',
                description: null,
                duration: 90,
                price: 45,
                option: null,
                picture: 'forfait-invites'
            },
        ]
    },
    {
        category_name: 'Cours de maquillage',
        prestations: [
            {
                name: 'Cours individuel',
                version: 'Maquillage jour',
                description: 'Explication et démonstration des étapes sur un côté du visage, reproduction par le participant sur l\'autre côté',
                duration: 60,
                price: 30,
                option: null,
                picture: 'https://static.wixstatic.com/media/11062b_6cb5f8f1a81941d187804a376d4a321d~mv2.jpg/v1/crop/x_1164,y_0,w_2672,h_3333/fill/w_640,h_738,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Application%20de%20fard%20%C3%A0%20paupi%C3%A8res.jpg'
            },
            {
                name: 'Cours individuel',
                version: 'Maquillage soirée',
                description: 'Explication et démonstration des étapes sur un côté du visage, reproduction par le participant sur l\'autre côté',
                duration: 75,
                price: 35,
                option: null,
                picture: 'https://www.shoppingaddict.fr/blogs/media/articles/articles/cours-de-maquillage-en-ligne.jpg'
            },
            {
                name: 'Cours collectif',
                version: null,
                description: 'Maquillage jour. Démonstration des étapes sur volontaire et explications généralistes, suivi par auto-application des concepts par les participant(e)s, et précisions selon morpohologies du visage.',
                duration: 120,
                price: 75,
                option: '+ 20€ par participant supplémentaire',
                picture: 'https://i0.wp.com/www.ifdmrelooking.com/wp-content/uploads/2020/04/atelier-auto-maquillage-scaled.jpg?fit=2560%2C1703&ssl=1'
            },
        ]
    },
]