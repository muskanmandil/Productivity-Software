import { useState } from "react";

export const useCalendar = () => {
    const currDate = new Date();
    const currDateIdx = currDate.getDate();
    let currDayIdx = currDate.getDay();
    if (currDayIdx === 0) {
        currDayIdx = 7;
    }
    const [monthIdx, setMonthIdx] = useState(currDate.getMonth());
    const [year, setYear] = useState(currDate.getFullYear());
    const [firstDateOfWeek, setFirstDateOfWeek] = useState(
        currDateIdx - currDayIdx + 1
    );
    const totalDaysInMonth = new Date(year, monthIdx + 1, 0).getDate();
    const totalDaysInPrevMonth = new Date(year, monthIdx, 0).getDate();

    const prevMonth = () => {
        if (monthIdx === 0) {
            setMonthIdx(11);
            setYear(year - 1);
        } else {
            setMonthIdx(monthIdx - 1);
        }
    };

    const prevWeek = () => {
        if (firstDateOfWeek - 7 < 1) {
            setFirstDateOfWeek(totalDaysInPrevMonth + firstDateOfWeek - 7);
            prevMonth();
        } else {
            setFirstDateOfWeek(firstDateOfWeek - 7);
        }
    };

    const nextMonth = () => {
        if (monthIdx === 11) {
            setMonthIdx(0);
            setYear(year + 1);
        } else {
            setMonthIdx(monthIdx + 1);
        }
    };

    const nextWeek = () => {
        if (firstDateOfWeek + 7 >= totalDaysInMonth) {
            setFirstDateOfWeek(firstDateOfWeek + 7 - totalDaysInMonth);
            nextMonth();
        } else {
            setFirstDateOfWeek(firstDateOfWeek + 7);
        }
    };

    const today = () => {
        setFirstDateOfWeek(currDateIdx - currDayIdx + 1);
        setMonthIdx(currDate.getMonth());
        setYear(currDate.getFullYear());
    };

    return { currDate, currDateIdx, monthIdx, year, firstDateOfWeek, totalDaysInPrevMonth, totalDaysInMonth, prevWeek, nextWeek, prevMonth, nextMonth, today }

}