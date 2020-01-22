import React from 'react';
//import components
import Slider from '../slider/Slider';
import Historie from '../historie/Historie';
import Bestilling from '../bordbestilling/Bestilling';
import MenuMuligheder from '../menu/MenuMuligheder'; 
import ForsideGalleri from '../galleri/ForsideGalleri';


const Forside = () => {
    return (
        <>
            <Slider />
            <Historie />
            <Bestilling />
            <MenuMuligheder />
            <ForsideGalleri />
            
        </>
    )
}

export default Forside;
