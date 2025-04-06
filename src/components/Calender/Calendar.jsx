import React, { useRef, useEffect } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { subMonths, format } from "date-fns";
import "./Calendar.scss";

const CalendarView = () => {
  const today = new Date();
  const monthsToShow = 12;
  const currentMonthRef = useRef(null);

  const monthDates = Array.from({ length: monthsToShow }, (_, i) =>
    subMonths(new Date(), monthsToShow - 1 - i)
  );

  useEffect(() => {
    if (currentMonthRef.current) {
      currentMonthRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, []);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div
        style={{
          height: "100vh",
          overflowY: "scroll",
          display: "flex",
          flexDirection: "column",
          padding: "1rem",
          backgroundColor: "#fff",
        }}
      >
        {monthDates.map((month, i) => {
          const isCurrentMonth =
            month.getMonth() === today.getMonth() &&
            month.getFullYear() === today.getFullYear();

          const calendarValue = isCurrentMonth
            ? today
            : new Date(month.getFullYear(), month.getMonth(), 1);

          return (
            <div
              key={i}
              ref={isCurrentMonth ? currentMonthRef : null}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h3 style={{ marginBottom: "0.5rem" }}>
                {format(month, "MMMM yyyy")}
              </h3>

              <DateCalendar
                value={calendarValue}
                onChange={() => {}}
                defaultCalendarMonth={month}
                showDaysOutsideCurrentMonth={false}
                slots={{
                  calendarHeader: () => null,
                }}
                sx={{
                  maxHeight: "350px",
                  "& .Mui-selected": {
                    backgroundColor: isCurrentMonth ? "#1976d2" : "transparent",
                    color: isCurrentMonth ? "#fff" : "inherit",
                  },
                  "& .MuiPickersDay-root.Mui-selected": {
                    backgroundColor: isCurrentMonth ? "#1976d2" : "transparent",
                    color: isCurrentMonth ? "#fff" : "inherit",
                  },
                  "& .MuiPickersDay-root.Mui-selected:hover": {
                    backgroundColor: isCurrentMonth ? "#1565c0" : "transparent",
                  },
                }}
              />
            </div>
          );
        })}
      </div>
    </LocalizationProvider>
  );
};

export default CalendarView;
