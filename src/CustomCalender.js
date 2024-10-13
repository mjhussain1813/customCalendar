import React, { useEffect, useState } from 'react';
import './calendar.css';

const CustomCalendar = () => {
    const today = new Date();
    const [selectedYear, setSelectedYear] = useState(today.getFullYear());
    const [selectedMonth, setSelectedMonth] = useState(today.getMonth());
    const [daysInMonth, setDaysInMonth] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);
    const [view, setView] = useState('month'); // Start with month view

    const getDaysInMonth = (year, month) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (year, month) => {
        return new Date(year, month, 1).getDay();
    };

    useEffect(() => {
        const days = [];
        const daysInSelectedMonth = getDaysInMonth(selectedYear, selectedMonth);
        const firstDayOfMonth = getFirstDayOfMonth(selectedYear, selectedMonth);

        // Fill previous month's days
        const prevMonthDays = getDaysInMonth(selectedYear, selectedMonth - 1);
        for (let i = firstDayOfMonth - 1; i >= 0; i--) {
            days.push({ day: prevMonthDays - i, currentMonth: false });
        }

        // Fill current month's days
        for (let i = 1; i <= daysInSelectedMonth; i++) {
            days.push({ day: i, currentMonth: true });
        }

        // Fill remaining days for the grid (if necessary)
        const totalDaysToDisplay = 42; // 6 rows x 7 days
        const remainingDays = totalDaysToDisplay - days.length;
        for (let i = 1; i <= remainingDays; i++) {
            days.push({ day: i, currentMonth: false });
        }

        setDaysInMonth(days);
    }, [selectedYear, selectedMonth]);

    const handleYearChange = (e) => {
        setSelectedYear(parseInt(e.target.value));
    };

    const handleMonthChange = (e) => {
        setSelectedMonth(parseInt(e.target.value));
    };

    const handleDateClick = (dayObj) => {
        if (dayObj.currentMonth) {
            setSelectedDate(new Date(selectedYear, selectedMonth, dayObj.day));
        }
    };

    const toggleView = (newView) => {
        setView(newView);
    };

    return (
        <div className='calendar-container '>
             <div className="calendar">
            <div className="header">
                <select value={selectedYear} onChange={handleYearChange}>
                    {Array.from({ length: 100 }, (_, i) => (
                        <option key={i} value={today.getFullYear() - 50 + i}>
                            {today.getFullYear() - 50 + i}
                        </option>
                    ))}
                </select>
                <select value={selectedMonth} onChange={handleMonthChange}>
                    {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map(
                        (month, index) => (
                            <option key={index} value={index}>
                                {month}
                            </option>
                        )
                    )}
                </select>
                <button 
                    className={`view-button ${view === 'month' ? 'active' : ''}`} 
                    onClick={() => toggleView('month')}
                >
                    Month 
                </button>
                <button 
                    className={`view-button ${view === 'year' ? 'active' : ''}`} 
                    onClick={() => toggleView('year')}
                >
                    Year 
                </button>
            </div>

            {view === 'month' && (
                <div>
                    <div className='days-grid'>
                        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(dayName => (
                            <div key={dayName} className='day-name'>
                                {dayName}
                            </div>
                        ))}

                        {daysInMonth.map((dayObj, index) => (
                            <div
                                key={index}
                                className={`day ${dayObj.currentMonth ? 'current-month' : 'other-month'} ${
                                    selectedDate &&
                                    selectedDate.getDate() === dayObj.day &&
                                    selectedDate.getMonth() === selectedMonth &&
                                    selectedDate.getFullYear() === selectedYear
                                        ? 'selected'
                                        : ''
                                }`}
                                onClick={() => handleDateClick(dayObj)}
                            >
                                {dayObj.day}
                            </div>
                        ))}
                    </div>
                    {selectedDate && (
                        <div className="selected-date-wrapper">
                            Selected Date: {selectedDate.toDateString()}
                        </div>
                    )}
                </div>
            )}
            
            {view === 'year' && (
                <div className='years-grid'>
                    {/* Display the months in the year */}
                    {Array.from({ length: 12 }, (_, index) => (
                        <div
                            key={index}
                            className="month"
                            onClick={() => {
                                setSelectedMonth(index);
                                toggleView('month');
                            }}
                        >
                            {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][index]}
                        </div>
                    ))}
                </div>
            )}
        </div>
        </div>
       
    );
};

export default CustomCalendar;
