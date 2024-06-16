import { Component } from "react";
import MovieCard from "./MovieCard";

class MovieList extends Component {

    constructor(){
        super();

        this.state = {
            movies: [
                {
                title: "The Avengers",
                plot: "Supernatural power used in this movie.",
                price: 199,
                rating: 8.9,
                stars: 0,
                fav: false,
                isInCart: false,
                poster: "https://www.vintagemovieposters.co.uk/wp-content/uploads/2023/03/IMG_1887-scaled.jpeg"
              },
              {
                title: "Inception",
                plot: "A thief who steals corporate secrets through the use of dream-sharing technology.",
                price: 150,
                rating: 8.8,
                stars: 0,
                fav: false,
                isInCart: false,
                poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy_goYNoThwBEs740p0pM5KT9S3ul1KpO9_Q&s"
              },
              {
                title: "The Dark Knight",
                plot: "Batman sets out to dismantle the remaining criminal organizations that plague Gotham.",
                price: 180,
                rating: 9.0,
                stars: 0,
                fav: false,
                isInCart: false,
                poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOspulmqPa54DqDBni0awPEHKMaUWfKEGTCg&s"
              },
              {
                title: "Interstellar",
                plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
                price: 200,
                rating: 8.6,
                stars: 0,
                fav: false,
                isInCart: false,
                poster: "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SY679_.jpg"
              },
              {
                title: "Fight Club",
                plot: "An insomniac office worker and a devil-may-care soap maker form an underground fight club.",
                price: 130,
                rating: 8.8,
                stars: 0,
                fav: false,
                isInCart: false,
                poster: "https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_SY679_.jpg"
              },
              {
                title: "Pulp Fiction",
                plot: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine.",
                price: 140,
                rating: 8.9,
                stars: 0,
                fav: false,
                isInCart: false,
                poster: "https://m.media-amazon.com/images/I/71c05lTE03L._AC_SY679_.jpg"
              },
              {
                title: "The Matrix",
                plot: "A computer hacker learns about the true nature of reality and his role in the war against its controllers.",
                price: 160,
                rating: 8.7,
                stars: 0,
                fav: false,
                isInCart: false,
                poster: "https://m.media-amazon.com/images/I/51EG732BV3L._AC_SY679_.jpg"
              },
              {
                title: "Gladiator",
                plot: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family.",
                price: 170,
                rating: 8.5,
                stars: 0,
                fav: false,
                isInCart: false,
                poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ74JgmV2GMMiD5W92FIW2x96kkUs4BeDodQ&s"
              }
            ]
        };

        // this.addStars = this.addStars.bind(this); //binding in advanced
    }

    render(){
        // const {title,plot,price,rating,stars,fav,isInCart} = this.state; //using destructuring and passing each in props
        //we can directly pass this.state and access these keys with movies object
        const {movies} = this.state; //destructuring movies
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

                {movies.map(movie => <MovieCard movies={movie}/>)}
                {/* <MovieCard movies={this.state}/> */}
            </>
                      
        );
    }
}

export default MovieList;