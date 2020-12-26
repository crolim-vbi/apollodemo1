import React, { useEffect} from "react";
import Grid from "@material-ui/core/Grid";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import { ptBR } from "date-fns/locale";



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
    <div id="DatePickers2">
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ptBR}>
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
    </div>
  );
}
