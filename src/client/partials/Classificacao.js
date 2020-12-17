import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';

import Tooltip from '@material-ui/core/Tooltip';

import IconButton from '@material-ui/core/IconButton';



import Grid from '@material-ui/core/Grid';


import DatePickers from '../Components/DatePickers';
import DatePickers2 from '../Components/DatePickers2';
import CheckboxesTags from '../Components/CheckboxesTags';


import GridOnIcon from '@material-ui/icons/GridOn';
import PublishIcon from '@material-ui/icons/Publish';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

import ExcelIcon from "./xpto.png"



const icon3 = <img src={ExcelIcon} style={{height: "22px"}}  />;
const icon2 = <PublishIcon   />;
const icon6 = <HelpOutlineIcon  />;


const shoot = () => {
  alert("Esta funcionalidade ainda está em desenvolvimento");
}


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, tipo, fat, carbs, protein) {
  return { name, tipo, fat, carbs, protein };
}

const rows = [
  createData('VBI CRI FII - Carteira Diária - 2018.11.30.xls', "datePicker", 6.0, 24, 4.0),
  createData('BREOF II FIP - Carteira Diária - 2018.11.30.pdf', "datePicker", 9.0, 37, 4.3),
  createData('BREOF FIDC - Performance Breakdow - 2020.11.pdf', "monthPicker", 16.0, 24, 6.0),
  createData('BREOF III FIP - Performance Breakdow - 2020.11.pdf', "monthPicker", 3.7, 67, 4.3),
  createData('Nova I FII - Relatório Anual Exemplo - 2020.04.pdf', "yearPicker", 16.0, 49, 3.9),
];








export default function BasicTable() {
  const classes = useStyles();

  return (
    <>

            <Grid container spacing={0} style={{color:"dimgray"}}>
              <Grid item xs={12} md={12}>
                <div style={{marginBottom: "10px"}}></div>
              </Grid>
              <Grid item xs={12} md={12} style={{borderTop: "solid 1px lightgray", borderBottom: "solid 1px lightgray"}}>
                <div style={{width:"100%", height:"100%", display: "flex", justifyContent: "flex-start"}}>
                    <div style={{display: "inline-block", alignSelf: "flex-start"}}>
                      <Tooltip title="Baixar planilha para classificação em lote"><IconButton href="ExcelExemplo.xlsx" target="_blank">{icon3}</IconButton></Tooltip>
                      <Tooltip title="Submeter planilha para classificação em lote"><IconButton href="javascript:void(0);" onClick={shoot}>{icon2}</IconButton></Tooltip>
                      <Tooltip title="Ajuda com planilha de classificação em lote"><IconButton  href="javascript:void(0);" onClick={shoot} >{icon6}</IconButton></Tooltip>
                    </div>
                </div>
  
              </Grid>                  
              <Grid item xs={12} md={12}>
                <div style={{marginBottom: "10px"}}></div>
              </Grid>                  
            </Grid>     
      <Toolbar style={{backgroundColor: "white",  fontWeight: "500"}}>CLASSIFIQUE OS ARQUIVOS</Toolbar>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{color: "dimgray"}}>Arquivo</TableCell>
              <TableCell style={{color: "dimgray"}} align="left">Entidade</TableCell>
              <TableCell style={{color: "dimgray"}} align="left">Relatório</TableCell>
              <TableCell style={{color: "dimgray"}} align="left">Descritivo</TableCell>
              <TableCell style={{color: "dimgray", maxWidth: "40px"}} align="left">Data de Referência</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row" style={{maxWidth: "120px", wordWrap: "break-word", color: "dimgray"}}>
                  {row.name}
                </TableCell>
                <TableCell align="left"><CheckboxesTags multipleBoolen={false} labelName = {null} optionsValues = {entidades} groupByKey = "tipo" /></TableCell>
                <TableCell align="left"><CheckboxesTags multipleBoolen={false} labelName = {null} optionsValues = {relatorios} groupByKey = "tema" /></TableCell>
                <TableCell align="left"><CheckboxesTags multipleBoolen={false} labelName = {null} optionsValues = {relatorios} groupByKey = "tema" /></TableCell>
                <TableCell align="left"  style={{maxWidth: "40px"}}><DatePickers2 tipo={row.tipo}/></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}



const entidades = [
    {
      "nome": "BREOF II FIP",
      "tipo": "Fundos"
    },
    {
      "nome": "BREOF FIDC",
      "tipo": "Fundos"
    },
    {
      "nome": "BREOF III FIP",
      "tipo": "Fundos"
    },
    {
      "nome": "Nova I FII",
      "tipo": "Fundos"
    },
    {
      "nome": "Trilliant Reit FIM",
      "tipo": "Fundos"
    },
    {
      "nome": "SBC FII",
      "tipo": "Fundos"
    },
    {
      "nome": "VBI Uliving FII",
      "tipo": "Fundos"
    },
    {
      "nome": "VBI CRI FII",
      "tipo": "Fundos"
    },
    {
      "nome": "VBI Reits FoF FII",
      "tipo": "Fundos"
    },
    {
      "nome": "VBI Logístico FII",
      "tipo": "Fundos"
    },
    {
      "nome": "VBI Prime Properties FII",
      "tipo": "Fundos"
    },
    {
      "nome": "Basset Hound LLC",
      "tipo": "INRs"
    },
    {
      "nome": "BREOF II Luxco SarL",
      "tipo": "INRs"
    },
    {
      "nome": "Canaryanna LLC",
      "tipo": "INRs"
    },
    {
      "nome": "Espirito Santo LLC",
      "tipo": "INRs"
    },
    {
      "nome": "Floripa",
      "tipo": "INRs"
    },
    {
      "nome": "Tabbyal",
      "tipo": "INRs"
    },
    {
      "nome": "BREOF III SCS",
      "tipo": "INRs"
    },
    {
      "nome": "Brazil Student Housing LLC",
      "tipo": "INRs"
    }
   ]
  


   

const temas = [
  {
    "nome": "Ativo"
  },
  {
    "nome": "Contratos"
  },
  {
    "nome": "Passivo"
  },
  {
    "nome": "Contábil"
  },
  {
    "nome": "Eventos Societários"
  },
  {
    "nome": "Risco"
  }
 ]

 const relatorios = [
  {
    "nome": "Carteira Diária",
    "tema": "Ativo",
    "frequencia": "Mensal"
  },
  {
    "nome": "Demonstrativo de Caixa",
    "tema": "Ativo",
    "frequencia": "Mensal"
  },
  {
    "nome": "Histórico de Cotas e PL",
    "tema": "Ativo",
    "frequencia": "Diário"
  },
  {
    "nome": "Memória de Cálculo",
    "tema": "Ativo",
    "frequencia": "Mensal"
  },
  {
    "nome": "Performance Breakdown",
    "tema": "Ativo",
    "frequencia": "Mensal"
  },
  {
    "nome": "Relatório de distribuição de rendimentos",
    "tema": "Ativo",
    "frequencia": "Mensal"
  },
  {
    "nome": "Balancete dos Fundos",
    "tema": "Contábil",
    "frequencia": "Mensal"
  },
  {
    "nome": "Demonstração Financeira Auditada",
    "tema": "Contábil",
    "frequencia": "Semestral"
  },
  {
    "nome": "Razão dos Fundo",
    "tema": "Contábil",
    "frequencia": "Mensal"
  },
  {
    "nome": "Contratos de Prestador de Serviço do Fundo",
    "tema": "Contratos",
    "frequencia": "Pontual"
  },
  {
    "nome": "Regulamentos dos Fundos",
    "tema": "Contratos",
    "frequencia": "Unitário"
  },
  {
    "nome": "Atos Societários da Entidade",
    "tema": "Eventos Societários",
    "frequencia": "Pontual"
  },
  {
    "nome": "Extrato de Cotista do Fundo",
    "tema": "Passivo",
    "frequencia": "Mensal"
  },
  {
    "nome": "Posição de Investidores do Fundo",
    "tema": "Passivo",
    "frequencia": "Mensal"
  },
  {
    "nome": "Relatório de Controle de Enquadramento",
    "tema": "Risco",
    "frequencia": "Diário"
  }
 ]