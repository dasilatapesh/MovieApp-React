import { Component } from "react";
import MovieCard from "./MovieCard";

class MovieList extends Component {

    constructor(){
        super();

        this.state = {
            title: "The Avengers",
            plot: "Supernatural power used in this movie.",
            price: 199,
            rating: 8.9,
            stars: 0,
            fav: false,
            isInCart: false
        };

        // this.addStars = this.addStars.bind(this); //binding in advanced
    }

    render(){
        // const {title,plot,price,rating,stars,fav,isInCart} = this.state; //using destructuring and passing each in props
        //we can directly pass this.state and access these keys with movies object
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


                <MovieCard movies={this.state}/>
            </>
                      
        );
    }
}

export default MovieList;