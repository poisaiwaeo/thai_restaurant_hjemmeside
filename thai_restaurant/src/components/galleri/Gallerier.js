import React, { useState, useCallback} from 'react';
//react-photo-galleri with image viewer
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images"
import { GalleriPhotos } from "./GalleriBillede";
import './Galleri.css';


function Gallerier() {

    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    //Siden bliver ikke reloader hver gange når der er en lille ændring på siden fordi jeg har tilføjet 'useCallback' på.
    const openLightbox = useCallback((e, { b, Gallerier }) => {
        setCurrentImage(Gallerier);
        setViewerIsOpen(true);
    }, []);


    //Siden bliver reloader hvis der er noget ændring på siden.
    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    return (
        <div>
        <div className="galleri_wrapper">
            
            <Gallery photos={GalleriPhotos} onClick={openLightbox} />
               <ModalGateway>
                    { viewerIsOpen ? (
                       <Modal onClose={closeLightbox}>
                           <Carousel currentIndex={currentImage} views={GalleriPhotos.map(x => ({
                               ...x,
                               srcset: x.srcSet,
                               caption: x.title
                               }))}
                            />
                       </Modal>
                   ) : null }
               </ModalGateway>
    
    
            </div>
        </div>
    )
}

export default Gallerier
