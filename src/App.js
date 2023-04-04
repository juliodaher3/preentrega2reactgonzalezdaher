import React, { Component } from "react";
import "./App.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

// COMPONENTS
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import CardUser from "./components/CardUser/CardUser";
import Button from "./components/Button/Button";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        
        <div className="UserSection">
          <CardUser
            name="Zapato"
            
            description="Verde y de mal caracter"
            img="https://ih1.redbubble.net/image.1455301172.5828/st,small,507x507-pad,600x600,f8f8f8.jpg"
            backgroundColor="yellow"
          />
          
        </div>

      </div>
    );
  }
}

export default App;
