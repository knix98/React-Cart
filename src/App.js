import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends React.Component {
  //constructor of class: 'App'
  constructor() {
    super(); //calling the constructor of parent class is mandatory in the inheriting class

    //defining state for App component 
    this.state = {
        products: [
            {
                price: 999,
                title: 'Mobile Phone',
                qty: 1,
                img: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                id: 1
            },
            {
                price: 99,
                title: 'Camera',
                qty: 10,
                img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtZXJhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                id: 2
            },
            {
                price: 999,
                title: 'Laptop',
                qty: 4,
                img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
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

  getCartCount = () => {
      const {products} = this.state;

      let count = 0;

      products.forEach((product) => {
        count += product.qty;
      })

      return count;
  }

  getCartTotal = () => {
    const {products} = this.state;
    let total = 0;
    products.forEach((prod) => {
      total += prod.qty * prod.price;
    })

    return total;
  }

  render() {
    const {products} = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />  {/*calculating and passing the count of products as props to Navbar*/}
        <Cart 
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        <div style={{fontSize: 20, marginLeft: 10}}>TOTAL: {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
