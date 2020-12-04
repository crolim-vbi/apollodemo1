import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      color: 'grey',
      border: "none",
    }
  }));

const columns = [
//   { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'Data Atualização', width: 150 },
  { field: 'lastName', headerName: 'Documento', width: 1000 },
//   {
//     field: 'age',
//     headerName: 'Age',
//     type: 'number',
//     width: 90,
//   },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
//   },
];

const rows = [
    {
      "id": 13,
      "firstName": "23/05/2020",
      "lastName": "VBI CRI FII_Posição Investidores_2018.01.xls"
    },
    {
      "id": 14,
      "firstName": "22/05/2020",
      "lastName": "BREOF FIP Multiestratégia_Performance Breakdow_2020.04"
    },
    {
      "id": 15,
      "firstName": "21/05/2020",
      "lastName": "BREOF FIDC_Performance Breakdow_2020.04"
    },
    {
      "id": 16,
      "firstName": "21/05/2020",
      "lastName": "BREOF III FIP_Performance Breakdow_2020.04"
    },
    {
      "id": 17,
      "firstName": "21/05/2020",
      "lastName": "Nova I FII_Performance Breakdow_2020.04"
    },
    {
      "id": 18,
      "firstName": "19/05/2020",
      "lastName": "Trilliant Reit FIM_Performance Breakdow_2020.04"
    },
    {
      "id": 19,
      "firstName": "19/05/2020",
      "lastName": "SBC FII_Performance Breakdow_2020.04"
    },
    {
      "id": 20,
      "firstName": "19/05/2020",
      "lastName": "VBI Uliving FII_Performance Breakdow_2020.04"
    },
    {
      "id": 21,
      "firstName": "19/05/2020",
      "lastName": "VBI CRI FII_Performance Breakdow_2020.04"
    },
    {
      "id": 22,
      "firstName": "19/05/2020",
      "lastName": "VBI Logístico FII_Performance Breakdow_2020.04"
    },
    {
      "id": 23,
      "firstName": "19/05/2020",
      "lastName": "VBI Reits FoF FII_Performance Breakdow_2020.04"
    }
   ]

export default function DataTable() {

const classes = useStyles();

  return (
    <div style={{ height: "203.5px", width: '100%' }}>
      <DataGrid scrollbarSize={1000}  showColumnRightBorder={false} autoHeight="true" headerHeight={45} rowHeight={35}  rows={rows} columns={columns} pageSize={5} checkboxSelection hideFooter={true} className={classes.root}/>
    </div>
  );
}