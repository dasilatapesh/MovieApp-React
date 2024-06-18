import React from "react";
import MovieList from "./MovieList";
import NavBar from "./NavBar";
import {movies} from "./moviesData";

class App extends React.Component{

  constructor(){
    super();

    this.state = {
        movies: movies,
        cartCount: 0,
    };

    // this.addStars = this.addStars.bind(this); //binding in advanced
  }

  handleIncStars  = (movie) => {
      const {movies} = this.state;
      const movieID = movies.indexOf(movie);
      if(movies[movieID].stars >=5){
          return;
      }
      movies[movieID].stars +=0.5;

      this.setState({
          movies
      });
  }

  handleDecStars  = (movie) => {
      const {movies} = this.state;
      const movieID = movies.indexOf(movie);
      if(movies[movieID].stars <=0){
          return;
      }
      movies[movieID].stars -=0.5;

      this.setState({
          movies
      });
  }


  handleFav = (movie) => {
      const {movies} = this.state;
      const movieID = movies.indexOf(movie);
      movies[movieID].fav = !movies[movieID].fav;
      this.setState({
          movies
      });
  }

  handleCart = (movie) => {
      let {movies,cartCount} = this.state;
      const movieID = movies.indexOf(movie);
      movies[movieID].isInCart = !movies[movieID].isInCart;
       // Update cart count based on whether the item is being added or removed
       const newCartCount = movies[movieID].isInCart ? cartCount + 1 : cartCount - 1;

       this.setState({
           movies,
           cartCount: newCartCount
       });
  }
  
  
  render(){
    const {movies} = this.state;
    return (
      <>
        <NavBar cartCount = {this.state.cartCount}/>
        <div style={{ marginTop: '90px' }}>
        <MovieList movies={movies}
        addStars={this.handleIncStars} 
        removeStars={this.handleDecStars} 
        toggleCart={this.handleCart}
        toggleFav={this.handleFav}
        />
        </div>
      </>
    );
  }
}

export default App;
