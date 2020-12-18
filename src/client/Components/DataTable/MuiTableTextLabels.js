const MuiTableTextLabels = {
  body: {
    noMatch: "Desculpe, nenhum registro correspondente encontrado",
    toolTip: "Ordenar",
    columnHeaderTooltip: column => `Ordenar por ${column.label}`
  },
  pagination: {
    next: "Próxima Página",
    previous: "Página anterior",
    rowsPerPage: "Registros por página:",
    displayRows: "de",
  },
  toolbar: {
    search: "Pesquisar",
    downloadCsv: "Baixar CSV",
    print: "Imprimir",
    viewColumns: "Visualizar Colunas",
    filterTable: "Filtrar Tabela",
  },
  filter: {
    all: "Todos",
    title: "FILTROS",
    reset: "RESETAR",
  },
  viewColumns: {
    title: "Mostrar Colunas",
    titleAria: "Mostrar/Ocultar Colunas da Tabela",
  },
  selectedRows: {
    text: "selecionado(s)",
    delete: "Deletar",
    deleteAria: "Deletar Selecionados",
  }
}


export default MuiTableTextLabels