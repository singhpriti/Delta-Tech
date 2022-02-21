import React, { useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchFilterData, loadUsers } from '../store/Actions';
import { cityFilter } from '../utils';


const CheckBox = () => {
    const dispatch = useDispatch();
    const { table } = useSelector(state => state);
    console.log(table)
    //const [checkData, setCheckData] = useState([]);
    const [check, setCheck] = useState({
        allChecked: false,
        list: [],
        checkedValue: []
    })

    //dispatch(loadUsers());

    useEffect(() => {
        console.log(cityFilter(table));

        console.log(check.checkedValue.length)
        if (check.checkedValue.length == 0) {
            let filteredData = table
            console.log(filteredData);
            dispatch(fetchFilterData(filteredData));
        }
        else {
            console.log(table)
            let filteredData = table?.filter(item => check?.checkedValue?.includes(item.company));
            console.log(filteredData);
            dispatch(fetchFilterData(filteredData));
        }
    }, [check]);

    useMemo(() => {
        dispatch(loadUsers());
        const checkedData = cityFilter(table).map(item => ({
            name: item,
            isChecked: false,
        }))
        console.log(checkedData)
        setCheck({ ...check, list: checkedData });
    }, []);


    const handleChange = (e) => {
        let itemName = e.target.name;
        let checked = e.target.checked;
        console.log(itemName, checked)
        setCheck(prevState => {
            let { allChecked, list, checkedValue } = prevState;
            console.log(list)
            if (itemName === "checkAll") {
                allChecked = checked;
                list = list.map(item => ({ ...item, isChecked: checked }));
                checkedValue = checked ? [...list.map(item => item.name)] : [];
                console.log(list, checkedValue)

            } else {
                list = list.map(item =>
                    item.name === itemName ? { ...item, isChecked: checked } : item
                );
                checkedValue = checked ? [...list.filter(item => item.isChecked)?.map(item => item.name)] : [...checkedValue.filter(item => item !== itemName)]

                allChecked = list.every(item => item.isChecked);
            }
            console.log(checkedValue, list);
            return { allChecked, list, checkedValue }
        });

    };

    var show = true;
    function showCheckboxes() {
        var checkboxes =
            document.getElementById("checkBoxes");

        if (show) {
            checkboxes.style.display = "block";
            show = false;
        } else {
            checkboxes.style.display = "none";
            show = true;
        }
    }

    return (
        <>
            <form>
                <div className="multipleSelection">
                    <div className="selectBox" onClick={() => showCheckboxes()}>
                        <select>
                            <option>{`Company (${check?.checkedValue?.length})`}</option>
                        </select>
                        <div className="overSelect"></div>
                    </div>

                    <div id="checkBoxes">
                        <label >
                            <input type="checkbox" name="checkAll" value="checkAll" checked={check.allChecked} onChange={(e) => handleChange(e)} />
                            select all
                        </label>
                        {
                            check?.list?.map((item, id) => (
                                <label key={id}>
                                    <input type="checkbox" name={item.name} value={item.name} checked={item.isChecked} onChange={(e) => handleChange(e)} />
                                    {item.name}
                                </label>
                            ))
                        }
                    </div>

                </div>
            </form>
        </>
    )
}

export default CheckBox