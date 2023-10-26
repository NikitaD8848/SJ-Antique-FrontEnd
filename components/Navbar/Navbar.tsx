import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../services/assets/Logo.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from 'react-bootstrap/DropdownButton';

const Navbar = () => (
  <div className="container-lg">
    <nav className="navbar navbar-light bg-light p-0 ">
      <Link className="navbar-brand" href="/master">
        <Image src={logo} alt="logo" width={96} height={62} />
      </Link>
      <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-basic">
            <FontAwesomeIcon
              icon={faCircleUser}
              className="fa fa-user-circle "
              style={{ color: "#CDAB6E", fontSize: 30 }}
            />
          
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/logout">Logout</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
    </nav>
  </div>
);

export default Navbar;
