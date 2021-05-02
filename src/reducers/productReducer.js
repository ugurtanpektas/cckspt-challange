const initialState = {
    dummyProducts:[
        {
            id:1,
            name:"Z6 Akıllı Saat Kameralı Konuşma Garantili Sim Kartlı Bluetooth",
            category:1,
            image:"saat.png",
            price:399.99,
            isFreeCargo:true
        },
        {
            id:2,
            name:"Calvin Klein Euphoria EDP 100 ml Kadın Parfüm",
            category:5,
            image:"parfum.png",
            price:29.99,
            isFreeCargo:false
        },
        {
            id:3,
            name:"Gold Çizgili Vazoda 2 Dal Orkide Çiçeği",
            category:4,
            image:"cicek.png",
            price:59.99,
            isFreeCargo:true
        },
        {
            id:4,
            name:"925 Ayar Gümüş Çeyreklik Bileklik (Y)",
            category:3,
            image:"bileklik.png",
            price:129.99,
            isFreeCargo:false
        },
        {
            id:5,
            name:"Sailor SD-3160 Siyah Dağcı Seyahat Sırt Çantası 55 LT Outdoor-Trekking",
            category:2,
            image:"canta.png",
            price:229.99,
            isFreeCargo:true
        },
        {
            id:6,
            name:"Büyük Boy Metal Osmanlı Bizans Satranç Takımı Parlak ve Cev",
            category:2,
            image:"satranc.png",
            price:19.99,
            isFreeCargo:true
        }
    ],
    filteredProducts:[],
    listingProducts:[],
    loading:true
};

export default function productReducer(state = initialState, action){
    switch(action.type){
        case 'LOADING':
            return {...state, loading:true};
        case 'SET_LISTING_PRODUCTS':
            return {...state, loading:false, listingProducts:action.payload};
        case 'SET_FILTERED_PRODUCTS':
            return {...state, loading:false, filteredProducts:action.payload};
        default:
            return state;
    }
}