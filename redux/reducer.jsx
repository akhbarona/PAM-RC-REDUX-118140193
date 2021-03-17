import { ADD_NAME, DELETE_NAME } from './type';
const initialState = {
    namaList: []
}

 const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NAME:
            return {...state,namaList: state.namaList.concat(action.data)
        };
        case DELETE_NAME:
            return {...state,namaList: state.namaList.filter((value,index) => index !== action.data)};
        default:
            return state;
    }
}

export default reducer;
