import React from 'react';
import { Link } from 'react-router-dom';
//import images
import FooterLogo from '../../images/footer_logo.png';
//import css
import './Footer.css'



const Footer = () => {
    return (

        <div>
            <footer className="footer_wrapper">
                <div className="container-fluid padding">
                    <div className="row">

                        <section className="col-lg-4 col-md-6 col-12 p-3 text-left">
                            <Link to="/">
                            <img className="img-fluid mb-2" src={FooterLogo} alt="logo"/>
                            </Link>
                            <p className="footer_p">
                                Dette er min skole projekt som jeg har lavet for at øve mig.
                                Jeg har lånet billeder og tekster fra internet, 
                                så du skal ikke tager noget serøist i forholdt til det.
                            </p>
                        </section>

                        <section className="col-lg-4 col-md-6 col-12">
                            <h5 className="footer_h5 mt-md-3 mt-4 ml-md-5"> Åbningstider </h5>
                            <div className="row mt-3">
                                <section className="col-lg-6 col-md-6 col-6 p-3 text-left">
                                    <p className="footer_p ml-md-5"> Mandag - Torsdag </p>
                                    <p className="footer_p ml-md-5"> Fredag </p>
                                    <p className="footer_p ml-md-5"> Lørdag - Søndag </p>
                                </section>
                                <section className="col-lg-6 col-md-6 col-6 p-3 text-left">
                                    <p className="footer_p ml-md-4 mt-lg-0 mt-md-4"> 11:00 - 21:00 </p>
                                    <p className="footer_p ml-md-4 mt-lg-0 mt-md-4"> 11:00 - 21:00 </p>
                                    <p className="footer_p ml-md-4 mt-lg-0 mt-md-4"> 10:00 - 21:00 </p>
                                </section>
                            </div>
                            <p className="footer_p mt-md-3 mt-4 ml-md-5">  P.S. du skal bemærke på vores åbningstider. </p>
                        </section>

                        <section className="col-lg-4 col-md-12 col-12">
                            <h5 className="footer_h5 mt-md-3 mt-4"> Kontakt </h5>

                            <div className="row mt-3">
                                <div className="footer_ikoner col-lg-12 col-md-12 col-12 d-flex justify-content-start align-items-center">
                                    <i className="fas fa-map-marker-alt fa-1x"></i>
                                    <p className="footer_p mt-3 ml-2"> Østergade, 8500 Grenå </p>
                                </div>
                            </div>

                            <div className="row mt-1">
                                <div className="footer_ikoner col-lg-12 col-md-12 col-12 d-flex justify-content-start align-items-center">
                                    <i className="fas fa-envelope fa-1x"></i>
                                    <p className="footer_p mt-3 ml-2"> email@email.com </p>
                                </div>
                            </div>

                            <div className="row mt-1">
                                <div className="footer_ikoner col-lg-12 col-md-12 col-12 d-flex justify-content-start align-items-center">
                                    <i className="fas fa-phone-alt fa-1x"></i>    
                                    <p className="footer_p mt-3 ml-2"> +45 xx xx xx xx </p>
                                </div>
                            </div>

                            <div className="row mt-4 mb-4">

                                <div className="medier_ikoner col-lg-12 col-md-12 col-12">
                                   <i className="fab fa-facebook-f fa-2x m-2"></i>
                                   <i className="fab fa-instagram fa-2x m-2"></i>
                                   <i className="fab fa-twitter fa-2x m-2"></i>
                               </div>                            
                            </div>
                        </section>

                        <div className="footer_copyright col-12 text-center">
                        <hr className="bg-light" />
                        <p className="footer_p">&copy;Poi Saiwaeo 2020</p>
                        </div>

                    </div>
                </div>
            </footer>
        </div>


      


    )
}

export default Footer;
