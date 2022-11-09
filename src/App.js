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

  getCartCount = () => {
      const {products} = this.state;

      let count = 0;

      products.forEach((product) => {
        count += product.qty;
      })

      return count;
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
      </div>
    );
  }
}

export default App;
