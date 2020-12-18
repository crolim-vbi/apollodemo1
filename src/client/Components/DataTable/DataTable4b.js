import React from 'react';
import MUIDataTable from "mui-datatables";
import CustomToolbarSelect from "./CustomToolbarSelect"
import MuiTableTextLabels from "./MuiTableTextLabels"


import "./DataTable4b.css"



export default function DefaultButton({titulo}) {
        
    const options = {
        responsive: "simple",
        rowsPerPage: 5,
        rowsPerPageOptions: [5, 10, 100],
        download: false,
        filter: false,
        print: false,
        search: false,
        viewColumns: false,
        selectableRowsOnClick: true,
        onCellClick: (cellData, cellMeta) => {
          window.location.href = "#/DocumentoVisualizacao";
        },        
        customToolbarSelect: (selectedRows, displayData, setSelectedRows) => (
        <CustomToolbarSelect selectedRows={selectedRows} displayData={displayData} setSelectedRows={setSelectedRows} />
        ),
        textLabels: MuiTableTextLabels
    };
    
    

    const columns = ["Data", "Documento"];

    const data = [
        ['23/05/2020' , 'VBI CRI FII - Posição Investidores - 2018.01.xls' ],
        ['22/05/2020', 'BREOF FIP II FIP - Performance Breakdow - 2020.04'],
        ['21/05/2020', 'BREOF FIDC - Performance Breakdow - 2020.04'],
        ['20/05/2020', 'BREOF III FIP - Performance Breakdow - 2020.04'],
        ['19/05/2020', 'Nova I FII - Performance Breakdow - 2020.04'], 
        ['18/05/2020' ,'TRILLIANT REIT FIM - Performance Breakdown - 2018.01.xls' ],
        ['17/05/2020', 'VBI ULIVING FII - Performance Breakdow - 2020.04'],
        ['17/05/2020', 'SBC FII - Performance Breakdow - 2020.04'],
        ['17/05/2020', 'VBI CRI FII - Performance Breakdow - 2020.04'],
        ['17/05/2020', 'VBI REITS FOF FII - Performance Breakdow - 2020.04'],     
    ];

    

    


    return (    
        <div id="DataTable4b">
            <MUIDataTable
                title={titulo}
                data={data}
                columns={columns}
                options={options}
            />
        </div>
    );
  }
  



