import React from "react";

import NavbarComponent from '../../components/Navbar/NavbarComponent';
import HeaderComponent from '../../components/Header/HeaderComponent';
import MainComponent from '../../components/Main/MainComponent';
import BodyComponent from '../../components/Body/BodyComponent';
import FooterComponent from '../../components/Footer/FooterComponent';


function Home() {
  return (
    <div >
      <NavbarComponent />
      <HeaderComponent />
      <MainComponent />
      <BodyComponent />
      <FooterComponent />
    </div>
  );
}

export default Home;
