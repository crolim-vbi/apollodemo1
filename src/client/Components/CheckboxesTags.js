import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

const icon1 = <CheckBoxOutlineBlankIcon    />;
const checkedIcon1 = <CheckBoxIcon  />;

export default function CheckboxesTags({multipleBoolen, optionsValues, groupByKey, labelName, limitTagsOption, defaultValueArray}) {
  return (
    
    <Autocomplete
      // size="small"
      multiple={multipleBoolen ? true : null}
      limitTags={limitTagsOption ? limitTagsOption : 100}
      // id="checkboxes-tags-demo"
      options={optionsValues}
      defaultValue={ defaultValueArray }
      groupBy={ groupByKey ? (option) => option[groupByKey] : ""}
      disableCloseOnSelect = {multipleBoolen ? true : null}
      getOptionLabel={(option) => option.nome}
      renderOption={multipleBoolen ? (option, { selected }) => (
        <React.Fragment>
          <Checkbox
            icon= {icon1} 
            checkedIcon= {checkedIcon1} 
            style={{ marginRight: 8}}
            checked={selected}
            color="primary"
          />
          {option.nome}
        </React.Fragment>
      ): null}
      renderInput={(params) => (
        <TextField {...params}  label={labelName}   />
      )}
    />

  );
}

