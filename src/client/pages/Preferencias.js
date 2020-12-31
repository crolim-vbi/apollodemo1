import React from 'react';
import Layout from '.././layout/Layout';

import Paper from '@material-ui/core/Paper';

import CheckboxesTags from '../components/CheckboxesTags';
import Grid from '@material-ui/core/Grid';

import Button from '@material-ui/core/Button';

const App = function() {

  
    return (<>
      <Layout titulo="Configurar Minhas Notificações">

        <div style={{maxWidth: "960px2"}}>

          <div style={{marginBottom: "24px"}}>
            <a style={{color:"dimgray", fontSize: "0.875rem", marginBottom: "8px", display: "block"}} >
              Você será notificado via e-mail sobre os novos documentos conforme as regras de notificações cadastradas abaixo.</a>
            <a style={{color:"dimgray", fontSize: "0.875rem", marginBottom: "8px", display: "block"}} >
              Mas você pode editar ou cadastrar novas regras conforme desejar. Favor, utilize as opções disponíveis abaixo.</a>
          </div>
        

        <Button  variant="contained" color="primary" style={{marginBottom: "40px"}}>Cadastrar nova regra</Button>



        <div id="teste1">

            <a style={{color: "dimgray", display: "block", margin: "10px 0px 15px", fontWeight: "600", fontSize: "1rem"}}>Regras Cadastradas</a>

            <Paper elevation={2} style={{marginBottom: "8px"}}>
              
              <div style={{padding: "8px 24px", borderBottom: "solid 1px lightgray"}}>
                <a style={{fontSize: "0.875rem", fontWeight: "500"}}>Breakdown de Todos os Fundos</a>
              </div>
              
              <div style={{padding: "0px 24px"}}>

                  <Grid container>
                      <Grid item xs={12} md={6}>
                          <div style={{margin: "8px 24px 8px 0px"}}>
                            <CheckboxesTags multipleBoolen={true} labelName = "Entidades" optionsValues = {entidades} groupByKey = "tipo" />
                          </div>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <div style={{margin: "8px 24px 8px 0px"}}>
                            <CheckboxesTags multipleBoolen={true} labelName = "Relatórios" optionsValues = {relatorios} groupByKey = "tema" />
                        </div>  
                      </Grid>
                  </Grid>
                  <Grid item xs={12} md={6}>
                        <div style={{padding: "8px 24px 24px 0px"}}>
                          <Button variant="contained" style={{fontSize: "0.75rem"}}> Editar </Button> <Button style={{fontSize: "0.75rem"}} > Excluir </Button>
                        </div>  
                  </Grid>

              </div>
              

            </Paper>

            <Paper elevation={2} style={{marginBottom: "8px"}}>
              
              <div style={{padding: "8px 24px", borderBottom: "solid 1px lightgray"}}>
                <a style={{fontSize: "0.875rem", fontWeight: "500"}}>Carteira dos INRS</a>
              </div>
              
              <div style={{padding: "0px 24px"}}>

                  <Grid container>
                      <Grid item xs={12} md={6}>
                          <div style={{margin: "8px 24px 8px 0px"}}>
                            <CheckboxesTags multipleBoolen={true} labelName = "Entidades" optionsValues = {entidades} groupByKey = "tipo" />
                          </div>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <div style={{margin: "8px 24px 8px 0px"}}>
                            <CheckboxesTags multipleBoolen={true} labelName = "Relatórios" optionsValues = {relatorios} groupByKey = "tema" />
                        </div>  
                      </Grid>
                  </Grid>
                  <Grid item xs={12} md={6}>
                        <div style={{padding: "8px 24px 24px 0px"}}>
                          <Button variant="contained" style={{fontSize: "0.75rem"}}> Editar </Button> <Button style={{fontSize: "0.75rem"}} > Excluir </Button>
                        </div>  
                  </Grid>

              </div>
              

            </Paper>
            <Paper elevation={2} style={{marginBottom: "8px"}}>
              
              <div style={{padding: "8px 24px", borderBottom: "solid 1px lightgray"}}>
                <a style={{fontSize: "0.875rem", fontWeight: "500"}}>Relatório de passivo dos fundos listados</a>
              </div>
              
              <div style={{padding: "0px 24px"}}>

                  <Grid container>
                      <Grid item xs={12} md={6}>
                          <div style={{margin: "8px 24px 8px 0px"}}>
                            <CheckboxesTags multipleBoolen={true} labelName = "Entidades" optionsValues = {entidades} groupByKey = "tipo" />
                          </div>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <div style={{margin: "8px 24px 8px 0px"}}>
                            <CheckboxesTags multipleBoolen={true} labelName = "Relatórios" optionsValues = {relatorios} groupByKey = "tema" />
                        </div>  
                      </Grid>
                  </Grid>
                  <Grid item xs={12} md={6}>
                        <div style={{padding: "8px 24px 24px 0px"}}>
                          <Button variant="contained" style={{fontSize: "0.75rem"}}> Editar </Button> <Button style={{fontSize: "0.75rem"}} > Excluir </Button>
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