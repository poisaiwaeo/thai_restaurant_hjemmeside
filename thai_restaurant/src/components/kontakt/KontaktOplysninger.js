import React from 'react';
import './KontaktOplysninger.css';


function KontaktOplysninger() {
    return (
        <div>
            
            <div className="row m-0">
                <section className="w-100 col-lg-12 col-md-12 col-12">
                    <div className="row card-body shadow m-lg-4">
                        
                        <section className="col-lg-6 col-md-12 col-12">
                            <h3 className="kontakt_h3 mt-4 mb-4"> Kontaktoplysninger </h3>

                            {/* Åbningstider */}
                            <h5 className="kontakt_h5"> Åbningstider </h5>
                            <div className="row">
                                <section className="col-lg-3 col-md-3 col-6 p-3 text-left">
                                    <p className="kontakt_p"> Mandag - Torsdag </p>
                                    <p className="kontakt_p"> Fredag </p>
                                    <p className="kontakt_p"> Lørdag - Søndag </p>
                                </section>
                                <section className="col-lg-3 col-md-3 col-6 p-3 text-left">
                                    <p className="kontakt_p"> 11:00 - 21:00 </p>
                                    <p className="kontakt_p"> 11:00 - 21:00 </p>
                                    <p className="kontakt_p"> 10:00 - 21:00 </p>
                                </section>

                                {/* Kontaktoplysninger */}
                                <section className="col-lg-6 col-md-6 col-12 text-left">
                                <div className="row">
                               <div className="kontakt_ikoner col-lg-12 col-md-12 col-12 mt-2 d-flex justify-content-start align-items-center">
                                    <i className="fas fa-map-marker-alt fa-1x text-dark"></i>
                                    <p className="kontakt_p mt-3 ml-2"> Østergade, 8500 Grenå </p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="kontakt_ikoner col-lg-12 col-md-12 col-12 d-flex justify-content-start align-items-center">
                                    <i className="fas fa-envelope fa-1x text-dark"></i>
                                    <p className="kontakt_p mt-3 ml-2"> email@email.com </p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="kontakt_ikoner col-lg-12 col-md-12 col-12 d-flex justify-content-start align-items-center">
                                    <i className="fas fa-phone-alt fa-1x text-dark"></i>    
                                    <p className="kontakt_p mt-3 ml-2"> +45 xx xx xx xx </p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="kontakt_medier col-lg-12 col-md-12 col-12 p-3 mt-3 mb-3">
                                   <i className="fab fa-facebook-f fa-2x ml-0 mr-2 text-dark "></i>
                                   <i className="fab fa-instagram fa-2x m-2 text-dark"></i>
                                   <i className="fab fa-twitter fa-2x m-2 text-dark"></i>
                                </div>  
                            </div>
                                </section>
                            </div>
                        </section>

                        
                         {/* Koktakt form */}
                        <section className="col-lg-6 col-md-12 col-12 ">
                            <h3 className="mt-4 mb-4 text-dark"> Kontakt os </h3>

                            <form action="">

                                {/* NAVN */}
                                <div className="form-group">
                                    <input type="text" className="form-control mb-4" id="name" name="fname" placeholder="Skriv dit navn" required />
                                </div>

                                {/* EMAIL */}
                                <div className="form-group">
                                    <input type="email" className="form-control mb-4" id="email" naem="email" placeholder="navne@eksemple.com" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required />
                                </div>

                                {/* SKRIVE BESKED */}
                                <div className="form-group">
                                    <textarea class="form-control mb-4" id="exampleFormControlTextarea1" rows="3" placeholder="skriv besked..." required></textarea>
                                </div>

                                <div className="row">
                                    <button type="submit" class="btn kontakt_btn mb-4"> Sende </button>
                                </div>

                            </form>
                        </section>

                    </div>
                </section>
            </div>
        </div>
    )
}

export default KontaktOplysninger
