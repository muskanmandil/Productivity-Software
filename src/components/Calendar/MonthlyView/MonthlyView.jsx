import React from "react";
import { useCalendar } from "../../../useCalendar";
import { months, weekDays } from "../../../constants";
import "./MonthlyView.css";

const MonthlyView = (props) => {
  const {
    currDate,
    currDateIdx,
    monthIdx,
    year,
    totalDaysInPrevMonth,
    totalDaysInMonth,
    prevMonth,
    nextMonth,
    today,
  } = useCalendar("month");

  let firstDayOfMonth = new Date(year, monthIdx, 1).getDay();
  if (firstDayOfMonth === 0) {
    firstDayOfMonth = 7;
  }

  const calendarMatrix = [];
  let prevMonthDays = totalDaysInPrevMonth - firstDayOfMonth + 2;
  let nextMonthDays = 1;
  let day = 1;
  for (let i = 1; i <= 42; i++) {
    if (i < firstDayOfMonth) {
      calendarMatrix.push(prevMonthDays);
      prevMonthDays++;
    } else if (i > firstDayOfMonth + totalDaysInMonth - 1) {
      calendarMatrix.push(nextMonthDays);
      nextMonthDays++;
    } else {
      calendarMatrix.push(day);
      day++;
    }
  }

  return (
    <div className="calendar-container">
      <div className="header">
        <button className="nav-btn" onClick={prevMonth}>
          Prev
        </button>
        <h2 className="month-year">
          {months[monthIdx]} {year} <button onClick={today}>today</button>
          <button onClick={props.changeView}>Weekly view</button>
        </h2>
        <button className="nav-btn" onClick={nextMonth}>
          Next
        </button>
      </div>
      <div className="calendar">
        <div className="weekdays-header">
          {weekDays.map((weekday) => {
            return <div className="weekday">{weekday}</div>;
          })}
        </div>
        <div className="monthly-grid">
          {calendarMatrix.map((day, idx) => {
            return (
              <div
                className={`calendar-day ${
                  idx < firstDayOfMonth - 1 ||
                  idx > totalDaysInMonth + firstDayOfMonth - 2
                    ? "other-month"
                    : idx === currDateIdx + firstDayOfMonth - 2 &&
                      currDate.getMonth() === monthIdx
                    ? "today"
                    : "this-month"
                }`}
                key={idx}
              >
                {day}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MonthlyView;
