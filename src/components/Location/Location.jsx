import React from "react";

const Location = () => {
  return (
    <>
      <span id="location"></span>
      <section data-aos="fade-up" className="">
        <div className="container my-4">
          <h1 className="inline-block border-l-8 border-primary/50 py-2 pl-2 mb-4 text-xl font-bold sm:text-3xl">
            Location
          </h1>

          <div className="rounded-xl ">
            <p>
              Birwa 1 island (Birwa batutsi)
              <br /> Nkenke cell <br />
              Kinoni sector <br />
              Burera district <br /> Rwanda country With in lake Burera
            </p>
          </div>
        </div>
        <div className="container my-8">
          <h1 className="inline-block border-l-8 border-primary/50 py-2 pl-2 mb-4 text-xl font-bold sm:text-3xl">
            Contact
          </h1>

          <div className="rounded-xl ">
            <p>
              E-mail: basentatourhaven@gmail.com
              <br /> TEL: +250788838421 <br />
              
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;
