import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleShown } from '../store/Actions';
import Form from './Form'

const Modal = () => {
    const { isShown } = useSelector(state => state);
    const dispatch = useDispatch();
    const closeOnEscapeKeyDown = e => {
        if ((e.charCode || e.keyCode) === 27) {
            dispatch(handleShown(false));
        }
    };

    useEffect(() => {
        document.body.addEventListener("keydown", closeOnEscapeKeyDown);
        return function cleanup() {
            document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
        };
    }, []);



    return (
        <div className="modal" >
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h4 className="modal-title">ADD MEMBER</h4>
                </div>
                <div className="modal-body"><Form /></div>
            </div>
        </div>
    )
}

export default Modal