import React, {useEffect, useState} from "react";
import ItemDetail from "./ItemDetail";

const getItem = () => {
    let item = {
        pictureUrl: 'https://c1.neweggimages.com/ProductImageCompressAll1280/14-137-715-S80.jpg',
        title: 'MSI Ventus GeForce RTX 3050 8GB GDDR6',
        description: 'The GeForce RTX™ 3050 is built with the powerful graphics performance of the NVIDIA Ampere architecture. It offers dedicated 2nd gen RT Cores and 3rd gen Tensor Cores, new streaming multiprocessors, and high-speed G6 memory to tackle the latest games. Step up to GeForce RTX.',
        price: 10.00
    };

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(<ItemDetail item={item}/>);
        }, 2000);
    });
};

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);

    useEffect(() => {
        getItem().then(item => setItem([item]));
    }, []);

    return (
        <div className="container">
            {item}
        </div>
    );
}

export default ItemDetailContainer;