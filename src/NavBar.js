import { Component } from "react";

class NavBar extends Component {

    render(){
        return (
            <>
                <div className="nav" style={style.nav}>
                    <div className="title" style={style.title}>Movie-App</div>
                    <div className="navCart" style={style.cartContainer}>
                        <img src="https://cdn-icons-png.flaticon.com/128/4290/4290854.png" alt="Cart Icon" style={style.cartIcon}/>
                        <span style={style.cartCount}>0</span>
                    </div>
                </div>
            </>
        );
    }
}

export default NavBar;

//internal css object

const style = {
    nav:{
        width: "100%",
        height: 70,
        backgroundColor: "rgb(47, 47, 47)",
        display: "flex",
        alignItems: "center",
        justifyContent:"space-between",
        position: "relative"
      },

      title:{
        fontSize: 30,
        color: "#fff",
        fontWeight: 600,
        fontFamily: '"Montserrat", sans-serif',
        textTransform: "uppercase",
        marginLeft: 20
      },

      cartContainer: {
        position: "relative",
        cursor: "pointer"
      },
      
      cartIcon:{
        height: 48,
        width: 40,
        marginRight:20,
      },
      
      cartCount:{
        background: "red",
        borderRadius: "50%",
        color: "white",
        padding: "1px 7px",
        position: "absolute",
        top: -7,  // Adjust as needed
        right: 2,  // Adjust as needed
        fontSize: "15px",
        fontWeight: "bold"
      }
}

//to use this use like inline like style= {style.cartImg}