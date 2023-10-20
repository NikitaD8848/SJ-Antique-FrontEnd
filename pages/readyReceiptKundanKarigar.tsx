import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/readyReceipts.module.css";
import { ImCross } from "react-icons/im";
import { SiAddthis } from "react-icons/si";
import { Modal, Button } from "react-bootstrap";

const readyReceiptKundanKarigar = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [tableData, setTableData] = useState<any>([
    {
      id: 1,
      product_code: "ACH",
      custom_kun_karigar: "Karigar1",
      custom_net_wt: 10,
      custom_few_wt: 5,
      custom_gross_wt: 15,
      custom_mat_wt: 5,
      custom_other: 0,
      custom_total : 20,
      custom_add_photo: "",
      table: [
        {
            id : 1,
            material_abbr: "BB",
            material_name: "Bol Bam",
            pcs: 1,
            piece_: 1,
            carat: 22,
            carat_: 22,
            weight: 10,
            gm_: 10,
            amount: 50000
        }
      ]
    }
  ]);

  const handleFieldChange = (id: number, field: string, newValue: any) => {
    const updatedData = tableData.map((item: any) => {
      if (item.id === id) {
        return { ...item, [field]: newValue };
      }
      return item;
    });
    setTableData(updatedData);
  };
  //console.log("check 1", tableData);
  // const calculateGrossWt = (item: any) => {
  //   const { NetWt, FewWt, CslWt, KunWt, CsoWt, MotiWt } = item;
  //   const grossWt =
  //     parseFloat(NetWt) +
  //     parseFloat(FewWt) +
  //     parseFloat(CslWt) +
  //     parseFloat(KunWt) +
  //     parseFloat(CsoWt) +
  //     parseFloat(MotiWt);
  //   return grossWt;
  // };

  const handleAddRow = () => {
    const newRow = {
      id: tableData.length + 1,
      product_code: "ACH",
      custom_kun_karigar: "Karigar1",
      custom_net_wt: 10,
      custom_few_wt: 5,
      custom_gross_wt: 15,
      custom_mat_wt: 5,
      custom_other: 0,
      custom_total : 20,
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

  const handleModal = (event: any, id: any) => {
    if (event.key === "F2") {
      setShowModal(true);
    }
  };

  return (
    <div className="mx-5 bg-light">
      <div className="container-fluid ">
        <div className="nav nav-pills mb-3" id="pills-tab" role="tablist">
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
            className="tab-pane fade show active"
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
            Create new ready receipt
            <div>
              <div>
                <div className={`${styles.button}`}>
                  <button type="submit" className="btn btn-primary">
                    Create
                  </button>
                </div>
                <div className="container-fluid table-responsive">
                  <table className="table">
                    <thead>
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
                          <input className="w-100" type="text" />
                        </td>
                        <td>
                          <input className="w-100" type="number" />
                        </td>
                        <td>
                          <select className="w-100" name="Karigar" id="karigar">
                            <option value="karigar1">Karigar 1</option>
                            <option value="karigar2">Karigar 2</option>
                          </select>
                        </td>
                        <td>
                          <input className="w-100" type="text" />
                        </td>
                        <td>
                          <input className="w-100" type="text" />
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
              <div className="container-fluid table-responsive">
                <table className="table table-bordered table-hover">
                  <thead>
                    <tr>
                      <th scope="col">Sr. no</th>
                      <th scope="col">Product Code (Item)</th>
                      <th scope="col">Kun Karigar</th>
                      <th scope="col">Net Wt</th>
                      <th scope="col">Few Wt</th>
                      <th scope="col">Gross Wt</th>
                      <th scope="col">Mat Wt</th>
                      <th scope="col">Other</th>
                      <th scope="col">Total</th>
                      <th scope="col">Add Photo</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((item: any) => (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>
                          <input
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
                        <select className="w-100" name="Karigar" id="karigar">
                            <option value="karigar1">Karigar 1</option>
                            <option value="karigar2">Karigar 2</option>
                          </select>
                        </td>
                        <td>
                          <input
                            type="number"
                            value={item.custom_net_wt}
                            onChange={(e) =>
                              handleFieldChange(
                                item.id,
                                "custom_net_wt",
                                e.target.value
                              )
                            }
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            value={item.custom_few_wt}
                            onChange={(e) =>
                              handleFieldChange(
                                item.id,
                                "custom_few_wt",
                                e.target.value
                              )
                            }
                          />
                        </td>
                        <td>{item.custom_gross_wt}</td>
                        <td>
                          <input
                            type="number"
                            value={item.custom_mat_wt}
                            onChange={(e) =>
                              handleFieldChange(item.id, "custom_mat_wt", e.target.value)
                            }
                            onKeyDown={(e) => handleModal(e, item.id)}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            value={item.custom_other}
                            onChange={(e) =>
                              handleFieldChange(
                                item.id,
                                "custom_other",
                                e.target.value
                              )
                            }
                          />
                        </td>
                        <td>{item.custom_total}</td>
                        <td>
                          <input
                            type="file"
                          />
                        </td>
                        <td>
                          <button
                            className="d-flex align-items-center delete-link p-1"
                            onClick={() => handleDeleteRow(item.id)}
                            onKeyDown={(e) => handleTabPress(e, item.id)}
                          >
                            <ImCross />
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
      {/* <div>
        <Modal show={showModal} onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Triggered by Key Press</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <button className={`${styles.addRow}`} onClick={handleAddRow}>
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
                    {tableData.table.map((element:any) => (
                      <tr key={element.id}>
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
                            type="number"
                            value={element.carat}
                            onChange={(e) =>
                              handleFieldChange(element.id, "carat", e.target.value)
                            }
                            />
                        </td>
                        <td>
                          <input
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
                            // onClick={() => handleDeleteRow(item.id)}
                            // onKeyDown={(e) => handleTabPress(e, item.id)}
                          >
                            <ImCross />
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
      </div> */}
    </div>
  );
};

export default readyReceiptKundanKarigar;
