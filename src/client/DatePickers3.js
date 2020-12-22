import React from "react";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from "@material-ui/pickers";

import DateFnsUtils from "@date-io/date-fns";
import { ptBR } from "date-fns/locale";


import "moment/locale/es";


export default function App() {
  return (
    <MuiPickersUtilsProvider locale={ptBR}   utils={DateFnsUtils} >
      <KeyboardDatePicker />
    </MuiPickersUtilsProvider>
  );
}