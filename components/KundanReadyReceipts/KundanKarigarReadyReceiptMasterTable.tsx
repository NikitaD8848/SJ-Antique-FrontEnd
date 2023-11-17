import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../../styles/readyReceipts.module.css';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';
import SelectInputKunKarigar from '../SearchSelectInputField/SelectInputKunKarigar';
const KundanKarigarReadyReceiptMasterTable = ({
  handleFieldChange,
  tableData,
  handleDeleteRow,
  handleTabPress,
  setTableData,
  kundanKarigarData,
  handleModal,
  readOnlyFields,
  selectedDropdownValue,
  setSelectedDropdownValue,
  setStateForDocStatus,
}: any) => {
  console.log('table data receipt', tableData);
  return (

    <table className="table table-hover table-striped table-bordered">
      <thead>
        <tr>
          <th className="thead" scope="col">
            Sr.no
          </th>
          <th className="thead" scope="col">
            Product Code (Item) <span className="text-danger">*</span>
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
            Mat_Wt
          </th>
          <th className="thead" scope="col">
            Gross Wt
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
        {tableData?.length > 0 &&
          tableData !== null &&
          tableData.map((item: any, i: any) => (
            <tr key={item.id} className={`${styles.table_row}`}>
              <td className="table_row">{item.idx}</td>
              <td className="table_row">
                <input
                  className={` ${styles.input_field}`}
                  type="text"
                  defaultValue={item?.product_code}
                  value={item.product_code}
                  onChange={(e) =>
                    handleFieldChange(
                      item.id,
                      'tableRow',
                      'product_code',
                      e.target.value
                    )
                  }
                />
              </td>
              <td className="table_row">
                <SelectInputKunKarigar
                  kundanKarigarData={kundanKarigarData}
                  tableData={tableData}
                  setTableData={setTableData}
                  item={item}
                  id={item.id}
                  setStateForDocStatus={setStateForDocStatus}
                  readOnlyFields={readOnlyFields}
                />
              </td>
              <td className="table_row">
                <input
                  className={` ${styles.input_field}`}
                  type="number"
                  value={item.custom_net_wt}
                  defaultValue={item?.custom_net_wt}
                  onChange={(e) =>
                    handleFieldChange(
                      item.id,
                      'tableRow',
                      'custom_net_wt',
                      +e.target.value
                    )
                  }
                  readOnly={readOnlyFields}
                />
              </td>
              <td className="table_row">
                <input
                  className={` ${styles.input_field}`}
                  type="number"
                  value={item.custom_few_wt}
                  defaultValue={item.custom_few_wt}
                  onChange={(e) =>
                    handleFieldChange(
                      item.id,
                      'tableRow',
                      'custom_few_wt',
                      +e.target.value
                    )
                  }
                  readOnly={readOnlyFields}
                />
              </td>
              <td className="table_row">
                <input
                  className={` ${styles.input_field}`}
                  type="number"
                  value={tableData[i]?.totalModalWeight}
                  defaultValue={tableData[i]?.totalModalWeight}
                  readOnly
                  onChange={(e) =>
                    handleFieldChange(
                      item.id,
                      'tableRow',
                      'custom_mat_wt',
                      +e.target.value
                    )
                  }
                  onKeyDown={(e) => handleModal(e, item.id, item)}
                />
              </td>
              <td className="table_row">
                <input
                  className={` ${styles.input_field}`}
                  type="text"
                  readOnly
                  disabled
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

              <td className="table_row">
                <input
                  className={` ${styles.input_field}`}
                  type="number"
                  value={item.custom_other}
                  defaultValue={item.custom_other}
                  onChange={(e) =>
                    handleFieldChange(
                      item.id,
                      'tableRow',
                      'custom_other',

                      +e.target.value
                    )
                  }
                  readOnly={readOnlyFields}
                />
              </td>
              <td className="table_row">
                {' '}
                <input
                  className={` ${styles.input_field}`}
                  type="text"
                  readOnly
                  disabled
                  name={`sum-${i + 1}`}
                  value={
                    tableData[i]?.totalAmount > 0
                      ? tableData[i].custom_other + tableData[i]?.totalAmount
                      : tableData[i].custom_other
                  }
                />
              </td>
              <td className="table_row">
                {tableData[i].custom_add_photo && (
                  <span style={{ fontSize: '12px' }}>
                    {tableData[i].custom_add_photo}
                  </span>
                )}
                <input
                  className={` ${styles.input_field}`}
                  type="file"
                  // value={item.custom_add_photo}
                  onChange={(e) =>
                    handleFieldChange(
                      item.id,
                      'tableRow',
                      'custom_add_photo',
                      `/files/${e.target.files?.[0]?.name}`,
                      e.target.files?.[0]
                    )
                  }
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
                    style={{ color: 'red', fontSize: 15 }}
                  />
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>

  );
};

export default KundanKarigarReadyReceiptMasterTable;
