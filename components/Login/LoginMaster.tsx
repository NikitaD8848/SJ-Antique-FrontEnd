import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAccessToken,
  get_access_token,
} from '@/store/slices/auth/login-slice';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/router';

const LoginMaster = () => {
  const dispatch = useDispatch();
  const loginAcessToken = useSelector(get_access_token);
  const [loginToken, setLoginToken] = useState('');
  console.log(loginAcessToken, 'selector');
  const router = useRouter();
  const [userData, setUserData] = useState<any>({
    username: '',
    password: '',
  });

  const HandleInputChange: any = (e: any) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  console.log(userData, 'userData');

  const HandleFormSubmit = () => {
    const loginsucess = dispatch(getAccessToken(userData));
    console.log(loginsucess, 'loginsucess');
    if (loginAcessToken.token !== '') {
      toast.success('Login Sucessfully');
      setTimeout(() => {
        router.push('/readyReceiptKundanKarigar');
      }, 900);
    }
    if (loginAcessToken.error !== '') {
      toast.error(loginAcessToken.error);
      router.push('/');
    }
  };

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
