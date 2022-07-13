import React from "react";
import PropTypes from 'prop-types';

import { useTable, useFilters, useGlobalFilter, useAsyncDebounce } from 'react-table';

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

interface Globalfilter {
  preGlobalFilteredRows: any;
  globalFilter: any;
  setGlobalFilter: any
}

// Define a default UI for filtering
function GlobalFilter({
  //this line  [eslint] 'preGlobalFilteredRows' is missing in props validation [react/prop-types]
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
} : Globalfilter) {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = React.useState(globalFilter);
  const onChange = useAsyncDebounce((value : any) => {
      setGlobalFilter(value || undefined);
  }, 200);

  return (
      <span>
          Search:{' '}
          <input
              className="form-control"
              value={value || ""}
              onChange={e => {
                  setValue(e.target.value);
                  onChange(e.target.value);
              }}
              placeholder={`${count} records...`}
          />
      </span>
  );
}

interface columnFilter {
  column: any;
}

function DefaultColumnFilter({
  column: { filterValue, preFilteredRows, setFilter },
} : columnFilter) {
  const count = preFilteredRows.length;

  return (
      <input
          className="form-control mt-2"
          value={filterValue || ''}
          onChange={e => {
              setFilter(e.target.value || undefined);
          }}
          placeholder={`Search ${count} records...`}
      />
  );
}

interface tableinterface {
  columns: any;
  data: any;
}

function Table({ columns, data } : tableinterface) {

  const defaultColumn = React.useMemo(
      () => ({
          // Default Filter UI
          Filter: DefaultColumnFilter,
      }),
      []
  );

  const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
      state,
      preGlobalFilteredRows,
      setGlobalFilter,
  } = useTable(
      {
          columns,
          data,
          defaultColumn
      },
      useFilters,
      useGlobalFilter
  );

  return (
      <React.Fragment>
          <GlobalFilter
              preGlobalFilteredRows={preGlobalFilteredRows}
              globalFilter={state.globalFilter}
              setGlobalFilter={setGlobalFilter}
          />
          <table className="table" {...getTableProps()}>
              <thead>
                  {headerGroups.map((headerGroup : any) => (
                      <tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
                          {headerGroup.headers.map((column : any) => (
                              <th key={column.id}>
                                  {column.render('Header')}
                                  {/* Render the columns filter UI */}
                                  <div>{column.canFilter ? column.render('Filter') : null}</div>
                              </th>
                          ))}
                      </tr>
                  ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                  {rows.map((row : any, i : number) => {
                      prepareRow(row);
                      return (
                          <tr key={row.id} {...row.getRowProps()}>
                              {row.cells.map((cell : any) => {
                                  return <td key={cell.id} {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                              })}
                          </tr>
                      );
                  })}
              </tbody>
          </table>
      </React.Fragment>
  );
}

function DatatableTables() {
    document.title = "Data Tables | Minia - React Admin & Dashboard Template";

  const columns = React.useMemo(
      () => [
          {
              Header: 'Name',
              columns: [
                  {
                      Header: 'First Name',
                      accessor: 'firstName',
                  },
                  {
                      Header: 'Last Name',
                      accessor: 'lastName'
                  },
              ],
          },
          {
              Header: 'Info',
              columns: [
                  {
                      Header: 'Age',
                      accessor: 'age'
                  },
                  {
                      Header: 'Visits',
                      accessor: 'visits'
                  },
                  {
                      Header: 'Status',
                      accessor: 'status'
                  },
                  {
                      Header: 'Profile Progress',
                      accessor: 'progress'
                  },
              ],
          },
      ],
      []
  );

  const data = [
      {
          "firstName": "horn-od926",
          "lastName": "selection-gsykp",
          "age": 22,
          "visits": 20,
          "progress": 39,
          "status": "single"
      },
      {
          "firstName": "heart-nff6w",
          "lastName": "information-nyp92",
          "age": 16,
          "visits": 98,
          "progress": 40,
          "status": "complicated"
      },
      {
          "firstName": "minute-yri12",
          "lastName": "fairies-iutct",
          "age": 7,
          "visits": 77,
          "progress": 39,
          "status": "single"
      },
      {
          "firstName": "degree-jx4h0",
          "lastName": "man-u2y40",
          "age": 27,
          "visits": 54,
          "progress": 92,
          "status": "relationship"
      },
      {
          "firstName": "horn-od926",
          "lastName": "selection-gsykp",
          "age": 22,
          "visits": 20,
          "progress": 39,
          "status": "single"
      },
      {
          "firstName": "heart-nff6w",
          "lastName": "information-nyp92",
          "age": 16,
          "visits": 98,
          "progress": 40,
          "status": "complicated"
      },
      {
          "firstName": "minute-yri12",
          "lastName": "fairies-iutct",
          "age": 7,
          "visits": 77,
          "progress": 39,
          "status": "single"
      },
      {
          "firstName": "degree-jx4h0",
          "lastName": "man-u2y40",
          "age": 27,
          "visits": 54,
          "progress": 92,
          "status": "relationship"
      },
      {
          "firstName": "horn-od926",
          "lastName": "selection-gsykp",
          "age": 22,
          "visits": 20,
          "progress": 39,
          "status": "single"
      },
      {
          "firstName": "heart-nff6w",
          "lastName": "information-nyp92",
          "age": 16,
          "visits": 98,
          "progress": 40,
          "status": "complicated"
      },
      {
          "firstName": "minute-yri12",
          "lastName": "fairies-iutct",
          "age": 7,
          "visits": 77,
          "progress": 39,
          "status": "single"
      },
      {
          "firstName": "degree-jx4h0",
          "lastName": "man-u2y40",
          "age": 27,
          "visits": 54,
          "progress": 92,
          "status": "relationship"
      }
  ];

  return (
      <div className="page-content">
          <div className="container-fluid">
              <Breadcrumbs title="Tables" breadcrumbItem="Data Tables" />
              <Table columns={columns} data={data} />
          </div>
      </div>
  );
}
DatatableTables.propTypes = {
  preGlobalFilteredRows: PropTypes.any,

};

export default DatatableTables;