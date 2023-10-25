import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/readyReceipts.module.css";
import { Modal, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
import { Link } from "react-router-dom";

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

  const handleFieldChange = (id: number, field: string, newValue: any) => {
    const updatedData = tableData.map((item: any) => {
      if (item.id === id) {
        return { ...item, [field]: 0 || newValue };
      }
      return item;
    });
    setTableData(updatedData);
  };
  const handleModalFieldChange = (id: number, field: string, newValue: any) => {
    const updatedModalData =
      materialWeight.length > 0 &&
      materialWeight.map((item: any) => {
        if (item.id === id) {
          return { ...item, [field]: 0 || newValue };
        }
        return item;
      });
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
    };
    setTableData([...tableData, newRow]);
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
  const handleModal = (event: any) => {
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
    <div className="container-lg">
      <div>
        <div
          className="nav nav-pills mb-2 justify-content-center container-lg "
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
              Ready receipts (kundan karigar)
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
            <div>
              <div className={`${styles.button_field}`}>
                <button type="submit" className={`${styles.create_button}`}>
                  Create
                </button>
              </div>
              <div className="container-lg table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th className="thead" scope="col">
                        Date
                      </th>
                      <th className="thead" scope="col">
                        Receipt Number
                      </th>
                      <th className="thead" scope="col">
                        Karigar(Supplier)
                      </th>
                      <th className="thead" scope="col">
                        Remarks
                      </th>
                      <th className="thead" scope="col">
                        Ready Raceipt Type
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="table_row">
                      <td scope="row" className="table_row">
                        <input className="form-control input-sm" type="text" />
                      </td>
                      <td className="table_row">
                        <input
                          className="form-control input-sm"
                          type="number"
                        />
                      </td>
                      <td className="table_row">
                        <select className="form-control" name="Karigar">
                          <option value="karigar1">Karigar 1</option>
                          <option value="karigar2">Karigar 2</option>
                        </select>
                      </td>
                      <td className="table_row">
                        <input className="form-control input-sm" type="text" />
                      </td>
                      <td className="table_row">
                        <input
                          className="form-control input-sm"
                          type="text"
                          readOnly
                          value={"kundanKarigar"}
                          disabled
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="container d-flex justify-content-end">
                  <p className="my-auto btn-link cursor-pointer" onClick={handleAddRow}>Add Row </p>
              </div>
              
              <div className="container-lg table-responsive">
                <table className="table table-hover table-striped table-bordered">
                  <thead>
                    <tr>
                      <th className="thead" scope="col">
                        Sr.no
                      </th>
                      <th className="thead" scope="col">
                        Product Code (Item)
                      </th>
                      <th className="thead" scope="col">
                        Kun Karigar
                      </th>
                      <th className="thead" scope="col">
                        Net Wt
                      </th>
                      <th className="thead" scope="col">
                        Few Wt
                      </th>
                      <th className="thead" scope="col">
                        Gross Wt
                      </th>
                      <th className="thead" scope="col">
                        Mat_Wt
                      </th>
                      <th className="thead" scope="col">
                        Other
                      </th>
                      <th className="thead" scope="col">
                        Total
                      </th>
                      <th className="thead" scope="col">
                        Add Photo
                      </th>
                      <th className="thead" scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((item: any, i: any) => (
                      <tr key={item.id} className={`${styles.table_row}`}>
                        <td className="table_row">{item.id}</td>
                        <td className="table_row">
                          <input
                            className={` ${styles.input_field}`}
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
                        <td className="table_row">
                          <select
                            className={` ${styles.table_select}`}
                            name="Karigar"
                            id="karigar"
                          >
                            <option value="karigar1">Karigar 1</option>
                            <option value="karigar2">Karigar 2</option>
                          </select>
                        </td>
                        <td className="table_row">
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
                        <td className="table_row">
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
                        <td className="table_row">
                          <input
                            className={` ${styles.input_field}`}
                            type="text"
                            readOnly
                            name={`sum-${i + 1}`}
                            value={
                              tableData[i].custom_net_wt +
                              tableData[i].custom_few_wt +
                              totalModalWeight
                            }
                          />
                        </td>
                        <td className="table_row">
                          <input
                            className={`${styles.input_field}`}
                            type="number"
                            value={item.custom_mat_wt}
                            onChange={(e) =>
                              handleFieldChange(
                                item.id,
                                "custom_mat_wt",
                                +e.target.value
                              )
                            }
                            onKeyDown={(e) => handleModal(e)}
                          />
                        </td>
                        <td className="table_row">
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
                        <td className="table_row">
                          {" "}
                          <input
                            className={` ${styles.input_field}`}
                            type="text"
                            readOnly
                            name={`sum-${i + 1}`}
                            value={tableData[i].custom_other + totalModalAmount}
                          />
                        </td>
                        <td className="table_row">
                          <input
                            className={`${styles.input_field}`}
                            type="file"
                          />
                        </td>
                        <td className="table_row">
                          <button
                            className="d-flex align-items-center delete-link p-1 border-0"
                            onClick={() => handleDeleteRow(item.id)}
                            onKeyDown={(e) => handleTabPress(e, item.id)}
                          >
                            <FontAwesomeIcon
                              icon={faTrash}
                              style={{ color: "red", fontSize: 15 }}
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
            <Modal.Title id="example-modal-sizes-title-lg">
              Triggered by Key Press
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <div className="container d-flex justify-content-end">
                <button className="border-0" onClick={handleModalAddRow}>
                Add Row
              </button>
              </div>
            <div className="container-lg table-responsive">
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th className="thead" scope="col">
                      Sr. no
                    </th>
                    <th className="thead" scope="col">
                      Material Abbr (Master)
                    </th>
                    <th className="thead" scope="col">
                      Material (Master)
                    </th>
                    <th className="thead" scope="col">
                      Pcs
                    </th>
                    <th className="thead" scope="col">
                      Piece @
                    </th>
                    <th className="thead" scope="col">
                      Carat
                    </th>
                    <th className="thead" scope="col">
                      Carat @
                    </th>
                    <th className="thead" scope="col">
                      Weight
                    </th>
                    <th className="thead" scope="col">
                      Gm @
                    </th>
                    <th className="thead" scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {materialWeight?.length > 0 &&
                    materialWeight?.map((element: any, i: any) => (
                      <tr key={element.id}>
                        <td className="table_row">{element.id}</td>
                        <td className="table_row">
                          <select
                            className={`${styles.table_select}`}
                            name="Karigar"
                          >
                            <option value="karigar1">Karigar 1</option>
                            <option value="karigar2">Karigar 2</option>
                          </select>
                        </td>
                        <td className="table_row">
                          <select
                            className={`${styles.table_select}`}
                            name="Karigar"
                          >
                            <option value="karigar1">Karigar 1</option>
                            <option value="karigar2">Karigar 2</option>
                          </select>
                        </td>
                        <td className="table_row">
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
                        <td className="table_row">
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
                        <td className="table_row">
                          <input
                            className={` ${styles.input_field}`}
                            type="number"
                            value={element.carat}
                            onChange={(e) =>
                              handleModalFieldChange(
                                element.id,
                                "carat",
                                +e.target.value
                              )
                            }
                          />
                        </td>
                        <td className="table_row">
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
                        <td className="table_row">
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
                        <td className="table_row">
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
                        <td className="table_row">
                          <button
                            className="d-flex align-items-center delete-link p-1 border-0"
                            onClick={() =>
                              handleDeleteChildTableRow(element.id)
                            }
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
