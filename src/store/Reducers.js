const initialState = {
    user: null,
    table: [],
    filteredTable: [],
    isShown: false,
};

export default function tripReducer(state = initialState, action) {
    switch (action.type) {

        case 'FETCH_USER':
            return {
                ...state,
                user: action.payload
            };
        case 'ADD_USER':
        case 'DELETE_USER':
        case 'GET_DATA':
            return {
                ...state,
                table: action.payload,
                filteredTable: action.payload,
            };

        case 'FETCH_FILTER_DATA':
            return {
                ...state,
                filteredTable: action.payload.length !== 0 ? [...action.payload] : state.table
            };

        case 'FETCH_SORTED_DATA':
            return {
                ...state,
                filteredTable: action.payload.length !== 0 ? [...action.payload] : state.filteredTable
            };

        case 'SET_SHOWN':
            return {
                ...state,
                isShown: action.payload
            };

        default:
            // ALWAYS have a default case in a reducer
            return state;
    }
}