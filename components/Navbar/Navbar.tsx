import React from 'react'
import UserProfile from '../UserProfile/UserProfile'
import 'bootstrap/dist/css/bootstrap.css'
import Link from 'next/link'

const Navbar = () => (
        <nav className="navbar navbar-light bg-light">
            <div className='container-md' >
                <Link className="navbar-brand" href="/master">
                    <img src="abc" alt="logo" height="55px" width="auto" />
                </Link>
                <div className="dropdown">
                    <button
                        className="btn navbar-toggler dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        <a href="/Userprofile" className="text-right">
                            <i className="fa fa-user-circle" aria-hidden="true"></i>
                        </a>
                    </button>
                    <UserProfile />
                </div>
            </div>
        </nav>
   
)

export default Navbar