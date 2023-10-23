import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/readyReceipts.module.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { SiAddthis } from "react-icons/si";
import { Modal, Button } from "react-bootstrap";

const readyReceiptKundanKarigar = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [arrayObj, setArrayObj] = useState<any>([])
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
      custom_total : "",
      custom_add_photo: "",
      table: [
        {
            id : 1,
            material_abbr: "",
            material_name: "",
            pcs: "",
            piece_: "",
            carat: "",
            carat_: "",
            weight: "",
            gm_: "",
            amount: ""
        }
      ]
    }
  ])
  
  const handleFieldChange = (id: number, field: string, newValue: any) => {
    const updatedData = tableData.map((item: any) => {
      if (item.id === id) {
        return {  ...item, [field]: 0 || newValue };
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
      custom_total : "",
      custom_add_photo: "",
    };
    setTableData([...tableData, newRow]);
  };

  const handleTabPress = (event: any, id: any) => {
    if (event.key === "Tab" && id === tableData[tableData.length - 1].id) {
      handleAddRow();
    }
  };
  const handleDeleteRow = (id: any) => {
    const updatedData = tableData.filter((item: any) => item.id !== id);
    setTableData(updatedData);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const openModal = ()=> {
    setShowModal(true);
  };

  const handleModal = (event: any, id: any, item:any) => {
    if (event.key === "F2") {
      setShowModal(true);
      setArrayObj(item)
    }
    console.log("check1",item)
  };
  console.log("check",arrayObj)

  return (
    <div className="mx-5 bg-light">
      <div className="container-lg ">
        <div className="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
          <div className="nav-item" role="presentation">
            <button
              className={`${styles.tab_button}`}
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
              className={`${styles.tab_button}`}
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
                        <th className={`${styles.header_item}`} scope="col">Date</th>
                        <th className={`${styles.header_item}`} scope="col">Receipt Number</th>
                        <th className={`${styles.header_item}`} scope="col">Karigar(Supplier)</th>
                        <th className={`${styles.header_item}`} scope="col">Remarks</th>
                        <th className={`${styles.header_item}`} scope="col">Ready Raceipt Type</th>
                      </tr>
                    </thead>
                    <tbody>
                    <tr className={`${styles.table_row}`}>
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
                <SiAddthis />
                Add row
              </button>
              <div className="container-lg table-responsive">
                <table className={`${styles.table}`}>
                  <thead >
                    <tr className={`${styles.table_header}`}>
                      <th className={`${styles.header_item}`} scope="col">Sr.no</th>
                      <th className={`${styles.header_item}`} scope="col">Product Code (Item)</th>
                      <th className={`${styles.header_item}`} scope="col">Kun Karigar</th>
                      <th className={`${styles.header_item}`} scope="col">Net Wt</th>
                      <th className={`${styles.header_item}`} scope="col">Few Wt</th>
                      <th className={`${styles.header_item}`} scope="col">Gross Wt</th>
                      <th className={`${styles.header_item}`} scope="col">Mat_Wt</th>
                      <th className={`${styles.header_item}`} scope="col">Other</th>
                      <th className={`${styles.header_item}`} scope="col">Total</th>
                      <th className={`${styles.header_item}`} scope="col">Add Photo</th>
                      <th className={`${styles.header_item}`} scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((item: any,i:any) => (
                      <tr key={item.id} className={`${styles.table_row}`}>
                        <td>{item.id}</td>
                        <td>
                          <input
                            className={` ${styles.input_field}`}
                            type="text"
                            value={item.product_code}
                            onChange={(e) =>
                              handleFieldChange(
                                item.id,
                                "product_code",
                                e.target.value
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
                            value={tableData[i].custom_net_wt + tableData[i].custom_few_wt }
                          /></td>
                        <td>
                          <button
                          className={`${styles.handle_modal_button}`} 
                          onClick={openModal}
                          onKeyDown={(e)=>{handleModal(e, item, item.id)}}
                          >
                          clickHere
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
                            value={tableData[i].custom_other }
                          /></td>
                        <td>
                          <input
                            className={` ${styles.input_field}`}
                            type="file"
                          />
                        </td>
                        <td>
                          <button
                            className="d-flex align-items-center delete-link p-1 m-1"
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
        <Modal size="xl" show={showModal} onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg"
            >Triggered by Key Press</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <button className={`${styles.addRow}`} onClick={handleModalAddRow}>
                <SiAddthis />
                Add row
          </button>
          <div className="container-fluid table-responsive">
                <table className={`${styles.table}`}>
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
                    {tableData[0]?.table.map((element:any) => (
                      <tr key={element.id} className={`${styles.table_row}`}>
                        <td>{element.id}</td>
                        <td>
                        <select className="w-100" name="Karigar" id="karigar">
                            <option value="karigar1">Karigar 1</option>
                            <option value="karigar2">Karigar 2</option>
                          </select>
                        </td>
                        <td>
                        <select className="w-100" name="Karigar" id="karigar">
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
                              handleFieldChange(
                                element.id,
                                "pcs",
                                e.target.value
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
                              handleFieldChange(
                                element.id,
                                "piece_",
                                e.target.value
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
                              handleFieldChange(element.id, "carat", e.target.value)
                            }
                            />
                        </td>
                        <td>
                          <input
                            className={` ${styles.input_field}`}
                            type="number"
                            value={element.carat_}
                            onChange={(e) =>
                              handleFieldChange(
                                element.id,
                                "carat_",
                                e.target.value
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
                              handleFieldChange(
                                element.id,
                                "weight",
                                e.target.value
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
                              handleFieldChange(
                                element.id,
                                "gm_",
                                e.target.value
                              )
                            }
                          />
                        </td>
                        <td>
                          <button
                            className="d-flex align-items-center delete-link p-1"
                            onClick={() => handleDeleteRow(element.id)}
                            onKeyDown={(e) => handleTabPress(e, element.id)}
                          >
                            <RiDeleteBin6Line />
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
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default readyReceiptKundanKarigar;
