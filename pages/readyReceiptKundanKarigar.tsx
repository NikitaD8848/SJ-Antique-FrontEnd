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
      NetWt: "",
      FewWt: "",
      CslWt: "",
      KunWt: "",
      CsoWt: "",
      MotiWt:"",
      Gross: "",
      AddPhoto: "",
    },
  ]);

  const handleFieldChange = (id: number, field: string, newValue: any) => {
    const updatedData = tableData.map((item: any) => {
      if (item.id === id) {
        const net_wt = field === 'NetWt' ? parseFloat(newValue): item.NetWt;
        const few_wt = field === 'FewWt' ? parseFloat(newValue): item.FewWt;
        const csl_wt = field === 'CslWt' ? parseFloat(newValue) : item.CslWt;
        const kun_wt = field === 'KunWt' ? parseFloat(newValue) : item.KunWt;
        const cso_wt = field === 'CsoWt' ? parseFloat(newValue) : item.CsoWt;
        const moti_wt = field === 'MotiWt' ? parseFloat(newValue) : item.MotiWt;
        const gross_wt = net_wt + few_wt + csl_wt + kun_wt + cso_wt + moti_wt;
        const gross = parseFloat(gross_wt)
        return {...item, [field]:newValue, gross};
      }
      return item;
    });
    setTableData(updatedData);
    console.log("field change called",tableData)
  };
  //console.log("check 1", tableData);
  const calculateGrossWt = (item: any) => {
    const { NetWt, FewWt, CslWt, KunWt, CsoWt, MotiWt } = item;
    const grossWt =
      parseFloat(NetWt) +
      parseFloat(FewWt) +
      parseFloat(CslWt) +
      parseFloat(KunWt) +
      parseFloat(CsoWt) +
      parseFloat(MotiWt);
    return grossWt;
  };

  const handleAddRow = () => {
    const newRow = {
      id: tableData.length + 1,
      NetWt: "",
      FewWt: "",
      CslWt: "",
      KunWt: "",
      CsoWt: "",
      MotiWt: "",
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
  const handleDeleteRow = (id: any) => {
    const updatedData = tableData.filter((item: any) => item.id !== id);
    setTableData(updatedData);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleModal = (event: any, id: any) => {
    if (event.key === "F12") {
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
                        <th scope="col">Transaction Date</th>
                        <th scope="col">Receipt no</th>
                        <th scope="col">Customer</th>
                        <th scope="col">Detail</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td scope="row">
                          <input className="w-100" type="number" />
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
                <SiAddthis />
                Add row
              </button>
              <div className="container-fluid table-responsive">
                <table className="table table-bordered table-hover">
                  <thead>
                    <tr>
                      <th scope="col">Sr. no</th>
                      <th scope="col">Net Wt</th>
                      <th scope="col">Few Wt</th>
                      <th scope="col">Csl Wt</th>
                      <th scope="col">Kun Wt</th>
                      <th scope="col">CsO Wt</th>
                      <th scope="col">Moti Wt</th>
                      <th scope="col">Gross Wt</th>
                      <th scope="col">Add Photo</th>
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
                            value={item.CslWt}
                            onChange={(e) =>
                              handleFieldChange(
                                item.id,
                                "CslWt",
                                e.target.value
                              )
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
                            onKeyDown={(e) => handleModal(e, item.id)}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            value={item.CsoWt}
                            onChange={(e) =>
                              handleFieldChange(item.id, "CsoWt", e.target.value)
                            }
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            value={item.MotiWt}
                            onChange={(e) =>
                              handleFieldChange(
                                item.id,
                                "MotiWt",
                                e.target.value
                              )
                            }
                          />
                        </td>
                        <td>{tableData.Gross}</td>
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
      <div>
        <Modal show={showModal} onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Triggered by Key Press</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            This modal was triggered by pressing the 'F12' key.
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
