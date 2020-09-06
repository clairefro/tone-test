import React from "react";

const Tone = ({ frequency, digit, active }) => {
  return <span className={active ? "active" : null}>{digit}</span>;
};

export default Tone;
