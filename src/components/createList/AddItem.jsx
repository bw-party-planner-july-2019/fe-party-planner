import React, {useState} from "react";


export default function AddItem(props) {
    const [item, setItem] = useState({});

    const saveItem = item => props.addItemToList(item);

    function handleChange(event) {
        const updatedItem = {...item, [event.target.name]: event.target.value};
        setItem(updatedItem);
    }

    return (
        <div>
            {console.log("item ", item)}
            <input
                type="text"
                name="item"
                onChange={handleChange}
            />
            <input
                type="number"
                name="price"
                onChange={handleChange}
            />

            <button onClick={() => saveItem(item)} type={"submit"}>Submit</button>

        </div>
    )
}