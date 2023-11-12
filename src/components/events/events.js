import { FaExternalLinkAlt } from "react-icons/fa";
import EventsData from "../../../assets/events.json";
import { useEffect, useState } from "react";

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
        const timeA =
          parseInt(a.time, 10) + (a.time.includes("PM") ? 12 : 0);
        const timeB =
          parseInt(b.time, 10) + (b.time.includes("PM") ? 12 : 0);
        return timeA - timeB;
      })
    );

    setSortedSchedule(sortedEvents);
  }, []);

  return (
    <>
      <div className="mx-8 my-10 flex min-w-[80%] flex-col gap-2 md:mx-[10%] md:gap-4 xl:mx-[20%] xl:min-w-[60%]">
        <div className="flex place-content-start text-5xl md:text-6xl">
          Schedule
        </div>

        {sortedSchedule.map((date) => (
          <div
            className="mb-2 flex flex-col md:mb-6 lg:gap-6"
            key={date[0].date}
          >
            <div className="flex w-[100%] border-b-4 border-dashed border-gray-800 text-3xl text-slate-600 md:mb-2 md:border-dashed lg:text-4xl mb-3">
              {getFormattedDate(date[0].date)}
            </div>

            {date.map((event) => (
              <div
                className="flex w-[100%] flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-0 pt-4 pb-8"
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
                        {`${event.time} • ${event.club && event.club + " • " } ${event.location}`}
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
    </>
  );
}
