import triangle from "../asets/icons/Rectangle 889.svg";
import "./navBar.css";
import { innerList } from "../utils";
import { useState } from "react";
import {v4} from 'uuid'

export default function NavBar() {
    const [isActive,setIsActive] = useState(false)
  function RenderInnerList() {
    return (
      <div className="innerWrap">
        {innerList.map((el) => {
            return(
          <a className="listItem" key={v4()} href={el.href}>
            <div className="itemContainer">
              <p>{el.value}</p>
            </div>
          </a>
            )
        })}
      </div>
    );
  }
  function renderHendler(){
    setIsActive(prevIsActiv=>!prevIsActiv)
  }

  return (
    <div className="navWrap">
      <div className="navItem">
        <p onClick={renderHendler}>BUY</p>
        <img src={triangle} alt="triangle_svg" />
      </div>
      <div className="navItem">
        <p>BLOG</p>
      </div>
      <div className="navItem">
        <p>ABOUT</p>
      </div>
      <div className="navItem">
        <p>CONTACT</p>
      </div>
      {isActive&&<RenderInnerList/>}
    </div>
  );
}
