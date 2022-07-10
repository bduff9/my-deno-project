/** @jsx h */
import { h } from "preact";
import Countdown from "../islands/Countdown.tsx";

const Page = () => {
  const date = new Date();

  date.setHours(date.getHours() + 1);

  return (
    <p>
      The big event is happening <Countdown target={date.toISOString()} />.
    </p>
  );
};

export default Page;
