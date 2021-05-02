const initialState = {
    dummyFilters:[
        {
            id:1,
            name:"Elektronik",
        },
        {
            id:2,
            name:"Hediyelik",
        },
        {
            id:3,
            name:"Moda, Aksesuar",
        },
        {
            id:4,
            name:"Çiçek",
        },
        {
            id:5,
            name:"Parfüm",
        },
    ],
    activeFilter:0,
    loading:true
};

export default function filterReducer(state = initialState, action){
    switch(action.type){
        case 'LOADING':
            return {...state, loading:true};
        case 'SET_ACTIVE_FILTER':
            return {...state, loading:false, activeFilter:action.payload};
        default:
            return state;
    }
}