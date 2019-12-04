import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./component/Header";
import MainHeader from "./component/MainHeader";
// import Slider1 from "./component/Slider1";
import ProfessionalHeader from "./component/ProfessionalHeader";
import About from "./component/About";
import Area from "./component/Area";
import Features from "./component/Features";
import Services from "./component/Services";
import Team1 from "./component/Team1";
import Achievments from "./component/Achievments";
import Test2 from "./component/Test2";
import WorkArea from "./component/WorkArea";
import BlogArea from "./component/BlogArea";
import Partners1 from "./component/Partners1";
import FooterArea from "./component/FooterArea";
function App() {
  return (
    <div className="App">
      <Home />
      <MainHeader />
      {/* <Slider1 /> */}
      <ProfessionalHeader />
      <About />
      <Area />
      <Features />
      <Services />
      <Team1 />
      <Achievments />
      <Test2 />
      <WorkArea />
      <BlogArea />
      <Partners1 />
      <FooterArea />
    </div>
  );
}

export default App;
