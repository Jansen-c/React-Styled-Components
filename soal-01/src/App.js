   
import Card from "./components/Card";
import {  FlexContainer } from "./components/styles/FlexContainer";

export default function App() {
    //harus {{ }}, 2 kurung kiri kanan.

  return <div style={{widht: "100%", height: "100vh",display: "flex", alignItems: "center", justifyContent: "center"}}> 
    <Card/>
  </div>;
}

