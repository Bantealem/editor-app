import React from "react";
import { FaCloudflare, FaRegClock } from "react-icons/fa";
import { BsThreeDotsVertical, BsArrowDownLeft } from "react-icons/bs";
import { FiCheckCircle } from "react-icons/fi";
import { GiRabbitHead } from "react-icons/gi";
import { RxDividerVertical } from "react-icons/rx";
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
              <RxDividerVertical />
            </a>
          </li>
          <li class="active">
            <a id="clock" href="">
              <FaRegClock /> 0 min
            </a>
          </li>
          <li class="active">
            <a id="clock" href="">
              <RxDividerVertical />
            </a>
          </li>
          <li class="active">
            <a id="image" href="">
              <GiRabbitHead />
            </a>
          </li>
          <li class="active">
            <a id="arrow" href=""></a>
            <BsArrowDownLeft />
          </li>
        </ul>
        <ul className="left-side">
          <li class="active">
            <a id="circle" href="">
              <FiCheckCircle />
            </a>
          </li>
          <li class="active">
            <a id="circle" href="">
              <FaCloudflare />
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

