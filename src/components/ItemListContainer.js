import {useEffect, useState} from 'react';
import ItemList from "./ItemList";
import {useParams} from "react-router-dom";
import getItems from "../helpers/getItems";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        getItems.then((items) => {
            let filterItems = items;
            if(id) {
                filterItems = items.filter(item => item.categoryId == id);
            }
            setItems(filterItems);
        });
    }, [id]);


    return (
        <div className="container py-5">
            <div className="row">
                <ItemList items={items}/>
            </div>
        </div>
    );
};

export default ItemListContainer;