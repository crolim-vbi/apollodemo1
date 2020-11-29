import React from 'react';
import './styles.css';

import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

import RadioButtonUncheckedOutlined from '@material-ui/icons/RadioButtonUncheckedOutlined'
import RadioButtonCheckedOutlinedIcon from '@material-ui/icons/RadioButtonCheckedOutlined';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Box from '@material-ui/core/Box';



const icon1 = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon1 = <CheckBoxIcon fontSize="small" />;

const icon2 = <RadioButtonUncheckedOutlined fontSize="small" />;
const checkedIcon2 = <RadioButtonCheckedOutlinedIcon fontSize="small" />;



// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
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
    "nome": "Carteira Administrador",
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


 const DatePickers = function(props) {

  const classes = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1)
    },
  }));

  return (
    <form className={classes.container} noValidate>
      <TextField
        id="date"
        label={props.labelName}
        type="date"
        defaultValue=""
        style={{ width: 135, backgroundColor: "transparent", display: "inline-block", margin: "0px 0px 0px 0px" }}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}


function CheckboxesTags(props) {

  return (  
    <Autocomplete
      multiple={props.multipleBoolen ? true : null}
      limitTags={1}
      id="checkboxes-tags-demo"
      size="small"
      options={props.optionsValues}
      groupBy={ props.groupByKey ? (option) => option[props.groupByKey] : ""}
      disableCloseOnSelect = {props.multipleBoolen ? true : null}
      getOptionLabel={(option) => option.nome}
      renderOption={(option, { selected }) => (
        <React.Fragment>
          <Checkbox
            icon={props.multipleBoolen ? icon1 : icon2}
            checkedIcon={props.multipleBoolen ? checkedIcon1 : checkedIcon2}
            style={{ marginRight: 8}}
            checked={selected}
          />
          {option.nome}
        </React.Fragment>
      )}
      style={{ width: "100%", maxWidth: "200px", backgroundColor: "transparent", display: "inline-block", margin: "10px 0px" }}
      renderInput={(params) => (
        <TextField {...params}   variant="standard" label={props.labelName}/>
      )}
    />
    
  );
}

const ComboBox = function (props) {

  return (

    <Autocomplete
      id="combo-box-demo"
      options={props.optionsValues}
      getOptionLabel={(option) => option.nome}      
      style={{ width: 200, marginBottom: 20 }}
      renderInput={(params) => <TextField {...params} variant="standard" label={props.labelName}  />}
    />
    );
  }


 const VerticalLine = () => {

  return (
    <div style={{borderLeft: "1px solid #ccc", height: "40px", margin: "0px 15px"}}></div>
  )

}



export default function Navbar2() {

  const classes = makeStyles({
    root: {
      background: '#555'
    },
  })();


  return (
    <div className="container2">
      <div className="navbar2" style={{ maxWidth: "1200px"}}>

        
        <VerticalLine />
        
        <CheckboxesTags multipleBoolen={true} labelName = "Entidades" optionsValues = {entidades} groupByKey = "tipo" />

        <VerticalLine />

        <CheckboxesTags multipleBoolen={true} labelName = "Tema" optionsValues = {temas} />

        <VerticalLine />

        <CheckboxesTags multipleBoolen={true} labelName = "Relatórios" optionsValues = {relatorios} groupByKey = "tema" />

        <VerticalLine />

        <div style={{border:"", marginTop: "15px", color: "#777"}}>De</div> &nbsp;&nbsp;&nbsp;

        <DatePickers labelName = "Período" />

        &nbsp;&nbsp;&nbsp;&nbsp; <div style={{border:"", marginTop: "15px", color: "#777"}}>até</div> &nbsp;&nbsp;&nbsp;

        <DatePickers labelName = " " />
        

        <VerticalLine />


        <Button className={classes.root} variant="contained" color="primary">Pesquisar</Button>

            
      </div>   
    </div>
      

  );
};


// export default function AutoGrid() {
//   const classes = makeStyles((theme) => ({
//     root: {
//       flexGrow: 1
//     },
//     paper: {
//       padding: theme.spacing(2),
//       textAlign: 'center',
//       color: theme.palette.text.secondary,
//     },
//   }));

//   return (
//     <>    
//       <div style={{maxWidth:"1200px", margin:"auto", backgroundColor:"lightgray"}}>
//         <div className={classes.root} >
//           <Grid container spacing={3}>
//             <Grid item xs>
              
//                 <CheckboxesTags className={classes.paper}  multipleBoolen={true} labelName = "Entidades" optionsValues = {entidades} groupByKey = "tipo" />
              
//             </Grid>
//             <Grid item xs>

//                 <CheckboxesTags multipleBoolen={false} labelName = "Tema" optionsValues = {temas} />

//             </Grid>
//             <Grid item xs>
//               <CheckboxesTags multipleBoolen={true} labelName = "Relatórios" optionsValues = {relatorios} />
//             </Grid>
//           </Grid>
//           <Grid container spacing={3}>
//             <Grid item xs>
//               <Paper className={classes.paper}>xs</Paper>
//             </Grid>
//             <Grid item xs={6}>
//               <Paper className={classes.paper}>xs=6</Paper>
//             </Grid>
//             <Grid item xs>
//               <Paper className={classes.paper}>xs</Paper>
//             </Grid>
//           </Grid>
//         </div>
//       </div>
    
//     </>
//   );
// }
