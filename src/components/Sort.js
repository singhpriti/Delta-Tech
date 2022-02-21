import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchSortedData, fetchUser } from '../store/Actions';
import { sortData } from '../utils';
import Firebase from '../services/Firebase'

const Sort = () => {
    const [sortDirection, setSortDirection] = useState('ascending');
    const dispatch = useDispatch();
    const { filteredTable } = useSelector(state => state);
    const handleClick = () => {
        setSortDirection(prev => prev === 'ascending' ? ('descending') : ('ascending'))
        dispatch(fetchSortedData(sortData(filteredTable, sortDirection)));
    }
    const handleLogout = () => {
        Firebase.auth().signOut();
        dispatch(fetchUser(null))
    };
    return (
        <>
            <button onClick={() => handleClick()}>{`Sort (${sortDirection === 'ascending' ? "Active First" : "Inactive First"})`}</button>
            <button onClick={() => handleLogout()}>Log Out</button>
        </>
    )
}

export default Sort