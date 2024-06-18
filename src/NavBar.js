import { Component } from "react";
import styled from "styled-components";

//using styled component
 const Nav = styled.div`
        width: 100%;
        height: 70px;
        background: linear-gradient(to right, rgb(47, 47, 47),50%,rgb(164, 15, 15)); 
        display: flex;
        align-items: center;
        justify-content:space-between;
        position: fixed; /* Changed from relative to fixed */
        top: 0; /* Ensures the navbar sticks to the top */
        left: 0; /* Ensures the navbar sticks to the left */
        z-index: 1000; /* Ensures the navbar is above other content */
 `;

 const Title = styled.div`
        font-size: 30px;
        color: #fff;
        font-weight: 600;
        font-family: "Montserrat", sans-serif;
        text-transform: uppercase;
        margin-left: 40px;
        &:hover{color: rgb(164, 15, 15);}
 `;

 const CartCount = styled.div`
        background: ${(props) => props.color};
        border-radius: 50%;
        color: black;
        padding: 1px 7px;
        position: absolute;
        top: -7px;  
        right: -18px;
        font-size: 15px;
        font-weight: bold;
        visibility: ${(props) => (props.show?"visible":"hidden")}
 `;

 const CartContainer = styled.div`
        position: relative;
        cursor: pointer;
        margin-right:40px;
 `

 const Icon = styled.img`
        height: 48px;
        width: 40px;
 `

function NavBar(props) {


        const {cartCount} = props;
        return (
            <>
                <Nav>
                {/* <div className="nav" style={style.nav}> */}
                    <Title>Movie-App</Title>
                    {/* <div className="title" style={style.title}>Movie-App</div> */}
                    <CartContainer>
                    {/* <div className="navCart" style={style.cartContainer}> */}
                        <Icon src="https://cdn-icons-png.flaticon.com/128/891/891462.png" alt="Cart Icon"/>
                        {/* <img src="https://cdn-icons-png.flaticon.com/128/891/891462.png" alt="Cart Icon" style={style.icon}/> */}
                        <CartCount color="yellow" show={true}>{cartCount}</CartCount>
                        {/* <span style={style.cartCount}>0</span> */}
                    </CartContainer>
                </Nav>
            </>
        );
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
        marginLeft: 40
      },

      cartContainer: {
        position: "relative",
        cursor: "pointer",
        marginRight:40,
      },
      
      icon:{
        height: 48,
        width: 40,
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