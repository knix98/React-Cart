import React from "react";

//class 'CartItem' inherits features from class 'Component' inside the 'React' package 
class CartItem extends React.Component {
    constructor() {
        super(); //calling the constructor of parent class is mandatory in the inheriting class
        //defining state for CartItem component 
        this.state = {
            price: 999,
            title: 'Mobile Phone',
            qty: 1,
            img: ''
        }
    }

    //for returning jsx from a class, we have to use this render function
    render() {
        const {price, title, qty} = this.state; //object destructuring, this.state is defined above in the constructor

        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={ { fontSize: 25 } }>{title}</div>
                    <div style={ { color: '#777' } }>Rs {price}</div>
                    <div style={ { color: '#777' } }>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img alt="increase" className="action-icons" src="https://cdn-icons-png.flaticon.com/128/992/992651.png" />
                        <img alt="decrease" className="action-icons" src="https://cdn-icons-png.flaticon.com/128/992/992683.png" />
                        <img alt="delete" className="action-icons" src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png" />
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