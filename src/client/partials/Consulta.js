
import React from 'react';
import CheckboxesTags from '../Components/CheckboxesTags';
import DatePickers from '../Components/DatePickers';
import UserIcon from '../Components/UserIcon';
import DataTable from '../Components/DataTable';
import Layout from '../layout/Layout';


import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';

import Tooltip from '@material-ui/core/Tooltip';




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

const App = function() {

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      alignItems: "center",
      backgroundColor: "#eee",
      border: "solid 1px transparent"
    },
    paper: {
      paddingRight: theme.spacing(2),
      paddingLeft: theme.spacing(2),
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(2)
    },
  }));

  const useStyles2 = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontWeight: 500,
      color: "black",
      paddingTop: 10,
      paddingBottom: 10
    },
    pos: {
      marginBottom: 12,
    },
  });

  const classes = useStyles();

  const classes2 = useStyles2();

  
    return (<>
    
            <div className={classes.root} style={{paddingBottom: "25px"}}>
              
                  <Grid item xs={12} >

                    <div  style={{ maxWidth: ""}}>
                          <Card className={classes2.root} style={{backgroundColor: ""}}>

                            <CardContent style={{borderBottom: "solid 1px lightgray", paddingTop: "10px", paddingBottom: "5px"}}>
                                <Typography className={classes2.title} color="textSecondary" gutterBottom>
                                <a>Busca de Documentos</a>
                                </Typography>
                            </CardContent>                            

                            <CardContent style={{color: "gray"}}>


                                    <Grid container spacing={0}>
                                        <Grid item xs={12} md={4}>
                                            <div className={classes.paper}>
                                            
                                            <CheckboxesTags multipleBoolen={true} labelName = "Entidades" optionsValues = {entidades} groupByKey = "tipo" />
                                            </div>
                                        </Grid>
                                        <Grid item xs={12} md={4}>
                                            <div className={classes.paper}>
                                            
                                            <CheckboxesTags multipleBoolen={true} labelName = "Tema" optionsValues = {temas} />
                                            </div>
                                        </Grid>
                                        <Grid item xs={12} md={4}>
                                            <div className={classes.paper}>
                                            
                                            <CheckboxesTags multipleBoolen={true} labelName = "Relatórios" optionsValues = {relatorios} groupByKey = "tema" />
                                            </div>
                                        </Grid>
                                    </Grid>

                                    <Grid container spacing={0}>
                                      <Grid item xs={12}>
                                          <div className={classes.paper}>

                                              <div style={{textAlign: "left"}}>

                                                  <span style={{whiteSpace: "nowrap"}}>
                                                    <div style={{display: "inline-block", textAlign: "left"}}>
                                                      <a style={{color: ''}}>De</a>
                                                    </div>

                                                    &nbsp;&nbsp;&nbsp;

                                                    <div style={{display: "inline-block", textAlign: "left"}}>
                                                      <DatePickers style={{display: "inline"}} />
                                                    </div>

                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                  </span>
                                                  &nbsp;
                                                  <span style={{whiteSpace: "nowrap"}}>

                                                    <div style={{display: "inline-block", textAlign: "left"}}>
                                                      <a style={{color: ''}}>Até</a>
                                                    </div>

                                                    &nbsp;&nbsp;

                                                    <div style={{display: "inline-block", textAlign: "left"}}>
                                                      <DatePickers style={{display: "inline"}} />
                                                    </div>

                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                  </span>

                                              </div>

                                          </div>
                                      </Grid>        
                                    </Grid>


                            </CardContent>

                            <CardContent style={{borderTop: "solid 1px lightgray"}}>
                                <Typography style={{}}>                                  
                                      <div style={{display: "inline",  float: "right",  paddingBottom: "20px"}}>
                                          <Link to="/ConsultaResultado" style={{textDecoration: "none"}}><Button variant="contained">BUSCAR</Button></Link>
                                      </div>
                                </Typography>
                            </CardContent>


                          </Card>     

                    </div>


                  </Grid>
              
            </div>
            
            
    
    </>);
  }


export default App;
