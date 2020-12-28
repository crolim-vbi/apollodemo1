import React from "react";
import MUIDataTable from "mui-datatables";
import CustomToolbarSelect from "./CustomToolbarSelect"
import MuiTableTextLabels from "./MuiTableTextLabels"


export default function App() {


  const options = {
    filter: "true",
    filterType: "multiselect",
    responsive: "simple",
    tableBodyHeight: "400px",
    draggableColumns: {
      enabled:true,
    },
    viewColumns: false,
    print: false,
    download: false,
    selectableRowsOnClick: true,
    onCellClick: (cellData, cellMeta) => {
      window.location.href = "#/DocumentoVisualizacao";
    },
    customToolbarSelect: (selectedRows, displayData, setSelectedRows) => (
      <CustomToolbarSelect selectedRows={selectedRows} displayData={displayData} setSelectedRows={setSelectedRows} />
    ),
    textLabels: MuiTableTextLabels
  };

  const columns = ["Relatório", "Entidade", "Data", "Extensão", "Carregado por"];

  const data = [
    ['Performance Breakdown', 'BREOF FIP', '2020.12', 'Excel', 'Diogo Massaro'],
    ['Carteira Diária', 'VBI CRI FII', '2020.11', 'PDF', 'Diogo Massaro'],
    ['Carteira Diária', 'VBI CRI FII', '2020.10', 'PDF', 'Diogo Massaro'],
    ['Demonstrativo de Caixa – Conta XPTO', 'NOVA I FII', '2020.09', 'PDF', 'Diogo Massaro'],
    ['Performance Breakdown', 'BREOF FIP', '2020.08', 'Excel', 'Diogo Massaro'],
    ['Carteira Diária', 'VBI CRI FII', '2020.07', 'PDF', 'Diogo Massaro'],
    ['Carteira Diária', 'VBI CRI FII', '2020.06', 'PDF', 'Diogo Massaro'],
    ['Demonstrativo de Caixa – Conta XPTO', 'NOVA I FII', '2020.05', 'PDF', 'Diogo Massaro'],
    ['Performance Breakdown', 'BREOF FIP', '2020.04', 'Excel', 'Diogo Massaro'],
    ['Carteira Diária', 'VBI CRI FII', '2020.03', 'PDF', 'Diogo Massaro'],
    ['Carteira Diária', 'VBI CRI FII', '2020.02', 'PDF', 'Diogo Massaro'],
    ['Demonstrativo de Caixa – Conta XPTO', 'NOVA I FII', '2020.01', 'PDF', 'Diogo Massaro'],
    ['Performance Breakdown', 'BREOF FIP', '2019.12', 'Excel', 'Diogo Massaro'],
    ['Carteira Diária', 'VBI CRI FII', '2019.11', 'PDF', 'Diogo Massaro'],
    ['Carteira Diária', 'VBI CRI FII', '2019.10', 'PDF', 'Diogo Massaro'],
    ['Demonstrativo de Caixa – Conta XPTO', 'NOVA I FII', '2019.09', 'PDF', 'Diogo Massaro'],
    ['Performance Breakdown', 'BREOF FIP', '2019.08', 'Excel', 'Diogo Massaro'],
    ['Carteira Diária', 'VBI CRI FII', '2019.07', 'PDF', 'Diogo Massaro'],
    ['Carteira Diária', 'VBI CRI FII', '2019.06', 'PDF', 'Diogo Massaro'],
    ['Demonstrativo de Caixa – Conta XPTO', 'NOVA I FII', '2019.05', 'PDF', 'Diogo Massaro'],
    ['Performance Breakdown', 'BREOF FIP', '2019.04', 'Excel', 'Diogo Massaro'],
    ['Carteira Diária', 'VBI CRI FII', '2019.03', 'PDF', 'Diogo Massaro'],
    ['Carteira Diária', 'VBI CRI FII', '2019.02', 'PDF', 'Diogo Massaro'],
    ['Demonstrativo de Caixa – Conta XPTO', 'NOVA I FII', '2019.01', 'PDF', 'Diogo Massaro'],
    ['Demonstrativo de Caixa – Conta YPTO', 'NOVA I FII', '2018.12', 'PDF', 'Diogo Massaro'],        
];


  return (
      <div id="DataTable1"> 
        <MUIDataTable
          title={"Documentos"}
          data={data}
          columns={columns}
          options={options}
        />
      </div>
  );
}


