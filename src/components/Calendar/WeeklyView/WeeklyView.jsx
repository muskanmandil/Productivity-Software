import React from "react";
import { useCalendar } from "../../../useCalendar";
import { months, weekDays } from "../../../constants";
import "./WeeklyView.css";

const WeeklyView = (props) => {
  const {
    currDate,
    currDateIdx,
    monthIdx,
    year,
    firstDateOfWeek,
    totalDaysInMonth,
    prevWeek,
    nextWeek,
    today,
  } = useCalendar("week");

  const calendarMatrix = [];

  let day = firstDateOfWeek;
  for (let i = 1; i <= 7; i++) {
    calendarMatrix.push(day);
    day++;
    if (day === totalDaysInMonth + 1) {
      day = 1;
    }
  }

  return (
    <div className="calendar-container">
      <div className="header">
        <button className="nav-btn" onClick={prevWeek}>
          Prev
        </button>
        <h2 className="month-year">
          {months[monthIdx]} {year} <button onClick={today}>today</button>
          <button onClick={props.changeView}>Monthly view</button>
        </h2>
        <button className="nav-btn" onClick={nextWeek}>
          Next
        </button>
      </div>
      <div className="calendar">
        <div className="weekdays-header">
          {weekDays.map((weekday) => {
            return <div className="weekday">{weekday}</div>;
          })}
        </div>
        <div className="weekly-grid">
          {calendarMatrix.map((day, idx) => {
            return (
              <div
                className={`calendar-day ${
                  day === currDateIdx && currDate.getMonth() === monthIdx
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

export default WeeklyView;
