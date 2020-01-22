import React, { useState } from 'react';
import { menuPhotos } from "./MenuSamling";
import './Menu.css';


function MenuFilter() {

    const [kategorier, setKategorier] = useState([
        { katimg: "alle_menu.png", navn: "Alle menuer", tekst: "Vores lækre menuer", id: 0 },
        { katimg: "forretter.png", navn: "Forretter", tekst: "Vores lækre forretter", id: 1 },
        { katimg: "hovedretter.png", navn: "Hovedretter", tekst: "Vores lækre hovedretter", id: 2 },
        { katimg: "dessert.png", navn: "Dessert", tekst: "Vores lækre desserter", id: 3 },
        { katimg: "drikkevarer.png", navn: "Drikkevarer", tekst: "Vores lækre drikkevarer", id: 4 },
    ]);


    // ----- State -----------------------------------------
    const [menuer, setMenuer] = useState(menuPhotos);


    // Loop alle kategorier
    const kategoriliste = kategorier.map(k => {

        return (
        
            <div onClick={() => { visMenuer(k.navn) }} className="col-lg-2 col-md-6 col-12 m-lg-auto menu_hover" key={k.id}>
               <div className="w-100 d-flex justify-content-center align-items-center p-2">
                   <img src={"assets/ikoner_images/" + k.katimg} title={k.tekst} alt="ikoner" />
               </div>
               <div className="w-100 d-flex justify-content-center align-items-center p-2">
                   <h5 className="menu_h5 mt-2">{k.navn}</h5>
               </div>
            </div>
          
        )
    });

    
    // Loop alle menuer + drikkevarer
    const menuliste = menuer.map(m => {

        return (

            <section className="col-lg-4 col-md-6 col-12">
            <section key={m.id} className="card mt-3 mb-2 d-flex">
                <img src={"/assets/" + m.menuBillede} alt="menuer"/>
                <div className="card-body">
                    <h5 className="card-title menufilter_h5 text-left">
                        {m.title}
                    </h5>
                    <p className="card-text menu_p text-left">
                        {m.beskrivelse}
                    </p>
                    <p className="card-text menu_p text-right">
                        {m.pris}{""}
                    </p>
                </div>
            </section>
            </section>


            

        )

    });

    function visMenuer(valgtkategori) {
        //alert("Noget er valgt - " + kategori)

        // Hvis IKKE den valgte kategori er Alle menuer så filter dem ud som matcher den valgte menu fx Forret
        // .... ellers så hent alle fra menuPhotos
        if (valgtkategori !== "Alle menuer") {
            setMenuer(menuPhotos.filter(m => {
                return (
                    m.navn === valgtkategori
                )
            }))
        } else {
            // Indsæt alle i state
            setMenuer(menuPhotos);
        }
    }


    return (
        <div className="container mt-4 mb-4">
        <h3 className="menu_h3 mt-3 mb-3 text-dark text-center"> Vores menu </h3>

            {/* Vælge de forskellige kategorie inden for vores menuer her. */}
            <section className="row">
                 {kategoriliste}
            </section>

            {/* Menuer bliver vise her efter valgte */}
            <section className="row mt-4">                   
                   {menuliste}
           </section>

        </div>
    )
}

export default MenuFilter;
