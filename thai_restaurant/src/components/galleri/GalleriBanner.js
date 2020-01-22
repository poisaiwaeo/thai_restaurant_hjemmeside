import React from 'react';
import GalleriBannerImg from '../../images/banner/galleri_banner.jpg';
import './GalleriBanner.css';


function GalleriBanner() {
    return (
        <div>
            
            <div className="row m-0">
                <section className="col-lg-12 col-md-12 col-12 banner_img">
                    <img className="img-fluid w-100" src={GalleriBannerImg} alt="Banner"/>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 galleribanner_title">
                            <h3 className="galleribanner_h2"> Galleri </h3>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    )
}

export default GalleriBanner
