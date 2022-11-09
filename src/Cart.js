
import CartItem from "./CartItem";

const Cart = (props) => {
    
    const { products } = props;

    return (
        <div className="cart">
            {products.map((product) => {
                return (
                    <CartItem
                        product={product} //product is passed as props to <CartItem />
                        key={product.id} //key is just for React internal purposes to differentiate among each components in the list, key is not passed as props to CartItem
                        onIncreaseQuantity={props.onIncreaseQuantity}
                        onDecreaseQuantity={props.onDecreaseQuantity}
                        onDeleteProduct={props.onDeleteProduct}
                    />
                )
            })}
        </div>
    );

}

export default Cart;