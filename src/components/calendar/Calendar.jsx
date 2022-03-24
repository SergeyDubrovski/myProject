import React, { useState } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import classes from "./calendar.module.css";
export const Calendars = (props) => {
  const [value, onChange] = useState(new Date());

  console.log(value.toDateString().split(" "));
  return (
    <div>
      <Calendar locale={"en-EN"} onChange={onChange} value={value} />

      <h1>{value.toDateString()}</h1>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default compose(connect(mapStateToProps, mapDispatchToProps))(Calendars);
