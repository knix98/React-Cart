import React from "react";

//class 'CartItem' inherits features from class 'Component' inside the 'React' package 
class CartItem extends React.Component {
    //for returning jsx from a class, we have to use this render function
    render() {
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={ {fontSize: 25} }>Phone</div>
                    <div style={ {color: '#777'} }>Rs 999</div>
                    <div style={ {color: '#777'} }>Qty: 1</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
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