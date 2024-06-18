import { Component } from "react";
import MovieCard from "./MovieCard";
import {movies} from "./moviesData";

function MovieList(props) {

    // constructor(){
    //     super();

    //     this.state = {
    //         movies: movies
    //     };

    //     // this.addStars = this.addStars.bind(this); //binding in advanced
    // }

    // handleIncStars  = (movie) => {
    //     const {movies} = this.state;
    //     const movieID = movies.indexOf(movie);
    //     if(movies[movieID].stars >=5){
    //         return;
    //     }
    //     movies[movieID].stars +=0.5;

    //     this.setState({
    //         movies
    //     });
    // }

    // handleDecStars  = (movie) => {
    //     const {movies} = this.state;
    //     const movieID = movies.indexOf(movie);
    //     if(movies[movieID].stars <=0){
    //         return;
    //     }
    //     movies[movieID].stars -=0.5;

    //     this.setState({
    //         movies
    //     });
    // }


    // handleFav = (movie) => {
    //     const {movies} = this.state;
    //     const movieID = movies.indexOf(movie);
    //     movies[movieID].fav = !movies[movieID].fav;
    //     this.setState({
    //         movies
    //     });
    // }

    // handleCart = (movie) => {
    //     const {movies} = this.state;
    //     const movieID = movies.indexOf(movie);
    //     movies[movieID].isInCart = !movies[movieID].isInCart;
    //     this.setState({
    //         movies
    //     });
    // } 

        // const {title,plot,price,rating,stars,fav,isInCart} = this.state; //using destructuring and passing each in props
        //we can directly pass this.state and access these keys with movies object
        // const {movies} = this.state; //destructuring movies
        const {movies,addStars,removeStars,toggleFav,toggleCart} = props;
        return (
            <>
                {/* <MovieCard title={title}
                plot={plot}
                price={price}
                rating={rating}
                stars={stars}
                fav={fav}
                isInCart={isInCart}
                /> */}

                {movies.map(movie => <MovieCard 
                movies={movie} 
                // addStars={this.handleIncStars} 
                // removeStars={this.handleDecStars} 
                // toggleCart={this.handleCart}
                // toggleFav={this.handleFav}
                addStars = {addStars}
                removeStars = {removeStars}
                toggleCart = {toggleCart}
                toggleFav = {toggleFav}
                key={movie.id}
                />)}
                {/* <MovieCard movies={this.state}/> */}
            </>
                      
        );
}

export default MovieList;