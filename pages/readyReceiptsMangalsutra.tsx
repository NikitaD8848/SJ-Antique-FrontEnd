import React, { useState, useRef } from "react";
import styles from "../styles/readyReceipts.module.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { SiAddthis } from "react-icons/si";
import { Modal, Button } from "react-bootstrap";

const readyReceiptsMangalsutra = () => {
  const inputRef = useRef<any>();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [clickBtn, setClickBtn] = useState<boolean>(false);
  const [dublicateData, setDublicateData] = useState<any>();
  const [indexVal, setIndexVal] = useState<any>();
  const [activeModalId, setActiveModalId] = useState<any>(null);
  // const [totalModalWeight, setTotalModalWeight] = useState<any>(0);
  // const [totalModalAmount, setTotalModalAmount] = useState<any>(0);
  // const [materialWeight, setMaterialWeight] = useState<any>([
  //   {
  //     id: 1,
  //     material_abbr: "",
  //     material_name: "",
  //     pcs: "",
  //     piece_: "",
  //     carat: "",
  //     carat_: "",
  //     weight: "",
  //     gm_: "",
  //     amount: "",
  //   },
  // ]);
  const [materialWeight, setMaterialWeight] = useState<any>();
  const [tableData, setTableData] = useState<any>([
    {
      id: 1,
      product_code: "",
      custom_kun_karigar: "",
      custom_net_wt: "",
      custom_few_wt: "",
      custom_gross_wt: "",
      custom_mat_wt: "",
      custom_other: "",
      custom_total: "",
      custom_add_photo: "",
      totalModalWeight: 0,
      totalAmount: 0,
      table: [
        {
          id: materialWeight?.length + 1,
          material_abbr: "",
          material_name: "",
          pcs: "",
          piece_: "",
          carat: "",
          carat_: "",
          weight: "",
          gm_: "",
          amount: "",
        },
      ],
    },
  ]);

  const calculateRowValue = (i: any) => {
    console.log(i, "i");
    return (
      materialWeight[i]?.pcs * materialWeight[i]?.piece_ +
      materialWeight[i]?.carat * materialWeight[i]?.carat_ +
      materialWeight[i]?.weight * materialWeight[i]?.gm_
    );
  };

  const handleFieldChange = (
    id: number,
    val: any,
    field: string,
    newValue: any
  ) => {
    const updatedData = tableData.map((item: any, i: any) => {
      if (item.id === id) {
        return { ...item, [field]: 0 || newValue };
      }
      return item;
    });
    setTableData(updatedData);
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

    // const updatedMaterialWeight = materialWeight?.map((row:any,i:any) => {
    //   console.log(i,"ij")
    //   console.log(id,"ij")
    //   if (i === id) {
    //     return { ...row, totalModalWeight: weightAddition, amount: totalAmmountValues };
    //   }
    //   return row;
    // });

    setMaterialWeight(updatedModalData);
  };
  const handleAddRow = (value: any) => {
    const newRow = {
      id: tableData.length + 1,
      product_code: "",
      custom_kun_karigar: "",
      custom_net_wt: "",
      custom_few_wt: "",
      custom_gross_wt: "",
      custom_mat_wt: "",
      custom_other: "",
      custom_total: "",
      custom_add_photo: "",
      table: [
        {
          id: +materialWeight?.length + 1,
          material_abbr: "",
          material_name: "",
          pcs: "",
          piece_: "",
          carat: "",
          carat_: "",
          weight: "",
          gm_: "",
          amount: "",
        },
      ],
    };
    if (value === "tableRow") {
      setTableData([...tableData, newRow]);
    } else {
      setMaterialWeight([...materialWeight, ...newRow?.table]);
    }
  };

  const handleModalAddRow = () => {
    const newModalRow = {
      id: materialWeight?.length + 1,
      material_abbr: "",
      material_name: "",
      pcs: "",
      piece_: "",
      carat: "",
      carat_: "",
      weight: "",
      gm_: "",
      amount: "",
    };
    setMaterialWeight([...materialWeight, newModalRow]);
  };
  const handleTabPress = (event: any, id: any) => {
    if (event.key === "Tab" && id === tableData[tableData.length - 1].id) {
      handleAddRow("tableRow");
    }
  };

  const handleSaveModal = (id: any) => {
    setIndexVal(id)
    setDublicateData([...materialWeight]);
    const modalValue = materialWeight.map(
      ({ pcs, piece_, carat, carat_, weight, gm_, amount, ...rest }: any) => ({
        ...rest,
      })
    );
    const totalAmmount = materialWeight.map(
      ({
        pcs,
        piece_,
        carat,
        carat_,
        gm_,
        id,
        material_abbr,
        material_name,
        weight,
        ...rest
      }: any) => ({ ...rest })
    );
    console.log(totalAmmount, "bfggh");
    const weightAddition = materialWeight.reduce((accu: any, val: any) => {
      console.log(accu, "accu23");
      return accu + val.weight;
    }, 0);

    const totalvalues = materialWeight.map(
      (row: any) =>
        row.pcs * row.piece_ + row.carat * row.carat_ + row.weight * row.gm_
    );
    // setTotalModalAmount(totalvalues);
    console.log(totalvalues, "totalvalues ");
    const totalAmmountValues = totalvalues.reduce((accu: any, val: any) => {
      return accu + val;
    }, 0);
    console.log();
    const updatedMaterialWeight = tableData?.map((row: any, i: any) => {
      console.log(i, "ij");
      console.log(id, "ij");
      if (row.id === id) {
        return {
          ...row,
          totalModalWeight: weightAddition,
          totalAmount: totalAmmountValues,
        };
      }
      return row;
    });
    setTableData(updatedMaterialWeight);
    if (totalvalues.length > 0) {
      setClickBtn(true);
    } else {
      setClickBtn(false);
    }
    // setTotalModalAmount(totalAmmountValues);
    // setTotalModalWeight(weightAddition);
    setShowModal(false);
  };
  const handleDeleteRow = (id: any) => {
    const updatedData = tableData.filter((item: any) => item.id !== id);
    setTableData(updatedData);
  };

  const closeModal = () => {
    setShowModal(false);
    setActiveModalId(null);
  };
  const handleModal = (event: any, id: any, data: any) => {
    console.log(dublicateData, "materialWeight");
    console.log(materialWeight, "materialWeight");

    const dataVal = tableData?.filter((item: any) => {
      if (item.id === id) {
        if (event.key === "F2") {
          if (clickBtn === true && indexVal === id) {
            setMaterialWeight(dublicateData);      
          } else {
            setMaterialWeight(data.table); 
          }
          setShowModal(true);
        }
      }
    });
  };


  const handleDeleteChildTableRow = (id: any) => {
    const updatedData = materialWeight?.filter((item: any, i: any) => i !== id);
    setMaterialWeight(updatedData);
  };
  console.log(tableData, "accu23");
  return (
    <div className="mx-5 bg-light">
      <div className="container-lg ">
        <div className="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
          <div className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              Ready receipts (Mangalsutra karigar)
            </button>
          </div>
          <div className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-profile"
              type="button"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              Create new ready receipt
            </button>
          </div>
        </div>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show "
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            Ready receipts (Mangalsutra karigar)
          </div>
          <div
            className="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            <h4>Create new ready receipt</h4>
            <div>
              <div>
                <div className={`${styles.button_field}`}>
                  <button type="submit" className={`${styles.create_button}`}>
                    Create
                  </button>
                </div>

                <div className=" container-lg  table-responsive">
                  <table className={` ${styles.table} `} >
                    <thead className={`${styles.table_header}`}>
                      <tr>
                        <th className={`${styles.header_item}`} scope="col">Date</th>
                        <th className={`${styles.header_item}`} scope="col">Receipt Number</th>
                        <th className={`${styles.header_item}`} scope="col">Karigar(Supplier)</th>
                        <th className={`${styles.header_item}`} scope="col">Remarks</th>
                        <th className={`${styles.header_item}`} scope="col">Ready Raceipt Type</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td scope="row">
                          <input className="form-control input-lg" type="text" />
                        </td>
                        <td>
                          <input className="form-control input-lg" type="number" />
                        </td>
                        <td>
                          <select className="form-control" name="Karigar" id="karigar">
                            <option value="karigar1">Karigar 1</option>
                            <option value="karigar2">Karigar 2</option>
                          </select>
                        </td>
                        <td>
                          <input className="form-control input-lg" type="text" />
                        </td>
                        <td>
                          <input
                            className="form-control input-lg"
                            type="text"
                            readOnly
                            disabled
                            value={"Mangalsutra"}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <button
                className={`${styles.addRow}`}
                onClick={() => handleAddRow("tableRow")}
              >
                <SiAddthis />
                Add row
              </button>
              <div className="container-fluid table-responsive">
                <table className={` ${styles.table} `} >
                  <thead className={`${styles.table_header}`}>
                    <tr>
                      <th className={`${styles.header_item}`} scope="col">Sr. no</th>
                      <th className={`${styles.header_item}`} scope="col">Product Code (Item)</th>
                      <th className={`${styles.header_item}`} scope="col">Kun Karigar</th>
                      <th className={`${styles.header_item}`} scope="col">Net Wt</th>
                      <th className={`${styles.header_item}`} scope="col">Few Wt</th>
                      <th className={`${styles.header_item}`} scope="col">Gross Wt</th>
                      <th className={`${styles.header_item}`} scope="col">Mat Wt</th>
                      <th className={`${styles.header_item}`} scope="col">Other</th>
                      <th className={`${styles.header_item}`} scope="col">Total</th>
                      <th className={`${styles.header_item}`} scope="col">Add Photo</th>
                      <th className={`${styles.header_item}`} scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData?.map((item: any, i: any) => (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>
                          <input
                            className={` ${styles.input_field}`}
                            type="text"
                            value={item.product_code}
                            onChange={(e) =>
                              handleFieldChange(
                                item.id,
                                "tableRow",
                                "product_code",
                                +e.target.value
                              )
                            }
                          />
                        </td>
                        <td>
                          <select className={` ${styles.table_select}`} name="Karigar" id="karigar">
                            <option value="karigar1">Karigar 1</option>
                            <option value="karigar2">Karigar 2</option>
                          </select>
                        </td>
                        <td className={styles.row_input}>
                          <input
                            className={` ${styles.input_field}`}
                            type="number"
                            value={item.custom_net_wt}
                            onChange={(e) =>
                              handleFieldChange(
                                item.id,
                                "tableRow",
                                "custom_net_wt",
                                +e.target.value
                              )
                            }
                          />
                        </td>
                        <td>
                          <input
                            className={` ${styles.input_field}`}
                            type="number"
                            value={item.custom_few_wt}
                            onChange={(e) =>
                              handleFieldChange(
                                item.id,
                                "tableRow",
                                "custom_few_wt",
                                +e.target.value
                              )
                            }
                          />
                        </td>
                        <td>
                          <input
                            className={` ${styles.input_field}`}
                            type="text"
                            readOnly
                            name={`sum-${i + 1}`}
                            value={
                              tableData[i]?.totalModalWeight > 0
                                ? tableData[i].custom_net_wt +
                                  tableData[i].custom_few_wt +
                                  tableData[i]?.totalModalWeight
                                : tableData[i].custom_net_wt +
                                  tableData[i].custom_few_wt
                            }
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            value={tableData[i]?.totalModalWeight}
                            readOnly
                            onChange={(e) =>
                              handleFieldChange(
                                item.id,
                                "tableRow",
                                "custom_mat_wt",
                                +e.target.value
                              )
                            }
                            onKeyDown={(e) => handleModal(e, item.id, item)}
                          />
                        </td>
                        <td>
                          <input
                            className={` ${styles.input_field}`}
                            type="number"
                            value={item.custom_other}
                            onChange={(e) =>
                              handleFieldChange(
                                item.id,
                                "tableRow",
                                "custom_other",

                                +e.target.value
                              )
                            }
                          />
                        </td>
                        <td>
                          {" "}
                          <input
                            className={` ${styles.input_field}`}
                            type="text"
                            readOnly
                            name={`sum-${i + 1}`}
                            value={
                              tableData[i]?.totalAmount > 0
                                ? tableData[i].custom_other +
                                  tableData[i]?.totalAmount
                                : tableData[i].custom_other
                            }
                          />
                        </td>
                        <td>
                          <input 
                          className={` ${styles.input_field}`}
                          type="file" />
                        </td>
                        <td>
                          <button
                            className="d-flex align-items-center delete-link p-1"
                            onClick={() => handleDeleteRow(item.id)}
                            onKeyDown={(e) => handleTabPress(e, item.id)}
                          >
                            <RiDeleteBin6Line />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        {tableData.map((item: any, index: any) => (
          <Modal
            className="w-100"
            key={index}
            show={showModal}
            onHide={closeModal}
          >
            <Modal.Header closeButton>
              <Modal.Title>Triggered by Key Press</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <button
                className={`${styles.addRow}`}
                onClick={() => handleAddRow("modalRow")}
              >
                <SiAddthis />
                Add row
              </button>
              <div className="container-fluid table-responsive">
                <table className="table table-bordered table-hover">
                  <thead>
                    <tr>
                      <th scope="col">Sr. no</th>
                      <th scope="col">Material Abbr (Master)</th>
                      <th scope="col">Material (Master)</th>
                      <th scope="col">Pcs</th>
                      <th scope="col">Piece @</th>
                      <th scope="col">Carat</th>
                      <th scope="col">Carat @</th>
                      <th scope="col">Weight</th>
                      <th scope="col">Gm @</th>
                    </tr>
                  </thead>
                  <tbody>
                    {materialWeight?.length > 0 &&
                      materialWeight?.map((element: any, i: any) => (
                        <tr key={i}>
                          <td>{i + 1}</td>
                          <td>
                            <select
                              className="w-100"
                              name="Karigar"
                              id="karigar"
                            >
                              <option value="karigar1">Karigar 1</option>
                              <option value="karigar2">Karigar 2</option>
                            </select>
                          </td>
                          <td>
                            <select
                              className="w-100"
                              name="Karigar"
                              id="karigar"
                            >
                              <option value="karigar1">Karigar 1</option>
                              <option value="karigar2">Karigar 2</option>
                            </select>
                          </td>
                          <td>
                            <input
                              type="number"
                              value={element.pcs}
                              onChange={(e) =>
                                handleModalFieldChange(
                                  i,
                                  "modalRow",
                                  "pcs",
                                  +e.target.value
                                )
                              }
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              value={element.piece_}
                              onChange={(e) =>
                                handleModalFieldChange(
                                  i,
                                  "modalRow",
                                  "piece_",
                                  +e.target.value
                                )
                              }
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              value={element.carat}
                              onChange={(e) =>
                                handleModalFieldChange(
                                  i,
                                  "modalRow",
                                  "carat",
                                  +e.target.value
                                )
                              }
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              value={element.carat_}
                              onChange={(e) =>
                                handleModalFieldChange(
                                  i,
                                  "modalRow",
                                  "carat_",
                                  +e.target.value
                                )
                              }
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              value={element.weight}
                              onChange={(e) =>
                                handleModalFieldChange(
                                  i,
                                  "modalRow",
                                  "weight",
                                  +e.target.value
                                )
                              }
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              value={element.gm_}
                              onChange={(e) =>
                                handleModalFieldChange(
                                  i,
                                  "modalRow",
                                  "gm_",
                                  +e.target.value
                                )
                              }
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              readOnly
                              onChange={(e) =>
                                handleModalFieldChange(
                                  i,
                                  "modalRow",
                                  "amount",
                                  +e.target.value
                                )
                              }
                              ref={inputRef}
                              value={calculateRowValue(i)}
                            />
                          </td>
                          <td>
                            <button
                              className="d-flex align-items-center delete-link p-1"
                              onClick={() => handleDeleteChildTableRow(i)}
                              // onKeyDown={(e) => handleTabPress(e, item.id)}
                            >
                             
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={closeModal}>
                Close
              </Button>
              <Button
                variant="secondary"
                onClick={() => handleSaveModal(item.id)}
              >
                Save
              </Button>
            </Modal.Footer>
          </Modal>
        ))}
      </div>
    </div>
  );
};

export default readyReceiptsMangalsutra;
