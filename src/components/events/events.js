import { FaExternalLinkAlt } from "react-icons/fa";
import EventsData from "../../assets/data/events.json";

function getFormattedDate(date) {
  console.log(date);
  const dateObject = new Date(date + "T00:00:00").toLocaleDateString("en-US", {
    timeZone: "America/Los_Angeles",
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return dateObject;
}

function getSortedEvents(schedule) {
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
  const sortedEvents = getSortedEvents(schedule);

  console.log(sortedEvents);

  return (
    <>
      <div className="flex flex-col mx-8 md:mx-24 my-10 w-[100%] gap-4">
        <div className="flex place-content-start text-6xl">Schedule</div>

        {sortedEvents.map((date) => (
          <div className="flex flex-col gap-1">
            <div className="text-3xl lg:text-4xl text-gray-400">
              {getFormattedDate(date[0].date)}
            </div>

            {date.map((event) => (
              <div className="flex flex-col lg:flex-row border-gray-400 border-y-4 border-dashed w-[100%] py-6 mb-6 lg:items-center lg:justify-between gap-6 lg:gap-0">
                <div className="flex gap-6">
                  <div className="flex items-center h-32 w-32">
                    <img
                      src={event.logo}
                      alt="Club Logo"
                      className="rounded-2xl flex"
                    />
                  </div>

                  <div className="flex flex-col gap-4">
                    <div>
                      <div className="flex place-content-left text-3xl md:text-4xl text-white">
                        {event.title}
                      </div>
                      <div className="text-lg md:text-xl">
                        {`${event.time} • ${event.club} • ${event.location}`}
                      </div>
                    </div>

                    <div className="flex gap-4">
                      {event.rsvp && (
                        <a href="" target="_blank" className="flex">
                          <div className="bg-green-600 flex rounded-full drop-shadow-lg place-content-center text-xl px-4 h-10 items-center gap-2">
                            RSVP
                            <span>
                              <FaExternalLinkAlt />
                            </span>
                          </div>
                        </a>
                      )}

                      {event.recording && (
                        <a href="" target="_blank" className="flex">
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
                <div className="lg:w-[40%] lg:h-32 overflow-y-auto text-base md:text-xl flex align-top items-start">
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
