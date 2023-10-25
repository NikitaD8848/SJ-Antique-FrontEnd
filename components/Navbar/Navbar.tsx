import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Link from 'next/link'
import "bootstrap/dist/css/bootstrap.min.css"
import logo from '../../services/assets/Logo.png'
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => (  
    <div className='container-lg'>
    <nav className="navbar navbar-light bg-light p-0 ">
            <Link className="navbar-brand" href="/master">
                <Image src={logo} alt="logo" height={55}  />
            </Link>
            <button className='p-2 m-2 mx-3 border-1 rounded-circle'>
                <FontAwesomeIcon
                icon={faUser}
                className="fas fa-check"
                style={{ color: "blue", fontSize: 20 }}
                />
            </button>

    </nav>
    </div>

)

export default Navbar