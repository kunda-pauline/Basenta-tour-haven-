import React from "react";
import PlaceCard from "./PlaceCard";
import Img1 from "../../assets/meal.jpg";
import Img2 from "../../assets/medecine.jpg";
import Img3 from "../../assets/dance.jpg";
import Img4 from "../../assets/places/place7.jpg";
import Img5 from "../../assets/land .jpg";
import Img6 from "../../assets/Hicking.jpg";
import Img7 from "../../assets/places/camping.jpg";
import Img8 from "../../assets/boating.jpg";
import Img9 from "../../assets/community.jpg";

const PlacesData = [
  {
    img: Img1,
    title: "Traditional meals",
    location: "Burera",
    description:
      "Enjoy authentic culinary experiences with meals prepared using traditional recipes and locally sourced ingredients.",
    price: 20000,
    type: "Food",
  },
  {
    img: Img2,
    title: "Information about traditional medicine",
    location: "Burera",
    description:
      "Learn about the region’s traditional medicine practices, including herbal remedies and healing techniques passed down through generations. ",
    price: 15000,
    type: "History",
  },
  {
    img: Img3,
    title: "Traditional dance",
    location: "Burera",
    description:
      " Enjoy vibrant traditional dance performances, or take part in dance workshops to learn the steps and rhythms of the local culture..",
    price: 6200,
    type: "Cultural ",
  },
  {
    img: Img4,
    title: " history of the region",
    location: "Burera",
    description:
      " Discover the rich history of the region through guided tours and informational sessions that explore its cultural heritage and historical landmarks..",
    price: 13000,
    type: "History",
  },
  {
    img: Img5,
    title: "Islands tour",
    location: "Burera ",
    description:
      "Embark on a scenic tour of nearby islands, exploring their unique landscapes, wildlife, and local communities.",
    price: 35000,
    type: "Cultural Relax",
  },
  {
    img: Img6,
    title: "Hicking of the hills",
    location: "Burera",
    description:
      "Experience the natural beauty of the region with guided hikes through hills and mountains, offering breathtaking views and outdoor adventure. ",
    price: 50000,
    type: "Cultural Relax",
  },
  {
    img: Img7,
    title: "Camping ",
    location: "Burera ",
    description:
      "Immerse yourself in nature with camping experiences that include scenic spots, outdoor activities, and a chance to disconnect from the hustle and bustle..",
    price: 35000,
    type: "Cultural Relax",
  },
  {
    img: Img8,
    title: "Boating",
    location: "Burera",
    description:
      "Experience the waterways with boating trips that offer relaxation and exploration of rivers, lakes, and coastal areas.. ",
    price: 50000,
    type: "Cultural Relax",
  },
  {
    img: Img9,
    title: "Community engagement activities",
    location: "Burera",
    description:
      "Engage with the local community through volunteer opportunities, cultural exchange programs, and interactive activities that promote mutual understanding and cooperation.. ",
    price: 50000,
    type: "Cultural Relax",
  },
];

const Places = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Services we offer 
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PlacesData.map((item, index) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Places;
