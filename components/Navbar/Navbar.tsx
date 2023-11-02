import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../services/assets/Logo.png';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import Dropdown from 'react-bootstrap/Dropdown';
import Header1 from '../Header/Header-1';
import Header2 from '../Header/Header-2';
import { useDispatch } from 'react-redux';
import { ClearToken } from '@/store/slices/auth/login-slice';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();
  const [showButtons1, setShowButtons1] = useState<any>(false);
  const [showButtons2, setShowButtons2] = useState<any>(false);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(ClearToken());
    router.push('/');
  };

  return (
    <div className="container-lg">
      <nav className="navbar navbar-light bg-light p-0 ">
        <Link className="navbar-brand" href="#/master">
          <Image src={logo} alt="logo" width={96} height={62} />
        </Link>
        <div>
          {/* <button className="btn btn-primary mx-5 "
              onClick={()=>setShowButtons1(!showButtons1)}  
                >
                Ready Receipts</button>
      <button className="btn btn-primary mx-5 px-5" 
       onClick={()=>setShowButtons2(!showButtons2)} >Sales</button> */}
        </div>
        <Dropdown>
          <Dropdown.Toggle variant="light" id="dropdown-basic">
            <FontAwesomeIcon
              icon={faCircleUser}
              className="fa fa-user-circle "
              style={{ color: '#CDAB6E', fontSize: 30 }}
            />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={handleClick}>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Header1 />
      </nav>
    </div>
  );
};

export default Navbar;
