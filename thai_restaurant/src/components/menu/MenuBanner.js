import React from 'react';
import MenuBannerImg from '../../images/banner/menu_banner.jpg';
import './MenuBanner.css';


function MenuBanner() {
    return (
        <div>
          <div className="row m-0">
                <section className="col-lg-12 col-md-12 col-12 banner_img">
                    <img className="img-fluid w-100" src={MenuBannerImg} alt="Banner"/>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 menubanner_title">
                            <h3 className="menubanner_h2"> Menu </h3>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default MenuBanner
