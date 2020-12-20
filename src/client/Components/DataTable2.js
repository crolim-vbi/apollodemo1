import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: "inherit"
    }
  }));

const columns = [
//   { field: 'id', headerName: 'ID', width: 70 },
  { field: 'relatorio', headerName: 'Relatório', width: 170 },
  { field: 'entidade', headerName: 'Entidade', width: 170 },
  { field: 'data', headerName: 'Data', width: 170 },
  { field: 'extensao', headerName: 'Extensão', width: 170 },
  { field: 'carregadoPor', headerName: 'Carregado Por', width: 170 },
  { field: 'xpto', headerName: 'Visualizar', width: 170 },
  { field: 'ypto', headerName: 'Baixar', width: 170 }
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
    "id": 1,
    "relatorio": "Performance Breakdown",
    "entidade": "BREOF FIP",
    "data": 2020.09,
    "extensao": "Excel",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 2,
    "relatorio": "Carteira",
    "entidade": "BREOF FIP",
    "data": 2020.1,
    "extensao": "PDF",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 3,
    "relatorio": "Carteira",
    "entidade": "BREOF III FIP",
    "data": 2020.1,
    "extensao": "PDF",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 4,
    "relatorio": "Demonstrativo de Caixa – Conta XPTO",
    "entidade": "NOVA I FII",
    "data": 2020.1,
    "extensao": "PDF",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 5,
    "relatorio": "Performance Breakdown",
    "entidade": "BREOF FIP",
    "data": 2020.09,
    "extensao": "Excel",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 6,
    "relatorio": "Carteira",
    "entidade": "BREOF FIP",
    "data": 2020.1,
    "extensao": "PDF",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 7,
    "relatorio": "Carteira",
    "entidade": "BREOF III FIP",
    "data": 2020.1,
    "extensao": "PDF",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 8,
    "relatorio": "Demonstrativo de Caixa – Conta XPTO",
    "entidade": "NOVA I FII",
    "data": 2020.1,
    "extensao": "PDF",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 9,
    "relatorio": "Performance Breakdown",
    "entidade": "BREOF FIP",
    "data": 2020.09,
    "extensao": "Excel",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 10,
    "relatorio": "Carteira",
    "entidade": "BREOF FIP",
    "data": 2020.1,
    "extensao": "PDF",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 11,
    "relatorio": "Carteira",
    "entidade": "BREOF III FIP",
    "data": 2020.1,
    "extensao": "PDF",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 12,
    "relatorio": "Demonstrativo de Caixa – Conta XPTO",
    "entidade": "NOVA I FII",
    "data": 2020.1,
    "extensao": "PDF",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 13,
    "relatorio": "Performance Breakdown",
    "entidade": "BREOF FIP",
    "data": 2020.09,
    "extensao": "Excel",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 14,
    "relatorio": "Carteira",
    "entidade": "BREOF FIP",
    "data": 2020.1,
    "extensao": "PDF",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 15,
    "relatorio": "Carteira",
    "entidade": "BREOF III FIP",
    "data": 2020.1,
    "extensao": "PDF",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 16,
    "relatorio": "Demonstrativo de Caixa – Conta XPTO",
    "entidade": "NOVA I FII",
    "data": 2020.1,
    "extensao": "PDF",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 17,
    "relatorio": "Performance Breakdown",
    "entidade": "BREOF FIP",
    "data": 2020.09,
    "extensao": "Excel",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 18,
    "relatorio": "Carteira",
    "entidade": "BREOF FIP",
    "data": 2020.1,
    "extensao": "PDF",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 19,
    "relatorio": "Carteira",
    "entidade": "BREOF III FIP",
    "data": 2020.1,
    "extensao": "PDF",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 20,
    "relatorio": "Demonstrativo de Caixa – Conta XPTO",
    "entidade": "NOVA I FII",
    "data": 2020.1,
    "extensao": "PDF",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 21,
    "relatorio": "Performance Breakdown",
    "entidade": "BREOF FIP",
    "data": 2020.09,
    "extensao": "Excel",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 22,
    "relatorio": "Carteira",
    "entidade": "BREOF FIP",
    "data": 2020.1,
    "extensao": "PDF",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 23,
    "relatorio": "Carteira",
    "entidade": "BREOF III FIP",
    "data": 2020.1,
    "extensao": "PDF",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 24,
    "relatorio": "Demonstrativo de Caixa – Conta XPTO",
    "entidade": "NOVA I FII",
    "data": 2020.1,
    "extensao": "PDF",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 25,
    "relatorio": "Performance Breakdown",
    "entidade": "BREOF FIP",
    "data": 2020.09,
    "extensao": "Excel",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 26,
    "relatorio": "Carteira",
    "entidade": "BREOF FIP",
    "data": 2020.1,
    "extensao": "PDF",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 27,
    "relatorio": "Carteira",
    "entidade": "BREOF III FIP",
    "data": 2020.1,
    "extensao": "PDF",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 28,
    "relatorio": "Demonstrativo de Caixa – Conta XPTO",
    "entidade": "NOVA I FII",
    "data": 2020.1,
    "extensao": "PDF",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 29,
    "relatorio": "Performance Breakdown",
    "entidade": "BREOF FIP",
    "data": 2020.09,
    "extensao": "Excel",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 30,
    "relatorio": "Carteira",
    "entidade": "BREOF FIP",
    "data": 2020.1,
    "extensao": "PDF",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 31,
    "relatorio": "Carteira",
    "entidade": "BREOF III FIP",
    "data": 2020.1,
    "extensao": "PDF",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 32,
    "relatorio": "Demonstrativo de Caixa – Conta XPTO",
    "entidade": "NOVA I FII",
    "data": 2020.1,
    "extensao": "PDF",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 33,
    "relatorio": "Performance Breakdown",
    "entidade": "BREOF FIP",
    "data": 2020.09,
    "extensao": "Excel",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 34,
    "relatorio": "Carteira",
    "entidade": "BREOF FIP",
    "data": 2020.1,
    "extensao": "PDF",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 35,
    "relatorio": "Carteira",
    "entidade": "BREOF III FIP",
    "data": 2020.1,
    "extensao": "PDF",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 36,
    "relatorio": "Demonstrativo de Caixa – Conta XPTO",
    "entidade": "NOVA I FII",
    "data": 2020.1,
    "extensao": "PDF",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 37,
    "relatorio": "Performance Breakdown",
    "entidade": "BREOF FIP",
    "data": 2020.09,
    "extensao": "Excel",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 38,
    "relatorio": "Carteira",
    "entidade": "BREOF FIP",
    "data": 2020.1,
    "extensao": "PDF",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 39,
    "relatorio": "Carteira",
    "entidade": "BREOF III FIP",
    "data": 2020.1,
    "extensao": "PDF",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 40,
    "relatorio": "Demonstrativo de Caixa – Conta XPTO",
    "entidade": "NOVA I FII",
    "data": 2020.1,
    "extensao": "PDF",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 41,
    "relatorio": "Performance Breakdown",
    "entidade": "BREOF FIP",
    "data": 2020.09,
    "extensao": "Excel",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 42,
    "relatorio": "Carteira",
    "entidade": "BREOF FIP",
    "data": 2020.1,
    "extensao": "PDF",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 43,
    "relatorio": "Carteira",
    "entidade": "BREOF III FIP",
    "data": 2020.1,
    "extensao": "PDF",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 44,
    "relatorio": "Demonstrativo de Caixa – Conta XPTO",
    "entidade": "NOVA I FII",
    "data": 2020.1,
    "extensao": "PDF",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 45,
    "relatorio": "Performance Breakdown",
    "entidade": "BREOF FIP",
    "data": 2020.09,
    "extensao": "Excel",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 46,
    "relatorio": "Carteira",
    "entidade": "BREOF FIP",
    "data": 2020.1,
    "extensao": "PDF",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 47,
    "relatorio": "Carteira",
    "entidade": "BREOF III FIP",
    "data": 2020.1,
    "extensao": "PDF",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 48,
    "relatorio": "Demonstrativo de Caixa – Conta XPTO",
    "entidade": "NOVA I FII",
    "data": 2020.1,
    "extensao": "PDF",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 49,
    "relatorio": "Performance Breakdown",
    "entidade": "BREOF FIP",
    "data": 2020.09,
    "extensao": "Excel",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 50,
    "relatorio": "Carteira",
    "entidade": "BREOF FIP",
    "data": 2020.1,
    "extensao": "PDF",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 51,
    "relatorio": "Carteira",
    "entidade": "BREOF III FIP",
    "data": 2020.1,
    "extensao": "PDF",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 52,
    "relatorio": "Demonstrativo de Caixa – Conta XPTO",
    "entidade": "NOVA I FII",
    "data": 2020.1,
    "extensao": "PDF",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 53,
    "relatorio": "Performance Breakdown",
    "entidade": "BREOF FIP",
    "data": 2020.09,
    "extensao": "Excel",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 54,
    "relatorio": "Carteira",
    "entidade": "BREOF FIP",
    "data": 2020.1,
    "extensao": "PDF",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 55,
    "relatorio": "Carteira",
    "entidade": "BREOF III FIP",
    "data": 2020.1,
    "extensao": "PDF",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 56,
    "relatorio": "Demonstrativo de Caixa – Conta XPTO",
    "entidade": "NOVA I FII",
    "data": 2020.1,
    "extensao": "PDF",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 57,
    "relatorio": "Performance Breakdown",
    "entidade": "BREOF FIP",
    "data": 2020.09,
    "extensao": "Excel",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 58,
    "relatorio": "Carteira",
    "entidade": "BREOF FIP",
    "data": 2020.1,
    "extensao": "PDF",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 59,
    "relatorio": "Carteira",
    "entidade": "BREOF III FIP",
    "data": 2020.1,
    "extensao": "PDF",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 60,
    "relatorio": "Demonstrativo de Caixa – Conta XPTO",
    "entidade": "NOVA I FII",
    "data": 2020.1,
    "extensao": "PDF",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 61,
    "relatorio": "Performance Breakdown",
    "entidade": "BREOF FIP",
    "data": 2020.09,
    "extensao": "Excel",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 62,
    "relatorio": "Carteira",
    "entidade": "BREOF FIP",
    "data": 2020.1,
    "extensao": "PDF",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 63,
    "relatorio": "Carteira",
    "entidade": "BREOF III FIP",
    "data": 2020.1,
    "extensao": "PDF",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 64,
    "relatorio": "Demonstrativo de Caixa – Conta XPTO",
    "entidade": "NOVA I FII",
    "data": 2020.1,
    "extensao": "PDF",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 65,
    "relatorio": "Performance Breakdown",
    "entidade": "BREOF FIP",
    "data": 2020.09,
    "extensao": "Excel",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 66,
    "relatorio": "Carteira",
    "entidade": "BREOF FIP",
    "data": 2020.1,
    "extensao": "PDF",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 67,
    "relatorio": "Carteira",
    "entidade": "BREOF III FIP",
    "data": 2020.1,
    "extensao": "PDF",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 68,
    "relatorio": "Demonstrativo de Caixa – Conta XPTO",
    "entidade": "NOVA I FII",
    "data": 2020.1,
    "extensao": "PDF",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 69,
    "relatorio": "Performance Breakdown",
    "entidade": "BREOF FIP",
    "data": 2020.09,
    "extensao": "Excel",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 70,
    "relatorio": "Carteira",
    "entidade": "BREOF FIP",
    "data": 2020.1,
    "extensao": "PDF",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 71,
    "relatorio": "Carteira",
    "entidade": "BREOF III FIP",
    "data": 2020.1,
    "extensao": "PDF",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 72,
    "relatorio": "Demonstrativo de Caixa – Conta XPTO",
    "entidade": "NOVA I FII",
    "data": 2020.1,
    "extensao": "PDF",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 73,
    "relatorio": "Performance Breakdown",
    "entidade": "BREOF FIP",
    "data": 2020.09,
    "extensao": "Excel",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 74,
    "relatorio": "Carteira",
    "entidade": "BREOF FIP",
    "data": 2020.1,
    "extensao": "PDF",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 75,
    "relatorio": "Carteira",
    "entidade": "BREOF III FIP",
    "data": 2020.1,
    "extensao": "PDF",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 76,
    "relatorio": "Demonstrativo de Caixa – Conta XPTO",
    "entidade": "NOVA I FII",
    "data": 2020.1,
    "extensao": "PDF",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 77,
    "relatorio": "Performance Breakdown",
    "entidade": "BREOF FIP",
    "data": 2020.09,
    "extensao": "Excel",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 78,
    "relatorio": "Carteira",
    "entidade": "BREOF FIP",
    "data": 2020.1,
    "extensao": "PDF",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 79,
    "relatorio": "Carteira",
    "entidade": "BREOF III FIP",
    "data": 2020.1,
    "extensao": "PDF",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 80,
    "relatorio": "Demonstrativo de Caixa – Conta XPTO",
    "entidade": "NOVA I FII",
    "data": 2020.1,
    "extensao": "PDF",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 81,
    "relatorio": "Performance Breakdown",
    "entidade": "BREOF FIP",
    "data": 2020.09,
    "extensao": "Excel",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 82,
    "relatorio": "Carteira",
    "entidade": "BREOF FIP",
    "data": 2020.1,
    "extensao": "PDF",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 83,
    "relatorio": "Carteira",
    "entidade": "BREOF III FIP",
    "data": 2020.1,
    "extensao": "PDF",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 84,
    "relatorio": "Demonstrativo de Caixa – Conta XPTO",
    "entidade": "NOVA I FII",
    "data": 2020.1,
    "extensao": "PDF",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 85,
    "relatorio": "Performance Breakdown",
    "entidade": "BREOF FIP",
    "data": 2020.09,
    "extensao": "Excel",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 86,
    "relatorio": "Carteira",
    "entidade": "BREOF FIP",
    "data": 2020.1,
    "extensao": "PDF",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 87,
    "relatorio": "Carteira",
    "entidade": "BREOF III FIP",
    "data": 2020.1,
    "extensao": "PDF",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 88,
    "relatorio": "Demonstrativo de Caixa – Conta XPTO",
    "entidade": "NOVA I FII",
    "data": 2020.1,
    "extensao": "PDF",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 89,
    "relatorio": "Performance Breakdown",
    "entidade": "BREOF FIP",
    "data": 2020.09,
    "extensao": "Excel",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 90,
    "relatorio": "Carteira",
    "entidade": "BREOF FIP",
    "data": 2020.1,
    "extensao": "PDF",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 91,
    "relatorio": "Carteira",
    "entidade": "BREOF III FIP",
    "data": 2020.1,
    "extensao": "PDF",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 92,
    "relatorio": "Demonstrativo de Caixa – Conta XPTO",
    "entidade": "NOVA I FII",
    "data": 2020.1,
    "extensao": "PDF",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 93,
    "relatorio": "Performance Breakdown",
    "entidade": "BREOF FIP",
    "data": 2020.09,
    "extensao": "Excel",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 94,
    "relatorio": "Carteira",
    "entidade": "BREOF FIP",
    "data": 2020.1,
    "extensao": "PDF",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 95,
    "relatorio": "Carteira",
    "entidade": "BREOF III FIP",
    "data": 2020.1,
    "extensao": "PDF",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 96,
    "relatorio": "Demonstrativo de Caixa – Conta XPTO",
    "entidade": "NOVA I FII",
    "data": 2020.1,
    "extensao": "PDF",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 97,
    "relatorio": "Performance Breakdown",
    "entidade": "BREOF FIP",
    "data": 2020.09,
    "extensao": "Excel",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 98,
    "relatorio": "Carteira",
    "entidade": "BREOF FIP",
    "data": 2020.1,
    "extensao": "PDF",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 99,
    "relatorio": "Carteira",
    "entidade": "BREOF III FIP",
    "data": 2020.1,
    "extensao": "PDF",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 100,
    "relatorio": "Demonstrativo de Caixa – Conta XPTO",
    "entidade": "NOVA I FII",
    "data": 2020.1,
    "extensao": "PDF",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 101,
    "relatorio": "Performance Breakdown",
    "entidade": "BREOF FIP",
    "data": 2020.09,
    "extensao": "Excel",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 102,
    "relatorio": "Carteira",
    "entidade": "BREOF FIP",
    "data": 2020.1,
    "extensao": "PDF",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 103,
    "relatorio": "Carteira",
    "entidade": "BREOF III FIP",
    "data": 2020.1,
    "extensao": "PDF",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 104,
    "relatorio": "Demonstrativo de Caixa – Conta XPTO",
    "entidade": "NOVA I FII",
    "data": 2020.1,
    "extensao": "PDF",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 105,
    "relatorio": "Performance Breakdown",
    "entidade": "BREOF FIP",
    "data": 2020.09,
    "extensao": "Excel",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 106,
    "relatorio": "Carteira",
    "entidade": "BREOF FIP",
    "data": 2020.1,
    "extensao": "PDF",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 107,
    "relatorio": "Carteira",
    "entidade": "BREOF III FIP",
    "data": 2020.1,
    "extensao": "PDF",
    "carregadoPor": "Diogo Massaro"
  },
  {
    "id": 108,
    "relatorio": "Demonstrativo de Caixa – Conta XPTO",
    "entidade": "NOVA I FII",
    "data": 2020.1,
    "extensao": "PDF",
    "carregadoPor": "Diogo Massaro"
  }
 ]

export default function DataTable() {

const classes = useStyles();


  return (
    <div style={{ height: "626px", width: '100%' }}>
      <DataGrid   autoHeight="true"   rows={rows} columns={columns} pageSize={10} checkboxSelection className={classes.root}/>
    </div>
  );
}