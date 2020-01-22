import React, {useState, useEffect} from 'react';
import './Bestilling.css';


    // Gem bordbestilling i Local Storage
    const useStateWithLocalStorage = localStorageKey => {
        const [bestil,setBestil] = useState(
            JSON.parse(localStorage.getItem(localStorageKey)) || ''
        );

        useEffect(() => {
            localStorage.setItem(localStorageKey, JSON.stringify(bestil));
        }, [bestil]);
        
        return [bestil,setBestil]; 
    };



const Bestilling = () => {


       // Gem bordbestilling i Local Storage
       const [bestil, setBestil] = useStateWithLocalStorage ('OrderValueInLocalStorage', {
           navn: '',
           email: '',
           telefonnummer: '',
           person: '',
           dato: '',
           klokken: ''
        });

        //name ="" i input felte skal hedder det samme som jeg har navngive den i const [bestil, setBestil] = useStateWithLocalStorage
        const onChange = e => {
            console.log(e.target.value)
            //alert(e.target.value);
            setBestil({
                ...bestil,
                [e.target.name]: e.target.value          
            });
        };

        const handleSubmit = e => {
            alert('Her er din bordbestilling' + ' ' + "Navn:" + bestil.navn + ' ' + "Email:" + bestil.email + ' ' + "Telefonnummer:" + bestil.telefonnummer + ' ' + "Person:" + bestil.person + ' ' + "Dato:" + bestil.dato + ' ' + "Klokken:" + bestil.klokken);
            //alert('Der bliver klikke' + ' ' + bestil.email);
            e.preventDefault();
        }



        
    return (

        <div>
        <section className="bestilling_wrapper p-lg-4 mb-md-3">
            <div className="row w-100 m-0">

                <aside className="aabningstider_container col-lg-3 offset-lg-1 col-md-6 col-12">
                    <h3 className="mt-4 text-white text-center bestilling_h3"> Åbningstider </h3>

                    <div className="row mt-3">
                        <section className="col-lg-6 col-md-6 col-6 text-left p-3">
                            <p className="text-white bestilling_p"> Mandag - Torsdag </p>
                            <p className="text-white bestilling_p"> Fredag </p>
                            <p className="text-white bestilling_p"> Lørsdag - Søndag </p>
                        </section>

                        <section className="col-lg-6 col-md-6 col-6 text-lg-right p-3">
                            <p className="text-white bestilling_p"> 11:00 - 21:00 </p>
                            <p className="text-white bestilling_p"> 11:00 - 22:00 </p>
                            <p className="text-white bestilling_p"> 10:00 - 21:00 </p>
                        </section>
                    </div>

                    <div className="row mb-0">
                        <section className="col-lg-12 col-md-12 col-12 text-left p-3">
                            <h5 className="text-white bestilling_h5"> Jule og nytår </h5>
                            <p className="text-white bestilling_p">Lukket fra d.23 dec til d.03 jan.</p>
                        </section>
                    </div>

                    <div className="row">
                        <section className="col-lg-12 col-md-12 col-12 p-3">
                            <p className="text-white bestilling_p">
                            Du kan ringe til +45 xx xx xx xx
                            hvis du vil holde arrangement eller
                            fødselsdag i vores buttikken. <br/>
                            Der er pladse til 25 personer.
                            P.S. du skal bemærke på vores åbningstider.
                            </p>
                        </section>
                    </div>
                </aside>


                <section className="card bg-light col-lg-7 col-md-6 col-12">
                    <h3 className="mt-4 text-dark text-center bestilling_h3"> Bordbestilling </h3>
                    <p className="text-dark text-center bestilling_p">Du kan reservere borde på online</p>

                    <form to="/home" onSubmit={handleSubmit}>
                        <div className="row mb-4 ">

                            {/* NAVN */}
                            <div className="col-lg-6 col-md-6 col-12 borde_inp">
                                <input type="text" className="form-control" id="name" name="navn" placeholder="Skriv dit navn" value={bestil.navn} onChange={onChange} required />
                            </div>

                            {/* EMAIL */}
                            <div className="col-lg-6 col-md-6 col-12 borde_inp">
                                <input type="email" className="form-control" id="email" name="email" placeholder="navne@eksemple.com" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" value={bestil.email} onChange={onChange} required />
                            </div>
                        </div>


                        <div className="row mb-4 ">
                             {/* TELF NUMMER */}
                        <div className="col-lg-6 col-md-6 col-12 borde_inp">
                                {/* <input type="text" className="form-control borde_inp" id="number" name="number" placeholder="+45 xx xx xx xx" pattern="[-+]?[0-9]" required /> */}
                                {/* <input type="text" className="form-control borde_inp" id="number" name="number" placeholder="+45 xx xx xx xx" pattern="[a-zA-Z0-9]+" value={bestil} onChange={onChange} required /> */}
                                 <input type="text" className="form-control" id="number" name="telefonnummer" placeholder="+45 xx xx xx xx" value={bestil.telefonnummer} onChange={onChange} required/>
                        </div>

                        {/* BORDE BESTILLING */}
                        <div className="form-group col-lg-6 col-md-6 col-12 borde_inp">
                            <select class="form-control" id="exampleFormControlSelect1" name="person" value={bestil.person} onChange={onChange} required >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                            <option>13</option>
                            <option>14</option>
                            <option>15</option>
                            <option>16</option>
                            <option>17</option>
                            <option>18</option>
                            <option>19</option>
                            <option>20</option>
                            <option>21</option>
                            <option>22</option>
                            <option>23</option>
                            <option>24</option>
                            <option>25</option>
                            </select>
                        </div>
                        </div>

                        <div className="row mb-4">
                            {/* DATO FOR BESTILLING BORDE */}
                            <div className="col-lg-6 col-lg-6 col-md-6 col-12 borde_inp">
                            <input type="date" className="form-control" id="date" name="dato" pattern="(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))" value={bestil.dato} onChange={onChange} required />
                            </div>

                            {/* KLOKKEN FOR BESTILLING BORDE */}
                            <div className="col-lg-6 col-lg-6 col-md-6 col-12 borde_inp ">
                            <input type="time" className="form-control" id="time" name="klokken" pattern="(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9])" value={bestil.klokken} onChange={onChange} required />
                            </div>
                        </div>

                       <div className="row">
                           <div className="bordeinp_container col-lg-12 col-md-12 col-12">
                           <button type="submit" className="btn borde_btn" > Reservere bord </button>
                           </div>
                       </div>
                    </form>
                </section>

            </div>
        </section>
        </div>

    )
}

export default Bestilling;