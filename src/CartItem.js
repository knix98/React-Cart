import React from "react";

//class 'CartItem' inherits features from class 'Component' inside the 'React' package 
class CartItem extends React.Component {
    // //defining a function inside class: 'CartItem'
    // increaseQuantity = () => {
    //     // setState form 1 - setState function inherited from React.Component class will change the state of component as well as re render the component with the changed state
    //     // this.setState({
    //     //   qty: this.state.qty + 1
    //     // });

    //     // setState form 2 - if prevState required, use this
    //     this.setState((prevState) => {
    //         return {
    //             qty: prevState.qty + 1
    //         }
    //     }, () => {
    //         console.log('this.state', this.state);
    //     });
    // }

    // decreaseQuantity = () => {
    //     const { qty } = this.state; //object destructuring

    //     if (qty === 0) { //no decreasing beyond 0
    //         return;
    //     }
       
    //     this.setState((prevState) => {
    //         return {
    //             qty: prevState.qty - 1
    //         }
    //     });
    // }

    //for returning jsx from a class, we have to define this render function inside class: 'CartItem'
    render() {
        const { price, title, qty } = this.props.product; //object destructuring, product was passed as props to CartItem in Cart.js
        const { product, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct } = this.props;

        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} src={product.img} />
                </div>
                <div className="right-block">
                    <div style={{ fontSize: 25 }}>{title}</div>
                    <div style={{ color: '#777' }}>Rs {price}</div>
                    <div style={{ color: '#777' }}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img
                            alt="increase"
                            className="action-icons"
                            src="https://cdn-icons-png.flaticon.com/128/992/992651.png"
                            onClick={() => onIncreaseQuantity(product)}
                        />
                        <img
                            alt="decrease"
                            className="action-icons"
                            src="https://cdn-icons-png.flaticon.com/128/992/992683.png"
                            onClick={() => onDecreaseQuantity(product)}
                        />
                        <img
                            alt="delete"
                            className="action-icons"
                            src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                            onClick={() => onDeleteProduct(product.id)}
                        />
                    </div>
                </div>
            </div>
        );
    }
}


//adding inline styling to jsx elements using objects
const styles = {
    // 'image' is the name decided by me for the styling of the img tag
    image: {
        //key-value pairs, and in JS its convention to write the key-names in camelCase
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}


export default CartItem;