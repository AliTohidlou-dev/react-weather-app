import { useEffect, useMemo, useState } from "react";
const CurrentDate = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  useEffect(() => {
    const currentDate = new Date(Date.now()).toString().split(" ");
    setDate(
      `${currentDate[0]} ${currentDate[1]} ${currentDate[2]} ${currentDate[3]}`
    );
  }, [date]);
  useMemo(() => {
    setInterval(() => {
      setTime(
        `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
      );
    }, [1]);
  }, [setTime]);
  return (
    <div className="date">
      <h2>{date}</h2>
      <p className="clock">
        {time} <span>O'clock</span>
      </p>
    </div>
  );
};
export default CurrentDate;
