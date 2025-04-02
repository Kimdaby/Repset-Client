import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import "./SingleCalendar.scss";

const SingleCalendar = () => {
  const today = new Date();
  const [value, setValue] = useState(today);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div
        style={{
          padding: "1rem",
          backgroundColor: "#fff",
          borderRadius: "12px",
          maxWidth: "fit-content",
          margin: "0 auto",
        }}
      >
        <DateCalendar
          value={value}
          onChange={() => {}}
          showDaysOutsideCurrentMonth={false}
          sx={{
            "& .Mui-selected": {
              backgroundColor: "#1976d2 !important",
              color: "#fff !important",
            },
            "& .MuiPickersDay-root.Mui-selected": {
              backgroundColor: "#1976d2 !important",
              color: "#fff !important",
            },
            "& .MuiPickersDay-root.Mui-selected:hover": {
              backgroundColor: "#1565c0 !important",
            },
          }}
        />
      </div>
    </LocalizationProvider>
  );
};

export default SingleCalendar;
