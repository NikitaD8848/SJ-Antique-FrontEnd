import React, { useState } from "react";
import styles from "../styles/readyReceipts.module.css";
import { ImCross } from "react-icons/im";
import { SiAddthis } from "react-icons/si";
import { Modal, Button } from "react-bootstrap";

const readyReceiptsMangalsutra = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
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
      table: [
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
      ],
    },
  ]);

  const handleFieldChange = (id: number, val:any, field: string, newValue: any) => {
    if(val === "tableRow") {
      const updatedData = tableData.map((item: any) => {
        if (item.id === id) {
          return { ...item, [field]: 0 || newValue };
        }
        return item;
      });
      setTableData(updatedData);
    }

    if(val === "modalRow") {
    const updatedModalData = materialWeight.length>0 && materialWeight.map((item: any) => {
      if (item.id === id) {
        return { ...item, [field]: 0 || newValue };
      }
      return item;
    });
    setMaterialWeight(updatedModalData)
  };
  }
  const handleAddRow = (value:any) => {
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
          id: materialWeight.length + 1,
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
    if(value === "tableRow") {
    setTableData([...tableData, newRow]);
    }
    if(value === "modalRow") {
    if(materialWeight?.length>0){
      setMaterialWeight([...materialWeight,newRow?.table]);
    }
  }
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
    setMaterialWeight(data.table);
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
                    Create
                  </button>
                </div>

                <div className=" table-responsive">
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
                          <input
                            className="w-100"
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

              <button className={`${styles.addRow}`} onClick={()=>handleAddRow("tableRow")}>
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
                    {tableData.map((item: any, i: any) => (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>
                          <input
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
                          <select className="w-100" name="Karigar" id="karigar">
                            <option value="karigar1">Karigar 1</option>
                            <option value="karigar2">Karigar 2</option>
                          </select>
                        </td>
                        <td className={styles.row_input}>
                          <input
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
                            type="text"
                            readOnly
                            name={`sum-${i + 1}`}
                            value={
                              tableData[i].custom_net_wt +
                              tableData[i].custom_few_wt
                            }
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            value={item.custom_mat_wt}
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
                            type="text"
                            readOnly
                            name={`sum-${i + 1}`}
                            value={tableData[i].custom_other}
                          />
                        </td>
                        <td>
                          <input type="file" />
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
        <Modal className="w-100" show={showModal} onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Triggered by Key Press</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <button className={`${styles.addRow}`} onClick={()=>handleAddRow("modalRow")}>
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
                  {materialWeight?.length>0 && materialWeight?.map((element: any,i:any) => (
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
                            handleFieldChange(element.id, "modalRow", "pcs", +e.target.value)
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
                            handleFieldChange(
                              element.id,
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
                            handleFieldChange(
                              element.id,
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
                            handleFieldChange(
                              element.id,
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
                            handleFieldChange(element.id, "modalRow", "gm_", e.target.value)
                          }
                        />
                      </td>
                      <td>
                      <input
                            type="text"
                            readOnly
                            name={`valSum-${i + 1}`}
                            value={
                              (materialWeight[i].pcs * materialWeight[i].piece_)+
                              (materialWeight[i].carat * materialWeight[i].carat_)+(materialWeight[i].weight* materialWeight[i].gm_)
                            }
                          />
                      </td>
                      <td>
                        <button
                          className="d-flex align-items-center delete-link p-1"
                          onClick={() => handleDeleteChildTableRow(element.id)}
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
      </div>
    </div>
  );
};

export default readyReceiptsMangalsutra;
