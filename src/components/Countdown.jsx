import { useEffect, useState } from "react";

export default function Countdown() {

  const target = new Date("June 5, 2027 00:00:00");

  const calculate = () => {

    const diff = target - new Date();

    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor(diff / 3600000) % 24,
      mins: Math.floor(diff / 60000) % 60,
      secs: Math.floor(diff / 1000) % 60,
    };
  };

  const [time, setTime] = useState(calculate());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculate());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="countdown">

      <h2>⏳ Countdown</h2>

      <div className="timer">

        <div>{time.days}<span>Days</span></div>

        <div>{time.hours}<span>Hours</span></div>

        <div>{time.mins}<span>Minutes</span></div>

        <div>{time.secs}<span>Seconds</span></div>

      </div>

    </section>
  );
}