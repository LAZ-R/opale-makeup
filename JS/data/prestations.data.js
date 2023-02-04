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
                picture: 'jour.JPG'
            },
            {
                name: 'Maquillage jour',
                version: 'Sophistiqué',
                description: 'Teint, sourcils, yeux, lèvres',
                duration: 40,
                price: 20,
                option: null,
                picture: 'jour.JPG'
            },
            {
                name: 'Maquillage soirée',
                version: null,
                description: 'Teint, contouring, sourcils, yeux, lèvres, faux-cils',
                duration: 45,
                price: 30,
                option: '+ 5€ pour faux-cils (implants ou franges)',
                picture: 'soiree.JPG'
            },
            {
                name: 'Maquillage anniversaire enfant',
                version: null,
                description: '10/15min par enfant, 3 enfants minimum',
                duration: 45,
                price: 20,
                option: '+ 8€ par enfant supplémentaire',
                picture: 'enfants.JPG'
            },
            {
                name: 'Maquillage évènementiel',
                version: null,
                description: 'Halloween, carnaval, kermesse...',
                duration: null,
                price: null,
                option: 'Durée et tarif selon demande',
                picture: 'evenementiel.JPG'
            },
        ]
    },
    {
        category_name: 'Mariage',
        prestations: [
            {
                name: 'Maquillage mariée',
                version: 'Naturel (avec un essai préalable)',
                description: 'Teint, sourcils, yeux, faux-cils (implants), lèvres',
                duration: 60,
                price: 70,
                option: null,
                picture: 'mariee-naturel.JPG'
            },
            {
                name: 'Maquillage mariée',
                version: 'Sophistiqué (avec un essai préalable)',
                description: 'Teint, contouring, sourcils, yeux, faux-cils (implants ou franges), lèvres',
                duration: 75,
                price: 90,
                option: null,
                picture: 'mariee-sophistique.JPG'
            },
            {
                name: 'Forfait mariée',
                version: 'Maquillage naturel + coiffure lâchée (avec un essai préalable)',
                description: '',
                duration: 105,
                price: 95,
                option: '+ 5€ si déco cheveux',
                picture: 'mariee-cheveux-attaches.JPG'
            },
            {
                name: 'Forfait mariée',
                version: 'Maquillage naturel + coiffure attachée (avec un essai préalable)',
                description: '',
                duration: 135,
                price: 105,
                option: '+ 5€ si déco cheveux',
                picture: 'mariee-cheveux-attaches.JPG'
            },
            {
                name: 'Forfait mariée',
                version: 'Maquillage sophistiqué + coiffure lâchée (avec un essai préalable)',
                description: '',
                duration: 120,
                price: 115,
                option: '+ 5€ si déco cheveux',
                picture: 'mariee-cheveux-attaches.JPG'
            },
            {
                name: 'Forfait mariée',
                version: 'Maquillage sophistiqué + coiffure attachée (avec un essai préalable)',
                description: '',
                duration: 165,
                price: 125,
                option: '+ 5€ si déco cheveux',
                picture: 'mariee-cheveux-attaches.JPG'
            },
            {
                name: 'Maquillage invitée',
                version: null,
                description: 'Maquillage naturel',
                duration: 45,
                price: 25,
                option: null,
                picture: 'jour.JPG'
            },
            {
                name: 'Forfait invitée',
                version: null,
                description: 'Maquillage naturel + chignon classique "mariage"',
                duration: 90,
                price: 45,
                option: null,
                picture: 'forfait-invites.JPG'
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
                picture: ''
            },
            {
                name: 'Cours individuel',
                version: 'Maquillage soirée',
                description: 'Explication et démonstration des étapes sur un côté du visage, reproduction par le participant sur l\'autre côté',
                duration: 75,
                price: 35,
                option: null,
                picture: ''
            },
            {
                name: 'Cours collectif',
                version: null,
                description: 'Maquillage jour. Démonstration des étapes sur volontaire et explications généralistes, suivi par auto-application des concepts par les participant(e)s, et précisions selon morpohologies du visage.',
                duration: 120,
                price: 75,
                option: '+ 20€ par participant supplémentaire',
                picture: ''
            },
        ]
    },
]