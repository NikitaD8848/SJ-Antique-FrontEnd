import getPurchasreceiptListApi from '@/services/api/get-purchase-recipts-list-api';
import React, { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { get_access_token } from '@/store/slices/auth/login-slice';
import getKarigarApi from '@/services/api/get-karigar-list-api';
import kundanKarigarApi from '@/services/api/get-kundan-karigar-list-api';
import materialApi from '@/services/api/get-material-list-api';
import postUploadFile from '@/services/api/post-upload-file-api';
import postMaterialApi from '@/services/api/post-material-api';
import purchaseReceiptApi from '@/services/api/post-purchase-receipt-api';
import { ToastContainer, toast } from 'react-toastify';
import DeletePurchaseReceiptApi from '@/services/api/PurchaseReceipt/delete-purchase-receipt';
import UseCustomReceiptHook from './custom-receipt-hook';
import UseKundanKarigarDetailHook from './KundanKarigarHook/kundan-karigar-hook';
const useReadyReceiptKarigar = () => {
  // api states
  const router = useRouter();
  const pathParts = router.asPath.split('/');
  const lastPartOfURL = pathParts[pathParts.length - 1];
  console.log('last part', lastPartOfURL);

  const inputRef = useRef<any>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [recipitData, setRecipitData] = useState({
    custom_karigar: ' ',
    remarks: '',
    custom_ready_receipt_type: lastPartOfURL,
  });
  const [clickBtn, setClickBtn] = useState<boolean>(false);
  const [clicks, setClick] = useState<boolean>(false);
  const [karigarData, setKarigarData] = useState<any>();
  const [kundanKarigarData, setKundanKarigarData] = useState<any>();
  const [materialListData, setMaterialListData] = useState<any>();
  const [indexVal, setIndexVal] = useState<any>();
  const [activeModalId, setActiveModalId] = useState<any>(null);

  const loginAcessToken = useSelector(get_access_token);
  console.log(loginAcessToken, 'loginAcessToken');
  let disabledValue: any;
  const [materialWeight, setMaterialWeight] = useState<any>();
  const [tableData, setTableData] = useState<any>([
    {
      id: 1,
      product_code: '',
      custom_kun_karigar: '',
      custom_net_wt: '',
      custom_few_wt: '',
      custom_gross_wt: '',
      custom_mat_wt: '',
      custom_other: '',
      custom_total: '',
      custom_add_photo: '',
      totalModalWeight: 0,
      totalAmount: 0,
      table: [
        {
          id: materialWeight?.length + 1,
          material_abbr: '',
          material: '',
          pcs: '',
          piece_: '',
          carat: '',
          carat_: '',
          weight: '',
          gm_: '',
          amount: '',
        },
      ],
    },
  ]);

  const { HandleDeleteReceipt, setKundanListing, kundanListing }: any =
    UseCustomReceiptHook();

  // useEffect(() => {
  //   setTableData([
  //     {
  //       id: 1,
  //       product_code: '212',
  //       custom_kun_karigar: 'dsad',
  //       custom_net_wt: '212',
  //       custom_few_wt: '43',
  //       custom_gross_wt: '54',
  //       custom_mat_wt: '65',
  //       custom_other: '',
  //       custom_total: '',
  //       custom_add_photo: '',
  //       totalModalWeight: 0,
  //       totalAmount: 0,
  //       table: [
  //         {
  //           id: '1',
  //           material_abbr: '',
  //           material: 'f',
  //           pcs: '54',
  //           piece_: '54',
  //           carat: '',
  //           carat_: '54',
  //           weight: '',
  //           gm_: '',
  //           amount: '',
  //         },
  //       ],
  //     },
  //   ]);
  // }, []);

  console.log('table data updated', tableData);

  useEffect(() => {
    console.log('lastt', lastPartOfURL);

    const getPurchaseList = async () => {
      const capitalizeFirstLetter = (str: any) => {
        return str?.charAt(0)?.toUpperCase() + str?.slice(1);
      };
      const listData = await getPurchasreceiptListApi(
        loginAcessToken,
        capitalizeFirstLetter(lastPartOfURL)
      );

      setKundanListing(listData);
    };
    getPurchaseList();
  }, [clicks, router]);

  useEffect(() => {
    const getStateData: any = async () => {
      const stateData: any = await getKarigarApi(loginAcessToken.token);
      const KundanKarigarAPI = await kundanKarigarApi(loginAcessToken.token);
      const materialListApi = await materialApi(loginAcessToken.token);
      console.log(KundanKarigarAPI, 'stateData');
      setKarigarData(stateData);
      setKundanKarigarData(KundanKarigarAPI);
      setMaterialListData(materialListApi);
    };
    getStateData();
  }, []);
  console.log(karigarData, 'karigarData');
  const calculateRowValue = (i: any) => {
    console.log(i, 'i');
    return (
      materialWeight[i]?.pcs * materialWeight[i]?.piece_ +
      materialWeight[i]?.carat * materialWeight[i]?.carat_ +
      materialWeight[i]?.weight * materialWeight[i]?.gm_
    );
  };

  const handleFieldChange: any = (
    id: number,
    val: any,
    field: string,
    newValue: any,
    fileVal?: any
  ) => {
    const updatedData =
      tableData?.length > 0 &&
      tableData !== null &&
      tableData.map((item: any, i: any) => {
        if (item.id === id) {
          return { ...item, [field]: 0 || newValue };
        }
        return item;
      });
    console.log(updatedData, 'bbb');
    setTableData(updatedData);
    if (field === 'custom_add_photo') {
      console.log(fileVal, 'fileVal');
      handleFileUpload(fileVal);
    }
  };

  const handleFileUpload = async (fileVal: any) => {
    await postUploadFile(loginAcessToken.token, fileVal);
  };
  const handleModalFieldChange = (
    id: number,
    val: any,
    field: string,
    newValue: any
  ) => {
    const updatedModalData =
      materialWeight?.length > 0 &&
      materialWeight?.map((item: any, i: any) => {
        if (i === id) {
          return { ...item, [field]: 0 || newValue };
        }
        return item;
      });

    const newVal =
      tableData?.length > 0 &&
      tableData !== null &&
      tableData?.table?.filter(
        (item: any) => materialListData?.includes(item.material)
      );
    console.log(newVal, 'newVal');
    console.log(disabledValue, 'disabledValue');
    setMaterialWeight(updatedModalData);
  };
  const handleAddRow = (value: any) => {
    const newRow = {
      id: tableData?.length + 1,
      product_code: '',
      custom_kun_karigar: '',
      custom_net_wt: '',
      custom_few_wt: '',
      custom_gross_wt: '',
      custom_mat_wt: '',
      custom_other: '',
      custom_total: '',
      custom_add_photo: '',
      table: [
        {
          id: materialWeight?.length + 1,
          material_abbr: '',
          material: '',
          pcs: '',
          piece_: '',
          carat: '',
          carat_: '',
          weight: '',
          gm_: '',
          amount: '',
        },
      ],
    };
    if (value === 'tableRow') {
      setTableData([...tableData, newRow]);
    } else {
      setMaterialWeight([...materialWeight, ...newRow?.table]);
    }
  };
  const handleTabPress = (event: any, id: any) => {
    if (event.key === 'Tab' && id === tableData[tableData.length - 1].id) {
      handleAddRow('tableRow');
    }
  };

  const handleModal = (event: any, id: any, data: any) => {
    setIndexVal(id);
    console.log(tableData, 'materialWeight');
    // console.log(materialWeight, "materialWeight");
    const dataVal =
      tableData?.length > 0 &&
      tableData !== null &&
      tableData?.filter((item: any) => {
        if (item.id === id) {
          if (event.key === 'F2') {
            if (item.totalAmount > 0) {
              setMaterialWeight(item.table);
            } else {
              setMaterialWeight(data.table);
            }
            setShowModal(true);
          }
        }
      });
  };

  const handleSaveModal = async (id: any) => {
    const modalValue = materialWeight.map(
      ({
        pcs,
        piece_,
        carat,
        carat_,
        weight,
        gm_,
        amount,
        id,
        ...rest
      }: any) => ({
        ...rest,
      })
    );
    console.log(modalValue, 'modalValue');
    if (inputRef.current) {
      disabledValue = inputRef.current.value;
    } else {
      console.error('The ref to the input element is not available.');
    }

    const totalAmmount = materialWeight.map(
      ({
        pcs,
        piece_,
        carat,
        carat_,
        gm_,
        id,
        material_abbr,
        material,
        weight,
        ...rest
      }: any) => ({ ...rest })
    );
    console.log(totalAmmount, 'bfggh');
    const weightAddition = materialWeight.reduce((accu: any, val: any) => {
      console.log(accu, 'accu23');
      return accu + val.weight;
    }, 0);
    const updatedMaterialVal = materialWeight.map((item: any) => {
      return {
        ...item,
        amount: disabledValue,
      };
    });

    const totalvalues = materialWeight.map(
      (row: any) =>
        row.pcs * row.piece_ + row.carat * row.carat_ + row.weight * row.gm_
    );
    let numbers: any;
    if (Array.isArray(totalvalues) && totalvalues.length === 1) {
      numbers = totalvalues[0];
    } else {
      numbers = totalvalues.reduce((accu: any, val: any) => {
        return accu + val;
      }, 0);
    }
    // setTotalModalAmount(totalvalues);
    console.log(totalvalues, 'totalvalues ');
    const totalAmmountValues = totalvalues.reduce((accu: any, val: any) => {
      return accu + val;
    }, 0);
    console.log();
    const updatedMaterialWeight =
      tableData?.length > 0 &&
      tableData !== null &&
      tableData?.map((row: any, i: any) => {
        console.log(i, 'ij');
        console.log(id, 'ij');
        if (row.id === indexVal) {
          const numbersParsed = parseInt(numbers, 10);
          return {
            ...row,
            totalModalWeight: weightAddition,
            totalAmount: totalAmmountValues,
            table: materialWeight.map(({ id, ...rest }: any) => ({ ...rest })),
            custom_mat_wt: weightAddition,
            custom_gross_wt:
              parseInt(row.custom_net_wt, 10) +
              parseInt(row.custom_few_wt, 10) +
              weightAddition,
            custom_total: numbersParsed,
          };
        }
        return row;
      });
    console.log(updatedMaterialWeight, 'updatedMaterialWeight');
    const updatedDataVal = updatedMaterialWeight.map((row: any, i: any) => {
      if (row.id === indexVal) {
        return {
          ...row,
          table: row.table.map((tableItem: any) => ({
            ...tableItem,
            amount:
              (parseInt(tableItem.pcs, 10) || 0) *
                (parseInt(tableItem.piece_, 10) || 0) +
              (parseFloat(tableItem.carat) || 0) *
                (parseFloat(tableItem.carat_) || 0) +
              (parseFloat(tableItem.weight) || 0) *
                (parseFloat(tableItem.gm_) || 0),
          })),
        };
      }
      return row;
    });

    console.log(updatedDataVal, 'updatedDataVa');
    setTableData(updatedDataVal);
    if (totalvalues.length > 0) {
      setClickBtn(true);
    } else {
      setClickBtn(false);
    }
    const values = {
      version: 'v1',
      method: 'create_material',
      entity: 'material_post_api',
      data: modalValue,
    };
    console.log(updatedMaterialWeight, 'data45');
    const materialApiVal = await postMaterialApi(loginAcessToken.token, values);
    setShowModal(false);
  };
  const handleDeleteRow = (id: any) => {
    if (tableData?.length > 1) {
      const updatedData =
        tableData?.length > 0 &&
        tableData !== null &&
        tableData
          .filter((item: any) => item.id !== id)
          .map((row: any, index: number) => ({ ...row, id: index + 1 }));
      setTableData(updatedData);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setActiveModalId(null);
  };
  const handleRecipietChange = (e: any) => {
    setRecipitData({ ...recipitData, [e.target.name]: e.target.value });
  };
  console.log(recipitData, 'recipitData');

  const handleCreate = async () => {
    console.log(tableData, 'table56');
    const updatedtableData =
      tableData?.length > 0 &&
      tableData !== null &&
      tableData?.map((row: any, i: any) => {
        if (row.id === indexVal) {
          if (row.custom_other !== '' && row.custom_total !== '') {
            return {
              ...row,
              custom_total:
                parseInt(row.totalAmount) + parseInt(row.custom_other),
            };
          } else if (row.custom_other !== '') {
            return {
              ...row,
              custom_total: parseInt(row.custom_other),
            };
          } else {
            return {
              ...row,
              custom_total: parseInt(row.totalAmount),
            };
          }
        }
        return row;
      });

    console.log(updatedtableData, 'updatedtableData');
    const modalValue = updatedtableData?.map(
      ({ id, totalModalWeight, totalAmount, ...rest }: any) => ({
        ...rest,
      })
    );

    const values = {
      ...recipitData,
      items: modalValue,
    };

    console.log(values, 'vals');
    const isEmptyProductCode = values?.items?.some(
      (obj: any) => obj.product_code === ''
    );
    const isEmptyMaterial = values?.items?.some((obj: any) =>
      obj.table.some((vals: any) => vals.material === '')
    );
    const productVal = values.custom_karigar;
    console.log(isEmptyMaterial, 'finalVal');
    if (isEmptyProductCode || productVal === '') {
      toast.error('add Item code Or Karigar');
    } else if (isEmptyMaterial) {
      toast.error('please Enter Material Name');
    } else {
      const purchaseReceipt: any = await purchaseReceiptApi(
        loginAcessToken.token,
        values
      );
      console.log(purchaseReceipt, 'purchase');
      if (purchaseReceipt.status === 200) {
        setRecipitData({
          custom_karigar: ' ',
          remarks: '',
          custom_ready_receipt_type: lastPartOfURL,
        });
        setTableData([
          {
            id: 1,
            product_code: '',
            custom_kun_karigar: '',
            custom_net_wt: '',
            custom_few_wt: '',
            custom_gross_wt: '',
            custom_mat_wt: '',
            custom_other: '',
            custom_total: '',
            custom_add_photo: '',
            totalModalWeight: 0,
            totalAmount: 0,
            table: [
              {
                id: materialWeight?.length + 1,
                material_abbr: '',
                material: '',
                pcs: '',
                piece_: '',
                carat: '',
                carat_: '',
                weight: '',
                gm_: '',
                amount: '',
              },
            ],
          },
        ]);
        toast.success('Purchase Receipt Created Sucessfully');
      } else {
        toast.error('Error in Creating Purchase Receipt');
      }
    }
  };

  const handleDeleteChildTableRow = (id: any) => {
    if (materialWeight?.length > 1) {
      const updatedData = materialWeight?.filter(
        (item: any, i: any) => i !== id
      );
      setMaterialWeight(updatedData);
    }
  };

  console.log(kundanListing, 'kundanlisting');

  // const HandleDeleteReceipt: any = async (name: any) => {
  //   let deletePurchaseReceiptApi: any = await DeletePurchaseReceiptApi(
  //     loginAcessToken?.token,
  //     name
  //   );
  //   console.log('deletereciept api', deletePurchaseReceiptApi);
  //   if (deletePurchaseReceiptApi?.message?.status === 'success') {
  //     toast.success(deletePurchaseReceiptApi?.message?.message);
  //     const capitalizeFirstLetter = (str: any) => {
  //       return str?.charAt(0)?.toUpperCase() + str?.slice(1);
  //     };

  //     let updatedData: any = await getPurchasreceiptListApi(
  //       loginAcessToken,
  //       capitalizeFirstLetter(lastPartOfURL)
  //     );

  //     setKundanListing(updatedData);
  //   } else {
  //     toast.error('Failed to Delete purchase Receipt');
  //   }
  // };

  return {
    setClick,
    kundanListing,
    handleCreate,
    handleRecipietChange,
    handleAddRow,
    recipitData,
    karigarData,
    setRecipitData,
    handleFieldChange,
    tableData,
    handleDeleteRow,
    handleTabPress,
    setTableData,
    kundanKarigarData,
    handleModal,
    handleModalFieldChange,
    materialWeight,
    materialListData,
    calculateRowValue,
    handleDeleteChildTableRow,
    setMaterialWeight,
    closeModal,
    handleSaveModal,
    showModal,
    lastPartOfURL,
    HandleDeleteReceipt,
  };
};

export default useReadyReceiptKarigar;
