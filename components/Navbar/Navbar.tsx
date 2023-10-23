import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Link from 'next/link'
import "bootstrap/dist/css/bootstrap.min.css"
import Dropdown from 'react-bootstrap/Dropdown'
import logo from '../../services/assets/Logo.png'
import Image from 'next/image'

const Navbar = () => (  
    <nav className="navbar navbar-light bg-light mx-5 ">
        <div className='container-lg'>
            <Link className="navbar-brand" href="/master">
                <Image src={logo} alt="logo" height={70}  />
            </Link>
            <Dropdown>
                <Dropdown.Toggle className="dropdown" variant="success" id="dropdown-basic">
                    Dropdown
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="/Logout">Logout</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

        </div>
    </nav>

)

export default Navbar