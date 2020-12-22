/* eslint-disable no-use-before-define */

import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';



const icon = <CheckBoxOutlineBlankIcon  />;
const checkedIcon = <CheckBoxIcon    />;

const icon1 = <CheckBoxOutlineBlankIcon    />;
const checkedIcon1 = <CheckBoxIcon  />;

const icon2 = <RadioButtonUncheckedIcon   />;
const checkedIcon2 = <RadioButtonCheckedIcon   />;



export default function CheckboxesTags(props) {
  return (
    
    <Autocomplete
      multiple={props.multipleBoolen ? true : null}
      limitTags={1}
      id="checkboxes-tags-demo"
      options={props.optionsValues}
      groupBy={ props.groupByKey ? (option) => option[props.groupByKey] : ""}
      disableCloseOnSelect = {props.multipleBoolen ? true : null}
      getOptionLabel={(option) => option.nome}
      renderOption={props.multipleBoolen ? (option, { selected }) => (
        <React.Fragment>
          <Checkbox
            icon={props.multipleBoolen ? icon1 : icon2}
            checkedIcon={props.multipleBoolen ? checkedIcon1 : checkedIcon2}
            style={{ marginRight: 8}}
            checked={selected}
            color="primary"
          />
          {option.nome}
        </React.Fragment>
      ): null}
      style={{ width: "100%", backgroundColor: "inherit" }}
      renderInput={(params) => (
        <TextField {...params}   variant="standard" label={props.labelName}/>
      )}
    />

  );
}

