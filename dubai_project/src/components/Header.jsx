import Logo from "../asets/icons/Logo.svg";
import NavBar from "./NavBar";
import "./header.css";
import {contactPhone} from '../utils'
import { useState } from "react";

export default function Header() {
    const [isActiv,setIsActiv]=useState(false);
    function toggleActiv(){
        setIsActiv(!isActiv);
    }
  return (
    <section className="header">
      <div className="headerWrap">
        <div className="navContainer">
        <img src={Logo} alt="logo_img"></img>
        <NavBar/>
        </div>
        <div className="navContainer">
            <button className="consultBtn">Book a consultation</button>
            <div className="langWrap">
                <p onClick={toggleActiv} className={`langChoise ${isActiv?'activLang':''}`}>EN</p>
                <p onClick={toggleActiv} className={`langChoise ${isActiv?'':'activLang'}`}>RU</p>
            </div>
            <p className="titleText">{contactPhone}</p>
        </div>
      </div>
    </section>
  );
}
