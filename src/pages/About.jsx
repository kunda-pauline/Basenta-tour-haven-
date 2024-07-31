import React from "react";
import BlogsComp from "../components/Blogs/BlogsComp";
import Location from "../components/Location/Location";

const About = () => {
  return (
    <>
      <div className="container pt-14">
        <div className="py-10">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            About us
          </h1>
          <p>
            Nestled in the serene surroundings of Lake Burera, Basenta Tour
            Haven is a unique retreat located on Birwa 1 Island (Birwa Batutsi)
            in Nkenke Cell, Kinoni Sector, Burera District, Rwanda. Our haven
            offers an unparalleled experience for travelers seeking tranquility,
            cultural enrichment, and a connection with nature. Guided by our
            motto, "home away from home," we strive to provide exceptional
            hospitality while making a positive impact on our community and
            environment.
          </p>
          <br />
          <p>
            At Basenta Tour Haven, our mission is to create a "home away from
            home" experience for our guests while fostering sustainable tourism
            practices that positively impact our community and environment. We
            are committed to transforming the community standards of living,
            conserving the natural environment, promoting tourism safety, and
            celebrating the rich culture of Rwanda.
          </p>
        </div>
      </div>
      <Location />
      {/* <BlogsComp /> */}
    </>
  );
};

export default About;
