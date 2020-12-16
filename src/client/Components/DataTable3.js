import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import GetAppIcon from '@material-ui/icons/GetApp';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ScreenShareIcon from '@material-ui/icons/ScreenShare';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';

const icon1 = <VisibilityIcon color="action" fontSize="small"/>;
const icon2 = <GetAppIcon color="action" fontSize="small"/>;
const icon3 = <ScreenShareIcon color="action" fontSize="small"/>;
const icon4 = <GetAppIcon style={{ color: "rgba(0, 0, 0, 0.54)" }} />;


const shoot = () => {
  alert("Esta funcionalidade ainda está em desenvolvimento");
}

function createData(name, calories, carbs, fat,  protein, protein2, protein3, protein4) {
  return { name, calories,  carbs, fat, protein, protein2, protein3, protein4 };
}

const rows = [
    createData('Performance Breakdown', 'BREOF FIP', '2020.12', 'Excel', 'Diogo Massaro'),
    createData('Carteira Diária', 'VBI CRI FII', '2020.11', 'PDF', 'Diogo Massaro'),
    createData('Carteira Diária', 'VBI CRI FII', '2020.10', 'PDF', 'Diogo Massaro'),
    createData('Demonstrativo de Caixa – Conta XPTO', 'NOVA I FII', '2020.09', 'PDF', 'Diogo Massaro'),
    createData('Performance Breakdown', 'BREOF FIP', '2020.08', 'Excel', 'Diogo Massaro'),
    createData('Carteira Diária', 'VBI CRI FII', '2020.07', 'PDF', 'Diogo Massaro'),
    createData('Carteira Diária', 'VBI CRI FII', '2020.06', 'PDF', 'Diogo Massaro'),
    createData('Demonstrativo de Caixa – Conta XPTO', 'NOVA I FII', '2020.05', 'PDF', 'Diogo Massaro'),
    createData('Performance Breakdown', 'BREOF FIP', '2020.04', 'Excel', 'Diogo Massaro'),
    createData('Carteira Diária', 'VBI CRI FII', '2020.03', 'PDF', 'Diogo Massaro'),
    createData('Carteira Diária', 'VBI CRI FII', '2020.02', 'PDF', 'Diogo Massaro'),
    createData('Demonstrativo de Caixa – Conta XPTO', 'NOVA I FII', '2020.01', 'PDF', 'Diogo Massaro'),
    createData('Performance Breakdown', 'BREOF FIP', '2019.12', 'Excel', 'Diogo Massaro'),
    createData('Carteira Diária', 'VBI CRI FII', '2019.11', 'PDF', 'Diogo Massaro'),
    createData('Carteira Diária', 'VBI CRI FII', '2019.10', 'PDF', 'Diogo Massaro'),
    createData('Demonstrativo de Caixa – Conta XPTO', 'NOVA I FII', '2019.09', 'PDF', 'Diogo Massaro'),
    createData('Performance Breakdown', 'BREOF FIP', '2019.08', 'Excel', 'Diogo Massaro'),
    createData('Carteira Diária', 'VBI CRI FII', '2019.07', 'PDF', 'Diogo Massaro'),
    createData('Carteira Diária', 'VBI CRI FII', '2019.06', 'PDF', 'Diogo Massaro'),
    createData('Demonstrativo de Caixa – Conta XPTO', 'NOVA I FII', '2019.05', 'PDF', 'Diogo Massaro'),
    createData('Performance Breakdown', 'BREOF FIP', '2019.04', 'Excel', 'Diogo Massaro'),
    createData('Carteira Diária', 'VBI CRI FII', '2019.03', 'PDF', 'Diogo Massaro'),
    createData('Carteira Diária', 'VBI CRI FII', '2019.02', 'PDF', 'Diogo Massaro'),
    createData('Demonstrativo de Caixa – Conta XPTO', 'NOVA I FII', '2019.01', 'PDF', 'Diogo Massaro'),
    createData('Demonstrativo de Caixa – Conta YPTO', 'NOVA I FII', '2018.12', 'PDF', 'Diogo Massaro'),    
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  { id: 'name', numeric: true, disablePadding: false, label: 'Relatório' },
  { id: 'calories', numeric: false, disablePadding: false, label: 'Entidade' },
  { id: 'carbs', numeric: false, disablePadding: false, label: 'Data' },
  { id: 'fat', numeric: false, disablePadding: false, label: 'Extensão' },
  { id: 'protein', numeric: false, disablePadding: false, label: 'Carregado por' },
  { id: 'protein2', numeric: false, disablePadding: false, label: 'Visualizar' },
  { id: 'protein3', numeric: false, disablePadding: false, label: 'Baixar' },
  { id: 'protein4', numeric: false, disablePadding: false, label: 'Compartilhar' }
];

function EnhancedTableHead(props) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="action"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'left' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

// EnhancedTableHead.propTypes = {
//   classes: PropTypes.object.isRequired,
//   numSelected: PropTypes.number.isRequired,
//   onRequestSort: PropTypes.func.isRequired,
//   onSelectAllClick: PropTypes.func.isRequired,
//   order: PropTypes.oneOf(['asc', 'desc']).isRequired,
//   orderBy: PropTypes.string.isRequired,
//   rowCount: PropTypes.number.isRequired,
// };

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          // color: "theme.palette.text.secondary",
          // backgroundColor: "lighten(theme.palette.text.secondary, 0.85)",
          color: "gray",
          backgroundColor: "inherit",          
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.primary.dark,
        },
  title: {
    flex: '1 1 100%',
  },
  title2: {
    flex: '1 1 100%',
    textAlign: "right"
  },
}));

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { numSelected } = props;

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
            {/* <a style={{fontSize: "1rem", fontWeight: "500"}}>Documentos</a> */}
            <Tooltip title="Baixar Documentos Selecionados">
                <Button  href="ExcelExemplo.xlsx" target="_blank" aria-label="baixar">
                  {icon4} &nbsp; &nbsp; <a style={{ fontWeight: "500", color: "gray"}}>Baixar Selecionados</a>
                </Button>
            </Tooltip>
            
        </Typography>

      ) : (
        <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
          <a style={{fontSize: "1rem", fontWeight: "500"}}>Documentos</a>
        </Typography>
      )}

      {numSelected > 0 ? (
        
        <Typography className={classes.title2} color="inherit" variant="subtitle1" component="div" style={{align: "right"}}>
          {numSelected} {numSelected === 1? "selecionado" : "selecionados"} &nbsp;
        </Typography>
       
      ) : (
          <></>
        // <Tooltip title="Filter list">
        //   <IconButton aria-label="filter list">
        //     <FilterListIcon />
        //   </IconButton>
        // </Tooltip>
      )}
    </Toolbar>
  );



};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  tableRow: {
    "&$selected, &$selected:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.08)"
    }
  },
  // tableCell: {
  //   "$selected &": {
  //     color: "yellow"
  //   }
  // },
  selected: {},  
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));

export default function EnhancedTable() {
  const classes = useStyles();
  const [order, setOrder] = React.useState('desc');
  const [orderBy, setOrderBy] = React.useState('carbs');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.carbs);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    

    // event.target.style.background = "yellow";

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.carbs);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.carbs)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.carbs}
                      selected={isItemSelected}
                      classes={{ selected: classes.selected }}
                      className={classes.tableRow}
                    >
                      <TableCell padding="checkbox" >
                        <Checkbox
                          color="action"
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </TableCell>
                      <TableCell  >
                        {row.name}
                      </TableCell>
                      <TableCell align="left">{row.calories}</TableCell>
                      <TableCell component="th" id={labelId} scope="row" padding="none" align="left">{row.carbs}</TableCell>
                      <TableCell align="left">{row.fat}</TableCell>
                      <TableCell align="left">{row.protein}</TableCell>
                      <TableCell align="left"><Tooltip title="Visualizar este Documento"><Link to="/DocumentoVisualizacao" ><Button>{icon1}</Button></Link></Tooltip></TableCell>
                      <TableCell align="left"><Tooltip title="Baixar este Documento"><Button href="ExcelExemplo.xlsx" target="_blank">{icon2}</Button></Tooltip></TableCell>
                      <TableCell align="left"><Tooltip title="Compartilhar este Documento"><Button href="javascript:void(0);" onClick={shoot}>{icon3}</Button></Tooltip></TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      {/* <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      /> */}
    </div>
  );
}
