import React, { useState } from "react";
import styles from "../styles/readyReceipts.module.css";
import { FiDelete } from "react-icons/fi";
import { GrAddCircle } from "react-icons/gr";
import { Modal, Button } from "react-bootstrap";

const readyReceiptsMangalsutra = () => {
  const [showModal, setShowModal] = useState(false);
  const [tableData, setTableData] = useState<any>([
    {
      id: 1,
      NetWt: "",
      FewWt: "",
      BBWt: "",
      CsWt: "",
      KunWt: "",
      Gross: "",
      AddPhoto: "",
    },
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
  console.log("check 1", tableData);
  const calculateGrossWt = (item: any) => {
    const { NetWt, FewWt, BBWt, CsWt, KunWt } = item;
    const grossWt =
      parseFloat(NetWt) +
      parseFloat(FewWt) +
      parseFloat(BBWt) +
      parseFloat(CsWt) +
      parseFloat(KunWt);
    return grossWt;
  };

  const handleAddRow = () => {
    const newRow = {
      id: tableData.length + 1,
      NetWt: "",
      FewWt: "",
      BBWt: "",
      CsWt: "",
      KunWt: "",
      Gross: "",
      AddPhoto: "",
    };
    setTableData([...tableData, newRow]);
  };
  const handleTabPress = (event: any, id: any) => {
    if (event.key === "Tab" && id === tableData[tableData.length - 1].id) {
      handleAddRow();
    }
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const handleModal = (event: any, id: any) => {
    if (event.key === "f12" && id === tableData.id) {
      setShowModal(true);
    }
  };

  const handleDeleteRow = (id: any) => {
    const updatedData = tableData.filter((item: any) => item.id !== id);
    setTableData(updatedData);
  };

  return (
    <div className="mx-5">
      <div>
        <Modal show={showModal} onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Triggered by Key Press</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            This modal was triggered by pressing the 'M' key.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
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
            className="tab-pane fade show active"
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
            Create new ready receipt
            <div>
              <div>
                <div className={`${styles.button}`}>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>

                <div className=" table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Transaction Date</th>
                        <th scope="col">Receipt no</th>
                        <th scope="col">Customer</th>
                        <th scope="col">Detail</th>
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
                <GrAddCircle />
                Add row
              </button>
              <div className="container-fluid table-responsive">
                <table className="table table-bordered table-hover ">
                  <thead>
                    <tr>
                      <th scope="col">Sr. no</th>
                      <th scope="col">Net Wt</th>
                      <th scope="col">Few Wt</th>
                      <th scope="col">BB Wt</th>
                      <th scope="col">Cs Wt</th>
                      <th scope="col">Kun Wt</th>
                      <th scope="col">Gross Wt</th>
                      <th scope="col">Add photo</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((item: any) => (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>
                          <input
                            type="number"
                            value={item.NetWt}
                            onChange={(e) =>
                              handleFieldChange(
                                item.id,
                                "NetWt",
                                e.target.value
                              )
                            }
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            value={item.FewWt}
                            onChange={(e) =>
                              handleFieldChange(
                                item.id,
                                "FewWt",
                                e.target.value
                              )
                            }
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            value={item.BBWt}
                            onChange={(e) =>
                              handleFieldChange(item.id, "BBWt", e.target.value)
                            }
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            value={item.CsWt}
                            onChange={(e) =>
                              handleFieldChange(item.id, "CsWt", e.target.value)
                            }
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            value={item.KunWt}
                            onChange={(e) =>
                              handleFieldChange(
                                item.id,
                                "KunWt",
                                e.target.value
                              )
                            }
                            onKeyDown={(e)=>handleModal(e,item.id)}
                          />
                        </td>
                        <td>{calculateGrossWt(item)}</td>
                        <td>
                          <input
                            type="file"
                            onKeyDown={(e) => handleTabPress(e, item.id)}
                          />
                        </td>
                        <td>
                          <button
                            className="d-flex align-items-center delete-link"
                            onClick={() => handleDeleteRow(item.id)}
                          >
                            <FiDelete />
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
    </div>
  );
};

export default readyReceiptsMangalsutra;
