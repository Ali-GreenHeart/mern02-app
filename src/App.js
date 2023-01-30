import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Counter from "./components/Counter";
import GoogleMeetCard from './components/GoogleMeetCard'
import ShowName from "./components/ShowName";
// shift+alt+o

function App() {
  return (
    <>
      <ShowName />
      {/* <Header /> */}
      {/* <Counter /> */}
      {/* <h1 className="test">Salam React.js</h1>
      <p>some description</p>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 20
      }}>
        <GoogleMeetCard name="nicat valiyev" sekil='/img/alion_afro.jpg' />
        <GoogleMeetCard name="samir mamedov" sekil='/img/alion_afro.jpg' />
        <GoogleMeetCard name="abbasova 22" sekil='/img/alion_afro.jpg' />
        <GoogleMeetCard name="Ravan Rahimli" sekil='/img/alion_afro.jpg' />
      </div>
      <div style={{ width: 300 }}>
        <Footer />
      </div> */}
    </>
  );
}

export default App;
// default -> export default App;   -> import App from './filePath'
// named -> export const name='ali'     --> import {name as test} from "./filePath"
