import "date-fns";
import React, { useEffect} from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

export default function MaterialUIPickers({tipo, usarDataAtual}) {

  const [selectedDate, setSelectedDate] = React.useState(
    null
  );
  
  useEffect(() => {
    if(usarDataAtual) setSelectedDate(Date.now());
  }, []);


  const handleDateChange = (date) => {
    setSelectedDate(date);
  };



  let openTo=""
  let format=""
  let views=[]
  let placeholder
  
  if(tipo==="datePicker"){
    openTo="year"
    format="dd/MM/yyyy";
    views=[ "year", "month", "date"];
    placeholder="dd/mm/aaaa"
  } else if (tipo==="monthPicker"){
    openTo="year"
    format="MM/yyyy";
    views=["year", "month"];   
    placeholder="mm/aaaa"  
  } else if (tipo==="yearPicker"){
    openTo="year"
    format="yyyy";
    views=[ "year"];
    placeholder="aaaa"  
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          disableToolbar
          openTo={openTo}
          autoOk
          variant="inline"
          format={format}
          views={views}
          margin="normal"
          // id="date-picker-inline"
          // label="Date picker inline"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date"
          }}
          placeholder={placeholder}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
