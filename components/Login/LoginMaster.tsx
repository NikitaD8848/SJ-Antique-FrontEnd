import { useState, useEffect } from 'react';
import getAccessTokenApi from '@/services/api/login-api';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAccessToken,
  get_access_token,
} from '@/store/slices/auth/login-slice';

const LoginMaster = () => {
  const dispatch = useDispatch();
  const selector = useSelector(get_access_token);
  console.log(selector, 'selector');
  //const navigate = useNavigate();

  const [userData, setUserData] = useState<any>({
    username: '',
    password: '',
  });

  const HandleInputChange: any = (e: any) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  console.log(userData, 'userData');

  const HandleFormSubmit = () => {
    dispatch(getAccessToken(userData));
  };
  useEffect(() => {}, []);

  return (
    <>
      <div className="container mt-5">
        {/* <a className="navbar-brand">
          <img src={logo} alt="" height="55px" width="auto" />
        </a> */}
        <div className="container  d-flex justify-content-center login-page-container">
          <div className="row">
            <div className="col-lg-12 card login-card">
              <div className="  p-lg-5 p-0">
                <p className="text-uppercase fs-3 text-center">login </p>
                <div className="card-body p-0">
                  <form className="login-form p-2 mx-auto text-center">
                    <div className="mb-3">
                      <input
                        type="text"
                        id="username"
                        name="username"
                        onChange={HandleInputChange}
                        className="form-control login-input-field px-2"
                        placeholder="Username"
                        aria-describedby="emailHelp"
                        required
                      />
                    </div>
                    <div className="my-4">
                      <div className="d-flex justify-content-center">
                        <input
                          type="password"
                          id="password"
                          name="password"
                          onChange={HandleInputChange}
                          className="form-control login-input-field px-2 "
                          placeholder="Password"
                          required
                        />
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={HandleFormSubmit}
                      className="btn btn-primary mt-3 py-1 px-4"
                    >
                      Login
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginMaster;
