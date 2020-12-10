/* eslint-disable no-use-before-define */

import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Box from '@material-ui/core/Box';


const icon = <CheckBoxOutlineBlankIcon  />;
const checkedIcon = <CheckBoxIcon  />;

const icon1 = <CheckBoxOutlineBlankIcon />;
const checkedIcon1 = <CheckBoxIcon  />;

const icon2 = <CheckBoxOutlineBlankIcon  />;
const checkedIcon2 = <CheckBoxIcon  />;


// const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
// const checkedIcon = <CheckBoxIcon fontSize="small" />;

// const icon1 = <CheckBoxOutlineBlankIcon fontSize="small" />;
// const checkedIcon1 = <CheckBoxIcon fontSize="small" />;

// const icon2 = <CheckBoxOutlineBlankIcon fontSize="small" />;
// const checkedIcon2 = <CheckBoxIcon fontSize="small" />;

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
      style={{ width: "100%", backgroundColor: "transparent" }}
      renderInput={(params) => (
        <TextField {...params}   variant="standard" label={props.labelName}/>
      )}
    />

  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
  { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
  { title: 'Forrest Gump', year: 1994 },
  { title: 'Inception', year: 2010 },
  { title: 'The Lord of the Rings: The Two Towers', year: 2002 },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: 'Goodfellas', year: 1990 },
  { title: 'The Matrix', year: 1999 },
  { title: 'Seven Samurai', year: 1954 },
  { title: 'Star Wars: Episode IV - A New Hope', year: 1977 },
  { title: 'City of God', year: 2002 },
  { title: 'Se7en', year: 1995 },
  { title: 'The Silence of the Lambs', year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: 'Life Is Beautiful', year: 1997 },
  { title: 'The Usual Suspects', year: 1995 },
  { title: 'Léon: The Professional', year: 1994 },
  { title: 'Spirited Away', year: 2001 },
  { title: 'Saving Private Ryan', year: 1998 },
  { title: 'Once Upon a Time in the West', year: 1968 },
  { title: 'American History X', year: 1998 },
  { title: 'Interstellar', year: 2014 },
];
