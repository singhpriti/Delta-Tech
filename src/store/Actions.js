import axios from "axios";

const getData = (users) => ({
    type: 'GET_DATA',
    payload: users,
});


export const fetchSearchData = (data) => ({
    type: 'FETCH_SEARCH_DATA',
    payload: { data }
});

const userDeleted = () => ({
    type: 'DELETE_USER',
});

const userAdded = () => ({
    type: 'ADD_USER',
});

export const fetchUser = (data) => ({
    type: 'FETCH_USER',
    payload: data
});

export const handleShown = (data) => ({
    type: 'SET_SHOWN',
    payload: data
});

export const fetchFilterData = (data) => {

    return {
        type: 'FETCH_FILTER_DATA',
        payload: data,
    }
};

export const fetchSortedData = (data) => {
    console.log(data);
    return {
        type: 'FETCH_SORTED_DATA',
        payload: data
    }
};


export const loadUsers = () => {
    return function (dispatch) {
        axios
            .get(`${process.env.REACT_APP_API}`)
            .then((resp) => {
                console.log("resp", resp);
                dispatch(getData(resp.data));
            })
            .catch((error) => console.log(error));
    };
};

export const addUsers = (user) => {
    console.log(user);
    return function (dispatch) {
        axios
            .post(`${process.env.REACT_APP_API}`, user)
            .then((resp) => {
                console.log("resp", resp);
                dispatch(userAdded());
                dispatch(loadUsers());
            })
            .catch((error) => console.log(error));
    };
};

export const deleteUsers = (id) => {
    return function (dispatch) {
        axios
            .delete(`${process.env.REACT_APP_API}/${id}`)
            .then((resp) => {
                console.log("resp", resp);
                dispatch(userDeleted());
                dispatch(loadUsers());
            })
            .catch((error) => console.log(error));
    };
};