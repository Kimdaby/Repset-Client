import { format, addDays, startOfWeek } from "date-fns";
import React, { useState } from "react";
import "./WeekStrip.scss";

const WeekStrip = () => {
  const today = new Date();
  const fullToday = `Today, ${format(today, "MMMM dd")}`;
  const start = startOfWeek(today, { weekStartsOn: 1 });

  const [selectedDate, setSelectedDate] = useState(today);

  const weekDays = Array.from({ length: 7 }, (_, i) => {
    const date = addDays(start, i);
    return {
      day: format(date, "EEE"),
      date: format(date, "dd"),
      full: date,
      isToday: format(date, "yyyy-MM-dd") === format(today, "yyyy-MM-dd"),
    };
  });

  return (
    <div>
      <p className="weekstrip__today-label">{fullToday}</p>
      <div className="weekstrip">
        {weekDays.map((dayObj, i) => (
          <button
            key={i}
            className={`weekstrip__day ${
              format(dayObj.full, "yyyy-MM-dd") ===
              format(selectedDate, "yyyy-MM-dd")
                ? "selected"
                : ""
            } ${dayObj.isToday ? "today" : ""}`}
            onClick={() => setSelectedDate(dayObj.full)}
          >
            <span>{dayObj.day}</span>
            <span>{dayObj.date}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default WeekStrip;
