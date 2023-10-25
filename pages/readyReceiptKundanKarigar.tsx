import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/readyReceipts.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal, Button } from "react-bootstrap";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";


const readyReceiptKundanKarigar = () => {
  // const inputRef = useRef<any>();
  const [showModal, setShowModal] = useState<any>(false);
  const [rowValues, setRowValues] = useState<any>([]);
  const [totalModalWeight, setTotalModalWeight] = useState<any>(0);
  const [totalModalAmount, setTotalModalAmount] = useState<any>(0);
  const [materialWeight, setMaterialWeight] = useState<any>([
    {
      id: 1,
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
  ]);
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
    },
  ]);

  const calculateRowValue = (i: any) => {
    return (
      materialWeight[i]?.pcs * materialWeight[i]?.piece_ +
      materialWeight[i]?.carat * materialWeight[i]?.carat_ +
      materialWeight[i]?.weight * materialWeight[i]?.gm_
    );
  };
  const handleSaveModal = (i: any) => {
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

    const totalAmmountValues = totalvalues.reduce((accu: any, val: any) => {
      console.log(accu, "accu23");
      return accu + val;
    }, 0);
    setTotalModalAmount(totalAmmountValues);
    setTotalModalWeight(weightAddition);
    setShowModal(false);
  };
  console.log(totalModalAmount, "rowValues");
  console.log(totalModalWeight, "totalModalWeight");

  const handleFieldChange = (
    id: number,
    field: string,
    newValue: any
  ) => {
    const updatedData = tableData.map((item: any) => {
      if (item.id === id) {
        return { ...item, [field]: 0 || newValue };
      }
      return item;
    });
    setTableData(updatedData);
  
  };
  console.log(tableData[0].table)
  
  const handleAddRow = () => {
    const newRow = {
      id: tableData?.table?.length + 1,
      material_abbr: "",
      material_name: "",
      pcs: "",
      piece_: "",
      carat: "",
      carat_: "",
      weight: "",
      gm_: "",
      amount: ""
    };
    setTableData([...tableData?.table, newRow]);
  };
  
  const handleModalAddRow = () => {
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
    };
    setTableData([...tableData, newRow]);
  };

  const openModal = ()=> {
    setShowModal(true);
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
  const closeModal = () => {
    setShowModal(false);
  };
  const handleModal = (event: any, id: any, data: any) => {
  
       if (event.key === "F2") {
      setShowModal(true);
    }
   
  };

  const handleDeleteRow = (id: any) => {
    const updatedData = tableData.filter((item: any) => item.id !== id);
    setTableData(updatedData);
  };

  const handleDeleteChildTableRow = (id: any) => {
    const updatedData = materialWeight?.filter((item: any) => item.id !== id);
    setMaterialWeight(updatedData);
  };

  return (
    <div className="mx-5 bg-light">
      <div className="container-lg ">
        <div className="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
          <div className="nav-item" role="presentation">
            <button
              className="nav-link active "
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              Ready receipts (kundan karigar)
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
            className="tab-pane fade show"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            Ready receipts (kundan karigar)
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
                <div className="container-lg table-responsive">
                  <table className={` ${styles.table} `} >
                    <thead className={`${styles.table_header}`}>
                      <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Receipt Number</th>
                        <th scope="col">Karigar(Supplier)</th>
                        <th scope="col">Remarks</th>
                        <th scope="col">Ready Raceipt Type</th>
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
                          <input className="form-control input-lg" type="text"  />
                        </td>
                        <td>
                          <input className="form-control input-lg" type="text" readOnly value={"kundanKarigar"} disabled/>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <button className={`${styles.addRow}`} onClick={handleAddRow}>
              <FontAwesomeIcon
                icon={faPlus}
                className="fas fa-check"
                style={{ color: "red", fontSize: 20 }}
                />
                <span className="p-2">Add row</span>
              </button>
              <div className="container-lg table-responsive">
                <table className="table table-borderd table-striped table-hover">
                  <thead >
                    <tr>
                      <th scope="col">Sr.no</th>
                      <th scope="col">Product Code (Item)</th>
                      <th scope="col">Kun Karigar</th>
                      <th scope="col">Net Wt</th>
                      <th scope="col">Few Wt</th>
                      <th scope="col">Gross Wt</th>
                      <th scope="col">Mat_Wt</th>
                      <th scope="col">Other</th>
                      <th scope="col">Total</th>
                      <th scope="col">Add Photo</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((item: any,i:any) => (
                      <tr key={item.id} className={`${styles.table_row}`}>
                        <td>{item.id}</td>
                        <td>
                          <input
                            className="border-0"
                            type="text"
                            value={item.product_code}
                            onChange={(e) =>
                              handleFieldChange(
                                item.id,
                                "product_code",
                                +e.target.value
                              )
                            }
                          />
                        </td>
                        <td>
                        <select className={` ${styles.table_select}`}name="Karigar" id="karigar">
                            <option value="karigar1">Karigar 1</option>
                            <option value="karigar2">Karigar 2</option>
                          </select>
                        </td>
                        <td>
                          <input
                            className={` ${styles.input_field}`}
                            type="number"
                            value={item.custom_net_wt}
                            onChange={(e) =>
                              handleFieldChange(
                                item.id,
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
                                "custom_few_wt",
                                +e.target.value
                              )
                            }
                          />
                        </td>
                        <td><input
                            className={` ${styles.input_field}`}
                            type="text"
                            readOnly
                            name={`sum-${i + 1}`}
                            value={
                              tableData[i].custom_net_wt +
                              tableData[i].custom_few_wt +
                              totalModalWeight
                            }
                          /></td>
                        <td>
                          <button
                          className={`${styles.handle_modal_button}`} 
                          onClick={openModal}
                          onKeyDown={(e)=>{handleModal(e, item, item.id)}}
                          >
                          Click Here
                          </button>
                        </td>
                        <td>
                          <input
                            className={` ${styles.input_field}`}
                            type="number"
                            value={item.custom_other}
                            onChange={(e) =>
                              handleFieldChange(
                                item.id,
                                "custom_other",
                                +e.target.value
                              )
                            }
                          />
                        </td>
                        <td> <input
                            className={` ${styles.input_field}`}
                            type="text"
                            readOnly
                            name={`sum-${i + 1}`}
                            value={tableData[i].custom_other + totalModalAmount}
                          /></td>
                        <td>
                          <input
                            className={` ${styles.input_field}`}
                            type="file"
                          />
                        </td>
                        <td>
                          <button
                            className="d-flex align-items-center delete-link border-0"
                            onClick={() => handleDeleteRow(item.id)}
                            onKeyDown={(e) => handleTabPress(e, item.id)}
                          >
                            <FontAwesomeIcon
                            icon={faTrash}
                            style={{ color: "red", fontSize: 20 }}
                            />
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
        <Modal size="xl" show={showModal} onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg"
            >Triggered by Key Press</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <button className={`${styles.addRow}`} onClick={handleModalAddRow}>
          <i className="fa fa-plus" aria-hidden="true"></i>
                Add row
          </button>
          <div className="container-fluid table-responsive">
                <table className="table table-borderd table-striped table-hover">
                  <thead>
                    <tr className={`${styles.table_header}`}>
                      <th className={`${styles.header_item}`} scope="col">Sr. no</th>
                      <th className={`${styles.header_item}`} scope="col">Material Abbr (Master)</th>
                      <th className={`${styles.header_item}`} scope="col">Material (Master)</th>
                      <th className={`${styles.header_item}`} scope="col">Pcs</th>
                      <th className={`${styles.header_item}`} scope="col">Piece @</th>
                      <th className={`${styles.header_item}`} scope="col">Carat</th>
                      <th className={`${styles.header_item}`} scope="col">Carat @</th>
                      <th className={`${styles.header_item}`} scope="col">Weight</th>
                      <th className={`${styles.header_item}`} scope="col">Gm @</th>
                      </tr>
                  </thead>
                  <tbody>
                    {materialWeight?.length > 0 &&
                    materialWeight?.map((element: any, i: any) =>(
                      <tr key={element.id} className={`${styles.table_row}`}>
                        <td>{element.id}</td>
                        <td>
                        <select className={` ${styles.table_select}`} name="Karigar" id="karigar">
                            <option value="karigar1">Karigar 1</option>
                            <option value="karigar2">Karigar 2</option>
                          </select>
                        </td>
                        <td>
                        <select className={` ${styles.table_select}`} name="Karigar" id="karigar">
                            <option value="karigar1">Karigar 1</option>
                            <option value="karigar2">Karigar 2</option>
                          </select>
                        </td>
                        <td>
                          <input
                            className={` ${styles.input_field}`}
                            type="number"
                            value={element.pcs}
                            onChange={(e) =>
                              handleModalFieldChange(
                                element.id,
                                "pcs",
                                +e.target.value
                              )
                            }
                          />
                        </td>
                        <td>
                          <input
                            className={` ${styles.input_field}`}
                            type="number"
                            value={element.piece_}
                            onChange={(e) =>
                              handleModalFieldChange(
                                element.id,
                                "piece_",
                                +e.target.value
                              )
                            }
                          />
                        </td>
                        <td>
                          <input
                            className={` ${styles.input_field}`}
                            type="number"
                            value={element.carat}
                            onChange={(e) =>
                              handleModalFieldChange(element.id, "carat", +e.target.value)
                            }
                            />
                        </td>
                        <td>
                          <input
                            className={` ${styles.input_field}`}
                            type="number"
                            value={element.carat_}
                            onChange={(e) =>
                              handleModalFieldChange(
                                element.id,
                                "carat_",
                                +e.target.value
                              )
                            }
                          />
                        </td>
                        <td>
                          <input
                            className={` ${styles.input_field}`}
                            type="number"
                            value={element.weight}
                            onChange={(e) =>
                              handleModalFieldChange(
                                element.id,
                                "weight",
                                +e.target.value
                              )
                            }
                          />
                        </td>
                        <td>
                          <input
                            className={` ${styles.input_field}`}
                            type="number"
                            value={element.gm_}
                            onChange={(e) =>
                              handleModalFieldChange(
                                element.id,
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
                                element.id,
                                "amount",
                                +e.target.value
                              )
                            }
        
                            value={calculateRowValue(i)}
                          />
                        </td>
                        <td>
                          <button
                            className="d-flex align-items-center delete-link p-1"
                            onClick={() => handleDeleteRow(element.id)}
                            onKeyDown={(e) => handleTabPress(e, element.id)}
                          >
                            <FontAwesomeIcon
                            icon={faTrash}
                            style={{ color: "red", fontSize: 20 }}
                            />
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
            <Button variant="secondary" onClick={handleSaveModal}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default readyReceiptKundanKarigar;
