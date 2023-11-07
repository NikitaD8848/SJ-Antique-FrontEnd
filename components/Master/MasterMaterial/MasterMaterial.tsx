import React, {useState} from 'react';
import useReadyReceiptKarigar from '@/hooks/readyReceiptKarigarHooks';
import MasterMaterialListing from './MasterMaterialListing';
import { useSelector } from 'react-redux';
import { get_access_token } from '@/store/slices/auth/login-slice';
import postMaterialApi from '@/services/api/post-material-api';

const MasterMaterial: any = () => {
    const { materialListData}=useReadyReceiptKarigar()
    const [nameValue, setNameValue]=useState({
      material: "",
      material_abbr: ""
    })
  const loginAcessToken = useSelector(get_access_token);

  const HandleNameChange =(
    newVal:any,
    field:string)=>{

    console.log(newVal,"name name")
    setNameValue(
      nameValue.material = newVal

    )
  }
  const HandleSave =()=>{
    console.log(nameValue,'material saved')
    const values ={
      version: "v1",
      method: "create_karigar",
      entity: "post_karigar_api",
      data: [nameValue]
    }
    console.log(values,"valuesname")
    // const postMaterial:any = postMaterialApi(
    //   loginAcessToken.token,
    //   values
    // )
    // console.log(postMaterial,"post karigar name")
  }
  return (
    <div >
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
            Material List
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
            Create New Material
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
          <MasterMaterialListing materialListData={materialListData} />
        </div>
        <div
          className="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <div className='container'>
            <div className=' m-1'>
            <label htmlFor="" >Material Name</label>
            <span className='text-danger'>*</span>
            </div>
            <div className='p-1'>
                <input type="text"
                className='form-control w-50 border p-1'
                name='material'
                value={nameValue.material}
                onChange={(e)=>{HandleNameChange('material',e.target.value)}}
                required />
            </div>
            <div className=' m-1'>
            <label htmlFor="" >Material Abbrivation</label>
            <span className='text-danger'>*</span>
            </div>  
            <div className='p-1'>
                <input type="text"
                className='form-control w-50 border p-1'
                name='material_abbr'
                value={nameValue.material_abbr}
                onChange={(e)=>{HandleNameChange('material_abbr',e.target.value)}}
                required
                />
            </div>
            <div className='d-flex justify-content-start'>
                <button type='submit'
                 className=" btn btn-outline-primary py-1 mt-2 form-submit-button"
                 onClick={HandleSave}
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

export default MasterMaterial;
