import React from 'react';
//imporrt images
import pam from '../../images/pam.jpg';
import historieimg01 from '../../images/historie_img01.jpg';
import historieimg02 from '../../images/historie_img02.jpg';
//import css
import './Historie.css'



const Historie = () => {
    return (

        <section className="container-fluid">
            <div className="row w-100 m-0 padding">
                <article className="col-lg-5 col-md-6 col-12 offset-lg-1">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-12 p-4">
                        <h3 className="historie_h3"> Vores historie </h3>
                        <p className="historie_p">
                        Lorem Ipsum er ganske enkelt fyldtekst fra print- og typografiindustrien. 
                        Lorem Ipsum har været standard fyldtekst siden 1500-tallet,
                        hvor en ukendt trykker sammensatte en tilfældig spalte for at trykke en bog 
                        til sammenligning af forskellige skrifttyper. Lorem Ipsum har ikke alene 
                        overlevet fem århundreder, men har også vundet indpas i elektronisk typografi
                        uden væsentlige ændringer.
                        </p>

                        <div className="row">
                            <section className="col-lg-12 col-md-12 col-12 mt-4">
                                <div className="row">
                                    <figure className="historie_rundeimg">
                                        <img className="img-fluid runde_img" src={pam} alt="Pam"/>
                                    </figure>
                                    <section className="p-2">
                                        <h5 className="historie_h5 mt-3"> Pam Pichaya </h5>
                                        <p className="historie_p"> Masterkok </p>
                                    </section>
                                </div>
                            </section>
                        </div>
                        </div>
                    </div>
                </article>

                <article className="col-lg-5 col-md-6 col-12 d-flex pb-5">
                    <div className="img-move-wrapper">
                        <img className="img-move-1 img-fluid" src={historieimg01} alt="restaurant"/>
                        <img className="img-move-2 img-fluid" src={historieimg02} alt="restaurant"/>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Historie;

