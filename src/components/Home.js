import React, { useState } from 'react'
import Data from './Data'
import '../App.css';
import CheckBox from './CheckBox';
import Sort from './Sort';
import { useSelector } from 'react-redux';
import Modal from './Modal';

const Home = () => {
    const { isShown } = useSelector(state => state);
    return (
        <div className="container">
            {
                isShown ? <Modal /> : null
            }
            <div className="filter-div">
                <CheckBox />
                <Sort />
            </div>
            <Data />
        </div>

    )
}

export default Home