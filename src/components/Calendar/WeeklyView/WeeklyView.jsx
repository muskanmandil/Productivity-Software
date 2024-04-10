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
      <div className="weekly-calendar">
        <div className="empty-box"></div>
        <div className="weekdays-header">
          {weekDays.map((weekday, idx) => {
            return (
              <div key={idx} className="weekday">
                {weekday}
              </div>
            );
          })}
        </div>
        <div className="time-stamps-container">
          <div className="time-stamp">00:00</div>
          <div className="time-stamp">01:00</div>
          <div className="time-stamp">02:00</div>
          <div className="time-stamp">03:00</div>
          <div className="time-stamp">04:00</div>
          <div className="time-stamp">05:00</div>
          <div className="time-stamp">06:00</div>
          <div className="time-stamp">07:00</div>
          <div className="time-stamp">08:00</div>
          <div className="time-stamp">09:00</div>
          <div className="time-stamp">10:00</div>
          <div className="time-stamp">11:00</div>
          <div className="time-stamp">12:00</div>
          <div className="time-stamp">13:00</div>
          <div className="time-stamp">14:00</div>
          <div className="time-stamp">15:00</div>
          <div className="time-stamp">16:00</div>
          <div className="time-stamp">17:00</div>
          <div className="time-stamp">18:00</div>
          <div className="time-stamp">19:00</div>
          <div className="time-stamp">20:00</div>
          <div className="time-stamp">21:00</div>
          <div className="time-stamp">22:00</div>
          <div className="time-stamp">23:00</div>
        </div>
        <div className="weekly-grid">
          {/* <div className="current-time-line"></div> */}
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
