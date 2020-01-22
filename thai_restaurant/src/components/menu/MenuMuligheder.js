import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';
//import css
import './Menu.css'


const MenuMuligheder = () => {


    const [kategorier, setKategorier] = useState([
        { katimg: "alle_menu.png", navn: "Alle menuer", tekst: "Vores lækre menuer", id: 0 },
        { katimg: "forretter.png", navn: "Forretter", tekst: "Vores lækre forretter", id: 1 },
        { katimg: "hovedretter.png", navn: "Hovedretter", tekst: "Vores lækre hovedretter", id: 2 },
        { katimg: "dessert.png", navn: "Dessert", tekst: "Vores lækre desserter", id: 3 },
        { katimg: "drikkevarer.png", navn: "Drikkevarer", tekst: "Vores lækre drikkevarer", id: 4 },
    ]);

     // Loop alle kategorier
     const kategoriliste = kategorier.map(k => {

        return (
        
            <div className="col-lg-2 col-md-6 col-12 m-lg-auto menu_hover" key={k.id}>
               <div className="w-100 d-flex justify-content-center align-items-center p-2">
                   <Link to="./menu" className="text-decoration-none list-group">
                   <img src={"assets/ikoner_images/" + k.katimg} title={k.tekst} alt="ikoner" />
                   </Link>
               </div>
               <div className="w-100 d-flex justify-content-center align-items-center p-2">
                   <h5 className="menu_h5 mt-2">{k.navn}</h5>
               </div>
            </div>
          
        )
    });



    return (

         <div className="container mt-4 mb-4">
             <h3 className="menu_h3 mt-3 mb-3 text-dark text-center"> Vores menu </h3>

            {/* Vælge de forskellige kategorie inden for vores menuer her. */}
            <section className="row">
                 {kategoriliste}
            </section>

        </div>


       
    )
}

export default MenuMuligheder;
