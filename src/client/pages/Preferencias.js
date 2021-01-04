import React from 'react';
import Layout from '.././layout/Layout';

import Paper from '@material-ui/core/Paper';

import CheckboxesTags from '../components/CheckboxesTags';
import Grid from '@material-ui/core/Grid';

import Button from '@material-ui/core/Button';
import Tooltip from "@material-ui/core/Tooltip";


import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import EditIcon from '@material-ui/icons/Edit';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import IconButton from '@material-ui/core/IconButton';


const App = function() {

  
    return (<>
      <Layout titulo="Configurar Minhas Notificações">

        <div style={{maxWidth: "960px2"}}>

          <div style={{marginBottom: "24px"}}>
            <a style={{color:"dimgray", fontSize: "0.875rem", marginBottom: "8px", display: "block"}} >
              Você receberá no seu e-mail os novos documentos inseridos no sistema conforme as regras de notificações abaixo.</a>
            <a style={{color:"dimgray", fontSize: "0.875rem", marginBottom: "8px", display: "block"}} >
              Mas você pode editar ou criar novas regras da forma que desejar. Favor, utilize as opções disponíveis abaixo.</a>
          </div>
        

        {/* <Button variant="contained" color="primary" style={{marginBottom: "40px"}}><AddCircleOutlineIcon /> &nbsp; Cadastrar nova regra</Button> */}
        <Button variant="contained" color="primary" style={{marginBottom: "40px"}}>Criar nova regra</Button>
        



        <div id="teste1">

            <a style={{color: "dimgray", display: "block", margin: "10px 0px 15px", fontWeight: "600", fontSize: "1rem"}}>Regras de Notificações</a>

            <Paper elevation={2} style={{marginBottom: "8px"}}>
              
              <div style={{padding: "8px 24px", borderBottom: "solid 1px lightgray"}}>
                <a style={{fontSize: "0.875rem", fontWeight: "500"}}>Breakdown dos Fundos</a>
              </div>
              
              <div style={{padding: "0px 24px"}}>

                  <Grid container>

                      <Grid item xs={12} md={6}>
                        <div style={{margin: "8px 24px 8px 0px"}}>
                            <CheckboxesTags multipleBoolen={true} labelName = "Gostaria de receber estes Relatórios..." optionsValues = {relatorios} groupByKey = "tema" />
                        </div>  
                      </Grid>                    
                      <Grid item xs={12} md={6}>
                          <div style={{margin: "8px 24px 8px 0px"}}>
                            <CheckboxesTags multipleBoolen={true} labelName = "... para estas Entidades." optionsValues = {entidades} groupByKey = "tipo" />
                          </div>
                      </Grid>

                  </Grid>
                  <Grid item xs={12} md={6}>
                        <div style={{padding: "0px 24px 4px 0px"}}>
                          <Tooltip title={"Editar Regra"}><IconButton style={{fontSize: "0.75rem"}}><EditOutlinedIcon fontSize="small" /></IconButton></Tooltip><Tooltip title={"Deletar Regra"}><IconButton style={{fontSize: "0.75rem"}}><DeleteOutlineIcon fontSize="small" /></IconButton></Tooltip>
                        </div>  
                  </Grid>

              </div>
              

            </Paper>

            <Paper elevation={2} style={{marginBottom: "8px"}}>
              
              <div style={{padding: "8px 24px", borderBottom: "solid 1px lightgray"}}>
                <a style={{fontSize: "0.875rem", fontWeight: "500"}}>Fechamento Mensal dos INRs</a>
              </div>
              
              <div style={{padding: "0px 24px"}}>

                  <Grid container>
                      <Grid item xs={12} md={6}>
                          <div style={{margin: "8px 24px 8px 0px"}}>
                            <CheckboxesTags multipleBoolen={true} labelName = "Gostaria de receber estes Relatórios..." optionsValues = {relatorios} groupByKey = "tema" />
                          </div>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <div style={{margin: "8px 24px 8px 0px"}}>
                          <CheckboxesTags multipleBoolen={true} labelName = "... para estas Entidades." optionsValues = {entidades} groupByKey = "tipo" />
                        </div>  
                      </Grid>
                  </Grid>
                  <Grid item xs={12} md={6}>
                        <div style={{padding: "0px 24px 4px 0px"}}>
                          <Tooltip title={"Editar Regra"}><IconButton style={{fontSize: "0.75rem"}}><EditOutlinedIcon fontSize="small" /></IconButton></Tooltip><Tooltip title={"Deletar Regra"}><IconButton style={{fontSize: "0.75rem"}}><DeleteOutlineIcon fontSize="small" /></IconButton></Tooltip>
                        </div>  
                  </Grid>

              </div>
              

            </Paper>
            <Paper elevation={2} style={{marginBottom: "8px"}}>
              
              <div style={{padding: "8px 24px", borderBottom: "solid 1px lightgray"}}>
                <a style={{fontSize: "0.875rem", fontWeight: "500"}}>Relatório de passivo dos fundos</a>
              </div>
              
              <div style={{padding: "0px 24px"}}>

                  <Grid container>
                      <Grid item xs={12} md={6}>
                          <div style={{margin: "8px 24px 8px 0px"}}>
                            <CheckboxesTags multipleBoolen={true} labelName = "Gostaria de receber estes Relatórios..." optionsValues = {relatorios} groupByKey = "tema" />
                          </div>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <div style={{margin: "8px 24px 8px 0px"}}>
                           <CheckboxesTags multipleBoolen={true} labelName = "... para estas Entidades." optionsValues = {entidades} groupByKey = "tipo" />
                        </div>  
                      </Grid>
                  </Grid>
                  <Grid item xs={12} md={6}>
                        <div style={{padding: "0px 24px 4px 0px"}}>
                          <Tooltip title={"Editar Regra"}><IconButton style={{fontSize: "0.75rem"}}><EditOutlinedIcon fontSize="small" /></IconButton></Tooltip><Tooltip title={"Deletar Regra"}><IconButton style={{fontSize: "0.75rem"}}><DeleteOutlineIcon fontSize="small" /></IconButton></Tooltip>
                        </div>  
                  </Grid>

              </div>
              

            </Paper>                
          </div>
        </div>

      </Layout>
    
    </>);
  }


export default App;


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