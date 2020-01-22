import React from 'react';
import KontaktBannerImg from '../../images/banner/kontakt_banner.jpg';
import './KontaktBanner.css';

function KontaktBanner() {
    return (
        <div>
            
            <div className="row m-0">
                <section className="col-lg-12 col-md-12 col-12 banner_img">
                    <img className="img-fluid w-100" src={KontaktBannerImg} alt="Banner"/>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 kontaktbanner_title">
                            <h3 className="kontaktbanner_h2"> Kontakt </h3>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    )
}

export default KontaktBanner
