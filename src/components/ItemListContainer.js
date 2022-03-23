import React from 'react';
import ItemList from "./ItemList";

const productos = [
    {id: 1, title: 'MSI Ventus GeForce RTX 3050 8GB GDDR6', price: 249.99, pictureUrl: 'https://c1.neweggimages.com/ProductImageCompressAll1280/14-137-715-S80.jpg'},
    {id: 2, title: 'MSI Ventus GeForce GTX 1650 4GB GDDR6', price: 231.39, pictureUrl: 'https://c1.neweggimages.com/ProductImageCompressAll1280/14-137-593-V81.jpg'},
    {id: 3, title: 'Yeston GeForce GTX 1050 TI 4GB GDDR5', price: 259.00, pictureUrl: 'https://c1.neweggimages.com/ProductImageCompressAll1280/AZUES211220CICSL.jpg'}
];

const promiseItems = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(productos);
    }, 2000);
});


class ItemListContainer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }

    componentDidMount() {
        promiseItems.then((items) => {
            this.setState({
                items
            });
        });
    }

    render() {
        return (
            <div className="container py-5">
                <div className="row">
                    <ItemList items={this.state.items}/>
                </div>
            </div>
        );
    };
};

export default ItemListContainer;