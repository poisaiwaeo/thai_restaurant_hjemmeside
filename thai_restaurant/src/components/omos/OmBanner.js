import React from 'react';
import omBannerImg from '../../images/banner/om_banner.jpg';
import './Omos.css'


const omBanner = () => {
    return (
        <div>
            <div className="row m-0">
                <section className="col-lg-12 col-md-12 col-12 banner_img">
                    <img className="img-fluid w-100" src={omBannerImg} alt="Banner"/>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 om_title">
                            <h3 className="om_h2"> om os </h3>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default omBanner;
