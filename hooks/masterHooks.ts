import getKarigarApi from '@/services/api/get-karigar-list-api';
import kundanKarigarApi from '@/services/api/get-kundan-karigar-list-api';
import materialApi from '@/services/api/get-material-list-api';
import postKarigarApi from '@/services/api/post-karigar-name';
import postKunKarigarApi from '@/services/api/post-kundan-karigar-name';
import postMaterialMasterApi from '@/services/api/post-material-master';
import { get_access_token } from '@/store/slices/auth/login-slice';
import React, { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const useMasterHooks = () => {
  const loginAcessToken = useSelector(get_access_token);
  // get api states
  const [karigarList, setKarigarList] = useState();
  const [kunKarigarList, setKunKarigarList] = useState();
  const [materialList, setMaterialList] = useState();

  // get api functions
    useEffect(() => {
    const getStateData: any = async () => {
      const karigarData: any = await getKarigarApi(loginAcessToken.token);
      const kunKarigarData = await kundanKarigarApi(loginAcessToken.token);
      const materialData = await materialApi(loginAcessToken.token);
      console.log(karigarData, 'KarigarData Master')
      setKarigarList(karigarData);
      setKunKarigarList(kunKarigarData);
      setMaterialList(materialData);
    };
    getStateData()
  }, []);
  //post karigar name
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
      let apiRes: any = await postKarigarApi(loginAcessToken?.token, values);
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
    // post kundan karigar api
    const HandleKunSubmit = async () => {
      const values ={
            version: "v1",
            method: "create_kundan_karigar",
            entity: "post_kundan_karigar_api",
            karigar_name: inputValue
          }
          console.log(values,'values')
      if (inputValue.trim() === '') {
        setError('Input field cannot be empty');
        console.log(error)
      } else {
        let apiRes: any = await postKunKarigarApi(loginAcessToken?.token, values);
        console.log('apires', apiRes);
        if (apiRes?.status === 'success' && apiRes?.hasOwnProperty('data') ) {
          toast.success('Kundan Karigar Name Created');  
        } else {
          toast.error('Kundan Karigar Name already exist');
        }
        setError('');
        setInputValue('');
      }
    };
  const HandleKunInputValue = (e: any) => {
    setError('');
    setInputValue(e.target.value);
    console.log(inputValue,"input value")
  };
  // post material name
  const [nameValue, setNameValue]=useState({
    material: "",
    material_abbr: ""
  })

const HandleNameChange =(e:any)=>{
 const {name ,value} = e.target
 setNameValue({...nameValue,[name]:value})
  
}
console.log(nameValue,"namevalue")
const HandleSave = async ()=>{
  console.log(nameValue,'material saved')
  const values ={
    version: "v1",
    method: "create_karigar",
    entity: "post_karigar_api",
    data: [nameValue]
  }
  console.log(values,"valuesname")
  if (nameValue.material === "" || nameValue.material === undefined ||
    nameValue.material_abbr === "" || nameValue.material_abbr === undefined) {
    setError('Input field cannot be empty');
    console.log(error)
  } else {
    let apiRes: any = await postMaterialMasterApi(loginAcessToken?.token, values);
    console.log('apires', apiRes);
    if (apiRes?.status === 'success'  ) {
      toast.success('Material Name Created');
      
    } else {
      toast.error('Material Name already exist');
    }
    setError('');
    setNameValue({
      material: "",
    material_abbr: ""
    });
  }
}

  return {
    karigarList,
    kunKarigarList,
    materialList,
    inputValue,
    nameValue,
    HandleInputValue,
    HandleSubmit,
    HandleKunInputValue,
    HandleKunSubmit,
    HandleNameChange,
    HandleSave,
    error
  };
};

export default useMasterHooks;
