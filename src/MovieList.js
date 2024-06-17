import { Component } from "react";
import MovieCard from "./MovieCard";

class MovieList extends Component {

    constructor(){
        super();

        this.state = {
            movies: [
                {
                    id: 1,
                    title: "The Avengers",
                    plot: "When an unexpected enemy emerges and threatens global safety and security, Nick Fury, Director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins.",
                    price: 199,
                    rating: 8.9,
                    stars: 0,
                    fav: false,
                    isInCart: false,
                    poster: "https://www.vintagemovieposters.co.uk/wp-content/uploads/2023/03/IMG_1887-scaled.jpeg"
                },
                {
                    id: 2,
                    title: "Inception",
                    plot: "Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction: stealing valuable secrets from deep within the subconscious during the dream state, when the mind is at its most vulnerable. Cobb's rare ability has made him a coveted player in this treacherous new world of corporate espionage, but it has also made him an international fugitive and cost him everything he has ever loved.",
                    price: 150,
                    rating: 8.8,
                    stars: 0,
                    fav: false,
                    isInCart: false,
                    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy_goYNoThwBEs740p0pM5KT9S3ul1KpO9_Q&s"
                },
                {
                    id: 3,
                    title: "The Dark Knight",
                    plot: "With the help of allies Lt. Jim Gordon and DA Harvey Dent, Batman has been able to keep a tight lid on crime in Gotham City. But when a vile young criminal calling himself the Joker suddenly throws the town into chaos, the caped Crusader begins to tread a fine line between heroism and vigilantism.",
                    price: 180,
                    rating: 9.0,
                    stars: 0,
                    fav: false,
                    isInCart: false,
                    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOspulmqPa54DqDBni0awPEHKMaUWfKEGTCg&s"
                },
                {
                    id: 4,
                    title: "Interstellar",
                    plot: "In the near future, Earth has been devastated by drought and famine, causing a scarcity in food and extreme changes in climate. When humanity is facing extinction, a mysterious rip in the space-time continuum is discovered, giving mankind the opportunity to widen its lifespan. A group of explorers must travel beyond our solar system in search of a planet that can sustain life.",
                    price: 200,
                    rating: 8.6,
                    stars: 0,
                    fav: false,
                    isInCart: false,
                    poster: "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SY679_.jpg"
                },
                {
                    id: 5,
                    title: "Fight Club",
                    plot: "A depressed man (Edward Norton) suffering from insomnia meets a strange soap salesman named Tyler Durden (Brad Pitt) and soon finds himself living in his squalid house after his perfect apartment is destroyed. The two bored men form an underground club with strict rules and fight other men who are fed up with their mundane lives.",
                    price: 130,
                    rating: 8.8,
                    stars: 0,
                    fav: false,
                    isInCart: false,
                    poster: "https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_SY679_.jpg"
                },
                {
                    id: 6,
                    title: "Pulp Fiction",
                    plot: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption. These intersecting storylines involve Vincent Vega, his partner Jules, gangster Marsellus Wallace and his wife Mia, and boxer Butch Coolidge.",
                    price: 140,
                    rating: 8.9,
                    stars: 0,
                    fav: false,
                    isInCart: false,
                    poster: "https://m.media-amazon.com/images/I/71c05lTE03L._AC_SY679_.jpg"
                },
                {
                    id: 7,
                    title: "The Matrix",
                    plot: "A computer hacker named Neo learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers. Neo, with the help of Morpheus and Trinity, must accept his fate and fight for the freedom of mankind from the machine-controlled world.",
                    price: 160,
                    rating: 8.7,
                    stars: 0,
                    fav: false,
                    isInCart: false,
                    poster: "https://m.media-amazon.com/images/I/51EG732BV3L._AC_SY679_.jpg"
                },
                {
                    id: 8,
                    title: "Gladiator",
                    plot: "Maximus, a powerful Roman general, loved by the people and the aging Emperor Marcus Aurelius, is set to be the next in line to the throne. However, when the Emperor's son, Commodus, murders his father and seizes the throne, Maximus is condemned to die. Escaping death, Maximus must fight as a gladiator to avenge his family and bring honor back to Rome.",
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
        const {movies} = this.state;
        const movieID = movies.indexOf(movie);
        movies[movieID].isInCart = !movies[movieID].isInCart;
        this.setState({
            movies
        });
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

                {movies.map(movie => <MovieCard 
                movies={movie} 
                addStars={this.handleIncStars} 
                removeStars={this.handleDecStars} 
                handleCart={this.handleCart}
                handleFav={this.handleFav}
                key={movie.id}
                />)}
                {/* <MovieCard movies={this.state}/> */}
            </>
                      
        );
    }
}

export default MovieList;