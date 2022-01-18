import React, { useState } from "react";
import "./App.css";
import MaterialTable from "material-table";
import {Container} from '@material-ui/core'
import Header from './components/Header'
function App() {
  const [tableData, setTableData] = useState([
    {
      id: 1,
      name: "Leanne Graham",
      email: "Sincere@april.biz",
      phone: "1-770-736-8031 x56442",
      street: "Kulas Light",
      city: "Gwenborough",
      status: "A",
    },
    {
      id: 2,

      name: "Ervin Howell",
      email: "Ervin Howell@april.biz",
      phone: "1-771-852-8031 x56442",
      street: "Victor Plains",
      city: "Wisokyburgh",
      status: "A",
    },
    {
      id: 3,

      name: "Clementine Bauch",
      email: "Clementine.Bauch@april.biz",
      phone: "1-770-788-7777 x56442",
      street: "Douglas Extension",
      city: "McKenziehaven",
      status: "A",
    },
    {
      id: 4,

      name: "Leanne Graham",
      email: "Sincere@april.biz",
      phone: "1-770-736-8031 x56442",
      street: "Kulas Light",
      city: "Gwenborough",
      status: "A",
    },
    {
      id: 5,

      name: "Patricia Lebsack",
      email: "Julianne.OConner@kory.org",
      phone: "1-444-736-8031 x56472",
      street: "Hoeger Mall",
      city: "South Elvis",
      status: "I",
    },
    {
      id: 6,

      name: "Chelsey Dietrich",
      email: "Lucio_Hettinger@annie.ca",
      phone: "(254)954-1289",
      street: "Skiles Walks",
      city: "Roscoeview",
      status: "I",
    },
    {
      id: 7,

      name: "Dennis Schulist",
      email: "Karley_Dach@jasper.info",
      phone: "1-477-935-8478 x6430",
      street: "Norberto Crossing",
      city: "South Christy",
      status: "I",
    },
    {
      id: 8,

      name: "Dennis Schulist",
      email: "Karley_Dach@jasper.info",
      phone: "1-477-935-8478 x6430",
      street: "Norberto Crossing",
      city: "South Christy",
      status: "I",
    },
  ]);
  const columns = [
    { title: "ID", field: "id", filtering: false },

    { title: "Name", field: "name", filterPlaceholder: "Filter By Name" },
    { title: "Email", field: "email", filterPlaceholder: "Filter By Email" },
    {
      title: "Phone Number",
      field: "phone",
      filterPlaceholder: "Filter By Phone",
      filtering: false
    },
    {
      title: "Street",
      field: "street",
      filterPlaceholder: "Filter By Street",
      filtering: false,
    },
    {
      title: "City",
      field: "city",
      filterPlaceholder: "Filter By City",
      filtering: false,
    },
    {
      title: "Status",
      field: "status",
      lookup: { A: "active", I: "inactive" },
    },
  ];
  return (
    <div className="App">
      <Container>
        <Header/>
    
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <MaterialTable
        columns={columns}
        data={tableData}
        title="User Support System"
        editable={{
          onRowAdd: (newRow) =>
            new Promise((resolve, reject) => {
              setTableData([...tableData, newRow]);
              setTimeout(() => resolve(), 500);
            }),
          onRowUpdate: (newRow, oldRow) =>
            new Promise((resolve, reject) => {
              const updatedData = [...tableData];
              updatedData[oldRow.tableData.id] = newRow;
              setTableData(updatedData);
              setTimeout(() => resolve(), 500);
            }),
          onRowDelete: (selectedRow) =>
            new Promise((resolve, reject) => {
              const deleteData = [...tableData];
              deleteData.splice(selectedRow.tableData.id, 1);
              console.log(deleteData);
              setTimeout(() => resolve(), 1000);
            }),
        }}
        options={{
          search: true,
          sorting: true,
          searchAutoFocus: true,
          searchFieldVariant: "outlined",
          filtering: false,
          filterCellStyle: { width: "25%" },
          paging: true,
          pageSizeOptions: [2, 5, 10, 20, 25],
          paginationType: "stepped",
          exportButton: true,
          exportAllData: true,
          exportFileName: "TableData",
          addRowPosition: "first",
          actionsColumnIndex: -1,
          selection: true,
          showSelectAllCheckbox: false,
          columnsButton: true,
          rowStyle: { background: "#f5f5f5" },
          headerStyle: { background: "#91C483" },
        }}
      />
      </Container>
     
    </div>
  );
}

export default App;
