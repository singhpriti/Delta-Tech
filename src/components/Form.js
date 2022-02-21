import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUsers, handleShown } from '../store/Actions';


export const Form = () => {
    const dispatch = useDispatch();
    const [detail, setDetail] = useState({
        name: "",
        company: "",
        status: "",
        notes: "",
    });

    const handleInputChange = (e) => {
        let { name, value } = e.target;
        setDetail({ ...detail, [name]: value });
        console.log(detail);
    };

    const handleSubmit = (e) => {
        dispatch(addUsers(detail));
        console.log("heyyyyyyyyy");
        dispatch(handleShown(false));
        e.preventDefault();
    }


    const closeModal = () => {
        dispatch(handleShown(false));
    }
    return (

        <form onSubmit={(e) => handleSubmit(e)}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input name="name" className="form-control" onChange={(e) => handleInputChange(e)} />
            </div>

            <div className="form-group">
                <label htmlFor="company">Company</label>
                <input name="company" className="form-control" onChange={(e) => handleInputChange(e)} />
            </div>

            <div className="form-group">
                <label htmlFor="status">Status</label>
                <input name="status" className="form-control" onChange={(e) => handleInputChange(e)} />
            </div>

            <div className="form-group">
                <label htmlFor="notes">Notes</label>
                <input name="notes" className="form-control" onChange={(e) => handleInputChange(e)} />
            </div>

            <div className="form-group button-div">
                <button className="form-control" type="submit">
                    Submit
                </button>
                <button onClick={() => closeModal()} className="button">
                    Close
                </button>
            </div>
        </form>
    );
};
export default Form;