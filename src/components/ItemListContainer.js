import {useEffect, useState} from 'react';
import ItemList from "./ItemList";
import {useParams} from "react-router-dom";
import { collection, getDocs, getFirestore, where, limit, query} from "firebase/firestore";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();

        let queryFilter = '';
        if (id) {
            queryFilter = query(collection(db, 'items'), where('categoryId', '==', Number(id)), limit(10));
        } else {
            queryFilter = query(collection(db, 'items'), limit(10));
        }

        getDocs(queryFilter).then((snapshot) => {
            if(snapshot.size === 0) console.log('No hay resultados para la busqueda!');
            setItems(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})));
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