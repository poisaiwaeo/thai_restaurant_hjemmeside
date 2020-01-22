import React, {useState} from 'react';
import './Omos.css';


const Hold = () => {

    //usestate
    const [team, setTeam] = useState ([
        {teamimg: "hold01.jpg", teamtitle: "Pam", teamtekst: "Masterkok", id:1 },
        {teamimg: "hold02.jpg", teamtitle: "Ton", teamtekst: "Masterkok", id:2 },
        {teamimg: "hold03.jpg", teamtitle: "Piam", teamtekst: "Personale", id:3 },
        {teamimg: "hold04.jpg", teamtitle: "June", teamtekst: "Personale", id:4 }
    ]);


    const alleHold = team.map(h => {
        return(

            <section className="card col-lg-4 col-md-6 col-12 rounded m-md-2 p-2 d-flex" key={h.id}>
                <img className="card-img-top img-fluid rounded-lg rounded-sm" src={"assets/hold_images/" + h.teamimg } alt="ansatte" />
                <section className="card-body">
                    <h5 className="card-title d-flex justify-content-start"> {h.teamtitle} </h5>
                    <p className="card-text d-flex justify-content-start">
                        {h.teamtekst}
                    </p>
                </section>
            </section>

        )
    });



    return (
        <div className="row m-0">

            <section className="w-100 col-lg-12 col-md-12 col-12 hold_container p-4 mb-5">
                <h3 className="hold_h3 text-light text-center mb-4"> Vores hold </h3>
                    <section className="card-group m-auto ">
                        {alleHold}
                    </section>
            </section>

        </div>
    )
}

export default Hold;
