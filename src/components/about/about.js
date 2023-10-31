export default function AboutSection() {
  return (
    <div className="flex flex-col items-center mx-[10%] md:mx-[20%] gap-4 my-20">
      <div className="text-4xl md:text-7xl">About WebJam</div>
      <div className="text-xl sm:text-2xl md:text-2xl md:leading-relaxed text-start font-light">
        <p>
          WebJam is a week-long event where students come together to create fully functional web applications.
          Whether you've never heard of web applications or built many, WebJam is here to give you a platform to learn, build, and create!
        </p>
        <br/>
        <p>
          Over the past 3 years, WebJam has focused on encouraging beginners and people who are curious about web technologies — from frontend to backend!
          Our goal is to provide learning and networking opportunities for our community of developers, especially ones that from underrepresented backgrounds in the tech space.
        </p>
      </div>
    </div>
  );
}
