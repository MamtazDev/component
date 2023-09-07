import React, { useState } from "react";
import "./Component7.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
export default function Component7() {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(null);
  const [dateState, setDateState] = useState(null);
  const [titleCount, setTitleCount] = useState(0);
  const handleOpen = () => {
    setOpen(!open);
  };
  const handleCalender = () => {
    setDate(!date);
  };
  const changeDate = (e) => {
    setDateState(e);
    setTitleCount(titleCount + 1);
  };

  const formattedDate = dateState ? (
    dateState.toLocaleDateString("en-GB")
  ) : (
    <div className="dddddd">
      <small> DD / MM / YYYY</small>
      <p>
        {date ? (
          <i className="fas fa-angle-up"></i>
        ) : (
          <i className="fas fa-angle-down "></i>
        )}
      </p>
    </div>
  );

  return (
    <div>
      <div className={`${!open ? "component_four" : "component_full_seven"}`}>
        <div onClick={handleOpen} className="heading">
          <p className="title">
            Component Title 7 {date && titleCount !== 0 && `(${titleCount})`}
          </p>
          <p>
            {open ? (
              <i className="fas fa-angle-down rotate"></i>
            ) : (
              <i className="fas fa-angle-down"></i>
            )}
          </p>
        </div>
        {open && (
          <div>
            <div className="date_container">
              <span> Lorem Ipsum dolores sit</span>
              <div onClick={handleCalender} className="date_btn">
                {formattedDate}
              </div>
            </div>
            {date && (
              <div className="calender_design">
                <Calendar value={dateState} onChange={changeDate} />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
