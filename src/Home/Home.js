import React from "react";
import './Homecss.css';
import arrow from '../icon/down-arrow 1.svg';
import search from "../icon/magnifying-glass.png";
import love from '../icon/heart2.png';
import keranjang from '../icon/shopping-bag.png';
import slideShow from "./Header/slideshow";

function Home(){
    return(
        <div className="homin">
            <div className="navdrop">
                <div className="dropdowncenter">
                    <ul className="uldropdown">
                        <li className="dropdownoptions1"><a href="#">
                        HOME
                        <img src={arrow} classname='arrow'></img>
                        </a>
                            <div className="mega-box">                      
                                <ul className="sub-menu-list">
                                    <li className="F1"><a href="#">FEATURED PRODUCT</a></li>
                                    <li className="F2"><a href="#">RELATED PRODUCT</a></li>
                                    <li className="F3"><a href="#">EXPLORE PRODUCT</a></li>
                                    <li className="F4"><a href="#">FEATURED CULTURES</a></li>
                                    <li className="F5"><a href="#">BLOG</a></li>
                                </ul>    
                            </div>                      
                        </li>
                        <li className="dropdownoptions"><a href="#">
                        PRODUCT
                        <img src={arrow} classname='arrow'></img>
                        </a></li>
                        <li className="dropdownoptions"><a href="#">
                        CULTURE
                        <img src={arrow} classname='arrow'></img>
                        </a></li>
                        <li className="dropdownoptionsale"><a href="#">
                        SALE
                        </a></li>
                    </ul>
                </div>
                <div className="ulright">
                        <ul>
                            <li><a href="#">
                            <img src={search} className="search"></img>
                            </a>
                            </li>
                            <li><a href="#">
                            <img src={love} className='love'></img>
                            </a>
                            </li>
                            <li><a href="#">
                            <img src={keranjang} className='keranjang'></img>
                            </a>    
                            </li>
                        </ul>
                </div>
            </div>
            <div className="sliders">
                <slideShow />
            </div>
        </div>
    );
}

export default Home;