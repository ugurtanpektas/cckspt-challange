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
        },
        {
            id:7,
            name:"130 Cm Papyonlu Büyük Ayıcı (%100 Yerli)",
            category:2,
            image:"ayicik.png",
            price:89.99,
            isFreeCargo:true
        },
        {
            id:8,
            name:"925 Ayar Gümüş Dualı İsimli Nazar İgnesi",
            category:2,
            image:"nazar-ignesi.png",
            price:29.90,
            isFreeCargo:true
        },
        {
            id:9,
            name:"Özel Tatlar Çikolata Kutusu 300 gr",
            category:2,
            image:"bonnyfood.png",
            price:59.90,
            isFreeCargo:true
        },
        {
            id:10,
            name:"Kucak Dolusu Aşk 25 Kırmızı Gül Buketi",
            category:4,
            image:"gul.png",
            price:199.90,
            isFreeCargo:true
        }, {
            id:11,
            name:"22 ayar altın Çeyreklik Bileklik (Y)",
            category:3,
            image:"bileklik.png",
            price:159.90,
            isFreeCargo:false
        },
        {
            id:12,
            name:"Sailor SD-3160 Siyah Dağcı Seyahat Sırt Çantası 55 LT Outdoor-Trekking",
            category:2,
            image:"canta.png",
            price:229.99,
            isFreeCargo:true
        },
        {
            id:13,
            name:"Test Deneme Büyük Boy Metal Osmanlı Bizans Satranç Takımı Parlak ve Cev",
            category:2,
            image:"satranc.png",
            price:19.99,
            isFreeCargo:true
        },
        {
            id:14,
            name:"Z6 Deneme Test Farklı Akıllı Saat Kameralı Konuşma Garantili Sim Kartlı Bluetooth",
            category:1,
            image:"saat.png",
            price:399.99,
            isFreeCargo:true
        },
        {
            id:15,
            name:"Lorem ipsum dolar Euphoria EDP 100 ml Kadın Parfüm",
            category:5,
            image:"parfum.png",
            price:29.99,
            isFreeCargo:false
        },

        {
            id:16,
            name:"Çikolata kutusu ürün deneme",
            category:2,
            image:"bonnyfood.png",
            price:59.90,
            isFreeCargo:true
        },
        {
            id:17,
            name:"Sevgililer günü özel güller",
            category:4,
            image:"gul.png",
            price:119.90,
            isFreeCargo:true
        }, {
            id:18,
            name:"Şık özel tasarım bileklik",
            category:3,
            image:"bileklik.png",
            price:139.90,
            isFreeCargo:false
        },
        {
            id:19,
            name:"Dağcı çanta, trekking çantası",
            category:2,
            image:"canta.png",
            price:129.90,
            isFreeCargo:true
        },
        {
            id:20,
            name:"Hediyelik Satranç Osmanlı Motifli",
            category:2,
            image:"satranc.png",
            price:89.90,
            isFreeCargo:true
        },
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