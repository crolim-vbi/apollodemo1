import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'relatorio', headerName: 'Relatório', width: 300 },
  { field: 'entidade', headerName: 'Entidade', width: 300 },
  {
    field: 'data',
    headerName: 'Data',
    // type: 'number',
    width: 90,
  },
  {
    field: 'carregadoPor',
    headerName: 'Carregado Por',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue('entidade') || ''} ${params.getValue('relatorio') || ''}`,
  },
];

const rows = [
  { id: 1, relatorio: 'Performance Breakdown', entidade: 'BREOF FIP', data: "2020.09" },
  { id: 2, relatorio: 'Carteira', entidade: 'BREOF FIP', data: "2020.10" },
  { id: 3, relatorio: 'Carteira', entidade: 'BREOF III FIP', data: "2020.10" },
  { id: 4, relatorio: 'Demonstrativo de Caixa – Conta XPTO', entidade: 'NOVA I FII', data: "2020.10" },
];

export default function App() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}
