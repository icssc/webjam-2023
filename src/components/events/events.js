import { FaExternalLinkAlt } from "react-icons/fa";
import EventsData from "../../../assets/events.json";
import { useEffect, useState } from "react";
import styles from "../../styles/components/Events.module.css";

function getFormattedDate(date) {
  const dateObject = new Date(date + "T00:00:00").toLocaleDateString("en-US", {
    timeZone: "America/Los_Angeles",
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return dateObject;
}

export default function EventsSection() {
  const [sortedSchedule, setSortedSchedule] = useState([]);

  useEffect(() => {
    const schedule = EventsData.schedule;
    const sortedSchedule = {};

    schedule.forEach((event) => {
      const date = event.date;
      if (!sortedSchedule[date]) {
        sortedSchedule[date] = [];
      }
      sortedSchedule[date].push(event);
    });

    // Sort the events by time here
    const sortedEvents = Object.values(sortedSchedule).map((date) =>
      date.sort((a, b) => {
        const timeA = parseInt(a.time, 10) + (a.time.includes("PM") ? 12 : 0);
        const timeB = parseInt(b.time, 10) + (b.time.includes("PM") ? 12 : 0);
        return timeA - timeB;
      }),
    );

    setSortedSchedule(sortedEvents);
  }, []);

  return (
    <>
      <div className="z-50 mx-8 my-10 flex min-w-[80%] flex-col gap-2 pb-44 pt-64 md:mx-[10%] md:gap-4 xl:mx-[20%] xl:min-w-[60%]">
        <div className="flex place-content-start text-5xl md:text-6xl">
          Schedule
        </div>

        {sortedSchedule.map((date) => (
          <div
            className="mb-2 flex flex-col md:mb-6 lg:gap-6"
            key={date[0].date}
          >
            <div className="border-white-800 text-white-600 mb-3 flex w-[100%] border-b-4 border-dashed text-3xl md:mb-2 md:border-dashed lg:text-4xl">
              {getFormattedDate(date[0].date)}
            </div>

            {date.map((event) => (
              <div
                className="flex w-[100%] flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-0"
                key={event.title + event.time}
              >
                <div className="mb-6 flex items-start gap-6 align-top lg:h-[100%]">
                  <div className="hidden h-32 w-32 items-center md:flex">
                    <img
                      src={event.logo}
                      alt="Club Logo"
                      className="flex items-center rounded-2xl"
                    />
                  </div>

                  <div className="flex flex-col gap-4">
                    <div>
                      <div className="flex text-3xl md:w-[28rem] md:text-4xl lg:w-[20rem] xl:w-[28rem]">
                        {event.title}
                      </div>
                      <div className="text-lg md:text-xl">
                        {`${event.time} • ${event.club && event.club + " • "} ${
                          event.location
                        }`}
                      </div>
                    </div>

                    <div className="flex gap-2 md:gap-4">
                      {event.rsvp && (
                        <a href={event.rsvp} target="_blank" className="flex">
                          <div className="flex h-10 place-content-center items-center gap-2 rounded-full bg-green-700 px-4 text-xl text-slate-100 drop-shadow-lg">
                            RSVP
                            <span className="md: visible hidden">
                              <FaExternalLinkAlt />
                            </span>
                          </div>
                        </a>
                      )}

                      {event.recording && (
                        <a
                          href={event.recording}
                          target="_blank"
                          className="flex"
                        >
                          <div className="flex h-10 place-content-center items-center gap-2 rounded-full bg-gray-600 px-4 text-xl text-slate-100 drop-shadow-lg">
                            Recording
                            <span>
                              <FaExternalLinkAlt />
                            </span>
                          </div>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="overflow-y-auto text-lg md:text-xl lg:min-h-[8rem] lg:w-[40%]">
                  {event.desc}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div
        className={`${styles.middleTop} absolute left-0 top-0 z-30 w-[100%]`}
      />
      <div
        className={`${styles.middleBottom} absolute bottom-0 left-0 z-30 w-[100%]`}
      />
      <div
        className={`${styles.dolphin} absolute right-1 top-32 w-[55vw] md:w-[45vw] lg:top-64 xl:left-[-7.5vw] xl:w-[30vw]`}
      />
      <div
        className={`${styles.bubbles} absolute bottom-[80rem] z-30 hidden h-[150px] w-[100%] md:left-[55vw] md:flex lg:left-[70vw]`}
      />
      <div
        className={`${styles.eel} absolute bottom-[10rem] right-4 w-[25vw] md:bottom-[30rem] lg:w-[40vw]`}
      />
    </>
  );
}
