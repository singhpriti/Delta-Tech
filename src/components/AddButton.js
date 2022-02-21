import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { handleShown } from '../store/Actions';

const AddButton = () => {
    const [shown, setShown] = useState(false);
    const dispatch = useDispatch();
    const handleClick = () => {
        setShown(prev => !prev);
        dispatch(handleShown(shown));
    }

    return (
        <button onClick={() => handleClick()}>+ Add Member</button>
    )
}

export default AddButton