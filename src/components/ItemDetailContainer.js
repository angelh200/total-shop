import React, {useEffect, useState} from "react";
import ItemDetail from "./ItemDetail";
import {useParams} from "react-router-dom";
import { doc, getDoc, getFirestore } from 'firebase/firestore';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item, setItem] = useState([]);

    useEffect(() => {
        const db = getFirestore();

        const itemRef = doc(db, "items", id);
        getDoc(itemRef).then((snapshot) => {
            if(snapshot.exists()) {
                const myItem = {
                    id: snapshot.id,
                    ...snapshot.data()
                };

                console.log(myItem);
                setItem([<ItemDetail item={myItem} />]);
            }
        });
    }, [id]);

    return (
        <div className="container">
            {item}
        </div>
    );
}

export default ItemDetailContainer;