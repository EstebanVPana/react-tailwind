export const products = [
    {
        id: 1,
        name: 'Vinilo madonna',
        price: 35000,
        despcription: 'Vinilo madonna/ confessions on a dance floor pink vinyl 2lp',
        stock: 100,
        img: "https://dojiw2m9tvv09.cloudfront.net/36300/product/M_mado25055.jpg?29&time=1730771062",
        category: 'vinilo',
    },
    {
        id: 2,
        name: 'Vinilo michael jackson',
        price: 200000,
        despcription: 'Vinilo michael jackson/ thriller 25th anniversary limited edition 2lp',
        stock: 78,
        img: "https://dojiw2m9tvv09.cloudfront.net/36300/product/M_michael38708.jpg?29&time=1730771062",
        category: 'vinilo',
    },
    {
        id: 3,
        name: 'Vinilo nirvana',
        price: 150000,
        despcription: 'Vinilo nirvana/ mtv unplugged in new york 2lp',
        stock: 45,
        img: "https://dojiw2m9tvv09.cloudfront.net/36300/product/M_6025773073482710.jpg?29&time=1730771062",
        category: 'vinilo',
    },
    {
        id: 4,
        name: 'Vinilo pink floyd',
        price: 89000,
        despcription: 'Vinilo pink floyd/ the division bell remastered 2lp',
        stock: 18,
        img: "https://dojiw2m9tvv09.cloudfront.net/36300/product/M_25646293282848.jpg?29&time=1730771062",
        category: 'vinilo',
    },
    {
        id: 5,
        name: 'Vinilo the smiths',
        price: 43000,
        despcription: 'Vinilo the smiths/ the queen is dead 1lp',
        stock: 35,
        img: "https://dojiw2m9tvv09.cloudfront.net/36300/product/M_smith46245.jpg?29&time=1730771062",
        category: 'vinilo',
    },
    {
        id: 6,
        name: 'Vinilo marillion',
        price: 299000,
        despcription: 'Vinilo marillion/ seasons end deluxe edition box set 5lp',
        stock: 45,
        img: "https://dojiw2m9tvv09.cloudfront.net/36300/product/M_r-26861306-1682332035-67250794.jpg?29&time=1730772137",
        category: 'vinilo',
    },
    {
        id: 7,
        name: 'Vinilo green day',
        price: 41000,
        despcription: 'Vinilo green day/ nimrod. xxv 5lp',
        stock: 65,
        img: "https://dojiw2m9tvv09.cloudfront.net/36300/product/M_0936248730062879.jpg?29&time=1730772137",
        category: 'vinilo',
    },
    {
        id: 8,
        name: 'Vinilo los jaivas',
        price: 29000,
        despcription: 'Vinilo los jaivas/ obras cumbres box 4lp',
        stock: 32,
        img: "https://dojiw2m9tvv09.cloudfront.net/36300/product/M_r-8963228-1472352336-1050-jpeg9680.jpg?29&time=1730772137",
        category: 'vinilo',
    },
    {
        id: 9,
        name: 'Vinilo nirvana',
        price: 200000,
        despcription: 'Vinilo nirvana/ nevermind (30th anniversary edition) vinil box 8lp',
        stock: 34,
        img: "https://dojiw2m9tvv09.cloudfront.net/36300/product/M_r-23126063-1653665110-69076164.jpg?29&time=1730772288",
        category: 'vinilo',
    },
    {
        id: 10,
        name: 'Vinilo green day',
        price: 32000,
        despcription: 'Vinilo green day/ nimrod. xxv (silver vinyl) 5lp',
        stock: 57,
        img: "https://dojiw2m9tvv09.cloudfront.net/36300/product/M_0936248730067499.jpg?29&time=1730772288",
        category: 'vinilo'
    },
    {
        id: 11,
        name: 'Vinilo soda stereo',
        price: 140000,
        despcription: 'Vinilo soda stereo/ caja negra box 8lp',
        stock: 86,
        img: "https://dojiw2m9tvv09.cloudfront.net/36300/product/M_r-10607553-1518645173-9590-jpeg2760.jpg?29&time=1730772407",
        category: 'vinilo',
    },
    {
        id: 12,
        name: 'Vinilo fleetwood mac',
        price: 21000,
        despcription: 'Vinilo fleetwood mac/ fleetwood mac 1969 - 1972 5lp',
        stock: 100,
        img: "https://dojiw2m9tvv09.cloudfront.net/36300/product/M_fleetwoodmac2202.jpg?29&time=1730772407",
        category: 'vinilo',
    },
    {
        id: 13,
        name: 'Audífonos Lenovo Gm2 Pro',
        price: 8023,
        despcription: 'Audífonos Lenovo Gm2 Pro Inalambrico Gaming Deportivos',
        stock: 130,
        img: "https://http2.mlstatic.com/D_Q_NP_2X_856457-MLU79120806779_092024-E.webp",
        category: 'audífonos',
    },
    {
        id: 14,
        name: 'Audifonos Inalambricos Sleve Evo 2da Gen',
        price: 28990,
        despcription: 'Audifonos Inalambricos Bluetooth Sleve Evo 2da Gen Black Negro',
        stock: 1244,
        img: "https://http2.mlstatic.com/D_Q_NP_2X_832268-MLU72931771705_112023-E.webp",
        category: 'audífonos',
    },
    {
        id: 15,
        name: 'Auriculares inalámbricos Kotion Each G9000',
        price: 21000,
        despcription: 'Auriculares gamer inalámbricos Kotion Each G9000 black y blue con luz LED',
        stock: 100,
        img: "https://http2.mlstatic.com/D_Q_NP_2X_855175-MLU70005476196_062023-E.webp",
        category: 'audífonos',
    },
];

export const getProducts = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res(products);
        }, 2500);
    });
};

export const getProductById = (id) => {
    return new Promise((res) => {
        const productoFiltrado = products.find((product) => product.id === parseInt(id));
        setTimeout(() => {
            res(productoFiltrado);
        }, 2000);
    });
};
