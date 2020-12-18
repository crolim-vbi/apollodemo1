import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import GetAppIcon from '@material-ui/icons/GetApp';
import { withStyles } from "@material-ui/core/styles";

const defaultToolbarSelectStyles = {
  iconContainer: {
    marginRight: "24px",
  }
};

class CustomToolbarSelect extends React.Component {
    
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.iconContainer}>
        <Tooltip title={"Baixar Selecionados"}>
          <IconButton className={classes.iconButton}  href="ExcelExemplo.xlsx">
            <GetAppIcon className={classes.icon}  />
          </IconButton>
        </Tooltip>
      </div>
    );
  }
}

export default withStyles(defaultToolbarSelectStyles, { name: "CustomToolbarSelect" })(CustomToolbarSelect);
