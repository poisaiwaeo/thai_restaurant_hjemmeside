import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
//react-photo-galleri with image viewer
// import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { ForsidePhotos } from "./ForsideBillede";
//import components
import './Galleri.css';


const ForsideGalleri = () => {

    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    //Siden bliver ikke reloader hver gange når der er en lille ændring på siden fordi jeg har tilføjet 'useCallback' på.
    const openLightbox = useCallback((e, { b, ForsideGalleri }) => {
        setCurrentImage(ForsideGalleri);
        setViewerIsOpen(true);
    }, []);


    //Siden bliver reloader hvis der er noget ændring på siden.
    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };


    return (
        <div>

          <Gallery photos={ForsidePhotos} onClick={openLightbox} />
           <ModalGateway>
                { viewerIsOpen ? (
                   <Modal onClose={closeLightbox}>
                       <Carousel currentIndex={currentImage} views={ForsidePhotos.map(x => ({
                           ...x,
                           srcset: x.srcSet,
                           caption: x.title
                           }))}
                        />
                   </Modal>
               ) : null }
           </ModalGateway>

           <Link to="/galleri" className="text-decoration-none list-group-item-action active">
           <button type="submit" className="btn galleri_btn d-flex justify-content-center"> Se mere </button>
           </Link>
           
        </div>
    );
}

export default ForsideGalleri;
