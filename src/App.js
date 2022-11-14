import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
import db from './index';
import { collection, getDocs, addDoc, onSnapshot } from "firebase/firestore";

class App extends React.Component {
  //constructor of class: 'App'
  constructor() {
    super(); //calling the constructor of parent class is mandatory in the inheriting class

    //defining state for App component 
    this.state = {
      products: [],
      loading: true //implies that products are being fetched from firebase
    }
  }

  componentDidMount() {
    const colRef = collection(db, "products"); //getting a reference to the collection - 'products'

    // getDocs(colRef) //getting all documents inside 'products' collection, getDocs returns a promise with the resolved snapshot
    //   .then((snapshot) => {
    //     //snapshot.docs is an array containing all the docs 
    //     const products = snapshot.docs.map((doc) => {
    //       const product = doc.data(); //doc.data() will return us an object containing only the fields assigned by us inside each document
    //       product.id = doc.id; //adding the id field to the product as well, doc.id is the auto id generated 

    //       return product;
    //     })

    //     this.setState({ //assigning the products array made above to state.products
    //       products: products,
    //       loading: false
    //     })
    //   })


    //real-time data collection using onSnapshot
    //onSnapshot function is fired whenever there is a change in any document in the connected firestore
    //so this way we won't have to refresh the page to see the change in UI, it will get changed by itself
    onSnapshot(colRef, (snapshot) => {
      //snapshot.docs is an array containing all the docs 
      const products = snapshot.docs.map((doc) => {
        const product = doc.data(); //doc.data() will return us an object containing only the fields assigned by us inside each document
        product.id = doc.id; //adding the id field to the product as well, doc.id is the auto id generated 

        return product;
      })

      this.setState({ //assigning the products array made above to state.products
        products: products,
        loading: false
      })
    });
  }

  handleIncreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty++; //qty increased in the variable 'products' created above using object destructuring

    this.setState({
      products: products
    })
  }

  handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty === 0) return;

    products[index].qty--; //qty increased in the variable 'products' created above using object destructuring

    this.setState({
      products: products
    })
  }

  handleDeleteProduct = (id) => {
    const { products } = this.state;
    const remainingProducts = products.filter((product) => product.id !== id);

    this.setState({
      products: remainingProducts
    })
  }

  getCartCount = () => {
    const { products } = this.state;

    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    })

    return count;
  }

  getCartTotal = () => {
    const { products } = this.state;
    let total = 0;
    products.forEach((prod) => {
      total += prod.qty * prod.price;
    })

    return total;
  }

  addProduct = () => {
    const colRef = collection(db, "products");

    addDoc(colRef, {
      img: '',
      price: 900,
      qty: 3,
      title: 'washing machine'
    })
    .then((docRef) => {  //docRef is the reference to the new doc that was just added to firebase
      console.log(docRef);
    })
    .catch((err) => {console.log(err)});
  }

  render() {
    const { products, loading } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />  {/*calculating and passing the count of products as props to Navbar*/}
        <button onClick={this.addProduct}>Add a product</button>
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        {loading && <h2>Loading Products...</h2>}  {/*will show <h2> initially and when componentDidMount rerenders with loading: false, then <h2> will go away*/}
        <div style={{ fontSize: 20, marginLeft: 10 }}>TOTAL: {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
