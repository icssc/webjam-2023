import { FaExternalLinkAlt, FaLocationArrow } from "react-icons/fa";

export default function EventsSection() {
  return (
    <>
      <div className="flex flex-col mx-8 md:mx-24 my-10 w-[100%] md:gap-2">
        <div className="flex place-content-start text-6xl">Schedule</div>

        <div className="flex flex-col gap-4">
          <div className="text-3xl lg:text-4xl text-gray-400">
            Monday, November 13
          </div>

          <div className="flex flex-col lg:flex-row border-gray-400 border-y-4 border-dashed w-[100%] py-6 lg:items-center lg:justify-between gap-6 lg:gap-0">
            <div className="flex gap-6">
              <img
                src="/logo.svg"
                alt="ICSSC Logo"
                className="rounded-lg flex h-32"
              />

              <div className="flex flex-col gap-4">
                <div>
                  <div className="flex place-content-left text-3xl md:text-4xl text-white">
                    Kickoff Ceremony
                  </div>
                  <div className="text-lg md:text-xl">
                    4PM • ICSSC • DBH 4011
                  </div>
                </div>
                <div>
                  <a href="" target="_blank" className="flex w-32">
                    <div className="bg-green-600 flex rounded-full drop-shadow-lg place-content-center text-xl w-32 h-10 items-center gap-2">
                      RSVP
                      <span>
                        <FaExternalLinkAlt />
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:w-[40%] lg:h-32 overflow-y-auto text-base md:text-lg flex align-top items-start">
              Come out to our opening ceremony to learn about the schedule,
              rules, and resources for WebJam! We will also be going over all of
              the exciting workshops we have planned for the week, so make sure
              to come by to learn more.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
