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

export const merchEstelario = [
    {id: 1, 
    title: 'merchEstelario con logo',
    price: 15000,
    description: 'mercaderia con logo de la artista', 
    cantidades: 10,
    images: [shirtIMG,
        abc,
        shirtIMG,
        shirtIMG,
        shirtIMG,
        shirtIMG,
    ],
    alt:'merchEstelario1'
    },
    {id: 2,
    title: 'merchEstelario con logo',
    price: 25000,
    description: 'mercaderia con logo de la artista',
    cantidades: 10,
    images: [shirtIMG,
        shirtIMG,
        shirtIMG,
        shirtIMG,
        shirtIMG,
        shirtIMG,
    ],
    alt:'merchEstelario2'
    },
    {id: 3,
        title: 'merchEstelario con logo',
        price: 5000,
        description: 'mercaderia con logo de la artista',
        cantidades: 10,
        images: [shirtIMG,
            shirtIMG,
            shirtIMG,
            shirtIMG,
            shirtIMG,
            shirtIMG,
    ],
    alt:'merchEstelario3'
    },
    {id: 4,
        title: 'merchEstelario con logo',
        price: 5500,
        description: 'mercaderia con logo de la artista',
        cantidades: 10,
        images: [shirtIMG,
            shirtIMG,
            shirtIMG,
            shirtIMG,
            shirtIMG,
            shirtIMG,
    ],
    alt:'merchEstelario4'
    },
    {id: 5,
        title: 'merchEstelario con logo',
        price: 10300,
        description: 'mercaderia con logo de la artista',
        cantidades: 10,
        images: [shirtIMG,
            shirtIMG,
            shirtIMG,
            shirtIMG,
            shirtIMG,
            shirtIMG,
    ],
    alt:'merchEstelario5'
    }
];

export const merchJasal = [
    {id: 1, 
        title: 'merchJasal con logo',
        price: 15000,
        description: 'mercaderia con logo de la artista', 
        cantidades: 10,
        images: [shirtIMG,
            abc,
            shirtIMG,
            shirtIMG,
            shirtIMG,
            shirtIMG,
        ],
        alt:'merchJasal1'
        },
        {id: 2,
        title: 'merchJasal con logo',
        price: 25000,
        description: 'mercaderia con logo de la artista',
        cantidades: 10,
        images: [shirtIMG,
            shirtIMG,
            shirtIMG,
            shirtIMG,
            shirtIMG,
            shirtIMG,
        ],
        alt:'merchJasal2'
        },
        {id: 3,
            title: 'merchJasal con logo',
            price: 5000,
            description: 'mercaderia con logo de la artista',
            cantidades: 10,
            images: [shirtIMG,
                shirtIMG,
                shirtIMG,
                shirtIMG,
                shirtIMG,
                shirtIMG,
        ],
        alt:'merchJasal3'
        }
];

const carritoLocalStorage = {};
// la guardo en el localStorage
// localStorage.setItem("itemsCarrito",JSON.stringify(carritoLocalStorage));