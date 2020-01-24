import React from 'react';
import { Link } from 'react-router-dom';
//import images
import slide01 from '../../images/slide01.jpg';
import slide02 from '../../images/slide02.jpg';
import slide03 from '../../images/slide03.jpg';
//import components
import Menu from '../menu/Menu';
import Bordbestilling from '../bordbestilling/Bordbestilling';
//import css
import './Slider.css';

const Slider = () => {
    return (

        <div>

            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
               {/* Indicators */}
               <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>

                {/*Wrapper for slides */}
                <div className="carousel-inner">

                    <div className="carousel-item active">
                        <img className="d-block w-100" src={slide01} alt="Første slide"/>
                        <div className="carousel-caption">
                        <h2 className="display-2"> De klassiske thai retter </h2>
				        <p> Forårsruller, pad thai og de lækre hovedretter</p>
				        <Link to="/menu">
                        <button type="button" className="btn btn-outline-light btn-lg ">
                            <span>Se menu</span>
                        </button>
                        </Link>	
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img className="d-block w-100" src={slide02} alt="Andet slide"/>
                        <div className="carousel-caption">
                        <h2 className="display-2"> De fleste elsker thai retter </h2>
				        <p> Masser af de fantastiske smagskombinationer af thailandske ingredienser, <br/> så kom forbi os </p>
				        <Link to="/bordbestilling">
                        <button type="button" className="btn btn-outline-light btn-lg">
                            <span>Reservere bord</span>
				        </button>	
                        </Link>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img className="d-block w-100" src={slide03} alt="Tredje slide"/>
                        <div className="carousel-caption">
                        <h2 className="display-2"> Lækre dessert </h2>
				        <p> Is, kager og de traditionel thai dessert</p>
				        <Link to="/menu">
                        <button type="button" className="btn btn-outline-light btn-lg">
					     <span>Dessert</span>
				        </button>	
                        </Link>
                        </div>
                    </div>

                </div>


                {/* Left and right controls */}
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>

                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

        </div>
    );
}

export default Slider;
