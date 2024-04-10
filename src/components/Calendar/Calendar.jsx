import React, { useState } from "react";
import MonthlyView from "./MonthlyView/MonthlyView";
import WeeklyView from "./WeeklyView/WeeklyView";

const Calendar = () => {
  const [view, changeView] = useState("month");

  return view === "month" ? (
    <MonthlyView changeView={() => changeView("week")} />
  ) : (
    <WeeklyView changeView={() => changeView("month")} />
  );
};

export default Calendar;
