
// import { Link } from "react-router-dom";
import './navbar.css'

/*Functional component that creates the navigation bar.*/
export function Navbar() {
    return (
        
        <div class="topnav">
            <a class="active" href="#home">Home</a>

            <a href="#news">News</a>
            <a href="#contact">Contact</a>
         <a href="#"><i class="fa fa-fw fa-user"></i> Login</a>
        </div>
    );
}
