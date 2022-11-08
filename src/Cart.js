import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {
    //constructor of class: 'Cart'
    constructor() {
        super(); //calling the constructor of parent class is mandatory in the inheriting class

        //defining state for Cart component 
        this.state = {
            products: [
                {
                    price: 999,
                    title: 'Mobile Phone',
                    qty: 1,
                    img: '',
                    id: 1
                },
                {
                    price: 99,
                    title: 'Camera',
                    qty: 10,
                    img: '',
                    id: 2
                },
                {
                    price: 999,
                    title: 'Laptop',
                    qty: 4,
                    img: '',
                    id: 3
                }
            ]
        }
    }

    handleIncreaseQuantity = (product) => {
        const {products} = this.state;
        const index = products.indexOf(product);
        products[index].qty++; //qty increased in the variable 'products' created above using object destructuring

        this.setState({
            products: products
        })
    }

    handleDecreaseQuantity = (product) => {
        const {products} = this.state;
        const index = products.indexOf(product);
        if(products[index].qty === 0) return;

        products[index].qty--; //qty increased in the variable 'products' created above using object destructuring

        this.setState({
            products: products
        })
    }

    handleDeleteProduct = (id) => {
        const {products} = this.state;
        const remainingProducts = products.filter((product) => product.id !== id);

        this.setState({
            products: remainingProducts
        })
    }

    render() {
        const { products } = this.state;

        return (
            <div className="cart">
                {products.map((product) => {
                    return (
                        <CartItem
                            product={product} //product is passed as props to <CartItem />
                            key={product.id} //key is just for React internal purposes to differentiate among each components in the list, key is not passed as props to CartItem
                            onIncreaseQuantity={this.handleIncreaseQuantity}
                            onDecreaseQuantity={this.handleDecreaseQuantity}
                            onDeleteProduct={this.handleDeleteProduct}
                        />
                    )
                })}
            </div>
        );
    }
}

export default Cart;