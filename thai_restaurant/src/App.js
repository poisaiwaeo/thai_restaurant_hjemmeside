//forkortelse til react hooks
//rafc eller rafc
import React from 'react';
//import Route-dom
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
//import components
import Forside from './components/forside/Forside';
import Omos from './components/omos/Omos';
import Bordbestilling from './components/bordbestilling/Bordbestilling';
import Menu from './components/menu/Menu';
import Allemenu from './components/menu/AlleMenu';
import Forretter from './components/menu/Forretter';
import Hovedretter from './components/menu/Hovedretter';
import Dessert from './components/menu/Dessert';
import Drikkevarer from './components/menu/Drikkevarer';
import Galleri from './components/galleri/Galleri';
import Kontakt from './components/kontakt/Kontakt';
import Navbar from './components/navbar/Navbar';
import Kort from './components/kort/Kort';
import Footer from './components/footer/Footer';



function App() {
  return (

   <BrowserRouter>

   <div className="App">

     <Navbar/>

     <Switch>
       <Route exact path="/" component={Forside} />
       <Route path="/omos" component={Omos} />
       <Route path="/bordbestilling" component={Bordbestilling} />
       <Route path="/menu" component={Menu} />
       <Route path="/alleMenu" component={Allemenu} />
       <Route path="/forretter" component={Forretter} />
       <Route path="/hovedretter" component={Hovedretter} />
       <Route path="/dessert" component={Dessert} />
       <Route path="/drikkevarer" component={Drikkevarer} />
       <Route path="/galleri" component={Galleri} />
       <Route path="/kontakt" component={Kontakt} />
     </Switch>

     <Kort />
     <Footer />
    </div>

   </BrowserRouter>

  );
}

export default App;
