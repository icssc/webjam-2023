import { FaExternalLinkAlt } from "react-icons/fa";
import EventsData from "../../assets/data/events.json";

function getFormattedDate(date) {
  const dateObject = new Date(date + "T00:00:00").toLocaleDateString("en-US", {
    timeZone: "America/Los_Angeles",
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return dateObject;
}

function getSortedSchedule(schedule) {
  const sortedSchedule = {};

  schedule.forEach((event) => {
    const date = event.date;
    if (!sortedSchedule[date]) {
      sortedSchedule[date] = [];
    }
    sortedSchedule[date].push(event);
  });

  const sortedEvents = Object.values(sortedSchedule);

  return sortedEvents;
}

export default function EventsSection() {
  const schedule = EventsData.schedule;
  const sortedSchedule = getSortedSchedule(schedule);

  return (
    <>
      <div className="flex flex-col mx-8 md:mx-24 lg:mx-36 xl:mx-48 my-10 gap-2 md:gap-4">
        <div className="flex place-content-start text-5xl md:text-6xl">
          Schedule
        </div>

        {sortedSchedule.map((date) => (
          <div className="flex flex-col gap-1 mb-2 md:mb-6" key={date[0].date}>
            <div className="text-3xl lg:text-4xl text-gray-400">
              {getFormattedDate(date[0].date)}
            </div>

            {date
              .sort((a, b) => {
                const timeA =
                  parseInt(a.time, 10) + (a.time.includes("PM") ? 12 : 0);
                const timeB =
                  parseInt(b.time, 10) + (b.time.includes("PM") ? 12 : 0);
                return timeA - timeB;
              })
              .map((event) => (
                <div
                  className="flex flex-col lg:flex-row border-gray-400 border-t-4 border-dashed w-[100%] py-4 lg:items-center lg:justify-between gap-6 lg:gap-0"
                  key={event.title + event.time}
                >
                  <div className="flex gap-6 lg:h-[100%] align-top items-start">
                    <div className="hidden md:flex items-center h-32 w-32">
                      <img
                        src={event.logo}
                        alt="Club Logo"
                        className="flex items-center rounded-2xl"
                      />
                    </div>

                    <div className="flex flex-col gap-4">
                      <div>
                        <div className="flex text-3xl md:text-4xl text-white md:w-[28rem] lg:w-[20rem] xl:w-[28rem]">
                          {event.title}
                        </div>
                        <div className="text-lg md:text-xl">
                          {`${event.time} • ${event.club} • ${event.location}`}
                        </div>
                      </div>

                      <div className="flex gap-2 md:gap-4">
                        {event.rsvp && (
                          <a href={event.rsvp} target="_blank" className="flex">
                            <div className="bg-green-600 flex rounded-full drop-shadow-lg place-content-center text-xl px-4 h-10 items-center gap-2">
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
                            <div className="bg-gray-500 flex rounded-full drop-shadow-lg place-content-center text-xl px-4 h-10 items-center gap-2">
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
                  <div className="lg:w-[40%] lg:min-h-[8rem] overflow-y-auto text-base md:text-xl">
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
