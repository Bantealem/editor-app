import React from "react";
import { FaRegClock } from "react-icons/fa";
import { BsThreeDotsVertical, BsArrowDownLeft } from "react-icons/bs";
import { FiCheckCircle } from "react-icons/fi";
import { GiRabbitHead } from "react-icons/gi";
import { RxDividerVertical } from "react-icons/rx";
import { CiCloud } from "react-icons/ci"
import "./header.css";

const Header = () => {
  return (
    <div className="home">
      <div className="nav-container">
        <ul className="right-side">
          <li class="active">
            <a id="p" href="">
              P
            </a>
          </li>
          <li class="active">
            <a id="clock" href="">
              <RxDividerVertical style={{color:'#757575'}} />
            </a>
          </li>
          <li class="active">
            <a id="clock" href="">
              <FaRegClock style={{color:'#757575'}} /> 0 min
            </a>
          </li>
          <li class="active">
            <a id="clock" href="">
              <RxDividerVertical style={{color:'#757575'}} />
            </a>
          </li>
          <li class="active">
            <a id="image" href="">
              <GiRabbitHead style={{color:'red'}}/>
            </a>
          </li>
          <li class="active">
            <a id="arrow" href=""></a>
            <BsArrowDownLeft style={{color:'#757575'}} />
          </li>
        </ul>
        <ul className="left-side">
          <li class="active">
            <a id="circle" href="">
              <FiCheckCircle style={{color:'#444'}} />
            </a>
          </li>
          <li class="active">
            <a id="circle" href="">
              <CiCloud style={{color:'green'}} />
            </a>
          </li>

          <li class="active">
            <a id="circle" href="">
              <BsThreeDotsVertical />
            </a>
          </li>
        </ul>
      </div>
      <div className="Text">
        <h1>Front-end Developer test project</h1>
      </div>
    </div>
  );
};

export default Header;

