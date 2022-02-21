import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUsers, loadUsers } from '../store/Actions';
import AddButton from './AddButton';

const Data = () => {
    const { filteredTable } = useSelector(state => state);
    const dispatch = useDispatch();
    const [data, setData] = useState([]);

    const handleDelete = (id) => {
        if (window.confirm("Are you sure wanted to remove the warehouse?")) {
            dispatch(deleteUsers(id));
            dispatch(loadUsers());
        }
    };

    useEffect(() => {
        setData(filteredTable)
    }, [filteredTable])

    useEffect(() => {
        dispatch(loadUsers());
    }, []);
    return (
        <>
            <h2>FootBall Players <span className="add-button"><AddButton /></span></h2>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Company</th>
                    <th>Status</th>
                    <th >Active</th>
                    <th>Delete</th>
                </tr>
                <tbody>
                    {
                        data?.map(item => (
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.company}</td>
                                <td>{item.status}</td>
                                <td>{item.notes}</td>
                                <td><button onClick={() => handleDelete(item.id)}>Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default Data