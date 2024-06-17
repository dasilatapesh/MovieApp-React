import { Component } from "react";

class NavBar extends Component {

    render(){
        return (
            <>
                <div className="nav">
                    <div className="title">Movie-App</div>
                    <div className="navCart">
                        <img src="https://cdn-icons-png.flaticon.com/128/4290/4290854.png" alt="Cart Icon"/>
                        <span>0</span>
                    </div>
                </div>
            </>
        );
    }
}

export default NavBar;