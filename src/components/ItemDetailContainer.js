import React, {useEffect, useState} from "react";
import ItemDetail from "./ItemDetail";
import {useParams} from "react-router-dom";
import getItems from "../helpers/getItems";

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item, setItem] = useState([]);

    useEffect(() => {
        getItems.then(items => {
            const selectItem = items.find(item => item.id == id);
            if(selectItem) {
                setItem([<ItemDetail key={item.id} item={selectItem}/>]);
            }
        });
    }, []);

    return (
        <div className="container">
            {item}
        </div>
    );
}

export default ItemDetailContainer;