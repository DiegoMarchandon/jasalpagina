import shirtIMG from '../assets/insertLogoShirt.jpg';
import abc from '../assets/in_search_of_sunrise_by_zerve.jpg';

export const imagenes = [
    {id: 1, src: 'https://i.imgur.com/S0qFIIE.jpeg', alt: 'Foto 1'},
    {id: 2, src: 'https://i.imgur.com/qZ5p8pD.jpeg', alt: 'Foto 2'},
    {id: 3, src: 'https://i.imgur.com/Yz3TFwG.jpeg', alt: 'Foto 3'},
    {id:4, src: 'https://i.imgur.com/ofp3qYN.jpeg', alt: 'Foto 4'},
    {id: 5, src: 'https://i.imgur.com/7DJ7fTB.jpeg', alt: 'Foto 5'}
];

// const IMGvalues = Object.values(imagenes);

// export default imagenes;

export const merch = [
    {id: 1, 
    title: 'Merch con logo',
    price: 15000,
    description: 'mercaderia con logo de la artista', 
    images: [shirtIMG,
        abc,
        shirtIMG,
        shirtIMG,
        shirtIMG,
        shirtIMG,
    ],
    alt:'merch1'
    },
    {id: 2,
    title: 'Merch con logo',
    price: 25000,
    description: 'mercaderia con logo de la artista',
    images: [shirtIMG,
        shirtIMG,
        shirtIMG,
        shirtIMG,
        shirtIMG,
        shirtIMG,
    ],
    alt:'merch2'
    },
    {id: 3,
        title: 'Merch con logo',
        price: 5000,
        description: 'mercaderia con logo de la artista',
        images: [shirtIMG,
            shirtIMG,
            shirtIMG,
            shirtIMG,
            shirtIMG,
            shirtIMG,
    ],
    alt:'merch3'
    },
    {id: 4,
        title: 'Merch con logo',
        price: 5500,
        description: 'mercaderia con logo de la artista',
        images: [shirtIMG,
            shirtIMG,
            shirtIMG,
            shirtIMG,
            shirtIMG,
            shirtIMG,
    ],
    alt:'merch4'
    },
    {id: 5,
        title: 'Merch con logo',
        price: 10300,
        description: 'mercaderia con logo de la artista',
        images: [shirtIMG,
            shirtIMG,
            shirtIMG,
            shirtIMG,
            shirtIMG,
            shirtIMG,
    ],
    alt:'merch5'
    }
];