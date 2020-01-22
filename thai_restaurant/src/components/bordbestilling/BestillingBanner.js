import React from 'react'
import BestillingBannerImg from '../../images/banner/bestilling_banner.jpg';
import './BestillingBanner.css'


const BestillingBanner = () => {
    return (
        <div>
        <div className="row m-0">
                <section className="col-lg-12 col-md-12 col-12 banner_img mb-md-3">
                    <img className="img-fluid w-100" src={BestillingBannerImg} alt="Banner"/>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 bestilling_title">
                            <h3 className="bestilling_h2"> Bordbestilling </h3>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default BestillingBanner
