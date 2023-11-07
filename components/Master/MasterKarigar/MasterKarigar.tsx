import React, { useState } from 'react';
import MasterKarigarListing from './MasterKarigarListing';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { get_access_token } from '@/store/slices/auth/login-slice';
import postKarigarApi from '@/services/api/post-karigar-name';

const MasterKarigar: any = ({ karigarData }: any) => {
  const AccessToken: any = useSelector(get_access_token);
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');
  const HandleSubmit = async () => {
    const values ={
          version: "v1",
          method: "create_karigar",
          entity: "post_karigar_api",
          karigar_name: inputValue
        }
        console.log(values,'values')
    if (inputValue.trim() === '') {
      setError('Input field cannot be empty');
      console.log(error)
    } else {
      let apiRes: any = await postKarigarApi(AccessToken?.token, values);
      console.log('apires', apiRes);
      if (apiRes?.status === 'success' && apiRes?.hasOwnProperty('data') ) {
        toast.success('Karigar Name Created');
        
      } else {
        toast.error('Karigar Name already exist');
      }
      setError('');
      setInputValue('');
    }
  };
  const HandleInputValue = (e: any) => {
    setError('');
    setInputValue(e.target.value);
    console.log(inputValue,"input value")
  };
  
  return (
    <div>
      <div
        className="nav nav-pills mb-2 justify-content-center "
        id="pills-tab"
        role="tablist"
      >
        <div className="nav-tabs tabs-container w-50 " role="presentation">
          <button
            className="nav-link active w-100 p-1 border"
            id="pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-home"
            type="button"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >
            Karigar List
          </button>
        </div>
        <div className="nav-tabs tabs-container w-50" role="presentation">
          <button
            className="nav-link  w-100 p-1 border"
            id="pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-profile"
            type="button"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false"
          >
            Create New Karigar
          </button>
        </div>
      </div>
      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <MasterKarigarListing masterData={karigarData} />
        </div>
        <div
          className="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <div className='container'>
            <div className=' m-1'>
            <label htmlFor="" >Karigar Name</label>
            <span className='text-danger'>*</span>
            </div>
            <div className='p-1'>
                <input type="text" 
                className='form-control w-50 border p-1' 
                value={inputValue}
                onChange={(e)=>{HandleInputValue(e)}}
                required />
            </div>
            <div className='d-flex justify-content-start'>
                <button type='submit'
                 className=" btn btn-outline-primary py-1 mt-2 form-submit-button"
                 onClick={HandleSubmit}
                 >
                  Save
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasterKarigar;
