
const Navbar = (props) => {
    return (
        <div style={styles.nav}>
            <div style={styles.cartIconContainer}>
                <img style={styles.cartIcon} src="https://cdn-icons-png.flaticon.com/128/2838/2838895.png" alt="cart-icon" />
                <span style={styles.cartCount}>{props.count}</span>
            </div>
        </div>
    );
}


const styles = {
    cartIcon: {
      height: 42,
      marginRight: 20
    },
    nav: {
      height: 70,
      background: '#4267b2',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    cartIconContainer: {
      position: 'relative'
    },
    cartCount: {
      background: 'yellow',
      borderRadius: '50%',
      textAlign: 'center',
      width: 22,
      position: 'absolute',
      right: 8,
      top: -7
    }
  };


export default Navbar;