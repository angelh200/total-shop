import React from 'react';

const ItemListContainer = (props) => {
    return (
        <div className="container-fluid py-4">
            <h2>{props.greeting}</h2>
        </div>
    );
};

export default ItemListContainer;