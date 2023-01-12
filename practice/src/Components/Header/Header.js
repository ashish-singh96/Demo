import React from "react";
import "./Header.css";
class Header extends React.Component {
    render() {
        return (
            <div>
                <h2 id="Header">Class Components</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, ullam hic. Ducimus delectus facere, obcaecati commodi
                    praesentium veniam accusantium sit esse debitis similique eveniet, officiis veritatis alias itaque soluta nostrum?
                </p>
                <button>Explore</button>
            </div>
        );
    }
}
export default Header;