import { Component } from "react";

class MovieCard extends Component {

    addStars = () => { //binding using arrow function
        // console.log(this);
        // this.state.stars+=0.5;
        // console.log(this.state.stars);

        if(this.state.stars>=5){
            return;
        }

        //form 1
        this.setState({
            stars: this.state.stars+0.5,
        }, ()=> console.log(this.state.stars)); //callback function to make seState() synchronous

        console.log(this.state.stars); // printed first because setState is asynchronous in nature

        //form 2
        // this.setState( (prevState) => {
        //     return{
        //         stars: prevState.stars + 0.5
        //     };
        // });

    }

    subtractStars = () => {

        if(this.state.stars<=0){
            return;
        }

        this.setState( (prevState) => {
            return{
                stars: prevState.stars - 0.5
            };
        });
    }

    handleFav = () => {
        this.setState({
            fav: !this.state.fav,
        });
    }

    handleCart = () => {
        this.setState({
            isInCart: !this.state.isInCart,
        });
    }

    render(){

        // const {title,plot,price,rating,stars,fav,isInCart} = this.props; //this.state
        // const {movies} = this.props; //we can change name also alias of movies name
        const {movies: data} = this.props;
        // console.log(this.props);
        const {title,plot,price,rating,stars,fav,isInCart,poster} = data;
        return (
            <>
            <div className = "main">

                <div className="movie-card">

                    <div className="left">
                        <img src={poster} alt="Movie Poster" />
                    </div>


                    <div className="right">
                        <div className="title">Title: {title}</div>
                        <div className="plot">Plot: {plot}</div>
                        <div className="price">Price: <span>Rs. {price}</span></div>
                        <div className="footer">
                            <div className="rating">IMDB Rating: <span>{rating}</span></div>
                            <div className="star-dis">
                                    <img src="https://cdn-icons-png.flaticon.com/128/16282/16282055.png" 
                                    alt="decrease" 
                                    className="str-btn"
                                    onClick={this.subtractStars}
                                    />
                                    <img src="https://cdn-icons-png.flaticon.com/128/616/616490.png" 
                                    alt="star" 
                                    className="stars"/>
                                    <img src="https://cdn-icons-png.flaticon.com/128/12522/12522039.png"
                                    alt="increase" 
                                    className="str-btn"
                                    onClick={this.addStars} 
                                    // onclick = {this.addStars.bind(this)} binding manually when craeting reference
                                    />
                                    <span className="starCount">{stars}</span>
                            </div>

                            {/* {this.state.fav?  //conditional rendering for fav
                            <button className="un-favourite-btn" onClick={this.handleFav}><img src="https://cdn-icons-png.flaticon.com/128/5866/5866462.png" alt="cart" className="cart-icon"/><span>Unfavourite</span></button>
                            :
                            <button className="favourite-btn" onClick={this.handleFav}><img src="https://cdn-icons-png.flaticon.com/128/6648/6648209.png" alt="cart" className="cart-icon"/><span>Favourite</span></button>
                            } */}
                            {/* we can use condition rendering in single */}
                            <button className={fav? "un-favourite-btn":"favourite-btn"} onClick={this.handleFav}>
                                <img src={fav? "https://cdn-icons-png.flaticon.com/128/5866/5866462.png":"https://cdn-icons-png.flaticon.com/128/6648/6648209.png"}  alt="cart" className="cart-icon"/>
                                <span>{fav? "Unfavourite":"Favourite"}</span>
                            </button>


                            <button className={isInCart? "remove-cart-btn":"cart-btn"} onClick={this.handleCart}>
                                <img src={isInCart?"https://cdn-icons-png.flaticon.com/128/4379/4379564.png":"https://cdn-icons-png.flaticon.com/128/4379/4379542.png"} alt="cart" className="cart-icon"/>
                                <span>{isInCart?"Remove from Cart": "Add to Cart"}</span>
                            </button>
                        </div>
                    </div>

                </div>

            </div>
            </>
        );
    }
}

export default MovieCard;