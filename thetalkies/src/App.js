import React, { Component } from 'react';
import './App.css';
import MovieList from "./MovieList.js";
import MovieCart from "./MovieCart.js";
import JSONData from './available_movies.json';


class App extends Component {
  constructor() {
    super()
    this.state = {
      item: null,
      cart: [],
      movies: JSONData || [],
    }
    console.log(this.state.cart)
  }

  
  // componentDidMount(){
  //   fetch(movieData)
  //   .then(result => {
  //       return result.json();
  //     }).then(data => {
  //       console.log('data:', data)
  //     })
  // }

  addToCart = movie => {
    console.log('item:', movie)
    const cart = [...this.state.cart, movie];
    console.log(cart);
    this.setState({ cart });
  }
  

  render () {
    return (
      
      <div className="App">
        <header>
          <h1>Welcome to the Talkies</h1>
        </header>
        <div>
          <MovieList addToCart={this.addToCart} movies={this.state.movies}/>
          <MovieCart item={this.state.cart} credit={this.state.credit} /> 
        </div>
      </div>
      
    );
  }
  
}

export default App;
